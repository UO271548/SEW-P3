class Meteorologia {
    constructor(){
        this.apiKey = "fcaf7f8320b8b813406a5bb833e7022c";
        this.ciudades = ['Oviedo', 'Cáceres', 'Bilbao', 'Pola de Allande', 'Gijón'];
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.tipo = "&mode=xml";
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=";
        this.error = "<p>Error al obtener la informacion Meteorologica</p>";
        this.datosObtenidos = false;
        
    }

    obtenerDatos(){
        if (this.datosObtenidos){
            var docuP = document.getElementsByTagName('p')[0];
            docuP.innerHTML = "";
        }
        
        this.ciudades.forEach(function(ciudad){
            $.ajax({
                dataType: "xml",
                url: "http://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&mode=xml" + "&units=metric" + "&lang=es" + "&APPID=" + "fcaf7f8320b8b813406a5bb833e7022c",
                method: 'GET',
                success: function(datos){
                    
                     var totalNodos            = $('*',datos).length;
                     var ciudad                = $('city',datos).attr("name");
                     var longitud              = $('coord',datos).attr("lon");
                     var latitud               = $('coord',datos).attr("lat");
                     var pais                  = $('country',datos).text();
                     var amanecer              = $('sun',datos).attr("rise");
                     var minutosZonaHoraria    = new Date().getTimezoneOffset();
                     var amanecerMiliSeg1970   = Date.parse(amanecer);
                         amanecerMiliSeg1970  -= minutosZonaHoraria * 60 * 1000;
                     var amanecerLocal         = (new Date(amanecerMiliSeg1970)).toLocaleTimeString("es-ES");
                     var oscurecer             = $('sun',datos).attr("set");          
                     var oscurecerMiliSeg1970  = Date.parse(oscurecer);
                         oscurecerMiliSeg1970  -= minutosZonaHoraria * 60 * 1000;
                     var oscurecerLocal        = (new Date(oscurecerMiliSeg1970)).toLocaleTimeString("es-ES");
                     var temperatura           = $('temperature',datos).attr("value");
                     var temperaturaMin        = $('temperature',datos).attr("min");
                     var temperaturaMax        = $('temperature',datos).attr("max");
                     var temperaturaUnit       = $('temperature',datos).attr("unit");
                     var humedad               = $('humidity',datos).attr("value");
                     var humedadUnit           = $('humidity',datos).attr("unit");
                     var presion               = $('pressure',datos).attr("value");
                     var presionUnit           = $('pressure',datos).attr("unit");
                     var velocidadViento       = $('speed',datos).attr("value");
                     var nombreViento          = $('speed',datos).attr("name");
                     var direccionViento       = $('direction',datos).attr("value");
                     var codigoViento          = $('direction',datos).attr("code");
                     var nombreDireccionViento = $('direction',datos).attr("name");
                     var nubosidad             = $('clouds',datos).attr("value");
                     var nombreNubosidad       = $('clouds',datos).attr("name");
                     var visibilidad           = $('visibility',datos).attr("value");
                     var precipitacionValue    = $('precipitation',datos).attr("value");
                     var precipitacionMode     = $('precipitation',datos).attr("mode");
                     var descripcion           = $('weather',datos).attr("value");
                     var imagen                = $('weather',datos).attr("icon");
                     var horaMedida            = $('lastupdate',datos).attr("value");
                     var horaMedidaMiliSeg1970 = Date.parse(horaMedida);
                         horaMedidaMiliSeg1970 -= minutosZonaHoraria * 60 * 1000;
                     var horaMedidaLocal       = (new Date(horaMedidaMiliSeg1970)).toLocaleTimeString("es-ES");
                     var fechaMedidaLocal      = (new Date(horaMedidaMiliSeg1970)).toLocaleDateString("es-ES");
                     
                
                     var datosCiudad = "<h2> Datos " + ciudad + "</h2>";
                         datosCiudad +=  "<ul><li>Número de elementos del XML: " + totalNodos + "</li>";
                         datosCiudad += "<li><img src=\"https://openweathermap.org/img/w/"+ imagen + ".png\"" + "/>" + "</li>";
                         datosCiudad += "<li>Ciudad: " + ciudad + "</li>";
                         datosCiudad += "<li>Longitud: " + longitud + " grados</li>";
                         datosCiudad += "<li>Latitud: " + latitud + " grados</li>";
                         datosCiudad += "<li>País: " + pais + "</li>";
                         datosCiudad += "<li>Amanece a las: " + amanecerLocal + "</li>";
                         datosCiudad += "<li>Oscurece a las: " + oscurecerLocal + "</li>";
                         datosCiudad += "<li>Temperatura: " + temperatura + " grados Celsius</li>";
                         datosCiudad += "<li>Temperatura mínima: " + temperaturaMin + " grados Celsius</li>";
                         datosCiudad += "<li>Temperatura máxima: " + temperaturaMax + " grados Celsius</li>";
                         datosCiudad += "<li>Temperatura (unidades): " + temperaturaUnit + "</li>";
                         datosCiudad += "<li>Humedad: " + humedad + " " + humedadUnit + "</li>";
                         datosCiudad += "<li>Presión: " + presion + " " + presionUnit + "</li>";
                         datosCiudad += "<li>Velocidad del viento: " + velocidadViento + " metros/segundo</li>";
                         datosCiudad += "<li>Nombre del viento: " + nombreViento + "</li>";
                         datosCiudad += "<li>Dirección del viento: " + direccionViento + " grados</li>";
                         datosCiudad += "<li>Código del viento: " + codigoViento + "</li>";
                         datosCiudad += "<li>Nombre del viento: " + nombreDireccionViento + "</li>";
                         datosCiudad += "<li>Nubosidad: " + nubosidad + "</li>";
                         datosCiudad += "<li>Nombre nubosidad: " + nombreNubosidad + "</li>";
                         datosCiudad += "<li>Visibilidad: " + visibilidad + " metros</li>";
                         datosCiudad += "<li>Precipitación valor: " + precipitacionValue + "</li>";
                         datosCiudad += "<li>Precipitación modo: " + precipitacionMode + "</li>";
                         datosCiudad += "<li>Descripción: " + descripcion + "</li>";
                         datosCiudad += "<li>Hora de la medida: " + horaMedidaLocal + "</li>";
                         datosCiudad += "<li>Fecha de la medida: " + fechaMedidaLocal + "</li>";
                     
                    var docuP = document.getElementsByTagName('p')[0];
                    docuP.innerHTML += datosCiudad;
                },
                error:function(){
                    document.write(this.error);    
                }
            });
        });
        this.datosObtenidos = true;
    }


}

var meteorologia = new Meteorologia();