document.addEventListener("DOMContentLoaded", function () {

    const sidebar =
        document.getElementById("settingsSidebar");

    const overlay =
        document.getElementById("settingsSidebarOverlay");

    const menuButton =
        document.getElementById("settingsMobileMenu");

    const sidebarLinks =
        document.querySelectorAll(
            ".settings-sidebar-link"
        );

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

    }


    function closeSidebar() {

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
        closeSidebar
    );


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
                                word.charAt(0).toUpperCase()
                                +
                                word.slice(1)
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


    const navItems =
        document.querySelectorAll(
            ".settings-nav-item"
        );


    const panels =
        document.querySelectorAll(
            ".settings-panel"
        );


    navItems.forEach(
        function (item) {

            item.addEventListener(
                "click",
                function () {

                    const target =
                        item.dataset.target;


                    navItems.forEach(
                        function (nav) {

                            nav.classList.remove(
                                "active"
                            );

                        }
                    );


                    panels.forEach(
                        function (panel) {

                            panel.classList.remove(
                                "active"
                            );

                        }
                    );


                    item.classList.add(
                        "active"
                    );


                    const selectedPanel =
                        document.getElementById(
                            target
                        );


                    if (selectedPanel) {

                        selectedPanel.classList.add(
                            "active"
                        );

                    }


                    if (
                        typeof gsap !== "undefined"
                    ) {

                        gsap.fromTo(
                            selectedPanel,
                            {
                                y: 12,
                                opacity: 0
                            },
                            {
                                y: 0,
                                opacity: 1,
                                duration: .35,
                                ease: "power3.out"
                            }
                        );

                    }

                }
            );

        }
    );


    const toast =
        document.getElementById(
            "settingsToast"
        );


    let toastTimer;


    function showToast(message) {

        const text =
            toast.querySelector(
                "span"
            );


        text.textContent =
            message;


        toast.classList.add(
            "show"
        );


        clearTimeout(
            toastTimer
        );


        toastTimer =
            setTimeout(
                function () {

                    toast.classList.remove(
                        "show"
                    );

                },
                2500
            );

    }


    const saveProfile =
        document.getElementById(
            "saveProfile"
        );


    if (saveProfile) {

        saveProfile.addEventListener(
            "click",
            function () {

                showToast(
                    "Profile settings saved successfully."
                );

            }
        );

    }


    const saveNotifications =
        document.getElementById(
            "saveNotifications"
        );


    if (saveNotifications) {

        saveNotifications.addEventListener(
            "click",
            function () {

                const preferences = {

                    email:
                        document.getElementById(
                            "emailNotifications"
                        ).checked,

                    reminders:
                        document.getElementById(
                            "eventReminders"
                        ).checked,

                    newEvents:
                        document.getElementById(
                            "newEventAlerts"
                        ).checked,

                    weekly:
                        document.getElementById(
                            "weeklySummary"
                        ).checked

                };


                localStorage.setItem(
                    "stacklyNotificationPreferences",
                    JSON.stringify(
                        preferences
                    )
                );


                showToast(
                    "Notification preferences saved."
                );

            }
        );

    }


    const savedPreferences =
        localStorage.getItem(
            "stacklyNotificationPreferences"
        );


    if (savedPreferences) {

        try {

            const preferences =
                JSON.parse(
                    savedPreferences
                );


            const email =
                document.getElementById(
                    "emailNotifications"
                );

            const reminders =
                document.getElementById(
                    "eventReminders"
                );

            const newEvents =
                document.getElementById(
                    "newEventAlerts"
                );

            const weekly =
                document.getElementById(
                    "weeklySummary"
                );


            if (email && typeof preferences.email === "boolean") {
                email.checked =
                    preferences.email;
            }


            if (reminders && typeof preferences.reminders === "boolean") {
                reminders.checked =
                    preferences.reminders;
            }


            if (newEvents && typeof preferences.newEvents === "boolean") {
                newEvents.checked =
                    preferences.newEvents;
            }


            if (weekly && typeof preferences.weekly === "boolean") {
                weekly.checked =
                    preferences.weekly;
            }

        } catch (error) {

        }

    }


    const appearanceOptions =
        document.querySelectorAll(
            ".appearance-option"
        );


    appearanceOptions.forEach(
        function (option) {

            option.addEventListener(
                "click",
                function () {

                    appearanceOptions.forEach(
                        function (item) {

                            item.classList.remove(
                                "active"
                            );

                        }
                    );


                    option.classList.add(
                        "active"
                    );

                }
            );

        }
    );


    const saveAppearance =
        document.getElementById(
            "saveAppearance"
        );


    if (saveAppearance) {

        saveAppearance.addEventListener(
            "click",
            function () {

                const selected =
                    document.querySelector(
                        ".appearance-option.active"
                    );


                if (selected) {

                    localStorage.setItem(
                        "stacklyAppearance",
                        selected.dataset.theme
                    );

                }


                showToast(
                    "Appearance settings saved."
                );

            }
        );

    }


    const savedAppearance =
        localStorage.getItem(
            "stacklyAppearance"
        );


    if (savedAppearance) {

        appearanceOptions.forEach(
            function (option) {

                option.classList.toggle(
                    "active",
                    option.dataset.theme ===
                    savedAppearance
                );

            }
        );

    }


    const twoFactorButton =
        document.getElementById(
            "twoFactorButton"
        );


    if (twoFactorButton) {

        twoFactorButton.addEventListener(
            "click",
            function () {

                if (
                    twoFactorButton.textContent.trim()
                    ===
                    "Enable"
                ) {

                    twoFactorButton.textContent =
                        "Enabled";

                    showToast(
                        "Two-factor authentication enabled."
                    );

                } else {

                    twoFactorButton.textContent =
                        "Enable";

                    showToast(
                        "Two-factor authentication disabled."
                    );

                }

            }
        );

    }


    const signOutAll =
        document.getElementById(
            "signOutAll"
        );


    if (signOutAll) {

        signOutAll.addEventListener(
            "click",
            function () {

                showToast(
                    "All other sessions have been signed out."
                );

            }
        );

    }


    const logoutButton =
        document.getElementById(
            "logoutButton"
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
                ".settings-header",
                {
                    y: -20,
                    opacity: 0,
                    duration: .5
                }
            )
            .from(
                ".settings-intro",
                {
                    y: 25,
                    opacity: 0,
                    duration: .6
                },
                "-=.2"
            )
            .from(
                ".settings-navigation",
                {
                    y: 20,
                    opacity: 0,
                    duration: .45
                },
                "-=.25"
            )
            .from(
                ".settings-panel",
                {
                    y: 20,
                    opacity: 0,
                    duration: .5
                },
                "-=.25"
            );


        gsap.to(
            ".settings-intro-icon",
            {
                y: -8,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        );


        gsap.to(
            ".settings-mobile-menu",
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
    const firstName =
    document.getElementById("firstName");

const lastName =
    document.getElementById("lastName");

const email =
    document.getElementById("email");

const phone =
    document.getElementById("phone");

const bio =
    document.getElementById("bio");

const saveProfile1 =
    document.getElementById("saveProfile");


if (saveProfile) {

    saveProfile.addEventListener(
        "click",
        function (event) {

            event.preventDefault();


            const fields = [
                firstName,
                lastName,
                email,
                phone,
                bio
            ];


            let valid = true;


            fields.forEach(function (field) {

                if (!field) {
                    return;
                }


                field.classList.remove(
                    "settings-invalid"
                );


                if (
                    field.value.trim() === ""
                ) {

                    field.classList.add(
                        "settings-invalid"
                    );

                    valid = false;

                }

            });


            if (!valid) {

                if (
                    typeof gsap !== "undefined"
                ) {

                    gsap.fromTo(
                        ".settings-form",
                        {
                            x: -5
                        },
                        {
                            x: 5,
                            duration: 0.08,
                            repeat: 5,
                            yoyo: true,
                            clearProps: "x"
                        }
                    );

                }

                return;

            }


            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (
                !emailPattern.test(
                    email.value.trim()
                )
            ) {

                email.classList.add(
                    "settings-invalid"
                );

                return;

            }


            const phonePattern =
                /^[0-9+\-\s()]{10,16}$/;


            if (
                !phonePattern.test(
                    phone.value.trim()
                )
            ) {

                phone.classList.add(
                    "settings-invalid"
                );

                return;

            }


            window.location.href =
                "error.html";

        }
    );

}
});
