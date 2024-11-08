import "./style.css"

//import the images 
import img1 from './assets/broly.jpg'; 
import img2 from './assets/diehard.jpg'; 
import img3 from './assets/vegito.jpg'; 
import img4 from './assets/gohan.jpg'; 
import img5 from './assets/vegeta.jpg'; 
import img6 from './assets/MichaelIrvin_Headshot.jpg'

//place images in an array
const images = [img1, img2, img3, img4, img5, img6]

//reference to elements in the DOM
const navCircles = document.querySelectorAll('.navCircles .circle');
const leftArrow = document.querySelectorAll('.arrowButton')[0];
const rightArrow = document.querySelectorAll('.arrowButton')[1];

//select the image container
const imgContainer = document.getElementById('imgContainer'); 

//initialize an index to track the current image 
let currentIndex = 0; 

//Function to update image and active circle
function updateCarousel() {
    //set the image source
    imgContainer.src = images[currentIndex]; 

    //remove 'active' class from all circles and add it to the current one
    navCircles.forEach(circle => circle.classList.remove('active')); 
    navCircles[currentIndex].classList.add('active'); 
}

//Function to move to the next image; 
function next() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
} 

//Function to move to the previous image
function prev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
} 

///Function to change the image
function changeImage() {
    //update index to the next image, loop back to 0 if at the end
    currentIndex = (currentIndex + 1) % images.length; 
    updateCarousel(); 
}

// Set an interval to call changeImage every 5000 milliseconds (or whatever time you prefer)
// setInterval(changeImage, 10000);

rightArrow.addEventListener('click', next); 
leftArrow.addEventListener('click', prev); 

updateCarousel(); 
