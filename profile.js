document.addEventListener("DOMContentLoaded", function () {

    const sidebar =
        document.getElementById("dashboardSidebar");

    const overlay =
        document.getElementById("sidebarOverlay");

    const menuButton =
        document.getElementById("mobileMenuButton");

    const logoutButton =
        document.getElementById("logoutButton");


    const sidebarUserName =
        document.getElementById("sidebarUserName");

    const sidebarUserRole =
        document.getElementById("sidebarUserRole");


    const headerUserName =
        document.getElementById("headerUserName");

    const headerUserRole =
        document.getElementById("headerUserRole");


    const profileDisplayName =
        document.getElementById("profileDisplayName");

    const profileDisplayRole =
        document.getElementById("profileDisplayRole");


    const profileEmail =
        document.getElementById("profileEmail");

    const profileRole =
        document.getElementById("profileRole");


    const fullNameField =
        document.getElementById("fullNameField");

    const emailField =
        document.getElementById("emailField");

    const roleField =
        document.getElementById("roleField");


    const savedEmail =
        localStorage.getItem("userEmail");

    const savedRole =
        localStorage.getItem("userRole");


    function formatUserName(email) {

        if (!email) {
            return "Admin";
        }

        let name =
            email.split("@")[0];

        name =
            name.replace(/[0-9]+/g, " ");

        name =
            name.replace(/[._-]+/g, " ");

        name =
            name
                .trim()
                .split(/\s+/)
                .map(function (word) {

                    return (
                        word.charAt(0).toUpperCase() +
                        word.slice(1)
                    );

                })
                .join(" ");

        return name || "Admin";
    }


    const userName =
        formatUserName(savedEmail);


    let userRole =
        "Administrator";


    if (savedRole) {

        userRole =
            savedRole === "Admin"
                ? "Administrator"
                : savedRole;

    }


    const userEmail =
        savedEmail || "admin@stackly.com";


    sidebarUserName.textContent =
        userName;

    sidebarUserRole.textContent =
        userRole;


    headerUserName.textContent =
        userName;

    headerUserRole.textContent =
        userRole;


    profileDisplayName.textContent =
        userName;

    profileDisplayRole.textContent =
        userRole;


    profileEmail.textContent =
        userEmail;

    profileRole.textContent =
        userRole;


    fullNameField.textContent =
        userName;

    emailField.textContent =
        userEmail;

    roleField.textContent =
        userRole;


    function openSidebar() {

        sidebar.classList.add("mobile-open");

        overlay.classList.add("active");

        document.body.classList.add("sidebar-open");

        menuButton.setAttribute(
            "aria-expanded",
            "true"
        );

        menuButton.innerHTML =
            '<i class="bi bi-x-lg"></i>';

    }


    function closeSidebar() {

        sidebar.classList.remove("mobile-open");

        overlay.classList.remove("active");

        document.body.classList.remove("sidebar-open");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        menuButton.innerHTML =
            '<i class="bi bi-list"></i>';

    }


    menuButton.addEventListener(
        "click",
        function () {

            if (
                sidebar.classList.contains(
                    "mobile-open"
                )
            ) {

                closeSidebar();

            } else {

                openSidebar();

            }

        }
    );


    overlay.addEventListener(
        "click",
        function () {

            closeSidebar();

        }
    );


    document
        .querySelectorAll(".sidebar-link")
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    if (
                        window.innerWidth <= 991
                    ) {

                        closeSidebar();

                    }

                }
            );

        });


    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                sidebar.classList.contains(
                    "mobile-open"
                )
            ) {

                closeSidebar();

            }

        }
    );


    window.addEventListener(
        "resize",
        function () {

            if (window.innerWidth > 991) {

                closeSidebar();

            }

        }
    );


    if (logoutButton) {

        logoutButton.addEventListener(
            "click",
            function () {

                localStorage.removeItem(
                    "isLoggedIn"
                );

                localStorage.removeItem(
                    "userRole"
                );

                localStorage.removeItem(
                    "userEmail"
                );

                localStorage.removeItem(
                    "rememberMe"
                );

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
                ".profile-hero",
                {
                    y: 25,
                    opacity: 0,
                    duration: .6
                }
            )
            .from(
                ".profile-main-card",
                {
                    y: 25,
                    opacity: 0,
                    duration: .5
                },
                "-=.25"
            )
            .from(
                ".profile-side .profile-panel",
                {
                    y: 25,
                    opacity: 0,
                    duration: .45,
                    stagger: .1
                },
                "-=.3"
            )
            .from(
                ".information-panel",
                {
                    y: 20,
                    opacity: 0,
                    duration: .45
                },
                "-=.2"
            )
            .from(
                ".security-panel",
                {
                    y: 20,
                    opacity: 0,
                    duration: .45
                },
                "-=.25"
            );


        gsap.to(
            ".profile-hero-circle",
            {
                y: -8,
                duration: 2.2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        );


        gsap.to(
            ".profile-hero-ring",
            {
                rotation: 360,
                duration: 18,
                repeat: -1,
                ease: "none"
            }
        );


        gsap.to(
            ".dot-one",
            {
                y: -10,
                x: 5,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        );


        gsap.to(
            ".dot-two",
            {
                y: 8,
                x: -5,
                duration: 2.4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        );

    }

});