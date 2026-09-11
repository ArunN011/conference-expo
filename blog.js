document.addEventListener("DOMContentLoaded", function () {

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".blog-breadcrumb-label", {
        y: 25,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out"
    });

    gsap.from(".blog-breadcrumb-content h1", {
        y: 60,
        opacity: 0,
        duration: 1,
        delay: 0.15,
        ease: "power4.out"
    });

    gsap.from(".blog-breadcrumb-content p", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out"
    });

    gsap.from(".blog-breadcrumb-navigation", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        delay: 0.45,
        ease: "power3.out"
    });

    gsap.from(".blog-card-front", {
        scale: 0.75,
        opacity: 0,
        rotation: -15,
        duration: 1,
        delay: 0.3,
        ease: "back.out(1.5)"
    });

    gsap.from(".blog-card-back", {
        x: 50,
        y: -30,
        opacity: 0,
        rotation: 20,
        duration: 0.9,
        delay: 0.5,
        ease: "power3.out"
    });

    gsap.from(".blog-card-middle", {
        x: -50,
        y: 30,
        opacity: 0,
        rotation: -25,
        duration: 0.9,
        delay: 0.6,
        ease: "power3.out"
    });

    gsap.from(".blog-breadcrumb-floating", {
        scale: 0,
        opacity: 0,
        duration: 0.7,
        delay: 0.8,
        stagger: 0.15,
        ease: "back.out(2)"
    });

    gsap.to(".blog-card-front", {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(".blog-card-back", {
        y: -12,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(".blog-card-middle", {
        y: 10,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(".blog-orbit-one", {
        rotation: 360,
        duration: 25,
        repeat: -1,
        ease: "none"
    });

    gsap.to(".blog-orbit-two", {
        rotation: -360,
        duration: 18,
        repeat: -1,
        ease: "none"
    });

    gsap.to(".blog-floating-one", {
        y: -12,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(".blog-floating-two", {
        y: 10,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    ScrollTrigger.refresh();

});

document.addEventListener("DOMContentLoaded", function () {

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".blog-feature-heading > div", {
        scrollTrigger: {
            trigger: ".blog-feature-section",
            start: "top 80%"
        },
        x: -50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out"
    });

    gsap.from(".blog-feature-heading > p", {
        scrollTrigger: {
            trigger: ".blog-feature-section",
            start: "top 78%"
        },
        x: 50,
        opacity: 1,
        duration: 0.9,
        delay: 0.15,
        ease: "power3.out"
    });

    gsap.from(".blog-feature-image", {
        scrollTrigger: {
            trigger: ".blog-feature-main",
            start: "top 82%"
        },
        x: -70,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from(".blog-feature-content", {
        scrollTrigger: {
            trigger: ".blog-feature-main",
            start: "top 82%"
        },
        x: 70,
        opacity: 1,
        duration: 1,
        delay: 0.15,
        ease: "power3.out"
    });

    gsap.from(".blog-topic", {
        scrollTrigger: {
            trigger: ".blog-topic-list",
            start: "top 85%"
        },
        y: 35,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out"
    });

    gsap.to(".blog-feature-image-icon", {
        y: -10,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(".blog-feature-float-one", {
        y: -12,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(".blog-feature-float-two", {
        y: 10,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(".blog-shape-one", {
        rotation: 135,
        duration: 8,
        repeat: -1,
        ease: "none"
    });

    gsap.to(".blog-shape-two", {
        rotation: -135,
        duration: 7,
        repeat: -1,
        ease: "none"
    });

    document.querySelectorAll(".blog-topic").forEach(topic => {

        const icon = topic.querySelector("i:first-child");

        topic.addEventListener("mouseenter", () => {
            gsap.to(icon, {
                scale: 1.2,
                rotate: -8,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        topic.addEventListener("mouseleave", () => {
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

    gsap.from(".blog-latest-header > div", {
        scrollTrigger: {
            trigger: ".blog-latest-section",
            start: "top 80%"
        },
        x: -50,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out"
    });

    gsap.from(".blog-latest-view", {
        scrollTrigger: {
            trigger: ".blog-latest-section",
            start: "top 80%"
        },
        x: 40,
        opacity: 1,
        duration: 0.8,
        delay: 0.15,
        ease: "power3.out"
    });

    gsap.from(".blog-filter", {
        scrollTrigger: {
            trigger: ".blog-category-filter",
            start: "top 88%"
        },
        y: 20,
        opacity: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out"
    });

    gsap.from(".blog-article", {
        scrollTrigger: {
            trigger: ".blog-latest-grid",
            start: "top 82%"
        },
        y: 60,
        opacity: 1,
        scale: 0.97,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out"
    });

    gsap.from(".blog-latest-more", {
        scrollTrigger: {
            trigger: ".blog-latest-more",
            start: "top 90%"
        },
        y: 25,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out"
    });

    document.querySelectorAll(".blog-article").forEach(article => {

        const icon = article.querySelector(".blog-article-visual-icon");

        article.addEventListener("mouseenter", () => {

            if (icon) {
                gsap.to(icon, {
                    scale: 1.12,
                    rotate: -7,
                    duration: 0.35,
                    ease: "power2.out"
                });
            }

        });

        article.addEventListener("mouseleave", () => {

            if (icon) {
                gsap.to(icon, {
                    scale: 1,
                    rotate: 0,
                    duration: 0.35,
                    ease: "power2.out"
                });
            }

        });

    });

    gsap.to(".blog-circle-one", {
        rotation: 360,
        duration: 15,
        repeat: -1,
        ease: "none"
    });

    gsap.to(".blog-circle-two", {
        rotation: -360,
        duration: 11,
        repeat: -1,
        ease: "none"
    });

    gsap.to(".blog-tech-orbit", {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none"
    });

    gsap.to(".blog-design-one", {
        rotation: 135,
        duration: 10,
        repeat: -1,
        ease: "none"
    });

    gsap.to(".blog-plan-lines", {
        rotation: 360,
        duration: 18,
        repeat: -1,
        ease: "none"
    });

    ScrollTrigger.refresh();

});
document.addEventListener("DOMContentLoaded", function () {

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".blog-category-heading-left", {
    scrollTrigger: {
      trigger: ".blog-category-section",
      start: "top 82%"
    },
    x: -60,
    opacity: 1,
    duration: 0.9,
    ease: "power3.out"
  });

  gsap.from(".blog-category-heading-right", {
    scrollTrigger: {
      trigger: ".blog-category-section",
      start: "top 82%"
    },
    x: 60,
    opacity: 1,
    duration: 0.9,
    delay: 0.1,
    ease: "power3.out"
  });

  gsap.from(".blog-category-card", {
    scrollTrigger: {
      trigger: ".blog-category-grid",
      start: "top 82%"
    },
    y: 70,
    opacity: 1,
    scale: 0.96,
    duration: 0.8,
    stagger: 0.12,
    ease: "power3.out"
  });

  gsap.from(".blog-category-floating", {
    scrollTrigger: {
      trigger: ".blog-category-grid",
      start: "top 70%"
    },
    scale: 0,
    opacity: 1,
    duration: 0.7,
    stagger: 0.08,
    ease: "back.out(1.7)"
  });

  gsap.from(".blog-category-bottom", {
    scrollTrigger: {
      trigger: ".blog-category-bottom",
      start: "top 90%"
    },
    y: 25,
    opacity: 1,
    duration: 0.7,
    ease: "power2.out"
  });

});
document.addEventListener("DOMContentLoaded", function () {

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".blog-trending-title", {
    scrollTrigger: {
      trigger: ".blog-trending-section",
      start: "top 82%"
    },
    x: -60,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out"
  });

  gsap.from(".blog-trending-intro", {
    scrollTrigger: {
      trigger: ".blog-trending-section",
      start: "top 82%"
    },
    x: 60,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out"
  });

  gsap.from(".blog-trending-feature", {
    scrollTrigger: {
      trigger: ".blog-trending-feature",
      start: "top 85%"
    },
    y: 70,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  gsap.from(".blog-trending-card", {
    scrollTrigger: {
      trigger: ".blog-trending-list",
      start: "top 85%"
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out"
  });

  gsap.to(".blog-trending-circle", {
    rotation: 360,
    duration: 25,
    repeat: -1,
    ease: "none"
  });

  gsap.to(".blog-trending-circle-two", {
    rotation: -360,
    duration: 18,
    repeat: -1,
    ease: "none"
  });

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