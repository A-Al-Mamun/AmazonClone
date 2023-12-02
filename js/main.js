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



// Popular products Slide

let popSlider = document.getElementsByClassName('popular-slider')[0];
let popItems = document.querySelectorAll('.pop-item');

let leftPop = document.getElementsByClassName('pop-left')[0];
let rightPop = document.getElementsByClassName('pop-right')[0];

let popIndex = 0;
popItems[popIndex].classList.add('active');
// console.log(sliderItems);

leftPop.addEventListener('click', () => {
    popItems[popIndex].classList.remove('active');

    popIndex = (popIndex == 0) ? popItems.length - 1 : popIndex - 1;
    popItems[popIndex].classList.add('active');

    popSlider.style.transform = `translateX(-${popIndex * 16}%)`; 
})

rightPop.addEventListener('click', () => {
    popItems[popIndex].classList.remove('active');

    popIndex = (popIndex == popItems.length - 1) ? 0 : popIndex + 1;
    popItems[popIndex].classList.add('active');

    popSlider.style.transform = `translateX(-${popIndex * 16}%)`; 
})


// Another
let topSlider = document.getElementsByClassName('top-slider')[0];
let topItems = document.querySelectorAll('.top-item');

let leftTop = document.getElementsByClassName('top-left')[0];
let rightTop = document.getElementsByClassName('top-right')[0];

let topIndex = 0;
topItems[topIndex].classList.add('active');
// console.log(sliderItems);

leftTop.addEventListener('click', () => {
    topItems[topIndex].classList.remove('active');

    topIndex = (topIndex == 0) ? topItems.length - 1 : topIndex - 1;
    topItems[topIndex].classList.add('active');

    topSlider.style.transform = `translateX(-${topIndex * 6}%)`; 
})

rightTop.addEventListener('click', () => {
    topItems[topIndex].classList.remove('active');

    topIndex = (topIndex == topItems.length - 1) ? 0 : topIndex + 1;
    topItems[topIndex].classList.add('active');

    topSlider.style.transform = `translateX(-${topIndex * 6}%)`; 
})


// Another Popular Slide
let popSlider1 = document.getElementsByClassName('popular-slider')[1];
let popItems1 = document.querySelectorAll('.pop-item');

let leftPop1 = document.getElementsByClassName('pop-left')[1];
let rightPop1 = document.getElementsByClassName('pop-right')[1];

let popIndex1 = 0;
popItems1[popIndex1].classList.add('active');

leftPop1.addEventListener('click', () => {
    popItems1[popIndex1].classList.remove('active');

    popIndex1 = (popIndex1 == 0) ? popItems1.length - 1 : popIndex1 - 1;
    popItems1[popIndex1].classList.add('active');

    popSlider1.style.transform = `translateX(-${popIndex1 * 16}%)`; 
})

rightPop1.addEventListener('click', () => {
    popItems1[popIndex1].classList.remove('active');

    popIndex1 = (popIndex1 == popItems1.length - 1) ? 0 : popIndex1 + 1;
    popItems1[popIndex1].classList.add('active');

    popSlider1.style.transform = `translateX(-${popIndex1 * 16}%)`; 
})
