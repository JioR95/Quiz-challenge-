const question = document.querySelector('question')
const Choices =Array.from(document.querySelector('choice-text'))
const progressText = document.querySelector('#progressText')
const scoreText = document.querySelector('score')
const progressBarFull = document.querySelector('#progressBarFull')

let currentQuestion = {}
let acceptingAnswers = true 
let score=0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'Whats does CSS Stand for ?',
        choice1: 'Cascading Style Sheets',
        choice2: 'Color Style Sheets',
        choice3: 'Coding Style Sheets',
        choice4: 'Cascading Sheets Style',
        answer:1,
    }, 