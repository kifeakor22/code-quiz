

const questions = [
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
        question: "What will be the output for the following code snippet?",
        image: "assets/images/quest2.PNG",
        choices: [
            {text: "9", isCorrect: true},
            {text: "81", isCorrect: false},
            {text: "Error", isCorrect: false},
            {text: "0", isCorrect: false}
        ]
    },
    {
        question: "What will be the output of the following code snippet?",
        image: "assets/images/question.PNG",
        choices: [
            {text: "cal", isCorrect: false},
            {text: "ale", isCorrect: false},
            {text: "al.", isCorrect: true},
            {text: "caler", isCorrect: false}
        ]
    },
    {
        question: "What is the output of the following code snippet?",
        image: "assets/images/quest3.PNG",
        choices: [
            {text: "true", isCorrect: false},
            {text: "undefined", isCorrect: false},
            {text: "false", isCorrect: true},
            {text: "Error", isCorrect: false}
        ]
    },
    {
        question: "What will be the output of the following code snippet?",
        image: "assets/images/quest4.PNG",
        choices: [
            {text: "true", isCorrect: false},
            {text: "undefined", isCorrect: false},
            {text: "false", isCorrect: true},
            {text: "None of the above", isCorrect: false}
        ]
    }
];

console.log(questions)


