
import './style.css';
import { next, prev } from '../navigation.js';
import { leftArrow, rightArrow } from '../domSelectors.js';
import updateCarousel from '../updateCarousel.js';

rightArrow.addEventListener('click', next);
leftArrow.addEventListener('click', prev);

// Initialize the carousel display
updateCarousel(0);
