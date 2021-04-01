'use strict'

export default function getRandom() {

    const $listItem = document.querySelectorAll(".random__li")

    document.addEventListener("click", e => {
        if (e.target.matches("#random__get")) {

            $listItem.forEach(element => {
                element.classList.remove("select")
            })

            let r = Math.trunc(Math.random() * 10)
            $listItem[r].classList.add("select")
            // console.log($listItem[r])
        }
        if (e.target.matches("#random__delete"))
            $listItem.forEach(element => {
                element.classList.remove("select")
            })
    })

}