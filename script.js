//variabler
const rocket = document.getElementById("rc")

const btn = document.getElementById("launch")

const rocketImg = document.getElementById("ri")

const audio = document.getElementById("sound")

//onclick funktion
function launch() {
    btn.setAttribute("disabled", "true")
    rocket.classList.add("rocket-container-launch")
    rocketImg.setAttribute("src", "img/rocket-2.png")
    audio.play()
    //Når animationen slutter
    rocket.onanimationed = function () {
        rocket.classList.remove("rocket-container-launch")
        btn.removeAttribute("disabled")
        rocketImg.setAttribute("src", "img/rocket-1.png")
        audio.load()
    }
}