import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { TextField, Button, Typography, Box, Stack } from '@mui/material'

interface AdminLoginFormValues {
    email: string
    password: string
}

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
})

const AdminLoginForm: React.FC = () => {
    const initialValues: AdminLoginFormValues = {
        email: '',
        password: '',
    }

    const handleSubmit = (values: AdminLoginFormValues): void => {
        // Perform admin login logic here (e.g., send data to backend)
        console.log(values)
    }

    return (
        <Box
            display="flex"
            height="100vh"
            alignItems="center"
            justifyContent="center"
        >
            <Box width="300px">
                <Typography variant="h6" align="center" gutterBottom>
                    Admin Login
                </Typography>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <Stack spacing={2}>
                            <Field
                                as={TextField}
                                type="email"
                                name="email"
                                label="Email"
                                variant="outlined"
                                fullWidth
                            />
                            <ErrorMessage name="email" component="div" />

                            <Field
                                as={TextField}
                                type="password"
                                name="password"
                                label="Password"
                                variant="outlined"
                                fullWidth
                            />
                            <ErrorMessage name="password" component="div" />

                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                            >
                                Login
                            </Button>
                        </Stack>
                    </Form>
                </Formik>
            </Box>
        </Box>
    )
}

export default AdminLoginForm
