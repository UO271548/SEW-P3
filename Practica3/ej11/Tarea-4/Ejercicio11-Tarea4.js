"use strict";
class MapaDinamico {
    constructor() {
        this.mapa;
    }

    initMap() {
        var oviedo = {lat: 43.3672702, lng: -5.8502461};
        this.mapa = new google.maps.Map(document.getElementsByTagName('main')[0],{zoom: 8, napTypeId: "terrain",center:oviedo});
        this.marcador = new google.maps.Marker({position:oviedo,map:this.mapa});
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
}

var mapaDinamico = new MapaDinamico();