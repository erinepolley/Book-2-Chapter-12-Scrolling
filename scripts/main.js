console.log("Yo")
//selecting the body element, adding an event listener,
//
const audrey = document.getElementById("audrey")

/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/

window.addEventListener("scroll", function () {
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */
console.log("I'm scrolling!")
let y = window.scrollY
audrey.style.width = `${y}px`
audrey.style.height = `${y}px`

    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */
})