'use strict'

export default function networkStatus() {

    const $networkStatus = document.getElementById("networkStatus")

    window.addEventListener('offline', () => {
        $networkStatus.textContent = "No Connetion"
        $networkStatus.classList.add('offLine')

        setTimeout(() => {
            $networkStatus.textContent = ""
        }, 2000)
    })

    window.addEventListener('online', () => {
        $networkStatus.textContent = "Back Online"
        $networkStatus.classList.remove('offLine')
        setTimeout(() => {
            $networkStatus.textContent = ""
        }, 2000)
    })
}