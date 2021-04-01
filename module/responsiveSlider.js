'use strict'

export default function responsiveSlider() {

    const $slider = document.querySelectorAll(".slider article")

    let position = 0


    document.addEventListener('click', e => {
        if (e.target.matches(".slider__left") || e.target.matches(".slider__left *")) {
            $slider[position].classList.add("hidden")
            position = position == $slider.length - 1 ? 0 : position + 1
            $slider[position].classList.remove("hidden")
            // console.log(position)
        }
        if (e.target.matches(".slider__rigth") || e.target.matches(".slider__rigth *")) {
            $slider[position].classList.add("hidden")
            position = position == 0 ? $slider.length - 1 : position - 1
            $slider[position].classList.remove("hidden")
        }
    })
}