'use strict'

export default function getGeolocation(id) {

    const $geolocation = document.getElementById(id)

    let position = {
        enabledHighAccuracy: true,
        timeout: 5000,
        maximunAge: 0
    }

    const assert = item => {
        $geolocation.insertAdjacentHTML("afterbegin", `<p>Latitud: ${item.coords.latitude}</br>Longitud: ${item.coords.longitude} </br>Acertividad: ${item.coords.accuracy} metros</p> 
        <a href="https://www.google.com/maps/@${item.coords.latitude},${item.coords.longitude},20z" target="_blank" rel="noopener">Ver en google maps</a>`)
        // console.log(item)
    }

    const error = err => {
        $geolocation.insertAdjacentHTML('afterbegin', `<p>Sucedio el siguiente error: <mark>${err.code}, ${err.message}</mark></p>`)
        // console.log(err)
    }

    navigator.geolocation.getCurrentPosition(assert, error, position)
}