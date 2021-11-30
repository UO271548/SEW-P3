class CalculadoraEnergetica{

    constructor(){
        this.pila = new Array();
        this.result = 0;
        this.rPantalla = false;
        this.nuevoOperando = true;
        
    }

    escribirPantalla(texto) {
		if (this.nuevoOperando) {
			this.entrada = texto.toString();
			this.nuevoOperando = false;
		} else {
			this.entrada += texto.toString();
		}

		document.querySelector("input").value = this.entrada;
	}

    refres(){
        var elementosPila = "";

		for (var i in this.pila)
			elementosPila += ("<li>" + this.pila[i] + "</li>");

		document.querySelector("ul li").innerHTML = elementosPila;
    }

	calcular() {
		var potencia = parseFloat(document.getElementsByTagName("input")[1].value);
		var numeroAparatos = parseFloat(document.getElementsByTagName("input")[2].value);
		var preciaoKV = parseFloat(document.getElementsByTagName("input")[3].value);
		this.entrada = (potencia / 1000) * numeroAparatos * preciaoKV;
		this.pila.push(this.entrada);
		this.refres();
		this.nuevoOperando = true;
		this.entrada = "0";
		document.querySelector("input").value = this.entrada;
	}


	hacerFactura(){
		var resultado = 0;
		for (var i in this.pila){
			resultado += parseFloat(this.pila[i]);
		}
		this.borrarPantalla();
		this.pila.push(resultado);
		this.refres();
	}
	sumar() {
		if (this.pila.length > 1) {
			var resultado = parseFloat(this.pila.pop()) + parseFloat(this.pila.pop());
			this.pila.push(resultado);
			this.refres();
		}
	}

	borrarPantalla(){
		this.pila = new Array();
		this.entrada = "0";
		document.querySelector("input").value = this.entrada;
		this.nuevaEntrada = true;
		this.refres();
	}

}


var calculadoraEnergetica = new CalculadoraEnergetica();