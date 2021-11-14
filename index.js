const header = document.querySelector(".header");
const image = document.querySelector("#website-main-image");
const title = document.querySelector("#main-title");
const tagLine = document.querySelectorAll(".tag-line");

const bannerTL = gsap.timeline();
bannerTL
    .from([header,image],  {
        duration: .7,
        y: '-24px',
        ease: "power3.inOut",
        opacity: 0,
        stagger:{
            amount:0.3
        }
    })
    // .from(image, {
    //     duration: 0.6,
    //     y: "-30px",
    //     opacity: 0,
    //     ease: "power2.inOut"
    // })
    .from([title, tagLine], {
        duration: .5,
        delay: 0.1,
        y: '32px',
        opacity: 0,
        ease: "slow"
    })  