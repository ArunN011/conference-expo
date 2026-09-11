(function () {

    "use strict";

    function initAboutHero() {

        const hero =
            document.querySelector(
                ".about-hero"
            );

        if (!hero) {
            return;
        }

        if (
            typeof gsap === "undefined"
        ) {
            return;
        }


        const background =
            hero.querySelector(
                ".about-hero-bg"
            );

        const grid =
            hero.querySelector(
                ".about-hero-grid"
            );

        const revealElements =
            hero.querySelectorAll(
                ".about-hero-reveal"
            );

        const scrollLine =
            hero.querySelector(
                ".about-scroll-line span"
            );


        gsap.set(
            revealElements,
            {
                opacity: 0,
                y: 35
            }
        );


        const timeline =
            gsap.timeline();


        timeline.to(
            revealElements,
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.12,
                ease: "power4.out"
            }
        );


        if (background) {

            gsap.fromTo(
                background,
                {
                    scale: 1.12
                },
                {
                    scale: 1.05,
                    duration: 2,
                    ease: "power3.out"
                }
            );


            gsap.to(
                background,
                {
                    yPercent: 8,
                    ease: "none",

                    scrollTrigger: {

                        trigger:
                            hero,

                        start:
                            "top top",

                        end:
                            "bottom top",

                        scrub: true

                    }
                }
            );

        }


        if (grid) {

            gsap.to(
                grid,
                {
                    backgroundPosition:
                        "80px 80px",
                    duration: 8,
                    repeat: -1,
                    ease: "none"
                }
            );

        }


        if (scrollLine) {

            gsap.to(
                scrollLine,
                {
                    xPercent: 200,
                    duration: 1.6,
                    repeat: -1,
                    ease: "power2.inOut"
                }
            );

        }


        const badge =
            hero.querySelector(
                ".about-hero-badge"
            );


        if (badge) {

            gsap.to(
                badge,
                {
                    y: -5,
                    duration: 2,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                }
            );

        }

    }


    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initAboutHero
        );

    } else {

        initAboutHero();

    }

})();
(function () {

    "use strict";

    function initAboutImpact() {

        const section =
            document.querySelector(
                ".about-impact-section"
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
                ".impact-reveal"
            );


        const cards =
            section.querySelectorAll(
                ".about-impact-card"
            );


        const counters =
            section.querySelectorAll(
                ".impact-counter"
            );


        const glowOne =
            section.querySelector(
                ".about-impact-glow-one"
            );


        const glowTwo =
            section.querySelector(
                ".about-impact-glow-two"
            );


        gsap.set(
            revealElements,
            {
                opacity: 0,
                y: 45
            }
        );


        gsap.to(
            revealElements,
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power4.out",

                scrollTrigger: {

                    trigger:
                        section,

                    start:
                        "top 72%",

                    toggleActions:
                        "play none none reverse"

                }

            }
        );


        cards.forEach(
            function (card) {

                const icon =
                    card.querySelector(
                        ".about-impact-icon"
                    );


                card.addEventListener(
                    "mouseenter",
                    function () {

                        gsap.to(
                            icon,
                            {
                                scale: 1.1,
                                rotation: -6,
                                duration: 0.3,
                                ease: "power2.out"
                            }
                        );

                    }
                );


                card.addEventListener(
                    "mouseleave",
                    function () {

                        gsap.to(
                            icon,
                            {
                                scale: 1,
                                rotation: 0,
                                duration: 0.3,
                                ease: "power2.out"
                            }
                        );

                    }
                );

            }
        );


        counters.forEach(
            function (counter) {

                const target =
                    Number(
                        counter.dataset.target
                    );

                const object = {
                    value: 0
                };


                gsap.to(
                    object,
                    {
                        value: target,
                        duration: 2,
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
                                        object.value
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


        if (glowOne) {

            gsap.to(
                glowOne,
                {
                    x: 90,
                    y: 45,
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
                    x: -70,
                    y: -40,
                    duration: 8,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
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
            initAboutImpact
        );

    } else {

        initAboutImpact();

    }

})();


document.addEventListener("DOMContentLoaded", function () {

    if (
        typeof gsap === "undefined" ||
        typeof ScrollTrigger === "undefined"
    ) {
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const section =
        document.querySelector(
            ".expo-experience-section"
        );

    if (!section) {
        return;
    }


    const headerElements =
        section.querySelectorAll(
            ".expo-experience-label, .expo-experience-header h2, .expo-experience-header p"
        );

    const cards =
        section.querySelectorAll(
            ".expo-experience-card"
        );

    const footer =
        section.querySelector(
            ".expo-experience-footer"
        );

    const orbOne =
        section.querySelector(
            ".expo-orb-one"
        );

    const orbTwo =
        section.querySelector(
            ".expo-orb-two"
        );


    gsap.set(
        headerElements,
        {
            opacity: 0,
            y: 45
        }
    );


    gsap.to(
        headerElements,
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power4.out",

            scrollTrigger: {
                trigger: section,
                start: "top 75%",
                toggleActions:
                    "play none none reverse"
            }
        }
    );


    gsap.set(
        cards,
        {
            opacity: 0,
            y: 65,
            scale: 0.96
        }
    );


    gsap.to(
        cards,
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.13,
            ease: "power4.out",

            scrollTrigger: {
                trigger: ".expo-experience-grid",
                start: "top 78%",
                toggleActions:
                    "play none none reverse"
            }
        }
    );


    if (footer) {

        gsap.set(
            footer,
            {
                opacity: 0,
                y: 45
            }
        );


        gsap.to(
            footer,
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: footer,
                    start: "top 88%",
                    toggleActions:
                        "play none none reverse"
                }
            }
        );

    }


    cards.forEach(function (card) {

        const icon =
            card.querySelector(
                ".expo-card-icon"
            );

        const number =
            card.querySelector(
                ".expo-card-number"
            );

        const link =
            card.querySelector(
                ".expo-card-link"
            );


        card.addEventListener(
            "mouseenter",
            function () {

                gsap.to(
                    icon,
                    {
                        rotation: 8,
                        scale: 1.08,
                        duration: 0.3,
                        ease: "power2.out"
                    }
                );


                gsap.to(
                    number,
                    {
                        opacity: 0.5,
                        scale: 1.08,
                        duration: 0.3,
                        ease: "power2.out"
                    }
                );


                if (link) {

                    gsap.to(
                        link,
                        {
                            x: 4,
                            duration: 0.3,
                            ease: "power2.out"
                        }
                    );

                }

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                gsap.to(
                    icon,
                    {
                        rotation: 0,
                        scale: 1,
                        duration: 0.3,
                        ease: "power2.out"
                    }
                );


                gsap.to(
                    number,
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.3,
                        ease: "power2.out"
                    }
                );


                if (link) {

                    gsap.to(
                        link,
                        {
                            x: 0,
                            duration: 0.3,
                            ease: "power2.out"
                        }
                    );

                }

            }
        );

    });


    if (orbOne) {

        gsap.to(
            orbOne,
            {
                x: 100,
                y: 70,
                duration: 8,
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
                x: -100,
                y: -70,
                duration: 9,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        );

    }


    ScrollTrigger.refresh();

});
document.addEventListener("DOMContentLoaded", function () {

    if (
        typeof gsap === "undefined" ||
        typeof ScrollTrigger === "undefined"
    ) {
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const section =
        document.querySelector(".speaker-section");

    if (!section) {
        return;
    }

    const heading =
        section.querySelectorAll(
            ".speaker-label, .speaker-heading h2, .speaker-heading p"
        );

    const cards =
        section.querySelectorAll(
            ".speaker-card"
        );

    const bottom =
        section.querySelector(
            ".speaker-bottom"
        );


    gsap.set(
        heading,
        {
            opacity: 0,
            y: 40
        }
    );


    gsap.to(
        heading,
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power4.out",

            scrollTrigger: {
                trigger: section,
                start: "top 75%",
                toggleActions:
                    "play none none reverse"
            }
        }
    );


    gsap.set(
        cards,
        {
            opacity: 0,
            y: 55,
            scale: 0.97
        }
    );


    gsap.to(
        cards,
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            stagger: 0.12,
            ease: "power4.out",

            scrollTrigger: {
                trigger: ".speaker-grid",
                start: "top 80%",
                toggleActions:
                    "play none none reverse"
            }
        }
    );


    if (bottom) {

        gsap.from(
            bottom,
            {
                opacity: 0,
                y: 35,
                duration: 0.7,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: bottom,
                    start: "top 90%",
                    toggleActions:
                        "play none none reverse"
                }
            }
        );

    }


    cards.forEach(function (card) {

        const image =
            card.querySelector(
                ".speaker-image"
            );

        const share =
            card.querySelector(
                ".speaker-share"
            );

        const socials =
            card.querySelectorAll(
                ".speaker-social"
            );


        card.addEventListener(
            "mouseenter",
            function () {

                gsap.to(
                    image,
                    {
                        scale: 1.06,
                        duration: 0.8,
                        ease: "power3.out"
                    }
                );

                if (share) {

                    gsap.to(
                        share,
                        {
                            rotation: 10,
                            scale: 1.08,
                            duration: 0.3,
                            ease: "power2.out"
                        }
                    );

                }

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                gsap.to(
                    image,
                    {
                        scale: 1,
                        duration: 0.8,
                        ease: "power3.out"
                    }
                );

                if (share) {

                    gsap.to(
                        share,
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


        socials.forEach(
            function (social, index) {

                social.addEventListener(
                    "mouseenter",
                    function () {

                        gsap.to(
                            social,
                            {
                                scale: 1.12,
                                x: -4,
                                duration: 0.2,
                                ease: "power2.out"
                            }
                        );

                    }
                );


                social.addEventListener(
                    "mouseleave",
                    function () {

                        gsap.to(
                            social,
                            {
                                scale: 1,
                                x: 0,
                                duration: 0.2,
                                ease: "power2.out"
                            }
                        );

                    }
                );

            }
        );

    });


    ScrollTrigger.refresh();

});
document.addEventListener("DOMContentLoaded", function () {

    if (
        typeof gsap === "undefined" ||
        typeof ScrollTrigger === "undefined"
    ) {
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const section =
        document.querySelector(
            ".event-stats-section"
        );

    if (!section) {
        return;
    }

    const header =
        section.querySelectorAll(
            ".event-stats-label, .event-stats-header h2, .event-stats-header p"
        );

    const cards =
        section.querySelectorAll(
            ".event-stat-card"
        );

    const cta =
        section.querySelector(
            ".event-highlight-cta"
        );

    const counters =
        section.querySelectorAll(
            ".counter"
        );


    gsap.set(
        header,
        {
            opacity: 0,
            y: 40
        }
    );


    gsap.to(
        header,
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power4.out",

            scrollTrigger: {
                trigger: section,
                start: "top 75%",
                toggleActions:
                    "play none none reverse"
            }
        }
    );


    gsap.set(
        cards,
        {
            opacity: 0,
            y: 55,
            scale: 0.96
        }
    );


    gsap.to(
        cards,
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "power4.out",

            scrollTrigger: {
                trigger: ".event-stats-grid",
                start: "top 80%",
                toggleActions:
                    "play none none reverse"
            }
        }
    );


    counters.forEach(function (counter) {

        const target =
            Number(
                counter.getAttribute(
                    "data-target"
                )
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
                    trigger: counter,
                    start: "top 88%",
                    once: true
                },

                onUpdate: function () {

                    counter.textContent =
                        Math.floor(
                            counterObject.value
                        ).toLocaleString();

                },

                onComplete: function () {

                    counter.textContent =
                        target.toLocaleString();

                }

            }
        );

    });


    if (cta) {

        gsap.from(
            cta,
            {
                opacity: 0,
                y: 45,
                duration: 0.8,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: cta,
                    start: "top 88%",
                    toggleActions:
                        "play none none reverse"
                }
            }
        );

    }


    cards.forEach(function (card) {

        const icon =
            card.querySelector(
                ".event-stat-icon"
            );

        card.addEventListener(
            "mouseenter",
            function () {

                gsap.to(
                    icon,
                    {
                        rotation: 8,
                        scale: 1.08,
                        duration: 0.3,
                        ease: "power2.out"
                    }
                );

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

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
        );

    });


    ScrollTrigger.refresh();

});
document.addEventListener("DOMContentLoaded", function () {

    if (
        typeof gsap === "undefined" ||
        typeof ScrollTrigger === "undefined"
    ) {
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const section =
        document.querySelector(
            ".conference-cta-section"
        );

    if (!section) {
        return;
    }


    const badge =
        section.querySelector(
            ".conference-cta-badge"
        );

    const heading =
        section.querySelector(
            ".conference-cta-main h2"
        );

    const description =
        section.querySelector(
            ".conference-cta-main > p"
        );

    const actions =
        section.querySelector(
            ".conference-cta-actions"
        );

    const newsletter =
        section.querySelector(
            ".conference-newsletter"
        );

    const bottom =
        section.querySelector(
            ".conference-cta-bottom"
        );

    const glowOne =
        section.querySelector(
            ".conference-cta-glow-one"
        );

    const glowTwo =
        section.querySelector(
            ".conference-cta-glow-two"
        );


    const intro =
        [
            badge,
            heading,
            description,
            actions
        ].filter(Boolean);


    gsap.set(
        intro,
        {
            opacity: 0,
            y: 45
        }
    );


    gsap.to(
        intro,
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power4.out",

            scrollTrigger: {
                trigger: section,
                start: "top 75%",
                toggleActions:
                    "play none none reverse"
            }
        }
    );


    if (newsletter) {

        gsap.from(
            newsletter,
            {
                opacity: 0,
                y: 50,
                scale: 0.97,
                duration: 0.9,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: newsletter,
                    start: "top 85%",
                    toggleActions:
                        "play none none reverse"
                }
            }
        );

    }


    if (bottom) {

        gsap.from(
            bottom,
            {
                opacity: 0,
                y: 35,
                duration: 0.8,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: bottom,
                    start: "top 90%",
                    toggleActions:
                        "play none none reverse"
                }
            }
        );

    }


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
                y: -60,
                duration: 8,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        );

    }


    const buttons =
        section.querySelectorAll(
            ".conference-cta-primary, .conference-cta-secondary, .conference-newsletter-button"
        );


    buttons.forEach(function (button) {

        button.addEventListener(
            "mouseenter",
            function () {

                gsap.to(
                    button,
                    {
                        scale: 1.03,
                        duration: 0.25,
                        ease: "power2.out"
                    }
                );

            }
        );


        button.addEventListener(
            "mouseleave",
            function () {

                gsap.to(
                    button,
                    {
                        scale: 1,
                        duration: 0.25,
                        ease: "power2.out"
                    }
                );

            }
        );

    });


    ScrollTrigger.refresh();

});




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