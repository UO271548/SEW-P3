"use strict";
class MapaDinamico {
    constructor() {
        this.mapa;
    }

    getPosicion(posicion){
        this.longitud         = posicion.coords.longitude;
        this.latitud          = posicion.coords.latitude;      
    }

    initMap() {
        var oviedo = {lat: 43.3672702, lng: -5.8502461};
        this.mapa = new google.maps.Map(document.getElementsByTagName('main')[0],{zoom: 15, napTypeId: "terrain",center:oviedo});
        //this.marcador = new google.maps.Marker({position:oviedo,map:this.mapa});

        var restaurantes = [
            new Restaurante(43.36522097913223, -5.84895041561483, "El Tizón"),
            new Restaurante(43.364756276594164, -5.845366973286591, "Sidrería Las Güelas"),
            new Restaurante(43.363180079589114, -5.845782717466126,"De Norte a Sur Valentín"),
            new Restaurante(43.36417287757201, -5.844281902122526,"La Sombra del Manzano"),
            new Restaurante(43.364863976045584, -5.845381515614829,"Vinoteca El Gasconín"),
            new Restaurante(43.36448997635193, -5.844708459794291,"Sidrería Tierra Astur Parrilla"),
            new Restaurante(43.36424467817371, -5.844166702122539,"La Finca Sidrería Agrobar"),
            new Restaurante(43.36418387769513, -5.844406286778942,"Restaurante El Ferroviario"),
            new Restaurante(43.36350817919581, -5.844988403973747,"El Patio de los Naranjos"),
            new Restaurante(43.363764578611544, -5.84459941561487,"La mafia se sienta a la mesa")
        ];

        for (var i = 0; i < restaurantes.length; i++){
            var marcador = new google.maps.Marker({
                position:{lat:restaurantes[i].latitud, lng:restaurantes[i].longitud},
                map: this.mapa,
                title:restaurantes[i].nomnbre
            });
        }
        marcador.setMapa(this.mapa);
    }
}

class Restaurante{
    constructor(latitud, longitud, nomnbre){
        this.latitud = latitud;
        this.longitud = longitud;
        this.nomnbre = nomnbre;
    }
}
var mapaDinamico = new MapaDinamico();