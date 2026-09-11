document.addEventListener("DOMContentLoaded", function () {


    const sidebar =
        document.getElementById("eventsSidebar");

    const overlay =
        document.getElementById("eventsSidebarOverlay");

    const menuButton =
        document.getElementById("eventsMobileMenu");

    const sidebarLinks =
        document.querySelectorAll(".events-sidebar-link");

    const logoutButton =
        document.getElementById("logoutButton");


    let savedScrollPosition = 0;


    function lockPageScroll() {

        savedScrollPosition =
            window.scrollY;

        document.documentElement.classList.add(
            "sidebar-open"
        );

        document.body.classList.add(
            "sidebar-open"
        );

        document.body.style.position =
            "fixed";

        document.body.style.top =
            `-${savedScrollPosition}px`;

        document.body.style.left =
            "0";

        document.body.style.right =
            "0";

        document.body.style.width =
            "100%";

        document.body.style.overflow =
            "hidden";
    }


    function unlockPageScroll() {

        document.documentElement.classList.remove(
            "sidebar-open"
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

        document.body.style.width =
            "";

        document.body.style.overflow =
            "";

        window.scrollTo(
            0,
            savedScrollPosition
        );
    }


    function openSidebar() {

        if (
            !sidebar ||
            !overlay ||
            !menuButton
        ) {
            return;
        }

        if (
            window.innerWidth > 991
        ) {
            return;
        }

        sidebar.classList.add(
            "mobile-open"
        );

        overlay.classList.add(
            "active"
        );

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

        lockPageScroll();


        if (
            typeof gsap !== "undefined"
        ) {

            gsap.fromTo(
                sidebar,
                {
                    x: -25,
                    opacity: .7
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

        if (
            !sidebar ||
            !overlay ||
            !menuButton
        ) {
            return;
        }

        sidebar.classList.remove(
            "mobile-open"
        );

        overlay.classList.remove(
            "active"
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

        unlockPageScroll();
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
        "User";


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
                    .map(
                        function (word) {

                            return (
                                word
                                    .charAt(0)
                                    .toUpperCase()
                                +
                                word
                                    .slice(1)
                            );

                        }
                    )
                    .join(" ");

        }

    }


    const sidebarUserName =
        document.getElementById(
            "sidebarUserName"
        );


    const headerUserName =
        document.getElementById(
            "headerUserName"
        );


    if (sidebarUserName) {

        sidebarUserName.textContent =
            savedEmail ||
            displayName;

    }


    if (headerUserName) {

        headerUserName.textContent =
            displayName;

    }


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


    const searchInput =
        document.getElementById(
            "eventSearch"
        );


    const filterButtons =
        document.querySelectorAll(
            ".events-filter"
        );


    const eventCards =
        document.querySelectorAll(
            ".event-card"
        );


    const featuredEvent =
        document.querySelector(
            ".featured-event"
        );


    const resultCount =
        document.getElementById(
            "eventResultCount"
        );


    const emptyState =
        document.getElementById(
            "eventsEmpty"
        );


    let currentFilter =
        "all";


    function filterEvents() {

        const searchValue =
            searchInput
                ? searchInput.value
                    .toLowerCase()
                    .trim()
                : "";


        let visibleCount =
            0;


        eventCards.forEach(
            function (card) {

                const category =
                    (
                        card.dataset.category
                        || ""
                    ).toLowerCase();


                const title =
                    (
                        card.dataset.title
                        || ""
                    ).toLowerCase();


                const content =
                    card.textContent
                        .toLowerCase();


                const categoryMatch =
                    currentFilter === "all"
                    ||
                    category === currentFilter;


                const searchMatch =
                    !searchValue
                    ||
                    title.includes(searchValue)
                    ||
                    content.includes(searchValue);


                if (
                    categoryMatch &&
                    searchMatch
                ) {

                    card.classList.remove(
                        "hidden"
                    );

                    visibleCount++;

                } else {

                    card.classList.add(
                        "hidden"
                    );

                }

            }
        );


        if (featuredEvent) {

            const featuredCategory =
                (
                    featuredEvent.dataset.category
                    || ""
                ).toLowerCase();


            const featuredTitle =
                (
                    featuredEvent.dataset.title
                    || ""
                ).toLowerCase();


            const featuredContent =
                featuredEvent.textContent
                    .toLowerCase();


            const categoryMatch =
                currentFilter === "all"
                ||
                featuredCategory === currentFilter;


            const searchMatch =
                !searchValue
                ||
                featuredTitle.includes(
                    searchValue
                )
                ||
                featuredContent.includes(
                    searchValue
                );


            if (
                !categoryMatch ||
                !searchMatch
            ) {

                featuredEvent.style.display =
                    "none";

            } else {

                featuredEvent.style.display =
                    "grid";

            }

        }


        if (resultCount) {

            resultCount.textContent =
                `${visibleCount} Events`;

        }


        if (emptyState) {

            if (visibleCount === 0) {

                emptyState.classList.add(
                    "show"
                );

            } else {

                emptyState.classList.remove(
                    "show"
                );

            }

        }

    }


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            filterEvents
        );

    }


    filterButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    filterButtons.forEach(
                        function (item) {

                            item.classList.remove(
                                "active"
                            );

                        }
                    );


                    button.classList.add(
                        "active"
                    );


                    currentFilter =
                        button.dataset.filter
                        || "all";


                    filterEvents();

                }
            );

        }
    );


    if (
        typeof gsap !== "undefined"
    ) {

        const timeline =
            gsap.timeline({
                defaults: {
                    ease: "power3.out"
                }
            });


        timeline
            .from(
                ".events-header",
                {
                    y: -25,
                    opacity: 0,
                    duration: .55
                }
            )
            .from(
                ".events-intro",
                {
                    y: 35,
                    opacity: 0,
                    duration: .7
                },
                "-=.2"
            )
            .from(
                ".events-toolbar",
                {
                    y: 25,
                    opacity: 0,
                    duration: .45
                },
                "-=.35"
            )
            .from(
                ".featured-event",
                {
                    y: 25,
                    opacity: 0,
                    duration: .55
                },
                "-=.25"
            )
            .from(
                ".event-card",
                {
                    y: 25,
                    opacity: 0,
                    duration: .45,
                    stagger: .08
                },
                "-=.25"
            )
            .from(
                ".events-cta",
                {
                    y: 25,
                    opacity: 0,
                    duration: .5
                },
                "-=.2"
            );


        gsap.to(
            ".featured-circle",
            {
                y: -8,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        );


        gsap.to(
            ".featured-circle i",
            {
                scale: 1.08,
                duration: .8,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        );


        gsap.to(
            ".events-mobile-menu",
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


    filterEvents();

});