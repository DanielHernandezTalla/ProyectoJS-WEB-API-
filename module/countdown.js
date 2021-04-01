let intervalo;

export default function countdown(countdown, fecha, sound) {

    const d = document,
        $countdown = d.getElementById(countdown),
        $dias = d.querySelector("#countdown__dias"),
        $horas = $countdown.querySelector("#countdown__horas"),
        $minutos = d.querySelector("#countdown__minutos"),
        $segundos = d.querySelector("#countdown__segundos")

    // console.log(new Date(fecha))

    intervalo = setInterval(() => {
        let fecha2 = new Date()
        let resta = fecha2.getTime() - new Date(fecha).getTime()

        // console.log(resta)

        let dias = Math.trunc(resta / (1000 * 60 * 60 * 24)) * -1
        let horas = ("0" + (Math.trunc(resta / (1000 * 60 * 60)) * -1) % 24).slice(-2)
        let minutos = ("0" + (Math.trunc(resta / (1000 * 60)) * -1) % 60).slice(-2)
        let segundos = ("0" + (Math.trunc(resta / (1000)) * -1) % 60).slice(-2)

        $dias.textContent = dias
        $horas.textContent = horas
        $minutos.textContent = minutos
        $segundos.textContent = segundos

        if (dias == 0 && horas == 0 && minutos == 0 && segundos == 0) {
            clearInterval(intervalo)
            let audio = new Audio()
            audio.src = sound
            audio.play()
        }

        // if (dias <= 0 && horas <= 0 && minutos <= 0 && segundos <= 0) {
        if(resta > 0){
            clearInterval(intervalo);
            $dias.textContent = "00"
            $horas.textContent = "00"
            $minutos.textContent = "00"
            $segundos.textContent = "00"
        }
    }, 1000)
}