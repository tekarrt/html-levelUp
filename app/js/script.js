
// ----------------------------------------- Скрипт слайдера -----------------------------------------

const prev = document.getElementById('btn-prev'),
    next = document.getElementById('btn-next'),
    slides = document.querySelectorAll('.slider__slide')

let index = 0;

const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        activeSlide(index);
    } else {
        index++;
        activeSlide(index);
    }
}

const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        activeSlide(index);
    } else {
        index--;
        activeSlide(index);
    }
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// -------------------------------------------------------------------------------------------------------


// ----------------------------------------- Скролл -----------------------------------------

function scrollPage(element) {
    window.scroll({
        left: 0,
        top: 600000,
        behavior: 'smooth'
    })
}



let buttonScroll = document.querySelectorAll('#scroll');
let orderPage = document.querySelectorAll('.order__container');

Array.from(buttonScroll).forEach(b => {
    b.addEventListener("click", function () {
        scrollPage(orderPage);
    });
});

// -------------------------------------------------------------------------------------------------------





// ----------------------------------------- Input -----------------------------------------

const changeHandler = e => {
    const value = e.value
    e.value = value.replace(/\D/g, '')
}

// -------------------------------------------------------------------------------------------------------



// ----------------------------------------- Timer -----------------------------------------

// let date = new Date('Jan 18 2022 15:02:35');

// function counts() {
//     let nowDate = new Date();
//     gap = date - nowDate;
//     console.log(gap);

//     let minutes = Math.floor(gap / 1000 / 60);
//     let seconds = Math.floor(gap / 1000) % 60;

//     if (gap < 0) {
//         minutes = minutes + 29;
//         seconds = seconds + 60;
//     } else {
//         document.getElementById('m').innerText = minutes;
//         document.getElementById('s').innerText = seconds;
//     }
// }

// setInterval(counts, 1000);

let time = 1800;
let minutes = document.getElementById('m');
let seconds = document.getElementById('s');

function update() {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    if(sec <  10){
        sec = "0" + sec
    }
    if(min < 10){
        min = "0" + min
    }
    minutes.innerHTML = min;
    seconds.innerHTML = sec;
    time--;
    if (time < 0){
        time = 1800
    }
}

setInterval(update, 1000)

 
