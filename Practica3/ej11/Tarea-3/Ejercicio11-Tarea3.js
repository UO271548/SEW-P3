"use strict";
class Geolocalizacion {
    constructor (){
        navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this), this.errores.bind(this));
    }
    getPosicion(posicion){
        this.longitud         = posicion.coords.longitude; 
        this.latitud          = posicion.coords.latitude;  
        this.precision        = posicion.coords.accuracy;
        this.altitud          = posicion.coords.altitude;
        this.precisionAltitud = posicion.coords.altitudeAccuracy;
        this.rumbo            = posicion.coords.heading;
        this.velocidad        = posicion.coords.speed;       
    }
    getLongitud(){
        return this.longitud;
    }
    getLatitud(){
        return this.latitud;
    }
    getAltitud(){
        return this.altitud;
    }
    obtenerLocalizacion(){
        
        var datosUbicacion='<h2> Tarea-3 </h2>'; 
        datosUbicacion+='<p>Longitud: '+this.longitud +' grados</p>'; 
        datosUbicacion+='<p>Latitud: '+this.latitud +' grados</p>';
        datosUbicacion+='<p>Precisión de la latitud y longitud: '+ this.precision +' metros</p>';
        datosUbicacion+='<p>Altitud: '+ this.altitude +' metros</p>';
        datosUbicacion+='<p>Precisión de la altitud: '+ this.precisionAltitud +' metros</p>'; 
        datosUbicacion+='<p>Rumbo: '+ this.rumbo +' grados</p>'; 
        datosUbicacion+='<p>Velocidad: '+ this.velocidad +' metros/segundo</p>';
        
        var docuP = document.getElementsByTagName('p')[0];
        docuP.innerHTML += datosUbicacion;
        this.getMapaEstaticoGoogle();
    }

    errores(error){
        switch(error.code) {
        case error.PERMISSION_DENIED:
            this.mensaje = "El usuario no permite la petición de geolocalización"
            break;
        case error.POSITION_UNAVAILABLE:
            this.mensaje = "Información de geolocalización no disponible"
            break;
        case error.TIMEOUT:
            this.mensaje = "La petición de geolocalización ha caducado"
            break;
        case error.UNKNOWN_ERROR:
            this.mensaje = "Se ha producido un error desconocido"
            break;
        }
    }

    getMapaEstaticoGoogle(){
        var apiKey = "&key=AIzaSyC6j4mF6blrc4kZ54S6vYZ2_FpMY9VzyRU";
        var url = "https://maps.googleapis.com/maps/api/staticmap?";
        //Parámetros
        // Centro del mapa
        var centro = "center=" + this.latitud + "," + this.longitud;
        //zoom
        //zoom: 1 (el mundo), 5 (continentes), 10 (ciudad), 15 (calles), 20 (edificios)
        var zoom ="&zoom=15";
        //Tamaño del mapa en pixeles
        var tamaño= "&size=800x600";

        var marcador = "&markers=color:red%7Clabel:S%7C" + this.latitud + "," + this.longitud;
        var sensor = "&sensor=false"; 
        
        this.imagenMapa = url + centro + zoom + tamaño + marcador + sensor + apiKey;
        var docuP = document.getElementsByTagName('p')[0];
        docuP.innerHTML += "<p><img src='"+ this.imagenMapa+"' alt='mapa estático google' /></p>";

    }
}
var geo = new Geolocalizacion();