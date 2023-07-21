import React, { useState } from 'react'
import {
    Button,
    Typography,
    Box,
    Grid,
    TextField,
    Paper,
    Stack,
} from '@mui/material'

interface Quiz {
    id: number
    name: string
    questions: string[]
}

const QuizManagement: React.FC = () => {
    const [quizzes, setQuizzes] = useState<Quiz[]>([])
    const [quizName, setQuizName] = useState('')
    const [questionText, setQuestionText] = useState('')

    const handleQuizNameChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setQuizName(event.target.value)
    }

    const handleCreateQuiz = (): void => {
        if (quizName.trim() === '') {
            alert('Please enter a quiz name.')
            return
        }

        const newQuiz: Quiz = {
            id: quizzes.length + 1,
            name: quizName,
            questions: [], // Initialize the questions array
        }

        setQuizzes([...quizzes, newQuiz])
        setQuizName('')
    }

    const handleQuestionTextChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setQuestionText(event.target.value)
    }

    const handleAddQuestion = (quizId: number): void => {
        const updatedQuizzes = quizzes.map((quiz) => {
            if (quiz.id === quizId) {
                const updatedQuestions = [...quiz.questions, questionText]
                return { ...quiz, questions: updatedQuestions }
            }
            return quiz
        })

        setQuizzes(updatedQuizzes)
        setQuestionText('')
    }

    const handleDeleteQuiz = (id: number): void => {
        const updatedQuizzes = quizzes.filter((quiz) => quiz.id !== id)
        setQuizzes(updatedQuizzes)
    }

    return (
        <Box
            sx={{
                alignItems: 'center',
                display: 'flex',
                height: '100vh',
                flexDirection: 'column',
            }}
        >
            <Stack>
                <Typography variant="h4">Quiz Management</Typography>
            </Stack>
            <Box
                sx={{
                    height: '60%',
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: 2,
                    flexDirection: 'row',
                }}
            >
                <TextField
                    label="Quiz Name"
                    value={quizName}
                    onChange={handleQuizNameChange}
                    variant="outlined"
                    margin="normal"
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleCreateQuiz}
                    sx={{ marginLeft: 2 }}
                >
                    Create Quiz
                </Button>
            </Box>
            {quizzes.length > 0 ? (
                <Box mt={4}>
                    <Typography variant="h5">Quizzes:</Typography>
                    <Grid container spacing={2} mt={2}>
                        {quizzes.map((quiz) => (
                            <Grid item xs={12} md={6} key={quiz.id}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Typography>{quiz.name}</Typography>
                                    <TextField
                                        label="Question"
                                        value={questionText}
                                        onChange={handleQuestionTextChange}
                                        variant="outlined"
                                        margin="normal"
                                        sx={{ marginLeft: 2 }}
                                    />
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() =>
                                            handleAddQuestion(quiz.id)
                                        }
                                    >
                                        Add Question
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="error"
                                        onClick={() =>
                                            handleDeleteQuiz(quiz.id)
                                        }
                                        sx={{ marginLeft: 'auto' }}
                                    >
                                        Delete
                                    </Button>
                                </Paper>
                                {quiz.questions.length > 0 && (
                                    <Paper
                                        sx={{
                                            mt: 2,
                                            p: 2,
                                            display: 'flex',
                                            flexDirection: 'column',
                                        }}
                                    >
                                        <Typography variant="h6">
                                            Questions:
                                        </Typography>
                                        {quiz.questions.map(
                                            (question, index) => (
                                                <Typography
                                                    key={`${index + 1}`}
                                                >
                                                    {question}
                                                </Typography>
                                            )
                                        )}
                                    </Paper>
                                )}
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            ) : (
                <Typography variant="body1" mt={4}>
                    No quizzes available.
                </Typography>
            )}
        </Box>
    )
}

export default QuizManagement
