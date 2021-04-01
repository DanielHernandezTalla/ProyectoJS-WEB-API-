export default function menu(btnMenu, sectionMenu, linkMenu){

    const d = document;

    d.addEventListener("click", e => {

        if(e.target.matches(btnMenu) || e.target.matches(`${btnMenu} *`))
            d.querySelector(sectionMenu).classList.toggle("nav-left");

        if(e.target.matches(linkMenu))
        d.querySelector(sectionMenu).classList.toggle("nav-left");

    });
}