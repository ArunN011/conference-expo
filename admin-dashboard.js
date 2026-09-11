document.addEventListener("DOMContentLoaded", function () {

    const sidebar =
        document.getElementById("dashboardSidebar");

    const overlay =
        document.getElementById("sidebarOverlay");

    const menuButton =
        document.getElementById("mobileMenuButton");

    const sidebarLinks =
        document.querySelectorAll(".sidebar-link");

    const logoutButton =
        document.getElementById("logoutButton");


    let savedScrollPosition = 0;


    function openSidebar() {

        if (!sidebar || !overlay || !menuButton) {
            return;
        }


        savedScrollPosition =
            window.scrollY;


        sidebar.classList.add(
            "mobile-open"
        );

        overlay.classList.add(
            "active"
        );

        document.body.classList.add(
            "sidebar-open"
        );

        document.body.style.top =
            `-${savedScrollPosition}px`;

        document.body.style.left =
            "0";

        document.body.style.right =
            "0";


        menuButton.setAttribute(
            "aria-expanded",
            "true"
        );

        menuButton.setAttribute(
            "aria-label",
            "Close navigation"
        );

        menuButton.innerHTML =
            '<i class="bi bi-x-lg"></i>';


        if (typeof gsap !== "undefined") {

            gsap.fromTo(
                sidebar,
                {
                    x: -20,
                    opacity: .8
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: .35,
                    ease: "power3.out"
                }
            );

        }

    }


    function closeSidebar() {

        if (!sidebar || !overlay || !menuButton) {
            return;
        }


        sidebar.classList.remove(
            "mobile-open"
        );

        overlay.classList.remove(
            "active"
        );

        document.body.classList.remove(
            "sidebar-open"
        );

        document.body.style.position =
            "";

        document.body.style.top =
            "";

        document.body.style.left =
            "";

        document.body.style.right =
            "";

        window.scrollTo(
            0,
            savedScrollPosition
        );


        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        menuButton.setAttribute(
            "aria-label",
            "Open navigation"
        );

        menuButton.innerHTML =
            '<i class="bi bi-list"></i>';

    }


    if (menuButton) {

        menuButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                event.stopPropagation();


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

    }


    if (overlay) {

        overlay.addEventListener(
            "click",
            function () {

                closeSidebar();

            }
        );

    }


    sidebarLinks.forEach(
        function (link) {

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

        }
    );


    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
            ) {

                closeSidebar();

            }

        }
    );


    window.addEventListener(
        "resize",
        function () {

            if (
                window.innerWidth > 991
            ) {

                closeSidebar();

            }

        }
    );


    const savedEmail =
        localStorage.getItem(
            "userEmail"
        );


    const savedRole =
        localStorage.getItem(
            "userRole"
        );


    let displayName =
        "Admin";


    if (savedEmail) {

        const emailName =
            savedEmail
                .split("@")[0]
                .replace(/[0-9]/g, "")
                .replace(/[._-]/g, " ")
                .trim();


        if (emailName) {

            displayName =
                emailName
                    .split(" ")
                    .filter(Boolean)
                    .map(
                        function (word) {

                            return (
                                word
                                    .charAt(0)
                                    .toUpperCase()
                                +
                                word
                                    .slice(1)
                                    .toLowerCase()
                            );

                        }
                    )
                    .join(" ");

        }

    }


    let displayRole =
        savedRole || "Administrator";


    if (
        displayRole.toLowerCase() === "admin"
    ) {

        displayRole =
            "Administrator";

    }


    const welcomeUser =
        document.getElementById(
            "welcomeUser"
        );


    const headerUserName =
        document.getElementById(
            "headerUserName"
        );


    const headerUserRole =
        document.getElementById(
            "headerUserRole"
        );


    const sidebarUserName =
        document.getElementById(
            "sidebarUserName"
        );


    const sidebarUserRole =
        document.getElementById(
            "sidebarUserRole"
        );


    const profileUserName =
        document.getElementById(
            "profileUserName"
        );


    const profileEmail =
        document.getElementById(
            "profileEmail"
        );


    const profileRole =
        document.getElementById(
            "profileRole"
        );


    if (welcomeUser) {

        welcomeUser.textContent =
            displayName;

    }


    if (headerUserName) {

        headerUserName.textContent =
            displayName;

    }


    if (headerUserRole) {

        headerUserRole.textContent =
            displayRole;

    }


    if (sidebarUserName) {

        sidebarUserName.textContent =
            savedEmail || displayName;

    }


    if (sidebarUserRole) {

        sidebarUserRole.textContent =
            displayRole;

    }


    if (profileUserName) {

        profileUserName.textContent =
            displayName;

    }


    if (profileEmail) {

        profileEmail.textContent =
            savedEmail ||
            "admin@example.com";

    }


    if (profileRole) {

        profileRole.textContent =
            displayRole;

    }


    function updateDate() {

        const currentDate =
            document.getElementById(
                "currentDate"
            );


        if (!currentDate) {
            return;
        }


        const now =
            new Date();


        const dateText =
            now.toLocaleDateString(
                "en-US",
                {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                }
            );


        currentDate.textContent =
            dateText.toUpperCase();

    }


    updateDate();


    function updateLiveTime() {

        const liveTime =
            document.getElementById(
                "liveTime"
            );


        if (!liveTime) {
            return;
        }


        const now =
            new Date();


        const time =
            now.toLocaleTimeString(
                "en-US",
                {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit"
                }
            );


        liveTime.textContent =
            time;

    }


    updateLiveTime();


    setInterval(
        updateLiveTime,
        1000
    );


    const eventDate =
        new Date(
            "September 28, 2026 10:30:00"
        );


    function updateEventCountdown() {

        const countdown =
            document.getElementById(
                "eventCountdown"
            );


        if (!countdown) {
            return;
        }


        const now =
            new Date();


        const difference =
            eventDate - now;


        if (difference <= 0) {

            countdown.textContent =
                "Event Started";

            return;

        }


        const days =
            Math.floor(
                difference /
                (1000 * 60 * 60 * 24)
            );


        const hours =
            Math.floor(
                (
                    difference /
                    (1000 * 60 * 60)
                ) % 24
            );


        const minutes =
            Math.floor(
                (
                    difference /
                    (1000 * 60)
                ) % 60
            );


        countdown.textContent =
            String(days).padStart(2, "0")
            + "d "
            +
            String(hours).padStart(2, "0")
            + "h "
            +
            String(minutes).padStart(2, "0")
            + "m";

    }


    updateEventCountdown();


    setInterval(
        updateEventCountdown,
        30000
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
                ".dashboard-header",
                {
                    y: -25,
                    opacity: 0,
                    duration: .55
                }
            )

            .from(
                ".welcome-card",
                {
                    y: 35,
                    opacity: 0,
                    duration: .7
                },
                "-=.2"
            )

            .from(
                ".stat-card",
                {
                    y: 25,
                    opacity: 1,
                    duration: .45,
                    stagger: .08
                },
                "-=.3"
            )

            .from(
                ".dashboard-panel",
                {
                    y: 25,
                    opacity: 1,
                    duration: .5,
                    stagger: .08
                },
                "-=.25"
            )

            .from(
                ".quick-action-card",
                {
                    y: 20,
                    opacity: 1,
                    duration: .4,
                    stagger: .07
                },
                "-=.25"
            );


        gsap.to(
            ".event-circle",
            {
                y: -8,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        );


        gsap.to(
            ".event-circle i",
            {
                scale: 1.1,
                duration: .8,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        );


        gsap.to(
            ".mobile-menu-button",
            {
                boxShadow:
                    "0 0 0 5px rgba(118,71,232,.05)",
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        );

    }

});