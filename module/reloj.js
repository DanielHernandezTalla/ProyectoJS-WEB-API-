export function digitalClock(clock, btnPlay, btnStop){
    const d = document;    
    let actializarReloj;

    d.addEventListener("click", e => {
        if(e.target.matches(btnPlay)){
            const $button = d.querySelector(btnPlay);
            
            actializarReloj = setInterval(()=>{
                let dia = new Date(),
                    hora = dia.getHours(),
                    minutos = dia.getMinutes(),
                    segundos = dia.getSeconds();
                
                    d.querySelector(clock).textContent = `${hora < 10? "0"+hora: hora} : ${minutos < 10? "0"+minutos: minutos} : ${segundos < 10? "0"+ segundos: segundos}`;
            }, 1000);

            $button.disabled = true;
            $button.classList.add("disabled");
        }

        if(e.target.matches(btnStop)){            
            const $button = d.querySelector(btnPlay);

            $button.disabled = false;
            $button.classList.remove("disabled");
            d.querySelector(clock).textContent = null;
            
            clearInterval(actializarReloj);
        }
    });
}

export function digitalAlarm(sound, btnPlay, btnStop){
    const d = document;

    const $button = d.querySelector(btnPlay);
    let sonido = new Audio();
    sonido.src = sound;

    d.addEventListener("click", e => {        
        if(e.target.matches(btnPlay)){
            sonido.play();
            $button.disabled = true;
            $button.classList.add("disabled");
        }
        if(e.target.matches(btnStop)){
            sonido.pause();
            $button.disabled = false;
            $button.classList.remove("disabled");
        }
    });
}