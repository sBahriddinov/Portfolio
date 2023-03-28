let menuBar = document.querySelector('.menu-btn');
let menuList = document.querySelector('.menu');
let menuBtn = document.querySelector('.menu');
let menuExit = document.querySelector('.exit');

function handleClickBar() {
    menuList.classList.toggle('active');

}
menuBar.addEventListener('click', handleClickBar)



let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function() {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + '%';
}

// Swiper 
var swiper = new Swiper(".teams", {
    slidesPerView: 3,
    spaceBetween: 10,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    }
});
