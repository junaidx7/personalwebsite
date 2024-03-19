function VideoSequence() {
    var vid = document.getElementById('v0');
   // vid.pause();

    var section = document.getElementById('testament-section');
    vid.addEventListener('durationchange', function() {
        // Now that the duration has changed, you can use it
        //section.style.height = vid.duration * 500 + "px";
        section.style.height = window.innerHeight * 5 + "px";
        console.log('heighht:'+section.style.height);
    });


    // Refresh video frames on animation frame for smoother playback
    function updateVideo() {
        const sectionHeight = section.offsetHeight;
        const sectionOffsetTop = section.offsetTop;

        const scrollPosition = window.scrollY;
        let scrollPercentage = 0;

        if (Number.isFinite(sectionHeight) && Number.isFinite(window.innerHeight) && vid.duration > 0) {
            if (scrollPosition >= sectionOffsetTop && scrollPosition <= sectionOffsetTop + sectionHeight - window.innerHeight) {
                scrollPercentage = (scrollPosition - sectionOffsetTop) / (sectionHeight - window.innerHeight);
            } else if (scrollPosition > sectionOffsetTop + sectionHeight - window.innerHeight) {
                scrollPercentage = 1;
            }

            const targetTime = vid.duration * scrollPercentage;
            if (Number.isFinite(targetTime)) {
                vid.currentTime = targetTime;
            } else {
                console.error("Invalid currentTime calculation:", targetTime);
            }
        } else {
            console.warn("Unable to calculate scroll percentage due to invalid values.");
        }

        requestAnimationFrame(updateVideo);
    }

    requestAnimationFrame(updateVideo);
}

export default VideoSequence;
