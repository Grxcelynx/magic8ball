
// function should take in an image from the magic folder and push it to the result in the HTML 
// would want to take an approach with something like this i think? 

// const magic = magic folder

// function generateImage() {
//     for every image in magic {
//         generate am image .random 

//         if  user inputs a question and clicks ask
//     } else {
//         alert to type a question or something 
//     }


// }

// TODO:

// make a function that takes the user input and gives back an image at random 
        // iterate through magic folder if possible 

        // maybe append the image to a container or something ??


// put the answer into the answers div to populate answer for user 

// replace user input with their answer


const inputElement = document.getElementById("user-question");
const form = document.getElementById("magic");
const button = document.getElementById("user-question");
let test = document.querySelector(".testball");

let question = '';


form.addEventListener("submit", (event)=> {
    event.preventDefault();
    // question = inputElement.value - acess option 1
    question = event.target[0].value
    // targeting form submit event belongs to
    // giving value of first index of form
    
    console.log(question)
}
)



