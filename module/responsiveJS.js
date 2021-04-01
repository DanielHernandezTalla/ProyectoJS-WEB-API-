'use strict'

export default function responsiveJS(responsiveJS) {

    const d = document,
        $responisveJS = d.getElementById(responsiveJS)

    let mediaQuery = window.matchMedia("(max-width: 1024px)")

    if (mediaQuery.matches)
        less()
    else
        grater()

    mediaQuery.addListener(e => {
        if (e.matches)
            // The viewport is less than, or equal to, 1024 pixels wide
            less()
        else
            // The viewport is grater than 1024 pixels wide
            grater() 
    })

    function less() {
        $responisveJS.innerHTML = `<a href="https://jonmircha.com/" target="_blank">Click para ir a la pagina</a> <br> <a href="https://www.youtube.com/watch?v=16geDhp5Xmg&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=90" target="_blank">Click para ir al video</a>`
    }

    function grater() {
        $responisveJS.innerHTML = ` <iframe width="560" height="315" src="https://www.youtube.com/embed/16geDhp5Xmg?start=1511" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d888.2203532525863!2d-109.42504572834152!3d27.06549090120867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1615657184764!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe> `        
    }
}