'use strict'

import buttonScroll from "./module/buttonScroll.js"
import countdown from "./module/countdown.js"
import darkMode from "./module/darkMode.js"
import {
    eventoTeclado
} from "./module/EventosTeclado.js"
import filterSearch from "./module/filterSearch.js"
import formContact from "./module/formContact.js"
import getGeolocation from "./module/getGeolocation.js"
import getRandom from "./module/getRandom.js"
import menu from "./module/menu.js"
import narrador from "./module/narrador.js"
import networkStatus from "./module/networkStatus.js"
import {
    digitalClock,
    digitalAlarm
} from "./module/reloj.js"
import responsiveJS from "./module/responsiveJS.js"
import responsiveSlider from "./module/responsiveSlider.js"
import responsiveTester from "./module/ResponsiveTester.js"
import scrollSpy from "./module/scrollSpy.js"
import smartVideo from "./module/smartVideo.js"
import userAgent from "./module/userAgent.js"
import webcam from "./module/webcam.js"

const d = document

d.addEventListener("DOMContentLoaded", e => {

    menu("#nav__button", ".nav", ".nav__a")

    digitalClock("#reloj", "#btn-activar-reloj", "#btn-desactivar-reloj")

    digitalAlarm("Assets/alarma.mp3", "#btn-activar-alarma", "#btn-desactivar-alarma")

    eventoTeclado(".section__area", "#circle")

    countdown("section3", "Nov 11, 2021 07:56:00", "Multimedia/alarma.mp3")

    buttonScroll("button-scroll")

    darkMode(".button-dark", "[data-dark]")

    responsiveJS('responsive-js')

    responsiveTester("form", "url", "width", "height", "submit", "close")

    userAgent('user-agent')

    networkStatus()

    webcam("webcam")

    getGeolocation("geolocation")

    filterSearch()

    getRandom()

    responsiveSlider()

    scrollSpy()

    smartVideo()

    formContact()

    narrador()
});
