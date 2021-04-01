'use strict'

export default function webcam(webcam) {

    const video = document.getElementById(webcam)

    if (navigator.mediaDevices.getUserMedia) {

        navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false
        }).then(stream => {
            video.srcObject = stream
            video.play()
            // console.log(stream)
        }).catch(err => {
            video.insertAdjacentHTML("beforebegin", `<p>Sucedio e siguiente error!: <mark>${err}</mark></p>`)
            // console.log(err)
        })
    }

}