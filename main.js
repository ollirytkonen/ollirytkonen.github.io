

const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');

    const navActive = document.querySelector('.nav-active');

    hamburger.addEventListener('click', () => {
        
        console.log("click");
        nav.classList.toggle('nav-active');
        navActive.style.display ="block";
    });

}

navSlide();
