'use strict'

export default function darkMode(buttonDark, dataDark) {
    const d = document,
        $buttonDark = d.querySelector(buttonDark),
        $dataDark = d.querySelectorAll(dataDark)

    // Get data from local storage to apply dark mode or not
    if (localStorage.getItem("modeDark")) {
        let modeDark = localStorage.getItem("modeDark")
        if (modeDark === "true") {
            $buttonDark.querySelector('i').classList.replace("fa-moon", "fa-sun")
            $dataDark.forEach(item => {
                item.classList.add('dark')
            })
        } else {
            $buttonDark.querySelector('i').classList.replace("fa-moon", "fa-moon")
            $dataDark.forEach(item => {
                item.classList.remove('dark')
            })
        }
    }

    // Set event click on page to change the theme
    d.addEventListener("click", e => {

        if (e.target.matches(buttonDark) || e.target.matches(`${buttonDark} *`)) {

            if ($buttonDark.querySelector('i').classList.contains("fa-moon")) {
                $buttonDark.querySelector('i').classList.replace("fa-moon", "fa-sun")
                localStorage.setItem('modeDark', 'true')
            } else {
                $buttonDark.querySelector('i').classList.replace("fa-sun", "fa-moon")
                localStorage.setItem('modeDark', 'false')
            }

            $dataDark.forEach(item => {
                // console.log(item)
                item.classList.toggle('dark')
                // toggle
            })
        }
    })
}