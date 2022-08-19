//Model

// Variables
let btn = document.querySelector('#new-quote');

const quotes = [
    {
        quote: `The journey of a thousand miles begins with one step.`,
        person: `Lao Tzu`
    },
    {
        quote: `That which does not kill us makes us stronger.`,
        person: `Friedrich Nietzsche`
    },
    {
        quote: `Life is what happens when you’re busy making other plans..`,
        person: `John Lennon`
    },
    {
        quote: `When the going gets tough, the tough get going.`,
        person: `Joe Kennedy`
    },
    {
        quote: `You must be the change you wish to see in the world.`,
        person: `Mahatma Gandhi`
    },
    {
        quote: `Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.`,
        person: `Mark Twain`
    },
    {
        quote: `Life is like a box of chocolates. You never know what you’re going to get.`,
        person: `Forest Gump`
    },
    {
        quote: `Don’t be afraid to give up the good to go for the great.`,
        person: `John D. Rockefeller`
    },
];





// View
function change(){
    
    let random = Math.floor(Math.random() * quotes.length);
    let quote = document.querySelector('.quote');
    let person = document.querySelector('.person');

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

}

// Controller

btn.addEventListener('click', change);