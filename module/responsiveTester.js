'use strict'

export default function responsiveTester(form, url, width, height, btnOpen, btnClose) {

    const d = document,
        $form = d.getElementById(form)

    let page = "";

    // console.log($form.close.disabled)

    d.addEventListener("click", e => {
        if (e.target === $form.close) {
            e.preventDefault()
            page.close()
            $form.close.disabled = true
            $form.close.classList.add("disabled")
        }
    })

    d.addEventListener("submit", e => {
        if (e.target === $form) {
            e.preventDefault()
            page = open($form.url.value, "Page", `width=${$form.width.value}, height=${$form.height.value}`)
            $form.close.disabled = false
            $form.close.classList.remove("disabled")
        }
    })

}