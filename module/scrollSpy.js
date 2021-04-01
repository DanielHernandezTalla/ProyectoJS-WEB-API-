'use strict'

export default function scrollSpy() {

    const $sections = document.querySelectorAll("section[data-scroll-spy]")

    const cb = entries => {
        // console.log(entries)

        entries.forEach(entry => {
            // console.log(entry)
            // console.log(entry.target.getAttribute("id"))

            const id = entry.target.getAttribute("id")
            if (entry.isIntersecting)
                document.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("nav__select")
            else
                document.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("nav__select")
        })



    }

    const observer = new IntersectionObserver(cb, {
        // root
        // rootMargin = 250px
        threshold: [.5, .7]
    })

    $sections.forEach(e => observer.observe(e))
}