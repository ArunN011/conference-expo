document.addEventListener("DOMContentLoaded", function () {

    const goBackButton =
        document.getElementById("goBackButton");


    if (goBackButton) {

        goBackButton.addEventListener(
            "click",
            function () {

                if (
                    window.history.length > 1
                ) {

                    window.history.back();

                } else {

                    window.location.href =
                        "admin-dashboard.html";

                }

            }
        );

    }


    if (typeof gsap !== "undefined") {

        const timeline =
            gsap.timeline({
                defaults: {
                    ease: "power3.out"
                }
            });


        timeline
            .from(
                ".error-logo",
                {
                    y: -20,
                    opacity: 0,
                    duration: .5
                }
            )
            .from(
                ".error-visual",
                {
                    y: 25,
                    scale: .85,
                    opacity: 0,
                    duration: .7
                },
                "-=.25"
            )
            .from(
                ".error-text > *",
                {
                    y: 20,
                    opacity: 0,
                    duration: .45,
                    stagger: .08
                },
                "-=.35"
            )
            .from(
                ".error-footer",
                {
                    y: 15,
                    opacity: 0,
                    duration: .4
                },
                "-=.2"
            );


        gsap.to(
            ".error-circle",
            {
                y: -8,
                duration: 2.4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        );


        gsap.to(
            ".ring-one",
            {
                rotation: 360,
                duration: 18,
                repeat: -1,
                ease: "none"
            }
        );


        gsap.to(
            ".ring-two",
            {
                rotation: -360,
                duration: 25,
                repeat: -1,
                ease: "none"
            }
        );


        gsap.to(
            ".shape-three",
            {
                y: -18,
                x: 10,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        );

    }

});