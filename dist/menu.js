const toggleTag = document.querySelector("div.menu-options a.toggle-nav")
const mainTag = document.querySelector("nav")

// when I click the toggle tag, toggle a class of open on the main tag
// and if it's open, make the toggle tag say closed
// and if not, make the toggle tag say open
toggleTag.addEventListener("click", function() {
    mainTag.classList.toggle("open")

    if (mainTag.classList.contains("open")) {
        toggleTag.innerHTML = `<img src="img/close.svg" alt="Close">`
    } else {
        toggleTag.innerHTML = `<img src="img/menu.svg" alt="Menu">`
    }
})