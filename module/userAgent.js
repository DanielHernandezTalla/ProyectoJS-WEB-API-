'Use strict'

export default function userAgent(userAgent) {
    const n = navigator,
        ua = navigator.userAgent,
        $userAgent = document.getElementById(userAgent)

    let navegador = {
        isChrome: () => ua.includes("Chrome"),
        isOpera: () => ua.includes("OPR"),
        isEdge: () => ua.includes("Edg"),
        isFirefox: () => ua.includes("Edg"),
        isSafari: () => ua.includes("Safari"),
        any: function () {
            return this.isChrome() || this.isOpera() || this.isEdge() || this.isFirefox() || this.isSafari
        }
    }

    let isMovile = {
        isAndroid: () => ua.includes("Android"),
        isIOS: () => ua.includes("iPhone") || ua.includes("iPad"),
        any: function () {
            return this.isAndroid() || this.isIOS()
        }
    }

    let isDesktop = {
        isWindowsNT: () => ua.includes("Windows NT"),
        isLinux: () => ua.includes("linux"),
        isMac: () => ua.includes("mac os"),
        any: function () {
            return this.isWindowsNT() || this.isLinux() || this.isMac()
        }
    }

    if (isMovile.any()) {
        $userAgent.innerHTML = `
            <ul>
                <li>${ua}</li>
                <li>Este contenido solo se muestra en dispositivos moviles.</li>                
            </ul>
        `
    }
    if (isDesktop.any()) {
        $userAgent.innerHTML = `
            <ul>
                <li>${ua}</li>
                <li>Este contenido solo se muestra en computadoras.</li>
            </ul>
        `
    }

}