// --- DATA ---
const flashcards = [
    { word: "Serendipity", def: "Finding something good without looking for it." },
    { word: "Ephemeral", def: "Lasting for a very short time." },
    { word: "Resilient", def: "Able to withstand or recover quickly from difficult conditions." },
    { word: "Eloquent", def: "Fluent or persuasive in speaking or writing." },
    { word: "Mellifluous", def: "A sound that is sweet and musical; pleasant to hear." }
];

const quizQuestions = [
    {
        question: "She _____ to the store yesterday.",
        answers: [
            { text: "go", correct: false },
            { text: "went", correct: true },
            { text: "gone", correct: false },
            { text: "going", correct: false }
        ]
    },
    {
        question: "They _____ playing football now.",
        answers: [
            { text: "is", correct: false },
            { text: "are", correct: true },
            { text: "am", correct: false },
            { text: "be", correct: false }
        ]
    },
    {
        question: "I have never _____ sushi.",
        answers: [
            { text: "eat", correct: false },
            { text: "ate", correct: false },
            { text: "eaten", correct: true },
            { text: "eating", correct: false }
        ]
    },
    {
        question: "If it rains, I _____ stay home.",
        answers: [
            { text: "will", correct: true },
            { text: "would", correct: false },
            { text: "had", correct: false },
            { text: "did", correct: false }
        ]
    },
    {
        question: "He is the _____ student in the class.",
        answers: [
            { text: "smart", correct: false },
            { text: "smarter", correct: false },
            { text: "smartest", correct: true },
            { text: "smartest", correct: false }
        ]
    },
    {
        question: "_____ you like some coffee?",
        answers: [
            { text: "Do", correct: false },
            { text: "Would", correct: true },
            { text: "Are", correct: false },
            { text: "Have", correct: false }
        ]
    },
    {
        question: "She works _____ a doctor.",
        answers: [
            { text: "like", correct: false },
            { text: "as", correct: true },
            { text: "is", correct: false },
            { text: "for", correct: false }
        ]