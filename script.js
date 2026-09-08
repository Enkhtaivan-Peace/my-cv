/* =========================================================
   GSAP
   ========================================================= */

gsap.registerPlugin(
    ScrollTrigger,
    ScrollToPlugin
);


/* =========================================================
   HERO ANIMATION
   ========================================================= */

const heroTimeline = gsap.timeline({
    defaults: {
        ease: "power3.out"
    }
});

heroTimeline
    .from(".hero-eyebrow", {
        y: 30,
        opacity: 0,
        duration: 0.8
    })
    .from(".hero-title", {
        y: 70,
        opacity: 0,
        duration: 1.1
    }, "-=0.45")
    .from(".hero-description", {
        y: 30,
        opacity: 0,
        duration: 0.8
    }, "-=0.55")
    .from(".hero-actions", {
        y: 25,
        opacity: 0,
        duration: 0.7
    }, "-=0.5")
    .from(".hero-visual", {
        x: 50,
        opacity: 0,
        duration: 1
    }, "-=0.8")
    .from(".hero-meta", {
        y: 25,
        opacity: 0,
        duration: 0.7
    }, "-=0.6");


/* =========================================================
   SECTION REVEALS
   ========================================================= */

gsap.utils.toArray(".section").forEach((section) => {
    const elements = section.querySelectorAll(
        ".section-label, .section-title, .section-description"
    );

    if (!elements.length) return;

    gsap.from(elements, {
        y: 45,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",

        scrollTrigger: {
            trigger: section,
            start: "top 78%",
            once: true
        }
    });
});


/* =========================================================
   ABOUT ANIMATION
   ========================================================= */

gsap.from(".about-lead", {
    x: -40,
    opacity: 0,
    duration: 1,

    scrollTrigger: {
        trigger: ".about",
        start: "top 70%",
        once: true
    }
});

gsap.from(".about-text", {
    x: 40,
    opacity: 0,
    duration: 1,

    scrollTrigger: {
        trigger: ".about",
        start: "top 70%",
        once: true
    }
});

gsap.from(".about-fact", {
    y: 30,
    opacity: 0,
    duration: 0.7,
    stagger: 0.08,

    scrollTrigger: {
        trigger: ".about-facts",
        start: "top 80%",
        once: true
    }
});


/* =========================================================
   EXPERIENCE ANIMATION
   ========================================================= */

gsap.from(".career-item", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.12,

    scrollTrigger: {
        trigger: ".career-list",
        start: "top 75%",
        once: true
    }
});


/* =========================================================
   EXPERTISE ANIMATION
   ========================================================= */

gsap.from(".expertise-card", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.12,

    scrollTrigger: {
        trigger: ".expertise-grid",
        start: "top 75%",
        once: true
    }
});


/* =========================================================
   STACK ANIMATION
   ========================================================= */

gsap.from(".stack-row", {
    y: 30,
    opacity: 0,
    duration: 0.7,
    stagger: 0.08,

    scrollTrigger: {
        trigger: ".stack-list",
        start: "top 75%",
        once: true
    }
});


/* =========================================================
   PROJECT ANIMATION
   ========================================================= */

gsap.from(".project-card", {
    y: 45,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,

    scrollTrigger: {
        trigger: ".projects-grid",
        start: "top 75%",
        once: true
    }
});


/* =========================================================
   CONTACT ANIMATION
   ========================================================= */

gsap.from(".contact-title", {
    y: 60,
    opacity: 0,
    duration: 1,

    scrollTrigger: {
        trigger: ".contact",
        start: "top 75%",
        once: true
    }
});

gsap.from(".contact-description, .contact-link", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,

    scrollTrigger: {
        trigger: ".contact-links",
        start: "top 80%",
        once: true
    }
});


/* =========================================================
   PROFILE PARALLAX
   ========================================================= */

const profileImage = document.querySelector(".profile-image");

if (profileImage) {
    gsap.to(profileImage, {
        yPercent: 8,
        ease: "none",

        scrollTrigger: {
            trigger: ".hero-visual",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });
}


/* =========================================================
   SMOOTH NAVIGATION
   ========================================================= */

document.querySelectorAll(".main-nav a").forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        const targetId = link.getAttribute("href");
        const target = document.querySelector(targetId);

        if (!target) return;

        gsap.to(window, {
            duration: 1.2,

            scrollTo: {
                y: target,
                offsetY: 80
            },

            ease: "power3.inOut"
        });
    });
});


/* =========================================================
   OTHER ANCHOR LINKS
   ========================================================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
        const targetId = link.getAttribute("href");

        if (
            !targetId ||
            targetId === "#" ||
            link.closest(".main-nav")
        ) {
            return;
        }

        const target = document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        gsap.to(window, {
            duration: 1.2,

            scrollTo: {
                y: target,
                offsetY: 80
            },

            ease: "power3.inOut"
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    if (
        typeof gsap === "undefined" ||
        typeof ScrollTrigger === "undefined"
    ) {
        return;
    }

    gsap.registerPlugin(ScrollTrigger);


    /* =========================================================
       CAREER INTRO
    ========================================================== */

    const careerIntro = document.querySelector(".career-intro");

    if (careerIntro) {
        gsap.from(".career-intro-meta", {
            scrollTrigger: {
                trigger: careerIntro,
                start: "top 82%",
                toggleActions: "play reverse play reverse",
            },

            y: 25,
            opacity: 0,

            duration: 0.8,

            ease: "power3.out",
        });


        gsap.from(".career-title", {
            scrollTrigger: {
                trigger: careerIntro,
                start: "top 78%",
                toggleActions: "play reverse play reverse",
            },

            y: 60,
            opacity: 0,

            duration: 1.1,

            ease: "power4.out",
        });


        gsap.from(".career-description", {
            scrollTrigger: {
                trigger: careerIntro,
                start: "top 72%",
                toggleActions: "play reverse play reverse",
            },

            y: 25,
            opacity: 0,

            duration: 0.8,

            delay: 0.15,

            ease: "power3.out",
        });
    }


    /* =========================================================
       TIMELINE LINE
    ========================================================== */

    const timeline = document.querySelector(".career-timeline");
    const lineProgress = document.querySelector(".career-line-progress");

    if (timeline && lineProgress) {
        gsap.to(lineProgress, {
            scaleY: 1,

            ease: "none",

            scrollTrigger: {
                trigger: timeline,

                start: "top 65%",
                end: "bottom 75%",

                scrub: 1.2,
            },
        });
    }


    /* =========================================================
       CAREER ITEMS
    ========================================================== */

    const careerItems = gsap.utils.toArray(
        "[data-career-item]"
    );

    careerItems.forEach((item, index) => {

        const card = item.querySelector(".career-card");
        const divider = item.querySelector(".career-divider");
        const text = item.querySelector(".career-text");
        const arrow = item.querySelector(".career-card-arrow");
        const technologies = item.querySelectorAll(".career-tech span");
        const point = item.querySelector(".career-point");

        if (!card) {
            return;
        }


        /* -------------------------------------------------------
           INITIAL POSITION
        -------------------------------------------------------- */

        const direction =
            item.classList.contains("career-item-left")
                ? -1
                : 1;


        /* -------------------------------------------------------
           CARD REVEAL
        -------------------------------------------------------- */

        gsap.to(card, {
            y: 0,
            opacity: 1,

            duration: 1.05,

            ease: "power4.out",

            scrollTrigger: {
                trigger: item,

                start: "top 72%",

                toggleActions:
                    "play reverse play reverse",
            },
        });


        /* -------------------------------------------------------
           CARD TOP BORDER
        -------------------------------------------------------- */

        gsap.to(card, {
            "--career-border-progress": 1,
            duration: 0.8,
        });


        gsap.to(card, {
            scrollTrigger: {
                trigger: item,
                start: "top 72%",
                toggleActions: "play reverse play reverse",
            },

            duration: 0.9,

            ease: "power3.out",

            onStart() {
                gsap.fromTo(
                    card,
                    {
                        "--career-border-scale": 0,
                    },
                    {
                        "--career-border-scale": 1,
                        duration: 0.9,
                        ease: "power3.out",
                    }
                );
            },
        });


        /* -------------------------------------------------------
           DIVIDER
        -------------------------------------------------------- */

        if (divider) {
            gsap.to(divider, {
                scaleX: 1,

                duration: 0.7,

                delay: 0.25,

                ease: "power3.out",

                scrollTrigger: {
                    trigger: item,

                    start: "top 68%",

                    toggleActions:
                        "play reverse play reverse",
                },
            });
        }


        /* -------------------------------------------------------
           DESCRIPTION
        -------------------------------------------------------- */

        if (text) {
            gsap.to(text, {
                y: 0,
                opacity: 1,

                duration: 0.7,

                delay: 0.35,

                ease: "power3.out",

                scrollTrigger: {
                    trigger: item,

                    start: "top 66%",

                    toggleActions:
                        "play reverse play reverse",
                },
            });
        }


        /* -------------------------------------------------------
           TECHNOLOGY TAGS
        -------------------------------------------------------- */

        if (technologies.length) {
            gsap.to(technologies, {
                y: 0,
                opacity: 1,

                duration: 0.5,

                delay: 0.5,

                stagger: 0.07,

                ease: "power3.out",

                scrollTrigger: {
                    trigger: item,

                    start: "top 64%",

                    toggleActions:
                        "play reverse play reverse",
                },
            });
        }


        /* -------------------------------------------------------
           ARROW
        -------------------------------------------------------- */

        if (arrow) {
            gsap.to(arrow, {
                x: 0,
                y: 0,
                opacity: 1,

                duration: 0.6,

                delay: 0.25,

                ease: "back.out(1.7)",

                scrollTrigger: {
                    trigger: item,

                    start: "top 68%",

                    toggleActions:
                        "play reverse play reverse",
                },
            });
        }


        /* -------------------------------------------------------
           ACTIVE ITEM STATE
        -------------------------------------------------------- */

        ScrollTrigger.create({
            trigger: item,

            start: "top 58%",
            end: "bottom 42%",

            onEnter() {
                item.classList.add("is-active");
            },

            onEnterBack() {
                item.classList.add("is-active");
            },

            onLeave() {
                item.classList.remove("is-active");
            },

            onLeaveBack() {
                item.classList.remove("is-active");
            },
        });


        /* -------------------------------------------------------
           CARD PARALLAX
        -------------------------------------------------------- */

        gsap.to(card, {
            yPercent: index % 2 === 0 ? -4 : 4,

            ease: "none",

            scrollTrigger: {
                trigger: item,

                start: "top bottom",
                end: "bottom top",

                scrub: 1,
            },
        });
    });


    /* =========================================================
       CAREER END
    ========================================================== */

    const careerEnd = document.querySelector(".career-end");

    if (careerEnd) {

        gsap.to(".career-end-line", {
            scaleX: 1,

            duration: 0.7,

            ease: "power3.out",

            scrollTrigger: {
                trigger: careerEnd,

                start: "top 85%",

                toggleActions:
                    "play reverse play reverse",
            },
        });


        gsap.to(".career-end-label", {
            opacity: 1,

            y: 0,

            duration: 0.7,

            delay: 0.15,

            ease: "power3.out",

            scrollTrigger: {
                trigger: careerEnd,

                start: "top 85%",

                toggleActions:
                    "play reverse play reverse",
            },
        });
    }
});