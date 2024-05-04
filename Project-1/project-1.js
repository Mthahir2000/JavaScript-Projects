//Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{quote: '"The best way to find yourself is to lose yourself in the service of others."', person: 'Mahatma Gandhi'},
	{quote: '"If you want to live a happy life, tie it to a goal, not to people or things."', person: 'Albert Einstein'},
	{quote: '"At his best, man is the noblest of all animals; separated from law and justice he is the worst."', person: 'Aristotle'},
	{quote: '"Your time is limited, so do not waste it living someone elses life."', person: 'Steve Jobs'},
	{quote: '"Tell me and I forget. Teach me and I remember. Involve me and I learn."', person: 'Benjamin Franklin'},
	{quote: '"If you look at what you have in life, you will always have more. If you look at what you do not have in life, you will never have enough."', person: 'Oprah Winfrey'},
	{quote: '"It does not matter how slowly you go as long as you do not stop."', person: 'Confucius'},
	{quote: '"Our lives begin to end the day we become silent about things that matter."', person: 'Martin Luther King Jr.'},
	{quote: '"Remember that sometimes not getting what you want is a wonderful stroke of luck."', person: 'Dalai Lama'},
	{quote: '"A journey of a thousand miles begins with a single step"', person: 'Lao Tzu'},
];


btn.addEventListener('click', function(){
	
    let random = Math.floor(Math.random() * quotes.length);
        
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})