// Motivational quotes for engineers

export const quotes = [
    {
        text: "You're one commit away from greatness.",
        author: "Every developer at 3 AM"
    },
    {
        text: "The only way to learn a new programming language is by writing programs in it.",
        author: "Dennis Ritchie"
    },
    {
        text: "First, solve the problem. Then, write the code.",
        author: "John Johnson"
    },
    {
        text: "Code is like humor. When you have to explain it, it's bad.",
        author: "Cory House"
    },
    {
        text: "The best error message is the one that never shows up.",
        author: "Thomas Fuchs"
    },
    {
        text: "Make it work, make it right, make it fast.",
        author: "Kent Beck"
    },
    {
        text: "Simplicity is the soul of efficiency.",
        author: "Austin Freeman"
    },
    {
        text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        author: "Martin Fowler"
    },
    {
        text: "The function of good software is to make the complex appear to be simple.",
        author: "Grady Booch"
    },
    {
        text: "Debugging is twice as hard as writing the code in the first place.",
        author: "Brian Kernighan"
    },
    {
        text: "Programs must be written for people to read, and only incidentally for machines to execute.",
        author: "Harold Abelson"
    },
    {
        text: "The most disastrous thing that you can ever learn is your first programming language.",
        author: "Alan Kay"
    },
    {
        text: "Talk is cheap. Show me the code.",
        author: "Linus Torvalds"
    },
    {
        text: "It's not a bug – it's an undocumented feature.",
        author: "Anonymous"
    },
    {
        text: "The only way to go fast is to go well.",
        author: "Robert C. Martin"
    },
    {
        text: "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.",
        author: "Antoine de Saint-Exupéry"
    },
    {
        text: "One of my most productive days was throwing away 1000 lines of code.",
        author: "Ken Thompson"
    },
    {
        text: "It always takes longer than you expect, even when you take into account Hofstadter's Law.",
        author: "Hofstadter's Law"
    },
    {
        text: "Before software can be reusable it first has to be usable.",
        author: "Ralph Johnson"
    },
    {
        text: "You can't have great software without a great team.",
        author: "Jim McCarthy"
    },
    {
        text: "Your dream job is waiting. Build the skills to get there.",
        author: "AssignmentMaster"
    },
    {
        text: "10+ LPA is just the beginning. You're going to be unstoppable.",
        author: "Your Future Self"
    },
    {
        text: "Every expert was once a beginner. Keep shipping.",
        author: "Anonymous"
    },
    {
        text: "The secret to getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        text: "Success is the sum of small efforts repeated day in and day out.",
        author: "Robert Collier"
    }
]

// Get a random quote
export const getRandomQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)]
}

// Get quote based on time of day
export const getTimeBasedQuote = () => {
    const hour = new Date().getHours()

    // Morning motivation (5-12)
    if (hour >= 5 && hour < 12) {
        return quotes[Math.floor(Math.random() * 10)] // First 10 are more energetic
    }
    // Afternoon grind (12-18)
    if (hour >= 12 && hour < 18) {
        return quotes[10 + Math.floor(Math.random() * 10)]
    }
    // Night hustle (18-5)
    return quotes[20 + Math.floor(Math.random() * 5)] // Last 5 are encouraging
}
