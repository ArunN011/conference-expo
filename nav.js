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