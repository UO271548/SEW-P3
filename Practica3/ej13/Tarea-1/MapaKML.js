 class MapaKML{
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

     cargarKml(files){
        var file = files[0];
        var lector = new FileReader();
        lector.onload = function (e){
            var kml = $.parseXML(lector.result);

            $("Document", kml).find("Placemark").each(function(){
                var nombre = $("name", this).text();
                var coordinates = $("Point", this).find("coordinates").text().split("\n");

                for(var i = 0; i < coordinates.length; i++){
                    coordinates[i] = coordinates[i].trim();
                    var coordinatesSp = coordinates[i].split(",");
                    var latitud = parseFloat(coordinatesSp[1]);
                    var longitud = parseFloat(coordinatesSp[0]);

                    var position = {lat:latitud, lng:longitud};

                    var marcador = new google.maps.Marker({
                        position: position,
                        title: nombre,
                        map: mapaKml.mapa
                    });
                    var indicador = new google.maps.InfoWindow({
                        content: nombre
                    });

                    marcador.indicador = indicador;

                    marcador.addListener("click", function(){
                        this.indicador.open(mapaKml.mapa, this);
                    });
                }
            });
        }

        lector.readAsText(file);
     }

 }

 var mapaKml = new MapaKML();