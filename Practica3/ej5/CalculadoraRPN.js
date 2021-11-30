class CalculadoraRPN{

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

	borrarPantalla(){
		this.pila = new Array();
		this.entrada = "0";
		document.querySelector("input").value = this.entrada;
		this.nuevaEntrada = true;
		this.refres();
	}


    refres(){
        var elementosPila = "";

		for (var i in this.pila)
			elementosPila += ("<li>" + this.pila[i] + "</li>");

		document.querySelector("ul li").innerHTML = elementosPila;
    }

	calcular() {
		this.pila.push(this.entrada);
		this.refres();
		this.nuevoOperando = true;
		this.entrada = "0";
		document.querySelector("input").value = this.entrada;
	}

	punto() {
		this.escribirPantalla('.');
	}

	numero(n) {
		this.escribirPantalla(Number(n));
	}

	sumar() {
		if (this.pila.length > 1) {
			var resultado = parseFloat(this.pila.pop()) + parseFloat(this.pila.pop());
			this.pila.push(resultado);
			this.refres();
		}
	}

	restar() {
		if (this.pila.length > 1) {
			var sustraendo = this.pila.pop();
			var minuendo = this.pila.pop();
			var resultado = minuendo - sustraendo;

			this.pila.push(resultado);
			this.refres();
		}
	}

	multiplicar() {
		if (this.pila.length > 1) {
			var resultado = this.pila.pop() * this.pila.pop();
			this.pila.push(resultado);
			this.refres();
		}
	}

	dividir() {
		if (this.pila.length > 1) {
			var divisor = this.pila.pop();
			var dividendo = this.pila.pop();
			var resultado = dividendo / divisor;

			this.pila.push(resultado);
			this.refres();
		}
	}

	borrar() {
		this.pila = new Array();
		this.entrada = "0";
		document.getElementById("entrada").innerText = this.entrada;
		this.nuevaEntrada = true;
		this.refres();
	}

	c(){
		this.pila.pop();
		this.refres();
	}

	raiz() {
		var cimaPila = parseFloat(this.pila.pop());
		var raiz = Math.sqrt(cimaPila);
		this.pila.push(raiz);
		this.refres();
	}

	e() {
		this.escribirPantalla(Math.E);
	}

	pi(){
		this.escribirPantalla(Math.PI);
	}

	potenciaDiez(){
		var cimaPila = parseFloat(this.pila.pop());
		var pDiez = Math.pow(10,cimaPila);
		this.pila.push(pDiez);
		this.refres();
	}

	fraccion(){
		var cimaPila = parseFloat(this.pila.pop());
		var fraccion = 1 / cimaPila;
		this.pila.push(fraccion);
		this.refres();
		

	}

	factorial(){
		var cimaPila = parseFloat(this.pila.pop());
		var limit = cimaPila;
		var factorial = cimaPila;
		for (var i =1;  i< limit; i++){
			factorial = factorial * i
		}
		this.pila.push(factorial);
		this.refres();
	}

	log() {
		var cimaPila = parseFloat(this.pila.pop());
		var logaritmo = Math.log(cimaPila);
		this.pila.push(logaritmo);
		this.refres();
	}

	cuadrado() {
		var cimaPila = parseFloat(this.pila.pop());
		var cuadrado = Math.pow(cimaPila, 2);
		this.pila.push(cuadrado);
		this.refres();
	}

	potencia() {
		var exponente = parseFloat(this.pila.pop());
		var base = parseFloat(this.pila.pop());
		var potencia = Math.pow(base, exponente);
		this.pila.push(potencia);
		this.refres();
	}

	sin() {
		var cimaPila = parseFloat(this.pila.pop());
		var seno = Math.sin(cimaPila);
		this.pila.push(seno);
		this.refres();
	}

	asin(){
		var cimaPila = parseFloat(this.pila.pop());
		var aSeno = Math.asin(cimaPila);
		this.pila.push(aSeno);
		this.refres();
	}

	cos() {
		var cimaPila = parseFloat(this.pila.pop());
		var coseno = Math.cos(cimaPila);
		this.pila.push(coseno);
		this.refres();
	}

	acos(){
		var cimaPila = parseFloat(this.pila.pop());
		var aCoseno = Math.acos(cimaPila);
		this.pila.push(aCoseno);
		this.refres();
	}

	tan() {
		var cimaPila = parseFloat(this.pila.pop());
		var tangente = Math.tan(cimaPila);
		this.pila.push(tangente);
		this.refres();
	}

	atan(){
		var cimaPila = parseFloat(this.pila.pop());
		var aTangente = Math.atan(cimaPila);
		this.pila.push(aTangente);
		this.refres();
	}
}


var calculadoraRPN = new CalculadoraRPN();