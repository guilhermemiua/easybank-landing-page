function createNavButton() {
  const screenWidth = window.innerWidth

  if (screenWidth <= 720) {
    const nav = document.getElementById("nav")

    const navButton = document.createElement("img")

    navButton.src = "../assets/images/icon-hamburger.svg"
    navButton.className = "nav-hamburger-icon"

    nav.append(navButton)
  }
}

createNavButton()