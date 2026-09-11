document.addEventListener("DOMContentLoaded", function () {

    const sidebar = document.getElementById("dashboardSidebar");
    const overlay = document.getElementById("sidebarOverlay");
    const menuButton = document.getElementById("mobileMenuButton");
    const logoutButton = document.getElementById("logoutButton");

    const sidebarUserName = document.getElementById("sidebarUserName");
    const sidebarUserRole = document.getElementById("sidebarUserRole");

    const headerUserName = document.getElementById("headerUserName");
    const headerUserRole = document.getElementById("headerUserRole");

    const savedEmail = localStorage.getItem("userEmail");
    const savedRole = localStorage.getItem("userRole");

    function formatUserName(email) {

        if (!email) {
            return "Admin";
        }

        let name = email.split("@")[0];

        name = name.replace(/[0-9]+/g, " ");

        name = name.replace(/[._-]+/g, " ");

        name = name
            .trim()
            .split(/\s+/)
            .map(function (word) {
                return word.charAt(0).toUpperCase() + word.slice(1);
            })
            .join(" ");

        return name || "Admin";
    }

    const userName = formatUserName(savedEmail);

    let userRole = "Administrator";

    if (savedRole) {
        userRole = savedRole === "Admin"
            ? "Administrator"
            : savedRole;
    }

    sidebarUserName.textContent = userName;
    sidebarUserRole.textContent = userRole;

    headerUserName.textContent = userName;
    headerUserRole.textContent = userRole;


    function openSidebar() {

        sidebar.classList.add("mobile-open");
        overlay.classList.add("active");
        document.body.classList.add("sidebar-open");

        menuButton.setAttribute("aria-expanded", "true");

        menuButton.innerHTML =
            '<i class="bi bi-x-lg"></i>';
    }


    function closeSidebar() {

        sidebar.classList.remove("mobile-open");
        overlay.classList.remove("active");
        document.body.classList.remove("sidebar-open");

        menuButton.setAttribute("aria-expanded", "false");

        menuButton.innerHTML =
            '<i class="bi bi-list"></i>';
    }


    menuButton.addEventListener("click", function () {

        if (sidebar.classList.contains("mobile-open")) {
            closeSidebar();
        } else {
            openSidebar();
        }

    });


    overlay.addEventListener("click", function () {
        closeSidebar();
    });


    document.querySelectorAll(".sidebar-link").forEach(function (link) {

        link.addEventListener("click", function () {

            if (window.innerWidth <= 991) {
                closeSidebar();
            }

        });

    });


    document.addEventListener("keydown", function (event) {

        if (
            event.key === "Escape" &&
            sidebar.classList.contains("mobile-open")
        ) {
            closeSidebar();
        }

    });


    window.addEventListener("resize", function () {

        if (window.innerWidth > 991) {
            closeSidebar();
        }

    });


    if (logoutButton) {

        logoutButton.addEventListener("click", function () {

            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("userRole");
            localStorage.removeItem("userEmail");
            localStorage.removeItem("rememberMe");

        });

    }


    const exportButton =
        document.getElementById("exportButton");

    if (exportButton) {

        exportButton.addEventListener("click", function () {

            const originalText = exportButton.innerHTML;

            exportButton.innerHTML =
                '<i class="bi bi-check2"></i> Report Ready';

            exportButton.disabled = true;

            setTimeout(function () {

                exportButton.innerHTML = originalText;
                exportButton.disabled = false;

            }, 1800);

        });

    }


    if (typeof gsap !== "undefined") {

        const timeline = gsap.timeline({
            defaults: {
                ease: "power3.out"
            }
        });

        timeline
            .from(
                ".reports-hero",
                {
                    y: 25,
                    opacity: 1  ,
                    duration: .6
                }
            )
            .from(
                ".report-stat-card",
                {
                    y: 25,
                    opacity: 1,
                    duration: .45,
                    stagger: .08
                },
                "-=.3"
            )
            .from(
                ".report-panel",
                {
                    y: 25,
                    opacity: 1,
                    duration: .5,
                    stagger: .08
                },
                "-=.25"
            );


   gsap.from(".chart-bar", {
    scaleY: 0,
    transformOrigin: "bottom center",
    duration: 0.8,
    stagger: 0.1,
    ease: "power3.out",
    delay: 0.6
});


        gsap.from(
            ".donut-chart",
            {
                scale: .75,
                opacity: 1,
                duration: .7,
                ease: "back.out(1.5)",
                delay: .8
            }
        );


        gsap.to(
            ".hero-chart-circle",
            {
                y: -8,
                duration: 2.2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        );


        gsap.to(
            ".hero-chart-ring",
            {
                rotation: 360,
                duration: 18,
                repeat: -1,
                ease: "none"
            }
        );

    }

});