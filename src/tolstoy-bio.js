// this is the data for holding which page we're on 
let pageNumber = 0

// hold the content for these  pages 

const pages = [
    { text: "Elder, Apostate, and Tsar", background: "pink", color: "white" },
    { text: "Dropout", background: "green", color: "white" },
    { text: "Landowner, Gambler, Officer, Writer", background: "red", color: "white" },
    { text: "Literary Duellist and Repentant Nobleman", background: "purple", color: "white" },
    { text: "Husband, Beekeeper, and Epic Poet", background: "yellow", color: "white" },
    { text: "Student, Teacher, Father", background: "blue", color: "white" },
    { text: "Novelist", background: "coral", color: "white" },
    { text: "Pilgrim, Nihilist, Muzhik", background: "orange", color: "white" },
    { text: "Sectarian, Anarchist, Holy Fool", background: "grey", color: "white" },
   
]

//pick the relevant tags

const nextTag = document.querySelector("div.arrows svg.next")
const previousTag = document.querySelector("div.arrows svg.prev")
const outputTag = document.querySelector("section p")
const randomTag = document.querySelector("div.arrows svg.random")
const bodyTag = document.querySelector("body")

//make a next function to increase the pageNumber
const next = function () {
    pageNumber = pageNumber + 1

    if (pageNumber > pages.length - 1) {
        pageNumber = 0
    }

    updatePage()
}

const previous = function () {
    pageNumber = pageNumber - 1

    if (pageNumber < 0) {
        pageNumber = pages.length - 1
    }

    updatePage()

}

const random = function () {
    pageNumber = Math.floor(Math.random() * pages.length)

    updatePage()
}



//this will update the content & style of the section
const updatePage = function () {
    outputTag.innerHTML = pages[pageNumber].text
    bodyTag.style.backgroundColor = pages[pageNumber].background
    outputTag.style.color = "black"
}

//on click of nextTag, run this
nextTag.addEventListener("click", function () {
    next()
})

//on click of previousTag, run this
previousTag.addEventListener("click", function () {
    previous()
})

randomTag.addEventListener("click", function () {
    random()
})

// when a user presses a key, check for arrows left or right
// and do next or prev correctly

document.addEventListener("keyup", function (event) {
    console.log("testing 123")

    // if the key being pressed is ArrowRight
    if (event.key == "ArrowRight") {
        next()
    }

    // if the key being pressed is ArrowLeft
    if (event.key == "ArrowLeft") {
        previous()
    }


})