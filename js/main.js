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


let popSlider = document.getElementsByClassName('popular-slider')[0];
let popItems = document.querySelectorAll('.pop-item');

let leftPop = document.getElementsByClassName('pop-left')[0];
let rightPop = document.getElementsByClassName('pop-right')[0];

// let slideIndex = 0;
popItems[slideIndex].classList.add('active');
// console.log(sliderItems);

leftPop.addEventListener('click', () => {
    popItems[slideIndex].classList.remove('active');

    slideIndex = (slideIndex == 0) ? popItems.length - 1 : slideIndex - 1;
    popItems[slideIndex].classList.add('active');

    popSlider.style.transform = `translateX(-${slideIndex * 100}%)`; 
})

rightPop.addEventListener('click', () => {
    popItems[slideIndex].classList.remove('active');

    slideIndex = (slideIndex == popItems.length - 1) ? 0 : slideIndex + 1;
    popItems[slideIndex].classList.add('active');

    popSlider.style.transform = `translateX(-${slideIndex * 100}%)`; 
})


// Another
let popSlider1 = document.getElementsByClassName('popular-slider')[1];
let popItems1 = document.querySelectorAll('.pop-item');

let leftPop1 = document.getElementsByClassName('pop-left')[1];
let rightPop1 = document.getElementsByClassName('pop-right')[1];

// let slideIndex = 0;
popItems1[slideIndex].classList.add('active');
// console.log(sliderItems);

leftPop1.addEventListener('click', () => {
    popItems1[slideIndex].classList.remove('active');

    slideIndex = (slideIndex == 0) ? popItems1.length - 1 : slideIndex - 1;
    popItems1[slideIndex].classList.add('active');

    popSlider1.style.transform = `translateX(-${slideIndex * 100}%)`; 
})

rightPop1.addEventListener('click', () => {
    popItems1[slideIndex].classList.remove('active');

    slideIndex = (slideIndex == popItems1.length - 1) ? 0 : slideIndex + 1;
    popItems1[slideIndex].classList.add('active');

    popSlider1.style.transform = `translateX(-${slideIndex * 100}%)`; 
})