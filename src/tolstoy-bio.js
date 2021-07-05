// this is the data for holding which page we're on 
let pageNumber = 0

// hold the content for these  pages 

const pages = [
    { font: "Avara_Bold Italic", text: "Elder, Apostate, Tsar", background: "pink", color: "white" },
    { font: "Avara_Bold Italic", text: "Dropout", background: "green", color: "white" },
    { font: "Avara_Bold Italic", text: "Landowner, Gambler, Officer, Writer", background: "red", color: "white" },
    { font: "Avara_Bold Italic", text: "Literary Duellist, Repentant Nobleman", background: "purple", color: "white" },
    { font: "Avara_Bold Italic", text: "Husband, Beekeeper, Epic Poet", background: "yellow", color: "white" },
    { font: "Avara_Bold Italic", text: "Student, Teacher, Father", background: "blue", color: "white" },
    { font: "Avara_Bold Italic", text: "Novelist", background: "coral", color: "white" },
    { font: "Avara_Bold Italic", text: "Pilgrim, Nihilist, Muzhik", background: "orange", color: "white" },
    { font: "Avara_Bold Italic", text: "Sectarian, Anarchist, Holy Fool", background: "teal", color: "white" },
   
]

//pick the relevant tags

const nextTag = document.querySelector("div.arrows svg.next")
const previousTag = document.querySelector("div.arrows svg.prev")
const outputTag = document.querySelector("main h2")
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
    outputTag.style.fontFamily = "Avara_Bold Italic"
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