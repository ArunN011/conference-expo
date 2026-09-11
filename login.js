document.addEventListener("DOMContentLoaded", function () {

    const loginForm =
        document.getElementById("stacklyLoginForm");

    const emailInput =
        document.getElementById("stacklyEmail");

    const passwordInput =
        document.getElementById("stacklyPassword");

    const passwordToggle =
        document.getElementById("stacklyPasswordToggle");

    const rememberCheckbox =
        document.getElementById("stacklyRemember");

    const loginMessage =
        document.getElementById("stacklyLoginMessage");

    const loginButton =
        document.getElementById("stacklyLoginSubmit");

    const roleButtons =
        document.querySelectorAll(".stackly-role-btn");


    let selectedRole = "User";


    const savedEmail =
        localStorage.getItem("userEmail");

    const savedRole =
        localStorage.getItem("userRole");


    if (
        savedEmail &&
        localStorage.getItem("rememberMe") === "true"
    ) {

        emailInput.value = savedEmail;

        rememberCheckbox.checked = true;

    }


    if (
        savedRole === "User" ||
        savedRole === "Admin"
    ) {

        selectedRole = savedRole;

        roleButtons.forEach(function (button) {

            button.classList.toggle(
                "active",
                button.dataset.role === selectedRole
            );

        });

    }


    roleButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            roleButtons.forEach(function (item) {

                item.classList.remove("active");

            });


            button.classList.add("active");


            selectedRole =
                button.dataset.role;


            localStorage.setItem(
                "userRole",
                selectedRole
            );


            if (typeof gsap !== "undefined") {

                gsap.fromTo(
                    button,
                    {
                        scale: .96
                    },
                    {
                        scale: 1,
                        duration: .3,
                        ease: "back.out(2)"
                    }
                );

            }

        });

    });


    passwordToggle.addEventListener(
        "click",
        function () {

            const isPassword =
                passwordInput.type === "password";


            if (isPassword) {

                passwordInput.type = "text";

                passwordToggle.innerHTML =
                    '<i class="bi bi-eye-slash"></i>';

                passwordToggle.setAttribute(
                    "aria-label",
                    "Hide password"
                );

            } else {

                passwordInput.type = "password";

                passwordToggle.innerHTML =
                    '<i class="bi bi-eye"></i>';

                passwordToggle.setAttribute(
                    "aria-label",
                    "Show password"
                );

            }

        }
    );


    function setError(input, message) {

        const group =
            input.closest(".stackly-form-group");

        const error =
            group.querySelector(
                ".stackly-field-error"
            );


        group.classList.remove(
            "field-success"
        );

        group.classList.add(
            "field-error"
        );


        error.textContent =
            message;

    }


    function setSuccess(input) {

        const group =
            input.closest(".stackly-form-group");


        group.classList.remove(
            "field-error"
        );

        group.classList.add(
            "field-success"
        );

    }


    function validateEmail() {

        const email =
            emailInput.value.trim();


        if (email === "") {

            setError(
                emailInput,
                "Please enter your email address."
            );

            return false;

        }


        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;


        if (!emailPattern.test(email)) {

            setError(
                emailInput,
                "Please enter a valid email address."
            );

            return false;

        }


        setSuccess(emailInput);

        return true;

    }


    function validatePassword() {

        const password =
            passwordInput.value;


        if (password === "") {

            setError(
                passwordInput,
                "Please enter your password."
            );

            return false;

        }


        if (password.length < 6) {

            setError(
                passwordInput,
                "Password must contain at least 6 characters."
            );

            return false;

        }


        setSuccess(passwordInput);

        return true;

    }


    emailInput.addEventListener(
        "blur",
        validateEmail
    );


    passwordInput.addEventListener(
        "blur",
        validatePassword
    );


    emailInput.addEventListener(
        "input",
        function () {

            const group =
                emailInput.closest(
                    ".stackly-form-group"
                );


            if (
                group.classList.contains(
                    "field-error"
                )
            ) {

                validateEmail();

            }

        }
    );


    passwordInput.addEventListener(
        "input",
        function () {

            const group =
                passwordInput.closest(
                    ".stackly-form-group"
                );


            if (
                group.classList.contains(
                    "field-error"
                )
            ) {

                validatePassword();

            }

        }
    );


    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            loginMessage.textContent = "";

            loginMessage.classList.remove(
                "success"
            );


            const emailValid =
                validateEmail();

            const passwordValid =
                validatePassword();


            if (
                !emailValid ||
                !passwordValid
            ) {

                loginMessage.textContent =
                    "Please correct the highlighted fields.";

                return;

            }


            loginButton.classList.add(
                "loading"
            );


            const email =
                emailInput.value.trim();


            localStorage.setItem(
                "userEmail",
                email
            );


            localStorage.setItem(
                "userRole",
                selectedRole
            );


            localStorage.setItem(
                "isLoggedIn",
                "true"
            );


            if (
                rememberCheckbox.checked
            ) {

                localStorage.setItem(
                    "rememberMe",
                    "true"
                );

            } else {

                localStorage.removeItem(
                    "rememberMe"
                );

            }


            if (typeof gsap !== "undefined") {

                gsap.to(
                    loginButton,
                    {
                        scale: .97,
                        duration: .12
                    }
                );

            }


            setTimeout(function () {

                loginButton.classList.remove(
                    "loading"
                );


                loginMessage.classList.add(
                    "success"
                );


                loginMessage.textContent =
                    "Login successful. Welcome back!";


                if (typeof gsap !== "undefined") {

                    gsap.fromTo(
                        loginMessage,
                        {
                            y: 8,
                            opacity: 0
                        },
                        {
                            y: 0,
                            opacity: 1,
                            duration: .4,
                            ease: "power2.out"
                        }
                    );

                }


                setTimeout(function () {


                    if (
                        selectedRole === "Admin"
                    ) {

                        window.location.href =
                            "admin-dashboard.html";

                    } else {

                        window.location.href =
                            "user-dashboard.html";

                    }


                }, 700);


            }, 700);

        }
    );


    if (typeof gsap !== "undefined") {

        const animation =
            gsap.timeline({
                defaults: {
                    ease: "power3.out"
                }
            });


        animation

            .from(
                ".stackly-login-card",
                {
                    y: 45,
                    opacity: 0,
                    scale: .97,
                    duration: .8
                }
            )

            .from(
                ".stackly-login-brand",
                {
                    y: 15,
                    opacity: 1,
                    duration: .45
                },
                "-=.45"
            )

            .from(
                ".stackly-login-heading",
                {
                    y: 18,
                    opacity: 1,
                    duration: .5
                },
                "-=.25"
            )

            .from(
                ".stackly-login-role-switch",
                {
                    y: 15,
                    opacity: 1,
                    duration: .4
                },
                "-=.2"
            )

            .from(
                ".stackly-form-group",
                {
                    y: 15,
                    opacity: 1,
                    duration: .4,
                    stagger: .08
                },
                "-=.15"
            )

            .from(
                ".stackly-login-options",
                {
                    y: 10,
                    opacity: 1,
                    duration: .3
                },
                "-=.15"
            )

            .from(
                ".stackly-login-submit",
                {
                    y: 12,
                    opacity: 1,
                    duration: .4
                },
                "-=.15"
            );


        gsap.to(
            ".stackly-login-floating-one",
            {
                y: -12,
                rotation: 6,
                duration: 2.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        );


        gsap.to(
            ".stackly-login-floating-two",
            {
                y: 12,
                rotation: -7,
                duration: 2.8,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        );


        gsap.to(
            ".stackly-login-brand-mark",
            {
                y: -3,
                duration: 1.8,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        );

    }

});