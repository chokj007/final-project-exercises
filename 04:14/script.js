
let holder = document.getElementById ('holder')

let ten = 10 
let fifteen = 15 
let addition = ten + fifteen 

// using interpolation
let textofAddition = `
<h1>booo! I don't like the number ${fifteen} </h1>
<div> hello, my favorite number is ${ten} </div> 
<p> but if I add ${ten} and ${fifteen} together I get ${addition}<p> `

holder.insertAdjacentHTML('afterbegin', textofAddition)
// Appedning infomration inside html elements. ('position'- where it positions itself in the html, 'text'- whatever text you want to append. In this example, the text is a variable. )

console.log (textofAddition)