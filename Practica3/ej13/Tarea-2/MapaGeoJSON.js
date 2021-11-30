 class MapaGJSON{
    constructor(){
         this.mapa;
     }

     initMap(){

        var center = {lat:40.4166400 , lng: -3.7032700 };
        this.mapa = new google.maps.Map(document.getElementsByTagName("p")[0], {
            center: center,
            zoom: 6
        });
     }

     cargarGeoJSON(files){
        var file = files[0];
        var lector = new FileReader();
        lector.onload = function (e){
            var geoJSON = JSON.parse(lector.result);

            for(var i = 0; i < geoJSON.features.length; i++){
                var nombre = geoJSON.features[i].properties.name;
                
                var coordinatesSp = geoJSON.features[i].geometry.coordinates;
                for (var j = 0; j < coordinatesSp.length; j++){
                    var latitud = parseFloat(coordinatesSp[1]);
                    var longitud = parseFloat(coordinatesSp[0]);
                    var position = {lat:latitud, lng:longitud};

                    var marcador = new google.maps.Marker({
                        position: position,
                        title: nombre,
                        map: mapaGeoJSON.mapa
                    });
                    var indicador = new google.maps.InfoWindow({
                        content: nombre
                    });

                    marcador.indicador = indicador;

                    marcador.addListener("click", function(){
                        this.indicador.open(mapaGeoJSON.mapa, this);
                    });
                }
            }
        }

        lector.readAsText(file);
     }

 }

 var mapaGeoJSON = new MapaGJSON();