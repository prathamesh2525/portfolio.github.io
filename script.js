const initApp = () => {
  const hamburgerBtn = document.getElementById("hamburger-button")
  const mobileMenu = document.getElementById("mobile-menu")

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden")
    mobileMenu.classList.toggle("flex")
  }

  hamburgerBtn.addEventListener("click", toggleMenu)
  mobileMenu.addEventListener("click", toggleMenu)
}

document.addEventListener("DOMContentLoaded", initApp)

const tlParallax = gsap.timelime({
  scrollTrigger: {
    trigger: ".second-page",
    start: "-25%",
    end: "50%",
    scrub: true,
  },
})

tlParallax.fromTo(".second-text", { y: 0 }, { y: -80 })

let bg = document.querySelector("smoke-video")
let text = document.querySelector(".second-text")

window.addEventListener("scroll", function () {
  let value = window.scrollY
  bg.style.top = value * 0.5 + "px"
  text.style.top = value * 1 + "px"
})
