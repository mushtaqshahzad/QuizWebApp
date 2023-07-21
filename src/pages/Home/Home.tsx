import React, { useState } from 'react'
import { Typography, Box, TextField, Button } from '@mui/material'
import { mockCategories, mockQuestions } from './data'

interface User {
    name: string
    phone: string
    image: string
    password: string
}

const Home: React.FC = () => {
    const [categories] = useState<string[]>(mockCategories)
    const [selectedCategory, setSelectedCategory] = useState<string>('')
    const [user, setUser] = useState<User>({
        name: '',
        phone: '',
        image: '',
        password: '',
    })
    const [questions, setQuestions] = useState<string[]>([])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)
    const [userAnswers, setUserAnswers] = useState<string[]>([])
    const [showResult, setShowResult] = useState<boolean>(false)

    const handleCategorySelect = (category: string): void => {
        setSelectedCategory(category)
    }

    const handleUserInfoChange = (event: any, field: keyof User): void => {
        setUser((prevUser) => ({ ...prevUser, [field]: event.target.value }))
    }

    const handleStartQuiz = (): void => {
        setCurrentQuestionIndex(1) // Set the current question index to 1 to start from the first question
        setUserAnswers([]) // Reset the user answers array
    }

    const handleAnswerChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const updatedAnswers = [...userAnswers]
        updatedAnswers[currentQuestionIndex] = event.target.value
        setUserAnswers(updatedAnswers)
    }

    const handleNextQuestion = (): void => {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
    }

    const handlePreviousQuestion = (): void => {
        setCurrentQuestionIndex((prevIndex) => prevIndex - 1)
    }

    const handleSubmitQuiz = (): void => {
        setShowResult(true)
    }

    return (
        <Box display="flex" justifyContent="center" flexDirection="column">
            {!selectedCategory ? (
                <>
                    <Typography textAlign="center" variant="h4">
                        Quiz Categories
                    </Typography>
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant="outlined"
                            onClick={() => handleCategorySelect(category)}
                        >
                            {category}
                        </Button>
                    ))}
                </>
            ) : (
                <>
                    {!showResult ? (
                        <>
                            <Typography textAlign="center" variant="h4">
                                Quiz: {selectedCategory}
                            </Typography>
                            {currentQuestionIndex === 0 ? (
                                <Box mt={2}>
                                    <Typography variant="h6">
                                        User General Info:
                                    </Typography>
                                    <TextField
                                        label="Name"
                                        value={user.name}
                                        onChange={(e) =>
                                            handleUserInfoChange(e, 'name')
                                        }
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                    />
                                    <TextField
                                        label="Phone"
                                        value={user.phone}
                                        onChange={(e) =>
                                            handleUserInfoChange(e, 'phone')
                                        }
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                    />
                                    <TextField
                                        label="Image URL"
                                        value={user.image}
                                        onChange={(e) =>
                                            handleUserInfoChange(e, 'image')
                                        }
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                    />
                                    <TextField
                                        label="Password"
                                        value={user.password}
                                        onChange={(e) =>
                                            handleUserInfoChange(e, 'password')
                                        }
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        type="password"
                                    />
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleStartQuiz}
                                        fullWidth
                                    >
                                        Start Quiz
                                    </Button>
                                </Box>
                            ) : (
                                <Box mt={2}>
                                    <Typography variant="h6">
                                        Question {currentQuestionIndex}:
                                    </Typography>
                                    <Typography>
                                        {questions[currentQuestionIndex - 1]}
                                    </Typography>
                                    <TextField
                                        label="Answer"
                                        value={
                                            userAnswers[
                                                currentQuestionIndex - 1
                                            ] || ''
                                        }
                                        onChange={handleAnswerChange}
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                    />
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNextQuestion}
                                        disabled={
                                            currentQuestionIndex ===
                                            questions.length
                                        }
                                    >
                                        Next
                                    </Button>
                                    {currentQuestionIndex > 1 && (
                                        <Button
                                            variant="outlined"
                                            color="secondary"
                                            onClick={handlePreviousQuestion}
                                        >
                                            Previous
                                        </Button>
                                    )}
                                    {currentQuestionIndex ===
                                        questions.length && (
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handleSubmitQuiz}
                                        >
                                            Submit Quiz
                                        </Button>
                                    )}
                                </Box>
                            )}
                        </>
                    ) : (
                        <Box mt={2}>
                            <Typography variant="h4">Quiz Result</Typography>
                            <Typography>
                                Name: {user.name} | Phone: {user.phone}
                            </Typography>
                            <Typography variant="h6">
                                Category: {selectedCategory}
                            </Typography>
                            <Typography variant="h6">Answers:</Typography>
                            {questions.map((question, index) => (
                                <Typography key={`${index + 1}`}>
                                    Q{index + 1}: {question}
                                    <br />
                                    Answer: {userAnswers[index]}
                                </Typography>
                            ))}
                        </Box>
                    )}
                </>
            )}
        </Box>
    )
}

export default Home
