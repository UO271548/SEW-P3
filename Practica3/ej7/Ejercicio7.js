class MetodosJQuery{
    constructor(){
        this.estaOcultadoH1 = false;
        this.estaOcultadoH2 = false;
        this.estaOcultadoH3 = false;
        this.estaOcultadoP = false;
    }

    ocultarInformacionP(){
        if (this.estaOcultadoP){
            this.estaOcultadoP = false;
            $(document).ready(function(){
                 $("p").show();
            });
        }else{
            this.estaOcultadoP = true;
            $(document).ready(function(){
                $("p:first").hide();
            });
        }
    }

    ocultarInformacionH1(){
        if (this.estaOcultadoH1){
            this.estaOcultadoH1 = false;
            $(document).ready(function(){
                $("h1").show();
            });
        }else{
            this.estaOcultadoH1 = true;
            $(document).ready(function(){
                 $("h1").hide();
            });
        }
    }

    ocultarInformacionH2(){
        if (this.estaOcultadoH2){
            this.estaOcultadoH2 = false;
            $(document).ready(function(){
                $("h2").show();
            });
        }else{
            this.estaOcultadoH2 = true;
            $(document).ready(function(){
                $("h2").hide();
            });
        }
    }

    ocultarInformacionH3(){
        if (this.estaOcultadoH3){
            this.estaOcultadoH3 = false;
            $(document).ready(function(){
                $("h3").show();
            });
        }else{
            this.estaOcultadoH3 = true;
            $(document).ready(function(){
                $("h3").hide();
            });
        }
    }

    cambiarTexto(){
        var nuevoTexto = "";
        $(document).ready(function(){
            nuevoTexto =  $(":text").val();
            $("section:first p:first").text(nuevoTexto);
        });
    }

    aniadeHtml(){
        $(document).ready(function(){
            $("section:nth-of-type(2)").html("<p> Parrafo Añadido </p>");
        });
    }

    borraHtml(){
        $(document).ready(function(){
            $("section:last p").remove();
        });
    }

    recorrerHtml(){
        $("*", document.body).each(function() {
            var etiquetaPadre = $(this).parent().get(0).tagName;
            $(this).prepend(document.createTextNode( "Etiqueta padre : <"  + etiquetaPadre + "> elemento : <" + $(this).get(0).tagName +"> valor: "));
        });
    }

    sumarColumnasTabla(){
        var suma = 0;
        $(document).ready(function(){
            $("table thead th").each(function(i){
                $("table tr").each(function(){
                    var celda = parseInt($("td", this).eq(i).text());
                    if (!isNaN(celda)){
                        suma += celda;
                        console.log(suma);
                    }
                });
                if ($("table tfoot td").eq(i).text() == "" || $("table tfoot td").eq(i).text() == "0"){
                    $("table tfoot td").eq(i).text(suma);
                }
                suma = 0;
            });
        });
    }

    sumarFilasTabla(){
        var suma = 0;
        $("table tr td").each(function() {
            var celda = $(this).text();
            console.log(celda);
            suma += Number(celda);
            if (celda.length == 0){
                $(this).text(suma);
                suma = 0;
            }
        });
    }

}

var metodosJQuery = new MetodosJQuery();