document.addEventListener("DOMContentLoaded", function () {

    const registerForm =
        document.getElementById("registerForm");

    const fullName =
        document.getElementById("fullName");

    const email =
        document.getElementById("registerEmail");

    const phone =
        document.getElementById("phoneNumber");

    const organization =
        document.getElementById("organization");

    const attendeeType =
        document.getElementById("attendeeType");

    const password =
        document.getElementById("registerPassword");

    const confirmPassword =
        document.getElementById("confirmPassword");

    const terms =
        document.getElementById("termsCheck");

    const message =
        document.getElementById("registerMessage");

    const submitButton =
        document.getElementById("registerSubmit");


    const passwordButtons =
        document.querySelectorAll(
            ".register-password-toggle"
        );


    passwordButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const targetId =
                    button.dataset.target;

                const target =
                    document.getElementById(targetId);

                const icon =
                    button.querySelector("i");


                if (target.type === "password") {

                    target.type = "text";

                    icon.classList.remove(
                        "bi-eye"
                    );

                    icon.classList.add(
                        "bi-eye-slash"
                    );

                    button.setAttribute(
                        "aria-label",
                        "Hide password"
                    );

                } else {

                    target.type = "password";

                    icon.classList.remove(
                        "bi-eye-slash"
                    );

                    icon.classList.add(
                        "bi-eye"
                    );

                    button.setAttribute(
                        "aria-label",
                        "Show password"
                    );

                }

            }
        );

    });


    function setError(id, text) {

        const error =
            document.getElementById(id);

        error.textContent = text;

    }


    function clearErrors() {

        document
            .querySelectorAll(".field-error")
            .forEach(function (error) {

                error.textContent = "";

            });


        document
            .querySelectorAll(
                ".register-input input, .register-input select"
            )
            .forEach(function (field) {

                field.classList.remove("valid");
                field.classList.remove("invalid");

            });


        message.textContent = "";
        message.className = "register-message";

    }


    function markField(field, valid) {

        field.classList.remove(
            "valid",
            "invalid"
        );

        field.classList.add(
            valid ? "valid" : "invalid"
        );

    }


    registerForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            clearErrors();

            let valid = true;


            const nameValue =
                fullName.value.trim();


            if (nameValue.length < 3) {

                setError(
                    "nameError",
                    "Please enter your full name."
                );

                markField(
                    fullName,
                    false
                );

                valid = false;

            } else if (!/^[A-Za-z\s.'-]+$/.test(nameValue)) {

                setError(
                    "nameError",
                    "Please enter a valid name."
                );

                markField(
                    fullName,
                    false
                );

                valid = false;

            } else {

                markField(
                    fullName,
                    true
                );

            }


            const emailValue =
                email.value.trim();


            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (!emailPattern.test(emailValue)) {

                setError(
                    "emailError",
                    "Please enter a valid email address."
                );

                markField(
                    email,
                    false
                );

                valid = false;

            } else {

                markField(
                    email,
                    true
                );

            }


            const phoneValue =
                phone.value.trim();


            const phonePattern =
                /^[0-9+\-\s()]{10,16}$/;


            if (!phonePattern.test(phoneValue)) {

                setError(
                    "phoneError",
                    "Please enter a valid phone number."
                );

                markField(
                    phone,
                    false
                );

                valid = false;

            } else {

                markField(
                    phone,
                    true
                );

            }


            const organizationValue =
                organization.value.trim();


            if (organizationValue.length < 2) {

                setError(
                    "organizationError",
                    "Please enter your organization."
                );

                markField(
                    organization,
                    false
                );

                valid = false;

            } else {

                markField(
                    organization,
                    true
                );

            }


            if (!attendeeType.value) {

                setError(
                    "attendeeError",
                    "Please select your attendee type."
                );

                markField(
                    attendeeType,
                    false
                );

                valid = false;

            } else {

                markField(
                    attendeeType,
                    true
                );

            }


            if (password.value.length < 8) {

                setError(
                    "passwordError",
                    "Password must contain at least 8 characters."
                );

                markField(
                    password,
                    false
                );

                valid = false;

            } else if (
                !/[A-Za-z]/.test(password.value) ||
                !/[0-9]/.test(password.value)
            ) {

                setError(
                    "passwordError",
                    "Use at least one letter and one number."
                );

                markField(
                    password,
                    false
                );

                valid = false;

            } else {

                markField(
                    password,
                    true
                );

            }


            if (
                confirmPassword.value !==
                password.value ||
                confirmPassword.value === ""
            ) {

                setError(
                    "confirmError",
                    "Passwords do not match."
                );

                markField(
                    confirmPassword,
                    false
                );

                valid = false;

            } else {

                markField(
                    confirmPassword,
                    true
                );

            }


            if (!terms.checked) {

                setError(
                    "termsError",
                    "Please accept the Terms & Conditions."
                );

                valid = false;

            }


            if (!valid) {

                message.textContent =
                    "Please correct the highlighted fields.";

                message.classList.add("error");


                if (typeof gsap !== "undefined") {

                    gsap.fromTo(
                        ".register-card",
                        {
                            x: -5
                        },
                        {
                            x: 5,
                            duration: .08,
                            repeat: 5,
                            yoyo: true,
                            clearProps: "x"
                        }
                    );

                }

                return;

            }


            message.textContent =
                "Account created successfully!";

            message.classList.add("success");


            submitButton.disabled = true;


            if (typeof gsap !== "undefined") {

                gsap.timeline()

                    .to(
                        submitButton,
                        {
                            scale: .96,
                            duration: .12
                        }
                    )

                    .to(
                        submitButton,
                        {
                            scale: 1,
                            duration: .35,
                            ease: "back.out(2)"
                        }
                    );

            }


            submitButton.innerHTML =
                '<i class="bi bi-check2"></i> Account Created';


            setTimeout(function () {

                window.location.href =
                    "login.html";

            }, 1200);

        }
    );


    if (typeof gsap !== "undefined") {

        const timeline =
            gsap.timeline({
                defaults: {
                    ease: "power3.out"
                }
            });


        timeline

            .from(
                ".register-card",
                {
                    y: 35,
                    opacity: 0,
                    scale: .98,
                    duration: .7
                }
            )

            .from(
                ".register-logo",
                {
                    y: 12,
                    opacity: 0,
                    duration: .4
                },
                "-=.35"
            )

            .from(
                ".register-header",
                {
                    y: 15,
                    opacity: 1,
                    duration: .4
                },
                "-=.25"
            )

            .from(
                ".register-form-group",
                {
                    y: 10,
                    opacity: 1,
                    duration: .3,
                    stagger: .05
                },
                "-=.18"
            )

            .from(
                ".register-terms",
                {
                    y: 8,
                    opacity: 1,
                    duration: .3
                },
                "-=.15"
            )

            .from(
                ".register-submit",
                {
                    y: 10,
                    opacity: 1,
                    duration: .35
                },
                "-=.15"
            );


        gsap.to(
            ".register-decoration-one",
            {
                rotation: 8,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        );


        gsap.to(
            ".register-decoration-two",
            {
                y: -12,
                duration: 2.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        );

    }

});