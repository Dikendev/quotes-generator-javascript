// Variables

let btn = document.querySelector('#new-quote');
var quote = document.querySelector('.quote');
let person = document.querySelector(".person");

// array for all quotes

const quotes = [{
    quote:`“Tried to escape, to block out the fact that I was being eaten alive by arachnids. For some reason the only thing I could replace it with was the image of being eaten by tiny clowns.”
    `,
    person:` David Wong, This Book Is Full of Spiders`
}, {
    quote:`“What have I become?
    My sweetest friend;
    everyone I know goes away in the end.
    And you could have it all:
    my empire of dirt.
    I will let you down.
    I will make you hurt.”
    
    `,
    person:` Nine Inch Nails`
}, {
    quote:`“The wisest mind has something yet to learn.”`,
    person:` George Santayana (1863 - 1952)`
},];

btn.addEventListener


btn.addEventListener('click', function() {

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote
    person.innerText = quotes[random].person

})
