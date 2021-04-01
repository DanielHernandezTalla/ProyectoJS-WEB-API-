'use strict'

export default function buttonScroll(buttonScroll) {

    const d = document,
        $buttonScroll = d.getElementById(buttonScroll)

    d.addEventListener("scroll", e => {

        if (window.scrollY > 200)
            $buttonScroll.classList.remove("hidden")
        else
            $buttonScroll.classList.add("hidden")
    })

    d.addEventListener("click", e => {
        if (e.target.matches(`#${buttonScroll}`) || e.target.matches(`#${buttonScroll} *`)) 
            window.scrollTo({
                behavidor: "smooth",
                top: 0,
                // left: 0
            })
    })
}