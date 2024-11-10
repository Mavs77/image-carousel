import updateCarousel from './updateCarousel.js';
import { images } from './images.js';

let currentIndex = 0;

export function next() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel(currentIndex);
}

export function prev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel(currentIndex);
}
