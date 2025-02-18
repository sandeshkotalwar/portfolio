
// Handle navigation link clicks
document.addEventListener('DOMContentLoaded', () => {
    const navlinks = document.querySelectorAll('.nav-links');
    navlinks.forEach(link => {
        link.addEventListener('click', function() {
            navlinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

// Service text rotation
const services = ["FRONTEND DEVELOPER", "WEB DESIGNER", "UI EXPERT"];
let index = 0;
const service = document.getElementById('service');

setInterval(() => {
    index = (index + 1) % services.length;
    service.innerHTML = services[index];
}, 3500);

// GSAP animations
const mm = gsap.matchMedia();

// Desktop animations
mm.add("(min-width:800px)", () => {
    gsap.from("#page2 .cards", {
        scrollTrigger: {
            trigger: "#page2 .cards",
            scroller: "body",
            scrub: true
        },
        opacity: 0.5,
        scale: 2,
        y: 100
    });
});

// Stack images animation
gsap.from("#page3 .stack-img", {
    scrollTrigger: {
        trigger: "#page3 .stack-img",
        scroller: "body",
        scrub: true
    },
    opacity: 0,
    scale: 0,
    y: "100",
    stagger: 0.1
});

// Page 1 animations
const page1Animations = [
    {
        target: "#page1 #info",
        props: { y: "-200", opacity: "0" },
        markers: false
    },
    {
        target: "#page1 #shape",
        props: { scale: "3", y: "10", opacity: 0.3 },
        markers: false
    },
    {
        target: "#page1 #heading",
        props: { opacity: 0 },
        markers: false
    }
];

page1Animations.forEach(({target, props, markers}) => {
    gsap.to(target, {
        scrollTrigger: {
            trigger: "#page1",
            scrub: true,
            start: "top top",
            end: "bottom top",
            markers
        },
        ...props
    });
});
