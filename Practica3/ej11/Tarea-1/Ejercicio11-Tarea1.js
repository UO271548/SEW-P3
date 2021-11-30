"use strict";
class Geolocalizacion {
    constructor (){
        navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this));
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
        
        var datosUbicacion='<h2> Tarea-1 </h2>'; 
        datosUbicacion+='<p>Longitud: '+this.longitud +' grados</p>'; 
        datosUbicacion+='<p>Latitud: '+this.latitud +' grados</p>';
        datosUbicacion+='<p>Precisión de la latitud y longitud: '+ this.precision +' metros</p>';
        datosUbicacion+='<p>Altitud: '+ this.altitude +' metros</p>';
        datosUbicacion+='<p>Precisión de la altitud: '+ this.precisionAltitud +' metros</p>'; 
        datosUbicacion+='<p>Rumbo: '+ this.rumbo +' grados</p>'; 
        datosUbicacion+='<p>Velocidad: '+ this.velocidad +' metros/segundo</p>';

        var docuP = document.getElementsByTagName('p')[0];
        docuP.innerHTML += datosUbicacion;
    }
}
var geo = new Geolocalizacion();