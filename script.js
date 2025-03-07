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

function activateSkill(skill) {
  // Hide the other skills and show the selected skill's input area
  document.getElementById("code-area").style.display = "block"
  document.getElementById("output").innerHTML = ""

  switch (skill) {
    case "python":
      document.getElementById("code-input").placeholder =
        'Enter Python Code (e.g., print("Hello, World!"))'
      break
    case "sql":
      document.getElementById("code-input").placeholder =
        "Enter SQL Query (e.g., SELECT * FROM users)"
      break
    case "pyspark":
      document.getElementById("code-input").placeholder =
        "Enter PySpark Code (e.g., df.show())"
      break
    case "bigdata":
      // Simulate Big Data operations (can use APIs or preloaded data)
      document.getElementById("code-area").style.display = "none"
      document.getElementById("tableau-output").style.display = "block"
      createBigDataChart() // Function to create a chart simulating Big Data operations
      break
    case "tableau":
      document.getElementById("code-area").style.display = "none"
      document.getElementById("tableau-output").style.display = "block"
      break
  }
}

function runCode() {
  const codeInput = document.getElementById("code-input").value
  const outputDiv = document.getElementById("output")

  // Handle the logic for different skills
  if (codeInput.toLowerCase().includes("print")) {
    outputDiv.innerHTML = `Python Output: ${eval(codeInput)}`
  } else if (codeInput.toLowerCase().includes("select")) {
    outputDiv.innerHTML = `SQL Query Executed: ${codeInput}`
  } else {
    outputDiv.innerHTML = "Code execution simulated: " + codeInput
  }
}

// Simulate Big Data Visualization (Chart.js)
function createBigDataChart() {
  const ctx = document.getElementById("bigDataChart").getContext("2d")
  const data = {
    labels: ["Data A", "Data B", "Data C", "Data D", "Data E"],
    datasets: [
      {
        label: "Big Data Simulation",
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  }
  const config = {
    type: "bar",
    data: data,
    options: {
      scales: {
        y: { beginAtZero: true },
      },
    },
  }
  new Chart(ctx, config)
}
