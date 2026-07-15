gsap.registerPlugin(ScrollTrigger);
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
/* ---------- mobile nav ---------- */
const navToggle = document.getElementById("navToggle");
const mobileNav = document.getElementById("mobileNav");
navToggle.addEventListener("click", () => {
    const open = mobileNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", open);
    mobileNav.setAttribute("aria-hidden", !open);
});
mobileNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        mobileNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", false);
        mobileNav.setAttribute("aria-hidden", true);
    });
});
/* ---------- hero + scroll reveals ---------- */
if (!prefersReducedMotion) {
    window.addEventListener("load", () => {
        const heroTl = gsap.timeline();
        heroTl
            .from("header", { y: -50, opacity: 0, duration: 1, ease: "power3.out" })
            .from(".bubble-letter", { scale: 0, y: 100, rotation: 30, stagger: 0.08, duration: 1.2, ease: "back.out(1.7)" }, "-=0.6")
            .from(".hero-main-title", { scale: 0.95, opacity: 0, duration: 1.5, ease: "power4.out" }, "-=1")
            .from(".hero-sub, .scroll-cue", { opacity: 0, y: 20, duration: 1, stagger: 0.15 }, "-=0.6");
    });
    gsap.from(".code-card", {
        scrollTrigger: { trigger: "#work", start: "top 75%" },
        y: 60, opacity: 0, stagger: 0.12, duration: 1, ease: "power3.out"
    });
    gsap.from(".terminal", {
        scrollTrigger: { trigger: ".terminal", start: "top 80%" },
        scale: 0.92, y: 40, opacity: 0, duration: 1.2, ease: "power4.out",
        onComplete: typeTerminal
    });
    gsap.from(".service-card", {
        scrollTrigger: { trigger: "#services", start: "top 80%" },
        y: 40, opacity: 0, stagger: 0.1, duration: 1, ease: "power2.out"
    });
    gsap.from(".quote-card", {
        scrollTrigger: { trigger: "#testimonials", start: "top 80%" },
        y: 40, opacity: 0, stagger: 0.15, duration: 1, ease: "power2.out"
    });
} else {
    typeTerminal();
}
/* ---------- terminal typewriter (signature element) ---------- */
const TERMINAL_LINES = [
    { prompt: "bad_bun@portfolio:~$ ", text: "whoami" },
    { prompt: "> ", text: "game & web developer" },
    { prompt: "bad_bun@portfolio:~$ ", text: "ls skills/" },
    { prompt: "> ", text: "Luau  Python  JS  Java  C++" },
    { prompt: "bad_bun@portfolio:~$ ", text: "status" },
    { prompt: "> ", text: "shipping. always." }
];
function typeTerminal() {
    const el = document.getElementById("terminalBody");
    if (!el || el.dataset.typed) return;
    el.dataset.typed = "true";
    if (prefersReducedMotion) {
        el.textContent = TERMINAL_LINES.map(l => l.prompt + l.text).join("\n");
        return;
    }
    let lineIndex = 0;
    let charIndex = 0;
    let printed = "";
    const typeChar = () => {
        const line = TERMINAL_LINES[lineIndex];
        const full = line.prompt + line.text;
        const target = full.slice(0, charIndex + 1);
        el.textContent = printed + target;
        charIndex += 1;
        if (charIndex < full.length) {
            setTimeout(typeChar, 18);
            return;
        }
        printed += full + "\n";
        lineIndex += 1;
        charIndex = 0;
        if (lineIndex < TERMINAL_LINES.length) {
            setTimeout(typeChar, 280);
        }
    };
    typeChar();
}
