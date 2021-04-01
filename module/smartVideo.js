'use strict'

export default function smartVideo() {

    const $smartVideo = document.getElementById("smart__iframe")

    const cb = entries => {
        // console.log(entries)

        entries.forEach(e => {
            if (e.isIntersecting)
                e.target.play()
            else
                e.target.pause()

            window.addEventListener('visibilitychange',
                () => document.visibilityState === "visible" ?
                e.target.play() :
                e.target.pause())
        })
    }

    const observer = new IntersectionObserver(cb, {
        threshold: .9
    })

    observer.observe($smartVideo)
}