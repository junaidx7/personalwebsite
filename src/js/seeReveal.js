function seeReveal() {
    const text = "See i have no never studied code, nor did i study design. i was self taught. i didnt know react, html or css before i started creating this site. i push boundaries when i want to learn i have pinpoint focuss";


    const words = text.split(' ');
    const parentElement = document.getElementById('see-paragraph');

    words.forEach(word => {
        const span = document.createElement('span');
        span.style.opacity = 0.2;
        span.textContent = word + ' ';
        parentElement.appendChild(span);
    });


    
    // Scrolling stuff
    window.addEventListener('scroll', function () {
        const sectionHeight = document.getElementById('see-section').offsetHeight;
        const sectionOffsetTop = document.getElementById('see-section').offsetTop;

        const scrollPosition = window.scrollY;

        let scrollPercentage = 0;
        
        if (scrollPosition >= sectionOffsetTop && scrollPosition <= sectionOffsetTop + sectionHeight - window.innerHeight) {

            scrollPercentage = (scrollPosition - sectionOffsetTop) / (sectionHeight - window.innerHeight);

        } else if (scrollPosition > sectionOffsetTop + sectionHeight - window.innerHeight) {

            scrollPercentage = 1;
        }

        const spans = document.querySelectorAll('#see-paragraph span');
        const numSpansToChange = Math.ceil(scrollPercentage * spans.length);

        spans.forEach((span, index) => {
            if (index < numSpansToChange) {
                span.style.opacity = 1;
            } else {
                span.style.opacity = 0.2;
            }
        });
    });


}

export default seeReveal;
