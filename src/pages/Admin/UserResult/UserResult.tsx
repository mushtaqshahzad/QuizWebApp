import React, { useState } from 'react'
import {
    Box,
    Table,
    TableContainer,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Typography,
    Paper,
} from '@mui/material'

// Mock user and quiz data
interface User {
    id: number
    name: string
    email: string
}

interface QuizResult {
    userId: number
    category: string
    score: number
}

const mockUsers: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    // Add more mock user data as needed
]

const mockQuizResults: QuizResult[] = [
    { userId: 1, category: 'Math', score: 80 },
    { userId: 2, category: 'Science', score: 90 },
    // Add more mock quiz result data as needed
]

const UserResult: React.FC = () => {
    const [users] = useState<User[]>(mockUsers)
    const [quizResults] = useState<QuizResult[]>(mockQuizResults)

    return (
        <Box>
            <Typography variant="h4">Users</Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>User ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Typography variant="h4" sx={{ marginTop: '2rem' }}>
                Quiz Attempt Results
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>User ID</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Score</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {quizResults.map((result, index) => (
                            <TableRow key={`${index + 1}`}>
                                <TableCell>{result.userId}</TableCell>
                                <TableCell>{result.category}</TableCell>
                                <TableCell>{result.score}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default UserResult
