document.addEventListener("DOMContentLoaded", function () {

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".contact-breadcrumb-eyebrow", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  });

  gsap.from(".contact-breadcrumb-content h1", {
    y: 55,
    opacity: 0,
    duration: 1,
    delay: 0.15,
    ease: "power3.out"
  });

  gsap.from(".contact-breadcrumb-content p", {
    y: 35,
    opacity: 0,
    duration: 0.8,
    delay: 0.3,
    ease: "power3.out"
  });

  gsap.from(".contact-breadcrumb-navigation", {
    y: 25,
    opacity: 0,
    duration: 0.7,
    delay: 0.45,
    ease: "power3.out"
  });

  gsap.from(".contact-breadcrumb-decoration", {
    x: 100,
    opacity: 0,
    scale: 0.85,
    duration: 1.2,
    delay: 0.2,
    ease: "power3.out"
  });

  gsap.to(".orbit-main", {
    rotation: 360,
    duration: 25,
    repeat: -1,
    ease: "none"
  });

  gsap.to(".orbit-second", {
    rotation: -360,
    duration: 18,
    repeat: -1,
    ease: "none"
  });

  gsap.to(".floating-top", {
    y: -12,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  gsap.to(".floating-right", {
    y: 12,
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  gsap.to(".floating-bottom", {
    y: -9,
    duration: 2.2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  gsap.to(".contact-breadcrumb-shape-three", {
    rotation: 360,
    duration: 20,
    repeat: -1,
    ease: "none"
  });

});

document.addEventListener("DOMContentLoaded", function () {

  gsap.registerPlugin(ScrollTrigger);

  const form = document.getElementById("contactConnectForm");
  const nameInput = document.getElementById("contactConnectName");
  const emailInput = document.getElementById("contactConnectEmail");
  const phoneInput = document.getElementById("contactConnectPhone");
  const eventInput = document.getElementById("contactConnectEvent");
  const messageInput = document.getElementById("contactConnectMessage");
  const counter = document.querySelector(".contact-connect-counter");
  const submitButton = document.querySelector(".contact-connect-submit");
  const successMessage = document.getElementById("contactConnectSuccess");


  const animationSettings = gsap.matchMedia();


  animationSettings.add("(min-width: 651px)", function () {

    gsap.from(".contact-connect-heading", {
      scrollTrigger: {
        trigger: ".contact-connect-section",
        start: "top 82%",
        once: true
      },
      y: 55,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });


    gsap.from(".contact-connect-card", {
      scrollTrigger: {
        trigger: ".contact-connect-cards",
        start: "top 82%",
        once: true
      },
      x: -45,
      opacity: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: "power3.out"
    });


    gsap.from(".contact-connect-follow", {
      scrollTrigger: {
        trigger: ".contact-connect-follow",
        start: "top 90%",
        once: true
      },
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out"
    });


    gsap.from(".contact-connect-form-box", {
      scrollTrigger: {
        trigger: ".contact-connect-form-box",
        start: "top 82%",
        once: true
      },
      x: 55,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out"
    });

  });


  animationSettings.add("(max-width: 650px)", function () {

    gsap.from(".contact-connect-heading", {
      scrollTrigger: {
        trigger: ".contact-connect-section",
        start: "top 88%",
        once: true
      },
      y: 35,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });


    gsap.from(".contact-connect-card", {
      scrollTrigger: {
        trigger: ".contact-connect-cards",
        start: "top 88%",
        once: true
      },
      y: 35,
      x: 0,
      opacity: 0,
      duration: 0.65,
      stagger: 0.1,
      ease: "power3.out"
    });


    gsap.from(".contact-connect-follow", {
      scrollTrigger: {
        trigger: ".contact-connect-follow",
        start: "top 92%",
        once: true
      },
      y: 20,
      x: 0,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out"
    });


    gsap.from(".contact-connect-form-box", {
      scrollTrigger: {
        trigger: ".contact-connect-form-box",
        start: "top 88%",
        once: true
      },
      y: 40,
      x: 0,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });

  });


  gsap.from(".contact-connect-field", {
    scrollTrigger: {
      trigger: "#contactConnectForm",
      start: "top 75%",
      once: true
    },
    y: 20,
    x: 0,
    opacity: 0,
    duration: 0.5,
    stagger: 0.07,
    ease: "power2.out"
  });


  gsap.to(".contact-connect-form-icon", {
    y: -5,
    rotation: 5,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });


  function setError(field, message) {

    const fieldWrapper = field.closest(".contact-connect-field");
    const errorElement = fieldWrapper.querySelector(".contact-connect-error");

    fieldWrapper.classList.remove("field-success");
    fieldWrapper.classList.add("field-error");

    errorElement.textContent = message;
  }


  function setSuccess(field) {

    const fieldWrapper = field.closest(".contact-connect-field");

    fieldWrapper.classList.remove("field-error");
    fieldWrapper.classList.add("field-success");
  }


  function validateName() {

    const value = nameInput.value.trim();

    if (value === "") {
      setError(nameInput, "Please enter your name.");
      return false;
    }

    if (value.length < 2) {
      setError(nameInput, "Name must contain at least 2 characters.");
      return false;
    }

    if (!/^[A-Za-zÀ-ÿ\s.'-]+$/.test(value)) {
      setError(nameInput, "Please enter a valid name.");
      return false;
    }

    setSuccess(nameInput);
    return true;
  }


  function validateEmail() {

    const value = emailInput.value.trim();

    if (value === "") {
      setError(emailInput, "Please enter your email address.");
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!emailPattern.test(value)) {
      setError(emailInput, "Please enter a valid email address.");
      return false;
    }

    setSuccess(emailInput);
    return true;
  }


  function validatePhone() {

    const value = phoneInput.value.trim();

    if (value === "") {
      setError(phoneInput, "Please enter your phone number.");
      return false;
    }

    const cleanedPhone = value.replace(/[\s()-]/g, "");

    if (!/^\+?[0-9]{10,15}$/.test(cleanedPhone)) {
      setError(
        phoneInput,
        "Enter a valid phone number with 10 to 15 digits."
      );
      return false;
    }

    setSuccess(phoneInput);
    return true;
  }


  function validateEvent() {

    if (eventInput.value === "") {
      setError(eventInput, "Please select an event type.");
      return false;
    }

    setSuccess(eventInput);
    return true;
  }


  function validateMessage() {

    const value = messageInput.value.trim();

    if (value === "") {
      setError(messageInput, "Please tell us about your event.");
      return false;
    }

    if (value.length < 20) {
      setError(
        messageInput,
        "Please enter at least 20 characters."
      );
      return false;
    }

    setSuccess(messageInput);
    return true;
  }


  messageInput.addEventListener("input", function () {

    if (messageInput.value.length > 500) {
      messageInput.value = messageInput.value.substring(0, 500);
    }

    counter.textContent =
      `${messageInput.value.length} / 500`;

    if (
      messageInput
        .closest(".contact-connect-field")
        .classList.contains("field-error")
    ) {
      validateMessage();
    }

  });


  nameInput.addEventListener("blur", validateName);

  emailInput.addEventListener("blur", validateEmail);

  phoneInput.addEventListener("blur", validatePhone);

  eventInput.addEventListener("change", validateEvent);

  messageInput.addEventListener("blur", validateMessage);


  nameInput.addEventListener("input", function () {

    if (
      nameInput
        .closest(".contact-connect-field")
        .classList.contains("field-error")
    ) {
      validateName();
    }

  });


  emailInput.addEventListener("input", function () {

    if (
      emailInput
        .closest(".contact-connect-field")
        .classList.contains("field-error")
    ) {
      validateEmail();
    }

  });


  phoneInput.addEventListener("input", function () {

    phoneInput.value =
      phoneInput.value.replace(/[^0-9+\s()-]/g, "");

    if (
      phoneInput
        .closest(".contact-connect-field")
        .classList.contains("field-error")
    ) {
      validatePhone();
    }

  });


  form.addEventListener("submit", function (event) {

    event.preventDefault();

    successMessage.classList.remove("show");

    const nameValid = validateName();
    const emailValid = validateEmail();
    const phoneValid = validatePhone();
    const eventValid = validateEvent();
    const messageValid = validateMessage();


    if (
      !nameValid ||
      !emailValid ||
      !phoneValid ||
      !eventValid ||
      !messageValid
    ) {

      const firstError = form.querySelector(
        ".field-error input, .field-error select, .field-error textarea"
      );

      if (firstError) {
        firstError.focus();
      }

      return;
    }


    submitButton.classList.add("is-loading");


    setTimeout(function () {

      submitButton.classList.remove("is-loading");

      successMessage.classList.add("show");

      gsap.fromTo(
        successMessage,
        {
          y: 10,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out"
        }
      );


      setTimeout(function () {
        window.location.href = "error.html";
      }, 1200);

    }, 1200);

  });

});
const contactMapSection = document.querySelector(".contact-map-section");

if (contactMapSection) {

  gsap.from(".contact-map-header", {
    scrollTrigger: {
      trigger: ".contact-map-section",
      start: "top 82%",
      once: true
    },
    y: 45,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out"
  });


  gsap.from(".contact-map-info", {
    scrollTrigger: {
      trigger: ".contact-map-layout",
      start: "top 82%",
      once: true
    },
    x: -50,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out"
  });


  gsap.from(".contact-map-wrapper", {
    scrollTrigger: {
      trigger: ".contact-map-layout",
      start: "top 82%",
      once: true
    },
    x: 50,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out"
  });


  gsap.from(".contact-map-detail", {
    scrollTrigger: {
      trigger: ".contact-map-details",
      start: "top 88%",
      once: true
    },
    y: 20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.12,
    ease: "power2.out"
  });


  gsap.to(".contact-map-pin-icon", {
    y: -5,
    duration: 1.8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });


  gsap.to(".contact-map-marker-icon", {
    y: -7,
    duration: 1.2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

}

document.addEventListener("DOMContentLoaded", function () {

  gsap.registerPlugin(ScrollTrigger);


  const faqSection = document.querySelector(".contact-faq-section");

  if (!faqSection) {
    return;
  }


  const faqItems = document.querySelectorAll(
    ".contact-faq-item"
  );

  const faqButtons = document.querySelectorAll(
    ".contact-faq-question"
  );

  const faqSearch = document.getElementById(
    "contactFaqSearch"
  );

  const faqCount = document.getElementById(
    "contactFaqCount"
  );

  const faqEmpty = document.getElementById(
    "contactFaqEmpty"
  );


  function closeFaq(item) {

    item.classList.remove("active");

    const button = item.querySelector(
      ".contact-faq-question"
    );

    if (button) {
      button.setAttribute(
        "aria-expanded",
        "false"
      );
    }

  }


  function openFaq(item) {

    faqItems.forEach(function (otherItem) {

      if (otherItem !== item) {
        closeFaq(otherItem);
      }

    });


    item.classList.add("active");

    const button = item.querySelector(
      ".contact-faq-question"
    );

    if (button) {
      button.setAttribute(
        "aria-expanded",
        "true"
      );
    }

  }


  faqButtons.forEach(function (button) {

    button.addEventListener("click", function () {

      const item =
        button.closest(".contact-faq-item");

      if (!item) {
        return;
      }


      const isOpen =
        item.classList.contains("active");


      if (isOpen) {

        closeFaq(item);

      } else {

        openFaq(item);

      }


      setTimeout(function () {
        ScrollTrigger.refresh();
      }, 500);

    });

  });


  function updateFaqCount() {

    let visibleCount = 0;


    faqItems.forEach(function (item) {

      if (item.style.display !== "none") {
        visibleCount++;
      }

    });


    if (faqCount) {

      faqCount.textContent =
        String(visibleCount).padStart(2, "0");

    }

  }


  function filterFaqs() {

    if (!faqSearch) {
      return;
    }


    const searchText =
      faqSearch.value.trim().toLowerCase();


    let visibleCount = 0;


    faqItems.forEach(function (item) {

      const questionElement =
        item.querySelector(
          ".contact-faq-question-text"
        );

      const answerElement =
        item.querySelector(
          ".contact-faq-answer-inner"
        );


      const questionText =
        questionElement
          ? questionElement.textContent.toLowerCase()
          : "";


      const answerText =
        answerElement
          ? answerElement.textContent.toLowerCase()
          : "";


      const matches =
        searchText === "" ||
        questionText.includes(searchText) ||
        answerText.includes(searchText);


      if (matches) {

        item.style.display = "";

        visibleCount++;

      } else {

        item.style.display = "none";

        closeFaq(item);

      }

    });


    if (faqEmpty) {

      if (visibleCount === 0) {

        faqEmpty.classList.add("show");

      } else {

        faqEmpty.classList.remove("show");

      }

    }


    if (faqCount) {

      faqCount.textContent =
        String(visibleCount).padStart(2, "0");

    }


    setTimeout(function () {
      ScrollTrigger.refresh();
    }, 50);

  }


  if (faqSearch) {

    faqSearch.addEventListener(
      "input",
      filterFaqs
    );

  }


  faqItems.forEach(function (item) {

    gsap.set(item, {
      x: 0
    });

  });


  const desktopQuery =
    window.matchMedia("(min-width: 651px)");


  function createFaqAnimation() {

    faqItems.forEach(function (item) {

      gsap.killTweensOf(item);

      gsap.set(item, {
        x: 0,
        clearProps: "transform"
      });

    });


    faqItems.forEach(function (item) {

      gsap.set(item, {
        x: 0
      });

    });


    if (desktopQuery.matches) {

      gsap.from(faqItems, {

        scrollTrigger: {
          trigger: ".contact-faq-list",
          start: "top 82%",
          once: true
        },

        x: 0,
        y: 30,
        opacity: 0,

        duration: 0.6,

        stagger: {
          each: 0.08
        },

        ease: "power3.out"

      });

    } else {

      gsap.from(faqItems, {

        scrollTrigger: {
          trigger: ".contact-faq-list",
          start: "top 88%",
          once: true
        },

        x: 0,
        y: 25,
        opacity: 0,

        duration: 0.55,

        stagger: {
          each: 0.07
        },

        ease: "power3.out"

      });

    }

  }


  createFaqAnimation();


  gsap.from(".contact-faq-heading", {

    scrollTrigger: {
      trigger: faqSection,
      start: "top 85%",
      once: true
    },

    y: 35,
    opacity: 0,

    duration: 0.8,

    ease: "power3.out"

  });


  gsap.from(".contact-faq-visual", {

    scrollTrigger: {
      trigger: ".contact-faq-layout",
      start: "top 85%",
      once: true
    },

    x: -35,
    y: 0,
    opacity: 0,

    duration: 0.8,

    ease: "power3.out"

  });


  gsap.from(".contact-faq-bottom", {

    scrollTrigger: {
      trigger: ".contact-faq-bottom",
      start: "top 90%",
      once: true
    },

    y: 25,
    x: 0,
    opacity: 0,

    duration: 0.7,

    ease: "power3.out"

  });


  const ringOne =
    document.querySelector(".faq-ring-one");

  const ringTwo =
    document.querySelector(".faq-ring-two");


  if (ringOne) {

    gsap.to(ringOne, {

      rotation: 360,

      duration: 25,

      repeat: -1,

      ease: "none"

    });

  }


  if (ringTwo) {

    gsap.to(ringTwo, {

      rotation: -360,

      duration: 18,

      repeat: -1,

      ease: "none"

    });

  }


  const floatOne =
    document.querySelector(".faq-float-one");

  const floatTwo =
    document.querySelector(".faq-float-two");

  const floatThree =
    document.querySelector(".faq-float-three");


  if (floatOne) {

    gsap.to(floatOne, {

      y: -9,

      duration: 2,

      repeat: -1,

      yoyo: true,

      ease: "sine.inOut"

    });

  }


  if (floatTwo) {

    gsap.to(floatTwo, {

      y: 9,

      duration: 2.4,

      repeat: -1,

      yoyo: true,

      ease: "sine.inOut"

    });

  }


  if (floatThree) {

    gsap.to(floatThree, {

      y: -8,

      duration: 2.2,

      repeat: -1,

      yoyo: true,

      ease: "sine.inOut"

    });

  }


  const questionIcon =
    document.querySelector(
      ".contact-faq-question-icon"
    );


  if (questionIcon) {

    gsap.to(questionIcon, {

      y: -6,

      rotation: 4,

      duration: 2.4,

      repeat: -1,

      yoyo: true,

      ease: "sine.inOut"

    });

  }


  updateFaqCount();


  window.addEventListener(
    "resize",
    function () {

      faqItems.forEach(function (item) {

        gsap.set(item, {
          x: 0
        });

      });


      ScrollTrigger.refresh();

    }
  );


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