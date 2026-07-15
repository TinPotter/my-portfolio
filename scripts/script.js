gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
    const timeline = gsap.timeline();

    timeline.from("header", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    timeline.from(".bubble-letter", {
        scale: 0,
        y: 100,
        rotation: 30,
        stagger: 0.08,
        duration: 1.2,
        ease: "back.out(1.7)"
    }, "-=0.6");

    timeline.from(".hero-main-title", {
        scale: 0.95,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out"
    }, "-=1");

    timeline.from(".sparkle", {
        scale: 0,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "elastic.out(1, 0.5)"
    }, "-=0.8");
});

gsap.from(".polaroid", {
    scrollTrigger: {
        trigger: ".polaroid",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    y: 80,
    opacity: 0,
    stagger: 0.15,
    duration: 1.2,
    ease: "power3.out"
});

gsap.from(".phone-frame", {
    scrollTrigger: {
        trigger: ".phone-frame",
        start: "top 75%",
        toggleActions: "play none none none"
    },
    scale: 0.9,
    y: 60,
    opacity: 0,
    duration: 1.5,
    ease: "power4.out"
});

gsap.from(".service-card", {
    scrollTrigger: {
        trigger: ".service-card",
        start: "top 85%"
    },
    y: 40,
    opacity: 0,
    stagger: 0.1,
    duration: 1,
    ease: "power2.out"
});
