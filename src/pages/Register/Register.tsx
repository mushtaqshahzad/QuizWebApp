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

const RegisterForm: ReactNode = () => {
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
        <>
            <Typography variant="h4" sx={{ textAlign: 'center', my: 2 }}>
                Register Form
            </Typography>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Stack alignItems="center">
                    <Form>
                        <Box height="130px">
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
                            <InputLabel htmlFor="phone">Phone</InputLabel>
                            <Field
                                as={TextField}
                                type="text"
                                id="phone"
                                name="phone"
                                variant="outlined"
                                fullWidth
                            />
                            <ErrorMessage name="phone" component="div" />
                        </Box>

                        <Box height="130px">
                            <InputLabel htmlFor="image">Image</InputLabel>
                            <Field
                                as={TextField}
                                type="text"
                                id="image"
                                name="image"
                                variant="outlined"
                                fullWidth
                            />
                            <ErrorMessage name="image" component="div" />
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
                                Register
                            </Button>
                        </Stack>
                    </Form>
                </Stack>
            </Formik>
        </>
    )
}

export default RegisterForm
