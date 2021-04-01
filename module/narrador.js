'use strict'

export default function narrador() {

    const $speechSelect = document.getElementById("speech__languages"),
        $speechVelocity = document.getElementById("speech__velocity"),
        $speechTextarea = document.getElementById("speech__textarea"),
        $speechButton = document.getElementById("speech__button-play"),
        speechMessage = new SpeechSynthesisUtterance(),
        speech__Synt = speechSynthesis

    let voices = []

    speechSynthesis.addEventListener("voiceschanged", e => {
        voices = speechSynthesis.getVoices()
        // console.log(voices)

        voices.forEach(item => {
            // console.log(item.name)
            let $option = document.createElement("option") //<option value="Edge">
            $option.value = item.name
            $option.textContent = `${item.name} - ${item.lang}`
            $speechSelect.insertAdjacentElement("beforeend", $option)
        })

    })

    document.addEventListener("change", e => {
        if (e.target === $speechSelect) {
            // console.log(e.target.value)
            speechMessage.voice = voices.find(voice => voice.name === e.target.value)
        }
        if (e.target === $speechVelocity) {
            // console.log(e.target.value)
            speechMessage.rate = e.target.value
        }
    })

    document.addEventListener("click", e => {
        if (e.target.matches("#speech__button-play") || e.target.matches("#speech__button-play *")) {
            // console.log(speechMessage)
            if ($speechButton.querySelector('i').classList.contains("fa-play")) {

                if ($speechTextarea.value !== "")
                    $speechButton.querySelector('i').classList.replace("fa-play", "fa-pause")

                speechMessage.text = $speechTextarea.value                
                speech__Synt.speak(speechMessage)

                // console.log("play")
            } else {
                // $speechButton.querySelector('i').classList.replace("fa-pause", "fa-play")
                speech__Synt.pause()
                // console.log("star")
            }

        }

        if (e.target.matches("#speech__button-resume") || e.target.matches("#speech__button-resume *"))
            speech__Synt.resume()

        if (e.target.matches("#speech__button-cancel") || e.target.matches("#speech__button-cancel *")) {
            speech__Synt.cancel()
            $speechButton.querySelector('i').classList.replace("fa-pause", "fa-play")
            $speechTextarea.value = ""
        }
    })
}