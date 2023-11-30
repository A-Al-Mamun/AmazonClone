// Slider

let slider = document.getElementsByClassName('slider')[0];
let sliderItems = document.querySelectorAll('.slider-item');

let leftSlide = document.getElementsByClassName('slide-left')[0];
let rightSlide = document.getElementsByClassName('slide-right')[0];

let slideIndex = 0;
sliderItems[slideIndex].classList.add('active');
// console.log(sliderItems);

leftSlide.addEventListener('click', () => {
    sliderItems[slideIndex].classList.remove('active');

    slideIndex = (slideIndex == 0) ? sliderItems.length - 1 : slideIndex - 1;
    sliderItems[slideIndex].classList.add('active');

    slider.style.transform = `translateX(-${slideIndex * 100}%)`; 
})

rightSlide.addEventListener('click', () => {
    sliderItems[slideIndex].classList.remove('active');

    slideIndex = (slideIndex == sliderItems.length - 1) ? 0 : slideIndex + 1;
    sliderItems[slideIndex].classList.add('active');

    slider.style.transform = `translateX(-${slideIndex * 100}%)`; 
})