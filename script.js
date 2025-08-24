document.addEventListener("DOMContentLoaded", function() {
    const words = ["Legal Research...", "Act Explorer..."];
    let wordIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;

    function typeWriter() {
        const currentWord = words[wordIndex];
        const displayElement = document.getElementById("typewriter");

        if (!isDeleting) {
            displayElement.innerHTML += currentWord.charAt(letterIndex);
            letterIndex++;
            if (letterIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(typeWriter, 1000); // Wait 1 second before starting to delete
                return;
            }
        } else {
            displayElement.innerHTML = currentWord.substring(0, letterIndex - 1);
            letterIndex--;
            if (letterIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(typeWriter, 500); // Wait 0.5 seconds before typing the next word
                return;
            }
        }
        setTimeout(typeWriter, 100); // Adjust typing speed here
    }

    typeWriter();
});





document.addEventListener('scroll', () => {
    // color gradient
    const target = document.getElementById('target');
    const rect = target.getBoundingClientRect();

    const target2 = document.getElementById('target2');
    const rect2 = target2.getBoundingClientRect();

    const enterViewport = (
        rect.top <= window.innerHeight && rect.top >=0
    );

    const enterViewport2 = (
        rect2.top <= window.innerHeight && rect2.top >=0
    );

    if (enterViewport) {
        let colorDiv = document.querySelector('.main-card');
        let opacity = (window.innerHeight-rect.top) / rect.height
        colorDiv.style.backgroundColor = `rgba(58, 106, 214, ${opacity})`;
    }
    
    if (enterViewport2) {
        let colorDiv2 = document.querySelector('.main-card2');
        let opacity2 = (window.innerHeight-rect2.top) / rect2.height
        colorDiv2.style.backgroundColor = `rgba(58, 106, 214, ${opacity2})`;
    }


    // image-fadein

    const cardTarget = document.getElementById('card-img');
    const cardRect = cardTarget.getBoundingClientRect();

    const cardEntry = (
        cardRect.top <= (window.innerHeight) && cardRect.top >=0
    );

    const cardExit = (
        cardRect.bottom <=0
    )

    if (cardEntry) {
        cardTarget.classList.add("animation-1");
    }
    else {
        cardTarget.classList.remove("animation-1");
    }

    const cardTarget2 = document.getElementById('card-img2');
    const cardRect2 = cardTarget2.getBoundingClientRect();

    const cardEntry2 = (
        cardRect2.top <= (window.innerHeight) && cardRect2.top >=0
    );

    const cardExit2 = (
        cardRect2.bottom <=0
    )

    if (cardEntry2) {
        cardTarget2.classList.add("animation-1");
    }
    else {
        cardTarget2.classList.remove("animation-1");
    }


    // text-slide effect
    const slideTarget = document.getElementById("slide-effect");
    const slideTarget2 = document.getElementById("slide-effect2");
    if (cardEntry) {
        slideTarget.classList.add('slide-effect');
    }
    else {
        slideTarget.classList.remove('slide-effect');
    }

    if(cardEntry2) {
        slideTarget2.classList.add('slide-effect2');

    }
    else {
        slideTarget2.classList.remove('slide-effect2');
        
    }


    



    });

    let slideIndex = 1;
    showSlides(slideIndex);


    // Thumbnail image controls
    function currentSlide(n) {
    showSlides(slideIndex = n);
    }

    function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    }
