/* eslint-disable prettier/prettier */
import * as React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'

import NotFound from '../pages/NotFound/NotFound'
import RegisterForm from '../pages/Register/Register'
import LoginForm from '../pages/Login/Login'
import Home from '../pages/Home/Home'
import AdminLoginForm from '../pages/Admin/AdminLogin/AdminLogin'
import AdminDashboard from '../pages/Admin/AdminDashboard/AdminDashboard'
import UserManagement from '../pages/Admin/UserManagement/UserManagement'
import QuizManagement from '../pages/Admin/QuizManagement/QuizManagement'
import UserResult from '../pages/Admin/UserResult/UserResult'

export default function Routes(): ReactNode {
    return useRoutes([
        { path: '404', element: <NotFound /> },
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/register',
            element: <RegisterForm />,
        },
        {
            path: '/user/login',
            element: <LoginForm />,
        },
        {
            path: '/admin/login',
            element: <AdminLoginForm />,
        },
        {
            path: '/admin/dashboard',
            element: <AdminDashboard />,
        },
        {
            path: '/admin/user-manage',
            element: <UserManagement />,
        },
        {
            path: '/admin/quiz-manage',
            element: <QuizManagement />,
        },
        {
            path: '/admin/user-result',
            element: <UserResult />,
        },
        {
            path: '*',
            element: <Navigate to="/404" />,
        },
    ])
}
