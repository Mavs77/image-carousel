import { next } from "./next";

import { previous } from "./prev";

import "./style.css"

import img1 from './assets/broly.jpg'; 
import img2 from './assets/diehard.jpg'; 
import img3 from './assets/vegito.jpg'

//place images in an array
const images = [img1, img2, img3]

//select the image container
const imgContainer = document.getElementById('imgContainer'); 

//initialize an index to track the current image 
let currentIndex = 0; 

///Function to change the image
function changeImage() {
    //update the src attribute with the current img
    imgContainer.src = images[currentIndex]; 

    //update index to the next image, loop back to 0 if at the end
    currentIndex = (currentIndex + 1) % images.length; 
}

// Set an interval to call changeImage every 500 milliseconds (or whatever time you prefer)
setInterval(changeImage, 5000);

console.log(next); 
console.log(previous); 