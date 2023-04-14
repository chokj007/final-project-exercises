
// Should have specific ways of naming the function

function sayHello () {

    console.log ('hello!')

}

sayHello()

// document.addEventListener ( 'click', sayHello)

// function sayHello () { 

// console.log ('hello')
// holder.append ('hello?')

// holder.style.backgroundColor = "rgb(203, 195, 227)"
// holder.style.fontSize = "3em"

// }
// Appends the word "hello?" whenever clicked



let facts = [
    "The longest word in the English language is pneumonoultramicroscopicsilicovolcanoconiosis.",
    "The Eiffel Tower can grow up to 15 cm in summer due to thermal expansion of the metal.",
    "The national animal of Scotland is the unicorn.",
    "There are more stars in the observable universe than grains of sand on Earth.",
    "The human nose can remember 50,000 different scents.",
    "A single strand of spaghetti is called a spaghetto.",
    "The longest time between two twins being born is 87 days.",
    "The world's smallest country, Vatican City, has a population of about 800 people.",
    "The only letter that doesn't appear in any U.S. state name is Q.",
    "The total weight of all the ants on Earth is about the same as the total weight of all the humans on Earth.",
    "The longest recorded flight of a chicken is 13 seconds.",
    "The largest snowflake ever recorded was 15 inches wide and 8 inches thick.",
    "The loudest sound ever made by a living creature was the blue whale's call, which can reach up to 188 decibels.",
    "The most expensive pizza in the world costs $12,000 and takes 72 hours to make.",
    "The first person to win two Nobel Prizes was Marie Curie, for physics and chemistry."
  ];

document.addEventListener('click', pageClicked)

let holder = document.getElementById ('holder')

function pageClicked(){
    
    let probVar = Math.random()

    let redVar = Math.random() * 255
    let greenVar = Math.random() * 255
    let blueVar = Math.random() * 255
    let border = Math.random() * 20
    // introducing a variable to create functions that creates random background colors whenever clicked 

    let element = document.createElement ('div')

    // Creating divs 

    element.append(facts[Math.floor(Math.random() * (facts.length-1))])

    // appending random arrays to the element varaible, that is the divs ( Append the fact to each div)

    element. style. fontSize = "3em"

    holder.style.border = `${border}px dashed #000000`
// Randomising the border size 

    console.log(redVar)
    console.log(greenVar)
    console.log(blueVar)

    holder.append (element)
    // Appending the 'element' variable (divs) to the larger Div

    if (probVar <= 0.1) { 
        element.style.backgroundColor = 'rgb(255,0,0)'
    } else{
        element.style.backgroundColor = `rgb(${redVar}, ${greenVar}, ${blueVar})`
    }

    // Creating a prob. fucntion within Div's => changes colors of the background

}

