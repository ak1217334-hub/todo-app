// Quotes ka ek array (list) banayein
const quotes = [
    { text: "Khudi ko kar buland itna...", author: "Allama Iqbal" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
    { text: "Difficulties in your life do not come to destroy you, but to help you realize your hidden potential and power.", author: "Dr. A.P.J. Abdul Kalam" },
    { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
    {text: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela"},
];

function generateQuote() {
    // Random index nikalne ka formula
    // Math.random() 0 se 1 ke beech number deta hai
    // Math.floor usay round down karta hai
    const randomIndex = Math.floor(Math.random() * quotes.length);
    
    const selectedQuote = quotes[randomIndex];

    // DOM mein update karein
    document.getElementById('quote').innerText = `"${selectedQuote.text}"`;
    document.getElementById('author').innerText = `- ${selectedQuote.author}`;
}

// Pehli baar page load hone par bhi ek quote dikhayein
generateQuote();