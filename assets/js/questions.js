

const questionTO = [
    {
        question: "Javascript is an _______ language?",
        choices: [
            {text: "Object-Oriented", isCorrect: true},
            {text: "Object-Based", isCorrect: false},
            {text: "All the above", isCorrect: false},
            {text: "None of the Above", isCorrect: false}
        ]
    },
    {
        question: "How can a datatype be declared to be a constant type?",
        choices: [
            {text: "var", isCorrect: false},
            {text: "const", isCorrect: true},
            {text: "let", isCorrect: false},
            {text: "All of the above", isCorrect: false}
        ]
    },
    {
        question: `What will be the output of the following code snippet?
                   <script type="text/javascript">
                   a = 5 + "9";
                   document.write(a);
                   </script>`,
        choices: [
            {text: "Compilation Error", isCorrect: false},
            {text: "59", isCorrect: true},
            {text: "14", isCorrect: false},
            {text: "Runtime Error", isCorrect: false}
        ]
    },
    {
        question: `When an operators value is NULL, the typeof returned by the unary operator is:`,
        choices: [
            {text: "Boolean", isCorrect: false},
            {text: "Object", isCorrect: true},
            {text: "Integer", isCorrect: false},
            {text: "Undefined", isCorrect: false}
        ]
    },
    {
        question: "What is the capital of Japan?",
        choices: [
            {text: "Tokyo", isCorrect: true},
            {text: "Seoul", isCorrect: false},
            {text: "Beijing", isCorrect: false},
            {text: "Shanghai", isCorrect: false}
        ]
    },
    {
        question: "What is the capital of United States?",
        choices: [
            {text: "New York", isCorrect: false},
            {text: "Los Angeles", isCorrect: false},
            {text: "Washington D.C.", isCorrect: true},
            {text: "San Francisco", isCorrect: false}
        ]
    }
];

console.log(questions)


