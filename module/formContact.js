'use strict'

export default function formContact() {

    const $form = document.querySelector(".contact"),
        $inputs = document.querySelectorAll('.contact [required]') //Se toman solo los elementos requeridos

    // Aqui creamos dinamicamente los span que aconpanan a los inputs
    $inputs.forEach(input => {
        const $span = document.createElement("span")
        $span.id = input.name
        $span.className = "contact-error none"
        $span.textContent = input.title
        input.insertAdjacentElement("afterend", $span)
    })

    document.addEventListener('keyup', e => {
        if (e.target.matches(".contact [required]")) {
            let $input = e.target,
                pattern = $input.pattern || $input.dataset.pattern

            // console.log($input, pattern)
            if (pattern) {
                //Cuando los input tengan un patron
                let regex = new RegExp(pattern)
                return !regex.exec($input.value) ?
                    document.getElementById($input.name).classList.add("is-active") :
                    document.getElementById($input.name).classList.remove("is-active")
            }

            if (!pattern) {
                // Cuando los input no tengan patron
                return $input.value === "" ?
                    document.getElementById($input.name).classList.add("is-active") :
                    document.getElementById($input.name).classList.remove("is-active")
            }
        }
    })

    document.addEventListener("submit", e => {
        // e.preventDefault()
        alert("enviando formulario!")

        const $loader = document.querySelector(".contact-form-loader"),
            $response = document.querySelector(".contact-form-response")

            $loader.classList.remove("none")

            setTimeout(() =>{
                $loader.classList.add("none")
                $response.classList.remove("none")
                $form.reset()

                setTimeout(() => $response.classList.add("none"), 3000);
            }, 3000)
    })
}