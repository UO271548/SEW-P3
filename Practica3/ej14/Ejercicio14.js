class CanvasReader{
    constructor(){
        this.files = [];
        this.cargados = false;
    }


    crearFiguras(files){
        var file = files[0];
        var lector = new FileReader();
        var counter = 0;
        lector.onload = function(){
            var xml = $.parseXML(lector.result);
            var docuP = document.getElementsByTagName('p')[0];
            
            $("figures", xml).find("figure").each(function(){

                var width = $(this).find("width").attr("value");
                var height = $(this).find("height").attr("value");
                docuP.innerHTML+="<p><canvas width= "+width+" height="
                                + height + " onclick='pantallaCompleta.obtenerPantallaCompleta(this)' ></canvas></p>";

                var color = $(this).find("color");
                var rgba = "rgba(" + color.attr("r") + "," + color.attr("g") + "," + color.attr("b") + "," + color.attr("a") + ")";
                console.log(rgba);
                var canvas = document.getElementsByTagName("canvas")[counter];
                console.log(canvas);

                var ctx = canvas.getContext("2d");
                console.log(ctx);
                ctx.fillStyle = rgba;
                ctx.fillRect(0,0,canvas.width,canvas.height);
                counter++;
            });
        }
        lector.readAsText(file);
    }
}

class PantallaCompleta{
    obtenerPantallaCompleta(element){
        if (element.requestFullscreen)
        element.requestFullscreen();
    }
}

var pantallaCompleta = new PantallaCompleta();
var canvasReader = new CanvasReader();