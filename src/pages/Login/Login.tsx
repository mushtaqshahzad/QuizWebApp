import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import {
    TextField,
    Button,
    Typography,
    Box,
    Stack,
    InputLabel,
} from '@mui/material'

interface RegisterFormValues {
    name: string
    phone: string
    image: string
    password: string
}

const LoginForm: ReactNode = () => {
    const initialValues: RegisterFormValues = {
        name: '',
        phone: '',
        image: '',
        password: '',
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        phone: Yup.string().required('Phone is required'),
        image: Yup.string().required('Image is required'),
        password: Yup.string().required('Password is required'),
    })

    const handleSubmit = (values: RegisterFormValues): void => {
        // Perform registration logic here (e.g., send data to backend)
        console.log(values)
    }

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Typography variant="h4" sx={{ textAlign: 'center', my: 2 }}>
                Login
            </Typography>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Stack alignItems="center" height="100%">
                    <Form>
                        <Box height="120px">
                            <InputLabel htmlFor="name">Name</InputLabel>
                            <Field
                                as={TextField}
                                type="text"
                                id="name"
                                name="name"
                                variant="outlined"
                                fullWidth
                            />
                            <ErrorMessage name="name" component="div" />
                        </Box>

                        <Box height="130px">
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Field
                                as={TextField}
                                type="password"
                                id="password"
                                name="password"
                                variant="outlined"
                                fullWidth
                            />
                            <ErrorMessage name="password" component="div" />
                        </Box>
                        <Stack alignItems="center" flexDirection="column">
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                            >
                                Login
                            </Button>
                        </Stack>
                    </Form>
                </Stack>
            </Formik>
        </Box>
    )
}

export default LoginForm
