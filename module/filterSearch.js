'use strict'

export default function filterSearch() {
    const listFigures = document.querySelectorAll(".card")
    const $search = document.getElementById("figures-input")

    $search.addEventListener("input", e => {
        listFigures.forEach(element => {
            if (element.querySelector("figcaption").textContent.includes(e.target.value))
                element.classList.remove("hidden")
            else
                element.classList.add("hidden")
            // console.log()
        });
    })
}