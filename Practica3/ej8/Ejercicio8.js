class Meteorologia {
    constructor(){
        this.apiKey = "fcaf7f8320b8b813406a5bb833e7022c";
        this.ciudades = ['Oviedo', 'Cáceres', 'Bilbao', 'Pola de Allande', 'Gijón'];
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=";
        this.error = "Error al obtener la informacion Meteorologica";
        this.datosObtenidos = false;
        
    }

    obtenerDatos(){
        if (this.datosObtenidos){
            var section = document.getElementsByTagName('p')[0];
            section.innerHTML = "";
        }
        
        this.ciudades.forEach(function(ciudad){
            $.ajax({
                dataType: "json",
                url: "http://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&units=metric" + "&lang=es" + "&APPID=" + "fcaf7f8320b8b813406a5bb833e7022c",
                method: 'GET',
                success: function(datos){

                    //var datosCiudad = "<p>";
                    var datosCiudad = "<h2> Datos " + datos.name + "</h2>";
                    
                    datosCiudad += "<p> <img src=\"https://openweathermap.org/img/w/"+ datos.weather[0].icon + ".png\"" + "/>" + "</p>"
                    datosCiudad +="<p>País: " + datos.sys.country + "</p>";
                    datosCiudad +="<p>Latitud: " + datos.coord.lat + " grados</p>";
                    datosCiudad +="<p>Longitud: " + datos.coord.lon + " grados</p>";
                    datosCiudad +="<p>Temperatura: " + datos.main.temp + " grados Celsius</p>";
                    datosCiudad +="<p>Temperatura máxima: " + datos.main.temp_max + " grados Celsius</p>";
                    datosCiudad +="<p>Temperatura mínima: " + datos.main.temp_min + " grados Celsius</p>";
                    datosCiudad +="<p>Presión: " + datos.main.pressure + " milímetros</p>";
                    datosCiudad +="<p>Humedad: " + datos.main.humidity + "%</p>"; 
                    datosCiudad +="<p>Amanece a las: " + new Date(datos.sys.sunrise *1000).toLocaleTimeString() + "</p>"; 
                    datosCiudad +="<p>Oscurece a las: " + new Date(datos.sys.sunset *1000).toLocaleTimeString() + "</p>"; 
                    datosCiudad +="<p>Dirección del viento: " + datos.wind.deg + "  grados</p>";
                    datosCiudad +="<p>Velocidad del viento: " + datos.wind.speed + " metros/segundo</p>";
                    datosCiudad +="<p>Hora de la medida: " + new Date(datos.dt *1000).toLocaleTimeString() + "</p>";
                    datosCiudad +="<p>Fecha de la medida: " + new Date(datos.dt *1000).toLocaleDateString() + "</p>";
                    datosCiudad +="<p>Descripción: " + datos.weather[0].description + "</p>";
                    datosCiudad +="<p>Visibilidad: " + datos.visibility + " metros</p>";
                    datosCiudad +="<p>Nubosidad: " + datos.clouds.all + " %</p>"; 
                    //datosCiudad += "</p>"
                    var section = document.getElementsByTagName('p')[0];
                    section.innerHTML += datosCiudad;
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