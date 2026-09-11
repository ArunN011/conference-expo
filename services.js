document.addEventListener("DOMContentLoaded", function () {

    if (
        typeof gsap === "undefined"
    ) {
        return;
    }

    const section =
        document.querySelector(
            ".services-breadcrumb"
        );

    if (!section) {
        return;
    }

    const label =
        section.querySelector(
            ".services-breadcrumb-label"
        );

    const title =
        section.querySelector(
            ".services-breadcrumb-content h1"
        );

    const breadcrumb =
        section.querySelector(
            ".services-breadcrumb-path"
        );

    const shapeOne =
        section.querySelector(
            ".shape-one"
        );

    const shapeTwo =
        section.querySelector(
            ".shape-two"
        );


    gsap.set(
        [
            label,
            title,
            breadcrumb
        ],
        {
            opacity: 0,
            y: 35
        }
    );


    gsap.to(
        label,
        {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out"
        }
    );


    gsap.to(
        title,
        {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay: 0.12,
            ease: "power4.out"
        }
    );


    gsap.to(
        breadcrumb,
        {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: 0.28,
            ease: "power3.out"
        }
    );


    if (shapeOne) {

        gsap.to(
            shapeOne,
            {
                rotation: 360,
                duration: 35,
                repeat: -1,
                ease: "none"
            }
        );

    }


    if (shapeTwo) {

        gsap.to(
            shapeTwo,
            {
                rotation: -360,
                duration: 28,
                repeat: -1,
                ease: "none"
            }
        );

    }

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
            ".services-overview-section"
        );

    if (!section) {
        return;
    }

    const heading =
        section.querySelectorAll(
            ".services-overview-label, .services-overview-heading h2, .services-overview-heading p"
        );

    const cards =
        section.querySelectorAll(
            ".service-feature-card, .service-standard-card"
        );

    const bottom =
        section.querySelector(
            ".services-overview-bottom"
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
            stagger: 0.1,
            ease: "power4.out",

            scrollTrigger: {
                trigger: ".services-overview-grid",
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


    cards.forEach(function (card) {

        const icon =
            card.querySelector(
                ".service-card-icon, .service-standard-icon"
            );

        const link =
            card.querySelector(
                ".service-card-link"
            );


        card.addEventListener(
            "mouseenter",
            function () {

                if (icon) {

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

                if (link) {

                    gsap.to(
                        link,
                        {
                            x: 4,
                            duration: 0.25,
                            ease: "power2.out"
                        }
                    );

                }

            }
        );


        card.addEventListener(
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

                if (link) {

                    gsap.to(
                        link,
                        {
                            x: 0,
                            duration: 0.25,
                            ease: "power2.out"
                        }
                    );

                }

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
            ".service-process-section"
        );

    if (!section) {
        return;
    }

    const heading =
        section.querySelectorAll(
            ".service-process-label, .service-process-heading h2, .service-process-heading p"
        );

    const items =
        section.querySelectorAll(
            ".service-process-item"
        );

    const bottom =
        section.querySelector(
            ".service-process-bottom"
        );

    const line =
        section.querySelector(
            ".service-process-line::after"
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
        items,
        {
            opacity: 0,
            y: 50
        }
    );


    gsap.to(
        items,
        {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.12,
            ease: "power4.out",

            scrollTrigger: {
                trigger: ".service-process-timeline",
                start: "top 78%",
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
                duration: 0.75,
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


    items.forEach(function (item) {

        const icon =
            item.querySelector(
                ".service-process-icon"
            );

        const marker =
            item.querySelector(
                ".service-process-marker span"
            );


        item.addEventListener(
            "mouseenter",
            function () {

                if (icon) {

                    gsap.to(
                        icon,
                        {
                            rotation: 7,
                            scale: 1.08,
                            duration: 0.3,
                            ease: "power2.out"
                        }
                    );

                }

                if (marker) {

                    gsap.to(
                        marker,
                        {
                            scale: 1.08,
                            duration: 0.3,
                            ease: "power2.out"
                        }
                    );

                }

            }
        );


        item.addEventListener(
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

                if (marker) {

                    gsap.to(
                        marker,
                        {
                            scale: 1,
                            duration: 0.3,
                            ease: "power2.out"
                        }
                    );

                }

            }
        );

    });


    ScrollTrigger.refresh();

});

document.addEventListener("DOMContentLoaded", function () {

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".whychoose-heading", {
        scrollTrigger: {
            trigger: ".whychoose-section",
            start: "top 80%"
        },
        y: 60,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from(".whychoose-intro", {
        scrollTrigger: {
            trigger: ".whychoose-section",
            start: "top 75%"
        },
        y: 40,
        opacity: 1,
        duration: 1,
        delay: 0.2,
        ease: "power3.out"
    });

    gsap.from(".whychoose-card", {
        scrollTrigger: {
            trigger: ".whychoose-grid",
            start: "top 82%"
        },
        y: 70,
        opacity: 1,
        scale: 0.96,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out"
    });

    gsap.from(".whychoose-bottom", {
        scrollTrigger: {
            trigger: ".whychoose-bottom",
            start: "top 90%"
        },
        y: 40,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
    });

    document.querySelectorAll(".whychoose-card").forEach(card => {

        const icon = card.querySelector(".whychoose-icon");

        card.addEventListener("mouseenter", () => {
            gsap.to(icon, {
                scale: 1.12,
                rotate: -8,
                duration: 0.35,
                ease: "power2.out"
            });
        });

        card.addEventListener("mouseleave", () => {
            gsap.to(icon, {
                scale: 1,
                rotate: 0,
                duration: 0.35,
                ease: "power2.out"
            });
        });

    });

});
document.addEventListener("DOMContentLoaded", function () {

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".event-network-title", {
        scrollTrigger: {
            trigger: ".event-network-section",
            start: "top 80%"
        },
        y: 60,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from(".event-network-description", {
        scrollTrigger: {
            trigger: ".event-network-section",
            start: "top 75%"
        },
        y: 40,
        opacity: 1,
        duration: 0.9,
        delay: 0.15,
        ease: "power3.out"
    });

    gsap.from(".event-network-trust", {
        scrollTrigger: {
            trigger: ".event-network-trust",
            start: "top 85%"
        },
        y: 35,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
    });

    gsap.from(".event-network-logo", {
        scrollTrigger: {
            trigger: ".event-network-logos",
            start: "top 82%"
        },
        y: 45,
        opacity: 1,
        scale: 0.95,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out"
    });

    gsap.from(".event-network-stat", {
        scrollTrigger: {
            trigger: ".event-network-stats",
            start: "top 85%"
        },
        y: 30,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out"
    });

    gsap.from(".event-network-bottom", {
        scrollTrigger: {
            trigger: ".event-network-bottom",
            start: "top 90%"
        },
        y: 50,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out"
    });

    document.querySelectorAll("[data-count]").forEach(counter => {

        const target = Number(counter.dataset.count);

        gsap.fromTo(counter,
            {
                innerText: 0
            },
            {
                innerText: target,
                duration: 2,
                ease: "power2.out",
                snap: {
                    innerText: 1
                },
                scrollTrigger: {
                    trigger: counter,
                    start: "top 90%",
                    once: true
                }
            }
        );

    });

    document.querySelectorAll(".event-network-logo").forEach(logo => {

        const mark = logo.querySelector(".event-network-logo-mark");

        logo.addEventListener("mouseenter", () => {
            gsap.to(mark, {
                scale: 1.1,
                rotate: -8,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        logo.addEventListener("mouseleave", () => {
            gsap.to(mark, {
                scale: 1,
                rotate: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });

    });

    ScrollTrigger.refresh();

});
document.addEventListener("DOMContentLoaded", function () {

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".event-pricing-heading", {
        scrollTrigger: {
            trigger: ".event-pricing-section",
            start: "top 80%"
        },
        y: 60,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from(".event-pricing-intro", {
        scrollTrigger: {
            trigger: ".event-pricing-section",
            start: "top 75%"
        },
        y: 40,
        opacity: 1,
        duration: 0.9,
        delay: 0.15,
        ease: "power3.out"
    });

    gsap.from(".event-pricing-card", {
        scrollTrigger: {
            trigger: ".event-pricing-cards",
            start: "top 82%"
        },
        y: 70,
        opacity: 1,
        scale: 0.96,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
    });

    gsap.from(".event-pricing-custom", {
        scrollTrigger: {
            trigger: ".event-pricing-custom",
            start: "top 88%"
        },
        y: 40,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
    });

    gsap.from(".event-pricing-addon", {
        scrollTrigger: {
            trigger: ".event-pricing-addon-list",
            start: "top 85%"
        },
        x: 35,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out"
    });

    gsap.from(".event-pricing-note", {
        scrollTrigger: {
            trigger: ".event-pricing-note",
            start: "top 90%"
        },
        opacity: 1,
        y: 25,
        duration: 0.7,
        ease: "power2.out"
    });

    document.querySelectorAll(".event-pricing-toggle").forEach(button => {

        button.addEventListener("click", function () {

            document.querySelectorAll(".event-pricing-toggle")
                .forEach(btn => btn.classList.remove("active"));

            this.classList.add("active");

            const plan = this.dataset.plan;

            document.querySelectorAll(".event-pricing-card").forEach(card => {

                const standard = card.querySelector(".event-price-standard");
                const premium = card.querySelector(".event-price-premium");

                if (plan === "premium") {
                    standard.style.display = "none";
                    premium.style.display = "inline";
                } else {
                    standard.style.display = "inline";
                    premium.style.display = "none";
                }

                gsap.fromTo(card,
                    {
                        y: 8,
                        opacity: 0.75
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.35,
                        ease: "power2.out"
                    }
                );

            });

        });

    });

    document.querySelectorAll(".event-pricing-card").forEach(card => {

        const icon = card.querySelector(".event-pricing-plan-icon");

        card.addEventListener("mouseenter", () => {

            gsap.to(icon, {
                scale: 1.1,
                rotate: -8,
                duration: 0.3,
                ease: "power2.out"
            });

        });

        card.addEventListener("mouseleave", () => {

            gsap.to(icon, {
                scale: 1,
                rotate: 0,
                duration: 0.3,
                ease: "power2.out"
            });

        });

    });

    ScrollTrigger.refresh();

});
document.addEventListener("DOMContentLoaded", function () {

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".conference-cta-content", {
        scrollTrigger: {
            trigger: ".conference-cta-main",
            start: "top 80%"
        },
        x: -70,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from(".conference-cta-side-card", {
        scrollTrigger: {
            trigger: ".conference-cta-side",
            start: "top 80%"
        },
        x: 60,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
    });

    gsap.from(".conference-cta-newsletter", {
        scrollTrigger: {
            trigger: ".conference-cta-newsletter",
            start: "top 85%"
        },
        y: 50,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out"
    });

    gsap.from(".conference-cta-bottom-item", {
        scrollTrigger: {
            trigger: ".conference-cta-bottom",
            start: "top 88%"
        },
        y: 30,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out"
    });

    gsap.to(".conference-cta-orbit-one", {
        rotation: 360,
        duration: 25,
        repeat: -1,
        ease: "none"
    });

    gsap.to(".conference-cta-orbit-two", {
        scale: 1.3,
        opacity: 0.5,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    document.querySelectorAll(".conference-cta-side-card").forEach(card => {

        card.addEventListener("mouseenter", function () {

            gsap.to(this.querySelector(".conference-cta-side-icon"), {
                scale: 1.1,
                rotate: -8,
                duration: 0.3,
                ease: "power2.out"
            });

        });

        card.addEventListener("mouseleave", function () {

            gsap.to(this.querySelector(".conference-cta-side-icon"), {
                scale: 1,
                rotate: 0,
                duration: 0.3,
                ease: "power2.out"
            });

        });

    });

    const newsletterForm = document.querySelector(
        ".conference-newsletter-form"
    );

    newsletterForm.addEventListener("submit", function (event) {

        event.preventDefault();

        window.location.href = "error.html";

    });

    ScrollTrigger.refresh();

});


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