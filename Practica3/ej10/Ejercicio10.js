class BitCoin {
    constructor(){
        this.error = "Error al obtener la informacion sobre el BitCoin";
        this.datosObtenidos = false;
        
    }

    obtenerDatos(){
        if (this.datosObtenidos){
            var docP = document.getElementsByTagName('p')[0];
            docP.innerHTML = "";
        }
        
        $.ajax({
            dataType: "json",
            url: "https://api.coindesk.com/v1/bpi/currentprice/BTC.json%27",
            method: 'GET',
            success: function(datos){

                var datosBitCoin = "<p>";
                datosBitCoin += "<h2> Cotizacion actual del BitCoin</h2>";
                datosBitCoin += "<p>" + datos.bpi.USD.rate + "$</p>"
                datosBitCoin += "</p>"
                var docP = document.getElementsByTagName('p')[0];
                docP.innerHTML += datosBitCoin;
            },
            error:function(){
                document.write(this.error);    
            }
         });
        
        this.datosObtenidos = true;
    }


}

var bitcoin = new BitCoin();