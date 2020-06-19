'use strict';

const header = document.getElementById('main_header');

const scrolledFunc = () => {
    const scrolledY = window.scrollY;

    if(scrolledY >= 150) {
        header.style.backgroundColor = "rgba(20,20,20,.5)";
    } else {
        header.style.backgroundColor = 'transparent';
    }

}

window.addEventListener('scroll', scrolledFunc);