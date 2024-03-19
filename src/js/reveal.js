function initReveal() {
    const text = "Precision-Driven Designs for Maximum Impact. I go beyond aesthetics, delving deep into consumer behavior and market research to craft websites that aren't just visually appealing but strategically engineered for usability & conversion.";


    console.log('caled');

    const words = text.split(' ');
    const parentElement = document.getElementById('precision-paragraph');

    words.forEach(word => {
        const span = document.createElement('span');
        span.style.opacity = 0.2;
        span.textContent = word + ' ';
        parentElement.appendChild(span);
    });


    
    // Scrolling stuff
    window.addEventListener('scroll', function () {
        const sectionHeight = document.getElementById('precision-section').offsetHeight;
        const sectionOffsetTop = document.getElementById('precision-section').offsetTop;

        const scrollPosition = window.scrollY;

        let scrollPercentage = 0;
        if (scrollPosition >= sectionOffsetTop && scrollPosition <= sectionOffsetTop + sectionHeight - window.innerHeight) {
            scrollPercentage = (scrollPosition - sectionOffsetTop) / (sectionHeight - window.innerHeight);
        } else if (scrollPosition > sectionOffsetTop + sectionHeight - window.innerHeight) {
            scrollPercentage = 1;
        }

        const spans = document.querySelectorAll('#precision-paragraph span');
        const numSpansToChange = Math.ceil(scrollPercentage * spans.length);

        spans.forEach((span, index) => {
            if (index < numSpansToChange) {
                span.style.opacity = 1;
            } else {
                span.style.opacity = 0.2;
            }
        });
    });

    console.log('reveal compelete');
}

export default initReveal;
