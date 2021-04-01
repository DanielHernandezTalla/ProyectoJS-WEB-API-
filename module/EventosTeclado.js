let x = 0;
let y = 0;

export function eventoTeclado(area, figure){
    const d = document,
        $figure = d.querySelector(figure),
        $area = d.querySelector(area);

        
    d.addEventListener("keydown", e => {
        let limitFigure = $figure.getBoundingClientRect(),
            limitArea = $area.getBoundingClientRect();
        
        switch (e.keyCode){
            case 37://Left
                e.preventDefault();
                if(e.ctrlKey)
                    x = x -(limitFigure.left - limitArea.left);
                else
                    x = limitArea.left < limitFigure.left - 10? x - 10: x + (limitArea.left - limitFigure.left);
                break;
            case 38://up-top
                if(e.ctrlKey)
                    y = y -(limitFigure.top - limitArea.top);
                else{
                    if(limitArea.top < limitFigure.top - 10){
                        e.preventDefault();
                        y = y - 10;
                    }else
                        y =  y + (limitArea.top - limitFigure.top);
                }
                break;
            case 39://right
                e.preventDefault();
                if(e.ctrlKey)
                    x = x - (limitFigure.right - limitArea.right);
                else
                    x = limitArea.right > limitFigure.right + 10? x + 10: x + (limitArea.right - limitFigure.right);
                    break;
            case 40://bottom
                if(e.ctrlKey)
                    y = y - (limitFigure.bottom - limitArea.bottom);
                else{
                    if(limitArea.bottom > limitFigure.bottom + 10){
                        e.preventDefault();
                        y = y + 10;
                    }else
                        y =  y + (limitArea.bottom - limitFigure.bottom);
                }
                break;
            default:
                break;
        }
        $figure.style.transform = `translate(${x}px, ${y}px)`;
    });
}