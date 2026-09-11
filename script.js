const expoNavbar = document.getElementById("expoNavbar");
const expoMobileToggler = document.getElementById("expoMobileToggler");
const expoMobileMenu = document.getElementById("expoMobileMenu");

const mobileOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(
    expoMobileMenu
);


window.addEventListener("scroll", function () {

    if (window.scrollY > 30) {
        expoNavbar.classList.add("scrolled");
    } else {
        expoNavbar.classList.remove("scrolled");
    }

});


expoMobileToggler.addEventListener("click", function () {

    mobileOffcanvas.toggle();

});


expoMobileMenu.addEventListener(
    "show.bs.offcanvas",
    function () {

        expoMobileToggler.classList.add("active");

        expoMobileToggler.setAttribute(
            "aria-expanded",
            "true"
        );

        document.body.classList.add(
            "expo-lock-scroll"
        );

    }
);


expoMobileMenu.addEventListener(
    "hidden.bs.offcanvas",
    function () {

        expoMobileToggler.classList.remove("active");

        expoMobileToggler.setAttribute(
            "aria-expanded",
            "false"
        );

        document.body.classList.remove(
            "expo-lock-scroll"
        );

    }
);


const expoMobileLinks =
    document.querySelectorAll(".expo-mobile-link");


expoMobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mobileOffcanvas.hide();

    });

});


window.addEventListener("resize", function () {

    if (window.innerWidth > 900) {

        mobileOffcanvas.hide();

        document.body.classList.remove(
            "expo-lock-scroll"
        );

    }

});


document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            mobileOffcanvas.hide();

        }

    }
);



(function () {

    "use strict";


    function initEventHero() {

        const hero =
            document.querySelector(".event-hero");


        if (!hero) {
            return;
        }


        const slides =
            hero.querySelectorAll(".hero-slide");


        const nextButton =
            hero.querySelector("#heroNext");


        const previousButton =
            hero.querySelector("#heroPrev");


        const currentNumber =
            hero.querySelector("#heroCurrent");


        const progress =
            hero.querySelector("#heroProgress");


        if (
            !slides.length ||
            !nextButton ||
            !previousButton ||
            !currentNumber ||
            !progress
        ) {
            return;
        }


        let currentIndex = 0;

        let isAnimating = false;

        let autoplayTimer = null;

        let progressTween = null;

        let touchStartX = 0;

        let touchEndX = 0;


        const AUTOPLAY_TIME = 6000;


        function getElements(slide) {

            return {

                content:
                    slide.querySelector(
                        ".hero-slide-content"
                    ),

                animated:
                    slide.querySelectorAll(
                        ".hero-animate"
                    ),

                image:
                    slide.querySelector(
                        ".hero-image-frame"
                    ),

                cards:
                    slide.querySelectorAll(
                        ".floating-event-card"
                    ),

                orbitLarge:
                    slide.querySelector(
                        ".orbit-large"
                    ),

                orbitSmall:
                    slide.querySelector(
                        ".orbit-small"
                    )

            };

        }


        function setInitialSlide() {

            slides.forEach(
                (slide, index) => {

                    slide.classList.toggle(
                        "active",
                        index === 0
                    );

                    slide.style.opacity =
                        index === 0
                            ? "1"
                            : "0";

                    slide.style.visibility =
                        index === 0
                            ? "visible"
                            : "hidden";

                }
            );


            currentNumber.textContent =
                String(currentIndex + 1)
                    .padStart(2, "0");

        }


        function animateFirstSlide() {

            const slide =
                slides[0];


            const elements =
                getElements(slide);


            const timeline =
                gsap.timeline();


            timeline.fromTo(
                elements.content,
                {
                    opacity: 0,
                    x: -60
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.9,
                    ease: "power4.out"
                }
            );


            timeline.fromTo(
                elements.animated,
                {
                    opacity: 0,
                    y: 30
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.65,
                    stagger: 0.08,
                    ease: "power3.out"
                },
                "-=0.5"
            );


            if (elements.image) {

                timeline.fromTo(
                    elements.image,
                    {
                        opacity: 0,
                        x: 80,
                        scale: 0.9
                    },
                    {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        duration: 1.1,
                        ease: "power4.out"
                    },
                    "-=0.7"
                );

            }


            if (elements.cards.length) {

                timeline.fromTo(
                    elements.cards,
                    {
                        opacity: 0,
                        scale: 0.75,
                        y: 25
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        duration: 0.65,
                        stagger: 0.12,
                        ease: "back.out(1.6)"
                    },
                    "-=0.6"
                );

            }

        }


        function resetElements(slide) {

            const elements =
                getElements(slide);


            gsap.killTweensOf(
                [
                    elements.content,
                    elements.animated,
                    elements.image,
                    elements.cards
                ]
            );


            gsap.set(
                elements.content,
                {
                    opacity: 0
                }
            );


            gsap.set(
                elements.animated,
                {
                    opacity: 0,
                    y: 25,
                    x: 0
                }
            );


            if (elements.image) {

                gsap.set(
                    elements.image,
                    {
                        opacity: 0,
                        x: 80,
                        scale: 0.9
                    }
                );

            }


            if (elements.cards.length) {

                gsap.set(
                    elements.cards,
                    {
                        opacity: 0,
                        scale: 0.75,
                        y: 25
                    }
                );

            }

        }


        function animateNextSlide(
            slide,
            direction
        ) {

            const elements =
                getElements(slide);


            const fromX =
                direction > 0
                    ? 60
                    : -60;


            const imageX =
                direction > 0
                    ? 80
                    : -80;


            gsap.set(
                elements.content,
                {
                    opacity: 0,
                    x: fromX
                }
            );


            gsap.set(
                elements.animated,
                {
                    opacity: 0,
                    y: 25,
                    x: 0
                }
            );


            if (elements.image) {

                gsap.set(
                    elements.image,
                    {
                        opacity: 0,
                        x: imageX,
                        scale: 0.9
                    }
                );

            }


            if (elements.cards.length) {

                gsap.set(
                    elements.cards,
                    {
                        opacity: 0,
                        scale: 0.75,
                        y: 25
                    }
                );

            }


            const timeline =
                gsap.timeline();


            timeline.to(
                elements.content,
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.7,
                    ease: "power4.out"
                }
            );


            timeline.to(
                elements.animated,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.07,
                    ease: "power3.out"
                },
                "-=0.45"
            );


            if (elements.image) {

                timeline.to(
                    elements.image,
                    {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        duration: 1,
                        ease: "power4.out"
                    },
                    "-=0.7"
                );

            }


            if (elements.cards.length) {

                timeline.to(
                    elements.cards,
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        duration: 0.65,
                        stagger: 0.1,
                        ease: "back.out(1.5)"
                    },
                    "-=0.65"
                );

            }

        }


        function startProgress() {

            if (
                typeof gsap === "undefined"
            ) {

                return;

            }


            if (progressTween) {

                progressTween.kill();

            }


            gsap.set(
                progress,
                {
                    width: "0%"
                }
            );


            progressTween =
                gsap.to(
                    progress,
                    {
                        width: "100%",
                        duration:
                            AUTOPLAY_TIME / 1000,
                        ease: "none"
                    }
                );

        }


        function stopProgress() {

            if (progressTween) {

                progressTween.kill();

                progressTween = null;

            }

        }


        function goToSlide(
            newIndex,
            direction
        ) {

            if (isAnimating) {
                return;
            }


            if (
                newIndex < 0
            ) {

                newIndex =
                    slides.length - 1;

            }


            if (
                newIndex >= slides.length
            ) {

                newIndex = 0;

            }


            if (
                newIndex === currentIndex
            ) {

                return;

            }


            isAnimating = true;


            stopProgress();


            const currentSlide =
                slides[currentIndex];


            const nextSlide =
                slides[newIndex];


            const currentElements =
                getElements(currentSlide);


            resetElements(nextSlide);


            nextSlide.classList.add(
                "active"
            );


            nextSlide.style.visibility =
                "visible";


            nextSlide.style.opacity =
                "1";


            const currentX =
                direction > 0
                    ? -50
                    : 50;


            const currentImageX =
                direction > 0
                    ? -70
                    : 70;


            const timeline =
                gsap.timeline({

                    onComplete: function () {

                        currentSlide.classList.remove(
                            "active"
                        );


                        currentSlide.style.visibility =
                            "hidden";


                        currentSlide.style.opacity =
                            "0";


                        nextSlide.style.opacity =
                            "1";


                        currentIndex =
                            newIndex;


                        currentNumber.textContent =
                            String(
                                currentIndex + 1
                            ).padStart(
                                2,
                                "0"
                            );


                        isAnimating =
                            false;


                        startProgress();

                    }

                });


            timeline.to(
                currentElements.animated,
                {
                    opacity: 0,
                    x: currentX,
                    duration: 0.35,
                    stagger: 0.025,
                    ease: "power2.in"
                }
            );


            if (
                currentElements.image
            ) {

                timeline.to(
                    currentElements.image,
                    {
                        opacity: 0,
                        x: currentImageX,
                        scale: 0.94,
                        duration: 0.45,
                        ease: "power2.in"
                    },
                    "<"
                );

            }


            if (
                currentElements.cards.length
            ) {

                timeline.to(
                    currentElements.cards,
                    {
                        opacity: 0,
                        scale: 0.8,
                        duration: 0.3,
                        stagger: 0.03,
                        ease: "power2.in"
                    },
                    "<"
                );

            }


            timeline.call(
                function () {

                    animateNextSlide(
                        nextSlide,
                        direction
                    );

                }
            );

        }


        function nextSlide() {

            const nextIndex =
                (
                    currentIndex + 1
                ) % slides.length;


            goToSlide(
                nextIndex,
                1
            );

        }


        function previousSlide() {

            const previousIndex =
                (
                    currentIndex -
                    1 +
                    slides.length
                ) % slides.length;


            goToSlide(
                previousIndex,
                -1
            );

        }


        function startAutoplay() {

            stopAutoplay();


            autoplayTimer =
                setInterval(
                    function () {

                        nextSlide();

                    },
                    AUTOPLAY_TIME
                );

        }


        function stopAutoplay() {

            if (autoplayTimer) {

                clearInterval(
                    autoplayTimer
                );

                autoplayTimer = null;

            }

        }


        nextButton.addEventListener(
            "click",
            function () {

                nextSlide();

                startAutoplay();

            }
        );


        previousButton.addEventListener(
            "click",
            function () {

                previousSlide();

                startAutoplay();

            }
        );


        hero.addEventListener(
            "mouseenter",
            function () {

                stopAutoplay();

                if (progressTween) {
                    progressTween.pause();
                }

            }
        );


        hero.addEventListener(
            "mouseleave",
            function () {

                startAutoplay();

                if (progressTween) {
                    progressTween.resume();
                }

            }
        );


        hero.addEventListener(
            "touchstart",
            function (event) {

                touchStartX =
                    event.changedTouches[0]
                        .screenX;

            },
            {
                passive: true
            }
        );


        hero.addEventListener(
            "touchend",
            function (event) {

                touchEndX =
                    event.changedTouches[0]
                        .screenX;


                const distance =
                    touchStartX -
                    touchEndX;


                if (
                    Math.abs(distance) < 45
                ) {

                    return;

                }


                if (distance > 0) {

                    nextSlide();

                } else {

                    previousSlide();

                }


                startAutoplay();

            },
            {
                passive: true
            }
        );


        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "ArrowRight"
                ) {

                    nextSlide();

                    startAutoplay();

                }


                if (
                    event.key === "ArrowLeft"
                ) {

                    previousSlide();

                    startAutoplay();

                }

            }
        );


        function startFloatingAnimation() {

            if (
                typeof gsap === "undefined"
            ) {

                return;

            }


            gsap.to(
                hero.querySelectorAll(
                    ".floating-card-one"
                ),
                {
                    y: -10,
                    duration: 2.2,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                }
            );


            gsap.to(
                hero.querySelectorAll(
                    ".floating-card-two"
                ),
                {
                    y: 10,
                    duration: 2.7,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                }
            );


            gsap.to(
                hero.querySelectorAll(
                    ".orbit-large"
                ),
                {
                    rotation: 360,
                    duration: 25,
                    repeat: -1,
                    ease: "none"
                }
            );


            gsap.to(
                hero.querySelectorAll(
                    ".orbit-small"
                ),
                {
                    rotation: -360,
                    duration: 18,
                    repeat: -1,
                    ease: "none"
                }
            );


            gsap.to(
                ".gradient-one",
                {
                    x: -60,
                    y: 50,
                    duration: 5,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                }
            );


            gsap.to(
                ".gradient-two",
                {
                    x: 60,
                    y: -40,
                    duration: 6,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                }
            );

        }


        setInitialSlide();


        if (
            typeof gsap !== "undefined"
        ) {

            animateFirstSlide();

            startFloatingAnimation();

        } else {

            const first =
                slides[0];

            first.style.opacity = "1";
            first.style.visibility =
                "visible";

        }


        startProgress();

        startAutoplay();

    }


    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initEventHero
        );

    } else {

        initEventHero();

    }

})();
(function () {

    "use strict";

    function initExpoAbout() {

        const section =
            document.querySelector(
                ".expo-about-section"
            );

        if (!section) {
            return;
        }

        if (
            typeof gsap === "undefined" ||
            typeof ScrollTrigger === "undefined"
        ) {
            return;
        }

        gsap.registerPlugin(
            ScrollTrigger
        );


        const mainImage =
            section.querySelector(
                ".expo-image-main"
            );

        const smallImage =
            section.querySelector(
                ".expo-image-small"
            );

        const badge =
            section.querySelector(
                ".expo-contact-badge"
            );

        const pattern =
            section.querySelector(
                ".expo-dot-pattern"
            );

        const reveals =
            section.querySelectorAll(
                ".about-reveal"
            );

        const features =
            section.querySelectorAll(
                ".about-feature"
            );

        const trustCard =
            section.querySelector(
                ".expo-trust-card"
            );

        const bottom =
            section.querySelector(
                ".expo-about-bottom"
            );


        gsap.set(
            mainImage,
            {
                opacity: 0,
                x: -80,
                scale: 0.92
            }
        );


        gsap.set(
            smallImage,
            {
                opacity: 0,
                x: 80,
                y: 50,
                scale: 0.92
            }
        );


        gsap.set(
            badge,
            {
                opacity: 0,
                scale: 0.5,
                rotation: -30
            }
        );


        gsap.set(
            pattern,
            {
                opacity: 0,
                y: 30
            }
        );


        gsap.set(
            reveals,
            {
                opacity: 0,
                y: 35
            }
        );


        gsap.set(
            features,
            {
                opacity: 0,
                y: 25
            }
        );


        gsap.set(
            trustCard,
            {
                opacity: 0,
                y: 35,
                scale: 0.97
            }
        );


        gsap.set(
            bottom,
            {
                opacity: 0,
                y: 25
            }
        );


        const timeline =
            gsap.timeline({

                scrollTrigger: {

                    trigger: section,

                    start: "top 72%",

                    toggleActions:
                        "play none none reverse"

                }

            });


        timeline.to(
            mainImage,
            {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 1,
                ease: "power4.out"
            }
        );


        timeline.to(
            smallImage,
            {
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                duration: 0.9,
                ease: "power4.out"
            },
            "-=0.55"
        );


        timeline.to(
            badge,
            {
                opacity: 1,
                scale: 1,
                rotation: 0,
                duration: 0.8,
                ease: "back.out(1.7)"
            },
            "-=0.55"
        );


        timeline.to(
            pattern,
            {
                opacity: 0.55,
                y: 0,
                duration: 0.6,
                ease: "power3.out"
            },
            "-=0.5"
        );


        timeline.to(
            reveals,
            {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.1,
                ease: "power3.out"
            },
            "-=0.65"
        );


        timeline.to(
            features,
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.12,
                ease: "power3.out"
            },
            "-=0.45"
        );


        timeline.to(
            trustCard,
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.75,
                ease: "power3.out"
            },
            "-=0.35"
        );


        timeline.to(
            bottom,
            {
                opacity: 1,
                y: 0,
                duration: 0.65,
                ease: "power3.out"
            },
            "-=0.4"
        );


        gsap.to(
            badge,
            {
                rotation: 360,
                duration: 20,
                repeat: -1,
                ease: "none"
            }
        );


        gsap.to(
            pattern,
            {
                y: -8,
                duration: 2.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        );


        gsap.to(
            ".expo-visual-line",
            {
                scaleX: 1.25,
                transformOrigin: "left center",
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        );


        section
            .querySelectorAll(".attendee")
            .forEach(function (item, index) {

                gsap.to(
                    item,
                    {
                        y: index % 2 === 0
                            ? -4
                            : 4,

                        duration:
                            1.8 +
                            index * 0.15,

                        repeat: -1,

                        yoyo: true,

                        ease: "sine.inOut"
                    }
                );

            });


        ScrollTrigger.refresh();

    }


    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initExpoAbout
        );

    } else {

        initExpoAbout();

    }

})();
(function () {

    "use strict";


    function initEventsSection() {

        const section =
            document.querySelector(
                ".events-section"
            );


        if (!section) {
            return;
        }


        if (
            typeof gsap === "undefined" ||
            typeof ScrollTrigger === "undefined"
        ) {
            return;
        }


        gsap.registerPlugin(
            ScrollTrigger
        );


        const headingItems =
            section.querySelectorAll(
                ".events-reveal"
            );


        const cards =
            section.querySelectorAll(
                ".events-card-reveal"
            );


        const eventImages =
            section.querySelectorAll(
                ".event-image img"
            );


        gsap.set(
            headingItems,
            {
                opacity: 0,
                y: 35
            }
        );


        gsap.set(
            cards,
            {
                opacity: 0,
                y: 60,
                scale: 0.96
            }
        );


        const timeline =
            gsap.timeline({

                scrollTrigger: {

                    trigger: section,

                    start: "top 72%",

                    toggleActions:
                        "play none none reverse"

                }

            });


        timeline.to(
            headingItems,
            {
                opacity: 1,
                y: 0,

                duration: 0.75,

                stagger: 0.12,

                ease: "power3.out"
            }
        );


        timeline.to(
            cards,
            {
                opacity: 1,
                y: 0,
                scale: 1,

                duration: 0.8,

                stagger: 0.15,

                ease: "power4.out"
            },
            "-=0.4"
        );


        eventImages.forEach(
            function (image) {

                image.addEventListener(
                    "mouseenter",
                    function () {

                        gsap.to(
                            image,
                            {
                                scale: 1.07,
                                duration: 0.7,
                                ease: "power3.out"
                            }
                        );

                    }
                );


                image.addEventListener(
                    "mouseleave",
                    function () {

                        gsap.to(
                            image,
                            {
                                scale: 1,
                                duration: 0.7,
                                ease: "power3.out"
                            }
                        );

                    }
                );

            }
        );


        ScrollTrigger.refresh();

    }


    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initEventsSection
        );

    } else {

        initEventsSection();

    }

})();
(function () {

    "use strict";


    function initServicesSection() {

        const section =
            document.querySelector(
                ".services-section"
            );


        if (!section) {
            return;
        }


        if (
            typeof gsap === "undefined" ||
            typeof ScrollTrigger === "undefined"
        ) {
            return;
        }


        gsap.registerPlugin(
            ScrollTrigger
        );


        const headerElements =
            section.querySelectorAll(
                ".services-reveal"
            );


        const cards =
            section.querySelectorAll(
                ".service-reveal"
            );


        const headerImage =
            section.querySelector(
                ".services-header-image"
            );


        const glowOne =
            section.querySelector(
                ".services-glow-one"
            );


        const glowTwo =
            section.querySelector(
                ".services-glow-two"
            );


        gsap.set(
            headerElements,
            {
                opacity: 0,
                y: 35
            }
        );


        gsap.set(
            cards,
            {
                opacity: 0,
                y: 70,
                scale: 0.94
            }
        );


        const timeline =
            gsap.timeline({

                scrollTrigger: {

                    trigger: section,

                    start: "top 72%",

                    toggleActions:
                        "play none none reverse"

                }

            });


        timeline.to(
            headerElements,
            {
                opacity: 1,
                y: 0,

                duration: 0.8,

                stagger: 0.12,

                ease: "power4.out"
            }
        );


        timeline.to(
            cards,
            {
                opacity: 1,
                y: 0,
                scale: 1,

                duration: 0.8,

                stagger: 0.13,

                ease: "power4.out"
            },
            "-=0.45"
        );


        if (headerImage) {

            gsap.to(
                headerImage,
                {
                    y: -8,

                    duration: 2.5,

                    repeat: -1,

                    yoyo: true,

                    ease: "sine.inOut"
                }
            );

        }


        if (glowOne) {

            gsap.to(
                glowOne,
                {
                    x: 80,
                    y: 30,

                    duration: 6,

                    repeat: -1,

                    yoyo: true,

                    ease: "sine.inOut"
                }
            );

        }


        if (glowTwo) {

            gsap.to(
                glowTwo,
                {
                    x: -60,
                    y: -40,

                    duration: 7,

                    repeat: -1,

                    yoyo: true,

                    ease: "sine.inOut"
                }
            );

        }


        cards.forEach(
            function (card) {

                const image =
                    card.querySelector(
                        ".service-image img"
                    );


                const icon =
                    card.querySelector(
                        ".service-icon"
                    );


                card.addEventListener(
                    "mouseenter",
                    function () {

                        if (image) {

                            gsap.to(
                                image,
                                {
                                    scale: 1.08,

                                    duration: 0.7,

                                    ease:
                                        "power3.out"
                                }
                            );

                        }


                        if (icon) {

                            gsap.to(
                                icon,
                                {
                                    rotation: -5,
                                    scale: 1.05,

                                    duration: 0.35,

                                    ease:
                                        "power2.out"
                                }
                            );

                        }

                    }
                );


                card.addEventListener(
                    "mouseleave",
                    function () {

                        if (image) {

                            gsap.to(
                                image,
                                {
                                    scale: 1,

                                    duration: 0.7,

                                    ease:
                                        "power3.out"
                                }
                            );

                        }


                        if (icon) {

                            gsap.to(
                                icon,
                                {
                                    rotation: 0,
                                    scale: 1,

                                    duration: 0.35,

                                    ease:
                                        "power2.out"
                                }
                            );

                        }

                    }
                );

            }
        );


        ScrollTrigger.refresh();

    }


    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initServicesSection
        );

    } else {

        initServicesSection();

    }

})();
(function () {

    "use strict";

    function initSpeakersSection() {

        const section =
            document.querySelector(
                ".speakers-section"
            );

        if (!section) {
            return;
        }

        if (
            typeof gsap === "undefined" ||
            typeof ScrollTrigger === "undefined"
        ) {
            return;
        }

        gsap.registerPlugin(
            ScrollTrigger
        );

        const headingItems =
            section.querySelectorAll(
                ".speaker-reveal"
            );

        const cards =
            section.querySelectorAll(
                ".speaker-card-reveal"
            );

        const images =
            section.querySelectorAll(
                ".speaker-image img"
            );

        const glowOne =
            section.querySelector(
                ".speakers-glow-one"
            );

        const glowTwo =
            section.querySelector(
                ".speakers-glow-two"
            );

        gsap.set(
            headingItems,
            {
                opacity: 0,
                y: 35
            }
        );

        gsap.set(
            cards,
            {
                opacity: 0,
                y: 65,
                scale: 0.94
            }
        );

        const timeline =
            gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top 72%",
                    toggleActions:
                        "play none none reverse"
                }
            });

        timeline.to(
            headingItems,
            {
                opacity: 1,
                y: 0,
                duration: 0.75,
                stagger: 0.12,
                ease: "power4.out"
            }
        );

        timeline.to(
            cards,
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.75,
                stagger: 0.13,
                ease: "power4.out"
            },
            "-=0.4"
        );

        cards.forEach(
            function (card) {

                const image =
                    card.querySelector(
                        ".speaker-image img"
                    );

                const action =
                    card.querySelector(
                        ".speaker-action"
                    );

                card.addEventListener(
                    "mouseenter",
                    function () {

                        if (image) {

                            gsap.to(
                                image,
                                {
                                    scale: 1.07,
                                    duration: 0.7,
                                    ease:
                                        "power3.out"
                                }
                            );

                        }

                        if (action) {

                            gsap.to(
                                action,
                                {
                                    rotation: 8,
                                    duration: 0.35,
                                    ease:
                                        "power2.out"
                                }
                            );

                        }

                    }
                );

                card.addEventListener(
                    "mouseleave",
                    function () {

                        if (image) {

                            gsap.to(
                                image,
                                {
                                    scale: 1,
                                    duration: 0.7,
                                    ease:
                                        "power3.out"
                                }
                            );

                        }

                        if (action) {

                            gsap.to(
                                action,
                                {
                                    rotation: 0,
                                    duration: 0.35,
                                    ease:
                                        "power2.out"
                                }
                            );

                        }

                    }
                );

            }
        );

        if (glowOne) {

            gsap.to(
                glowOne,
                {
                    x: 70,
                    y: 40,
                    duration: 6,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                }
            );

        }

        if (glowTwo) {

            gsap.to(
                glowTwo,
                {
                    x: -60,
                    y: -30,
                    duration: 7,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                }
            );

        }

        images.forEach(
            function (image) {

                gsap.set(
                    image,
                    {
                        scale: 1
                    }
                );

            }
        );

        ScrollTrigger.refresh();

    }

    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initSpeakersSection
        );

    } else {

        initSpeakersSection();

    }

})();
(function () {

    "use strict";

    function initRealTestimonials() {

        const section =
            document.querySelector(
                ".real-testimonial-section"
            );

        if (!section) {
            return;
        }

        if (
            typeof gsap === "undefined" ||
            typeof ScrollTrigger === "undefined"
        ) {
            return;
        }

        gsap.registerPlugin(
            ScrollTrigger
        );

        const data = [

            {
                image:
                    "Assest/people1.webp",

                name:
                    "Michael Anderson",

                role:
                    "CEO, Horizon Technologies",

                event:
                    "Future Leaders",

                location:
                    "Chennai, India",

                text:
                    "The entire experience was incredibly well organized. Every detail, from registration to networking, felt carefully planned and effortless."
            },

            {
                image:
                    "Assest/student2.webp",

                name:
                    "Sarah Mitchell",

                role:
                    "Marketing Director",

                event:
                    "Innovation Expo",

                location:
                    "Bengaluru, India",

                text:
                    "One of the best expos I have attended. The speakers were inspiring and the networking opportunities were exceptional."
            },

            {
                image:
                    "Assest/student3.webp",

                name:
                    "David Wilson",

                role:
                    "Founder, NextGen Labs",

                event:
                    "Global Summit",

                location:
                    "Mumbai, India",

                text:
                    "The event created genuine connections and gave our team fresh ideas that we could immediately bring back to our business."
            }

        ];


        let current =
            0;

        let timer;


        const mainImage =
            section.querySelector(
                "#testimonialMainImage"
            );

        const avatar =
            section.querySelector(
                "#testimonialAvatar"
            );

        const text =
            section.querySelector(
                "#testimonialText"
            );

        const name =
            section.querySelector(
                "#testimonialName"
            );

        const role =
            section.querySelector(
                "#testimonialRole"
            );

        const event =
            section.querySelector(
                "#testimonialEvent"
            );

        const location =
            section.querySelector(
                "#testimonialLocation"
            );

        const currentNumber =
            section.querySelector(
                "#testimonialCurrent"
            );

        const progress =
            section.querySelector(
                "#testimonialProgress"
            );

        const next =
            section.querySelector(
                "#testimonialNext"
            );

        const previous =
            section.querySelector(
                "#testimonialPrev"
            );

        const thumbs =
            section.querySelectorAll(
                ".real-thumb"
            );

        const mainContent =
            section.querySelector(
                ".real-testimonial-content"
            );


        function animateOut() {

            const elements = [
                mainImage,
                mainContent
            ];

            return gsap.to(
                elements,
                {
                    opacity: 0,
                    y: 15,
                    duration: 0.22,
                    ease: "power2.in"
                }
            );

        }


        function animateIn() {

            const elements = [
                mainImage,
                mainContent
            ];

            gsap.fromTo(
                elements,
                {
                    opacity: 0,
                    y: -15
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.55,
                    stagger: 0.05,
                    ease: "power3.out"
                }
            );

        }


        function updateTestimonial(
            index
        ) {

            current =
                (index + data.length) %
                data.length;

            const item =
                data[current];


            animateOut().then(
                function () {

                    mainImage.src =
                        item.image;

                    avatar.src =
                        item.image;

                    text.textContent =
                        item.text;

                    name.textContent =
                        item.name;

                    role.textContent =
                        item.role;

                    event.textContent =
                        item.event;

                    location.textContent =
                        item.location;

                    currentNumber.textContent =
                        String(
                            current + 1
                        ).padStart(
                            2,
                            "0"
                        );


                    thumbs.forEach(
                        function (
                            thumb,
                            thumbIndex
                        ) {

                            thumb.classList.toggle(
                                "active",
                                thumbIndex === current
                            );

                        }
                    );


                    gsap.to(
                        progress,
                        {
                            width:
                                (
                                    (
                                        current + 1
                                    ) /
                                    data.length *
                                    100
                                ) + "%",

                            duration:
                                0.5,

                            ease:
                                "power2.out"
                        }
                    );


                    animateIn();

                }
            );

        }


        function startAutoPlay() {

            clearInterval(
                timer
            );

            timer =
                setInterval(
                    function () {

                        updateTestimonial(
                            current + 1
                        );

                    },
                    5000
                );

        }


        next.addEventListener(
            "click",
            function () {

                updateTestimonial(
                    current + 1
                );

                startAutoPlay();

            }
        );


        previous.addEventListener(
            "click",
            function () {

                updateTestimonial(
                    current - 1
                );

                startAutoPlay();

            }
        );


        thumbs.forEach(
            function (
                thumb,
                index
            ) {

                thumb.addEventListener(
                    "click",
                    function () {

                        if (
                            index ===
                            current
                        ) {
                            return;
                        }

                        updateTestimonial(
                            index
                        );

                        startAutoPlay();

                    }
                );

            }
        );


        section.addEventListener(
            "mouseenter",
            function () {

                clearInterval(
                    timer
                );

            }
        );


        section.addEventListener(
            "mouseleave",
            function () {

                startAutoPlay();

            }
        );


        let touchStartX =
            0;

        let touchEndX =
            0;


        mainContent.addEventListener(
            "touchstart",
            function (event) {

                touchStartX =
                    event.changedTouches[0]
                        .screenX;

            },
            {
                passive: true
            }
        );


        mainContent.addEventListener(
            "touchend",
            function (event) {

                touchEndX =
                    event.changedTouches[0]
                        .screenX;

                const distance =
                    touchStartX -
                    touchEndX;


                if (
                    Math.abs(distance) <
                    50
                ) {
                    return;
                }


                if (distance > 0) {

                    updateTestimonial(
                        current + 1
                    );

                } else {

                    updateTestimonial(
                        current - 1
                    );

                }

                startAutoPlay();

            },
            {
                passive: true
            }
        );


        const revealElements =
            section.querySelectorAll(
                ".real-testimonial-label, .real-testimonial-heading h2, .real-testimonial-heading p, .real-testimonial-main, .real-testimonial-thumbs, .real-testimonial-stats"
            );


        gsap.set(
            revealElements,
            {
                opacity: 0,
                y: 35
            }
        );


        const revealTimeline =
            gsap.timeline({

                scrollTrigger: {

                    trigger:
                        section,

                    start:
                        "top 75%",

                    toggleActions:
                        "play none none reverse"

                }

            });


        revealTimeline.to(
            revealElements,
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power4.out"
            }
        );


        gsap.to(
            ".real-testimonial-glow",
            {
                x: 80,
                y: 40,
                duration: 7,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        );


        startAutoPlay();

        ScrollTrigger.refresh();

    }


    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initRealTestimonials
        );

    } else {

        initRealTestimonials();

    }

})();

(function () {

    "use strict";

    function initWhyAttend() {

        const section =
            document.querySelector(
                ".why-attend-section"
            );

        if (!section) {
            return;
        }

        if (
            typeof gsap === "undefined" ||
            typeof ScrollTrigger === "undefined"
        ) {
            return;
        }

        gsap.registerPlugin(
            ScrollTrigger
        );

        const revealElements =
            section.querySelectorAll(
                ".why-reveal"
            );

        const features =
            section.querySelectorAll(
                ".why-feature"
            );

        const counters =
            section.querySelectorAll(
                ".why-counter"
            );

        const orbOne =
            section.querySelector(
                ".why-attend-orb-one"
            );

        const orbTwo =
            section.querySelector(
                ".why-attend-orb-two"
            );

        gsap.set(
            revealElements,
            {
                opacity: 0,
                y: 45
            }
        );

        const timeline =
            gsap.timeline({

                scrollTrigger: {

                    trigger:
                        section,

                    start:
                        "top 72%",

                    toggleActions:
                        "play none none reverse"

                }

            });

        timeline.to(
            revealElements,
            {
                opacity: 1,
                y: 0,
                duration: 0.75,
                stagger: 0.1,
                ease: "power4.out"
            }
        );

        features.forEach(
            function (feature) {

                const icon =
                    feature.querySelector(
                        ".why-feature-icon"
                    );

                feature.addEventListener(
                    "mouseenter",
                    function () {

                        if (icon) {

                            gsap.to(
                                icon,
                                {
                                    rotation: -5,
                                    scale: 1.08,
                                    duration: 0.3,
                                    ease: "power2.out"
                                }
                            );

                        }

                    }
                );

                feature.addEventListener(
                    "mouseleave",
                    function () {

                        if (icon) {

                            gsap.to(
                                icon,
                                {
                                    rotation: 0,
                                    scale: 1,
                                    duration: 0.3,
                                    ease: "power2.out"
                                }
                            );

                        }

                    }
                );

            }
        );


        if (orbOne) {

            gsap.to(
                orbOne,
                {
                    x: 70,
                    y: 40,
                    duration: 6,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                }
            );

        }


        if (orbTwo) {

            gsap.to(
                orbTwo,
                {
                    x: 60,
                    y: -30,
                    duration: 7,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                }
            );

        }


        counters.forEach(
            function (counter) {

                const target =
                    Number(
                        counter.dataset.target
                    );

                const counterObject = {
                    value: 0
                };

                gsap.to(
                    counterObject,
                    {
                        value: target,
                        duration: 2.2,
                        ease: "power2.out",

                        scrollTrigger: {

                            trigger:
                                counter,

                            start:
                                "top 85%",

                            once: true

                        },

                        onUpdate:
                            function () {

                                const value =
                                    Math.floor(
                                        counterObject.value
                                    );

                                if (
                                    target >= 1000
                                ) {

                                    counter.textContent =
                                        value.toLocaleString() +
                                        "+";

                                } else {

                                    counter.textContent =
                                        value +
                                        "+";

                                }

                            }
                    }
                );

            }
        );


        ScrollTrigger.refresh();

    }


    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initWhyAttend
        );

    } else {

        initWhyAttend();

    }

})();


(function () {

    "use strict";

    function initExpoFooter() {

        const footer =
            document.querySelector(
                ".expo-footer"
            );

        if (!footer) {
            return;
        }

        if (
            typeof gsap === "undefined" ||
            typeof ScrollTrigger === "undefined"
        ) {
            return;
        }

        gsap.registerPlugin(
            ScrollTrigger
        );


        const revealElements =
            footer.querySelectorAll(
                ".footer-reveal"
            );


        const socialLinks =
            footer.querySelectorAll(
                ".expo-footer-social a"
            );


        const footerLinks =
            footer.querySelectorAll(
                ".expo-footer-column li a"
            );


        const glowOne =
            footer.querySelector(
                ".expo-footer-glow-one"
            );


        const glowTwo =
            footer.querySelector(
                ".expo-footer-glow-two"
            );


        gsap.set(
            revealElements,
            {
                opacity: 0,
                y: 35
            }
        );


        const revealTimeline =
            gsap.timeline({

                scrollTrigger: {

                    trigger:
                        footer,

                    start:
                        "top 80%",

                    toggleActions:
                        "play none none reverse"

                }

            });


        revealTimeline.to(
            revealElements,
            {
                opacity: 1,
                y: 0,
                duration: 0.75,
                stagger: 0.09,
                ease: "power4.out"
            }
        );


        if (glowOne) {

            gsap.to(
                glowOne,
                {
                    x: 100,
                    y: 50,
                    duration: 7,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                }
            );

        }


        if (glowTwo) {

            gsap.to(
                glowTwo,
                {
                    x: -80,
                    y: -40,
                    duration: 8,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                }
            );

        }


        socialLinks.forEach(
            function (link) {

                link.addEventListener(
                    "mouseenter",
                    function () {

                        gsap.to(
                            link,
                            {
                                y: -5,
                                rotation: 5,
                                scale: 1.08,
                                duration: 0.3,
                                ease: "power2.out"
                            }
                        );

                    }
                );


                link.addEventListener(
                    "mouseleave",
                    function () {

                        gsap.to(
                            link,
                            {
                                y: 0,
                                rotation: 0,
                                scale: 1,
                                duration: 0.3,
                                ease: "power2.out"
                            }
                        );

                    }
                );

            }
        );


        footerLinks.forEach(
            function (link) {

                const icon =
                    link.querySelector(
                        "i"
                    );


                link.addEventListener(
                    "mouseenter",
                    function () {

                        if (icon) {

                            gsap.to(
                                icon,
                                {
                                    x: 3,
                                    y: -3,
                                    duration: 0.25,
                                    ease: "power2.out"
                                }
                            );

                        }

                    }
                );


                link.addEventListener(
                    "mouseleave",
                    function () {

                        if (icon) {

                            gsap.to(
                                icon,
                                {
                                    x: 0,
                                    y: 0,
                                    duration: 0.25,
                                    ease: "power2.out"
                                }
                            );

                        }

                    }
                );

            }
        );


        const backTop =
            footer.querySelector(
                ".expo-back-top"
            );


        if (backTop) {

            backTop.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    window.scrollTo(
                        {
                            top: 0,
                            behavior: "smooth"
                        }
                    );

                }
            );

        }


        ScrollTrigger.refresh();

    }


    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initExpoFooter
        );

    } else {

        initExpoFooter();

    }

})();