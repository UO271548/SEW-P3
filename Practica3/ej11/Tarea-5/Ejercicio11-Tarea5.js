"use strict";
class MapaDinamico {
    constructor() {
        
    }

    getPosicion(posicion){
        this.longitud         = posicion.coords.longitude;
        this.latitud          = posicion.coords.latitude;      
    }

    initMap() {
        var infoWindow = new google.maps.InfoWindow();
        var oviedo = {lat: 43.3672702, lng: -5.8502461};
        var mapa = new google.maps.Map(document.getElementsByTagName('main')[0],{zoom: 8, napTypeId: "terrain",center:oviedo});

        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(function(posicion) {
                var coordenadas = { lat: posicion.coords.latitude, lng: posicion.coords.longitude };
                infoWindow.setPosition(coordenadas);
                infoWindow.setContent("Su localización");
                infoWindow.open(mapa);
                mapa.setCenter(coordenadas);
                mapa.marcador = new google.maps.Marker({position:coordenadas,map:mapa});
            },function(){
                handleLocationError(false, infoWindow, mapaGeoposicionado.getCenter());
            });
        }else{
            handleLocationError(false, infoWindow, mapaGeoposicionado.getCenter());
        }
    }

    handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: Ha fallado la geolocalización' :
                              'Error: Su navegador no soporta geolocalización');
        infoWindow.open(mapaGeoposicionado);
      }
}

var mapaDinamico = new MapaDinamico();