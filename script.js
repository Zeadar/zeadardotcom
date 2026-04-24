const dialog = document.querySelector("#cv-window")
const openButton = document.querySelector("#open-cv")
const closeButton = document.querySelector("#close-cv")

openButton.addEventListener("click", () => {
    dialog.showModal()
})

closeButton.addEventListener("click", () => {
    dialog.close()
})

dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
        dialog.close()
    }
})
