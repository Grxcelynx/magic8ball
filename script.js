const inputElement = document.getElementById("user-question");
const form = document.getElementById("magic");
// const button = document.getElementById("user-question");
let magicball = document.getElementById("theball");


// let question = '';
// form.addEventListener("submit", (event)=> {
//     event.preventDefault();
//     // question = inputElement.value - acess option 1
//     question = event.target[0].value
//     // targeting form submit event belongs to
//     // giving value of first index of form
    
//     console.log(question)
// }
// )

// previous event listener ^

function randomNumber(min, max) {
    //this function will help to produce a random photo
    //using this function we will grab a random index to return when question is asked
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


class MagicBall {
    //Parent class 
    constructor(_element, _index) {
        this.element = _element;
        this.index = _index;
        //setting variables for paramaters 
        this.id = "magicball" + this.index;
        //setting id to the HTML element created from the theball DIV plus the index
        this.img = document.createElement("img");
        //creating an instance for the image tag
        this.src = `./magic/magic8ball_${this.index}.png`
        //setting the source to the path of all the magic 8 ball image files and grabbing each by their index 
        this.fadeTimeOut = null;
    }

    initialize() {
        this.element.appendChild(this.img);
        this.img.setAttribute("id", this.id);
        document.getElementById(this.id).src = this.src;
        // this.style();
    }
    imageChange() {
        document.getElementById(this.id).src = this.src;
        //change the image and not append any elements 
    }
}

let imageArr = [];
//empty array

let startBall = new MagicBall(magicball, "start");
//setting startball to starting point aka start image file - as it's labeled magic8ball_start

startBall.initialize();
// an array of strings that will hold all sources 
for (let i = 1; i <= 20; i++) {
    let _src = `./magic/magic8ball_${i}.png`
    //iterating through the image folder and setting the source to the random file aka i in this loop 
    imageArr.push(_src);
    //pushing the files to the array 
}

function fader() {
    startBall.src = `./magic/magic8ball_start.png`;
    startBall.imageChange();
}

form.addEventListener("submit", (event) => {
    if (startBall.fadeTimeOut != null) {
        //if the value of fadeTimeOut is not null
        clearTimeout(startBall.fadeTimeOut)
        //clear the timer 
        //clearing last one that was set
    };
    const regex = /\?$/;
    const isExisting = regex.test(inputElement.value);
    // console.log("Working -> : ",isExisting)
    // console.log(inputElement.value)
    if (isExisting != true) {
        alert("Please enter a question along with a \"?\" ");
        event.preventDefault();
        return;
    };
    //checking user's input to see if it ends in a question mark

    // Form submission event to happen when user asks question 
    event.preventDefault();
    //cancels the event if it is cancelable - default action of event will not happen
    startBall.src = imageArr[randomNumber(1, 20)];
    //setting the source of the magic 8 ball object to a random source from the array 
    //this will help to generate the random photo/answer to user question 
    startBall.imageChange();
    //calling the image change to generate a new photo on each submit 

    // question.saveToSession();
    //will use ^^^ when storage session made if time permits 
    form.reset();
    //resetting the ask question input placeholder 
    //once ask button clicked, the input feild returns to it's inital place holder 
    startBall.fadeTimeOut = setTimeout(fader, 3000);
    //storing the id of the timeout in fadeTimeOut
});