// this is the data for holding which page we're on 
let pageNumber = 0

// hold the content for these  pages 

const pages = [
     { text: "Beekeeper", background: "#050505", color: "#FAFAFA"},
     { text: "Holy Fool", background: "#050505", color: "#FAFAFA" },
     { text: "Novelist", background: "#050505", color: "#FAFAFA" },
     { text: "Gambler", background: "#050505", color: "#FAFAFA" },
     { text: "Curmudgeon", background: "#050505", color: "#FAFAFA" },
     { text: "Narcissist", background: "#050505", color: "#FAFAFA" },
     { text: "God", background: "#050505", color: "#FAFAFA" }
]


//pick the relevant tags

const nextTag = document.querySelector("div.arrows svg.next")
const previousTag = document.querySelector("div.arrows svg.prev")
const outputTag = document.querySelector("section p")

//make a next function to increase the pageNumber
const next = function () {
    pageNumber = pageNumber + 1

    if (pageNumber > pages.length -1) {
        pageNumber = 0
    }

    update()
}

const previous = function() {
   pageNumber = pageNumber -1
   
    if (pageNumber < 0) {
        pageNumber = pages.length -1
    }

    update()

}

  

//this will update the content & style of the section
const update = function () {
    outputTag.innerHTML = pages[pageNumber].text
    outputTag.style.backgroundColor = "#050505"
    outputTag.style.color = "#FFBFA8"
    outputTag.style.textTransform = "uppercase"
    outputTag.style.fontWeight = "500"
    outputTag.style.letterSpacing = ".2rem"
}

//on click of nextTag, run this
nextTag.addEventListener("click", function () {
    next()
})

//on click of previousTag, run this
previousTag.addEventListener("click", function () {
    previous()
})