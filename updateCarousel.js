import { images } from './images.js';
import { navCircles, imgContainer } from './domSelectors.js';

export default function updateCarousel(currentIndex) {
    imgContainer.src = images[currentIndex];
    navCircles.forEach(circle => circle.classList.remove('active')); 
    navCircles[currentIndex].classList.add('active');
}
