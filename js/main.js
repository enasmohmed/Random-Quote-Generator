
const quoteText = document.querySelector(".quote"),
    authorName = document.querySelector(".author .name"),
    quoteBtn = document.querySelector("button");


const quotes = [{ 
    quote: 'So many books, so little time.', 
    author: 'Frank Zappa' 
},{ 
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", 
    author: 'Albert Einstein' 
},{ 
    quote: 'A room without books is like a body without a soul.', 
    author: 'Marcus Tullius Cicero' 
},{ 
    quote: 'You only live once, but if you do it right, once is enough.', 
    author: 'Mae West' 
},{ 
    quote: "If you tell the truth, you don't have to remember anything.", 
    author: 'Mark Twain' 
}];

// console.log("Number of quotes:", quotes.length);


// console.log(Math.floor(Math.random() * quotes.length));




quoteBtn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);

    quoteText.innerHTML = quotes[random].quote;
    authorName.innerHTML = quotes[random].author; 
});

