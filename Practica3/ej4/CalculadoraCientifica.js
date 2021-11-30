"use strict";
class CalculadoraBasica{
    constructor(){
        this.pantalla = "";
        this.memoria = 0;
        this.result = 0;
        this.resetearPantalla = false;
        this.operacion = "";
        this.operando1 = "";
        this.operando2 = "";
        this.nuevoOperando = false;
    }
    escribirPantalla(texto){
        if (this.resetearPantalla){
            this.pantalla = "";
            this.pantalla += texto;
            document.getElementById("pantalla").value = this.pantalla;
            this.resetearPantalla = false;
        }else{
            this.pantalla += texto;
            document.getElementById("pantalla").value = this.pantalla;
        }
       
    }
    numero(n){
        if (!this.nuevoOperando){
            this.operando1 += n;
        }else{
            this.operando2 += n;
        }
        this.escribirPantalla(n);
    }
    sumar(){
        if (this.operacion == ""){
            this.operacion = "+";
            this.nuevoOperando = true;
        }else{
            this.calcular();
            this.operacion = "+"
            this.nuevoOperando = true;
        }
        this.escribirPantalla("+");
        
    }
    restar(){
        if (this.operacion == ""){
            this.operacion = "-";
            this.nuevoOperando = true;
        }else{
            this.calcular();
            this.operacion = "-"
            this.nuevoOperando = true;
        }
        this.escribirPantalla("-");
    }
    multiplicar(){
        if (this.operacion == ""){
            this.operacion = "*";
            this.nuevoOperando = true;
        }else{
            this.calcular();
            this.operacion = "*"
            this.nuevoOperando = true;
        }
        this.escribirPantalla("*");
    }
    dividir(){
        if (this.operacion == ""){
            this.operacion = "/";
            this.nuevoOperando = true;
        }else{
            this.calcular();
            this.operacion = "/"
            this.nuevoOperando = true;
        }
        this.escribirPantalla("/");
    }
    punto(){
        if (!this.nuevoOperando){
            this.operando1 += ".";
        }else{
            this.operando2 += ".";
        }
        this.escribirPantalla(".");
    }
    borrarPantalla(){
        this.pantalla="";
        document.getElementById("pantalla").value = this.pantalla;
        this.result = 0;
        this.nuevoOperando = false;
        this.operacion = "";
        this.operando1 = "";
        this.operando2 = "";
    }
    calcular(){
        if (this.operando1 != "" && this.operacion != "" && this.operando2 != ""){
            this.result = eval(Number(this.operando1) + this.operacion + Number(this.operando2));
            this.operando1 = this.result.toString();
            this.operando2 = "";
            this.operacion = "";
            this.nuevoOperando = false;
            this.resetearPantalla = true;
            this.escribirPantalla(this.result);
        }
        
    }
    mrc(){
        if (this.operando2 == ""){
            this.memoria = this.operando1;
        }
        else{
            this.memoria = eval(Number(this.operando1) + this.operacion + Number(this.operando2));
        }
        
    }
    mMinus(){
        if (this.operando2 != ""){
            this.calcular();
        }
        this.operacion = "-";
        this.operando2 = this.memoria;
        this.calcular();
        
    }
    mPlus(){   
        if (this.operando2 != ""){
            this.calcular();
        } 
        this.operacion = "+";
        this.operando2 = this.memoria;
        this.calcular();
        
    }
}

class CalculadoraCientifica extends CalculadoraBasica{
    constructor(){
        super();
        this.cOperation = false;
        this.paretesis = false;
    }

    cos(){
        if (!this.nuevoOperando){
            this.result = Math.cos(Number(this.operando1));
            this.operando1 = this.result.toString();
            this.operando2 = "";
            this.operacion = "";
            this.nuevoOperando = false;
            this.resetearPantalla = true;
            this.escribirPantalla(this.result);
        }else{
            this.result = Math.cos(eval(Number(this.operando1)+ this.operacion + Number(this.operando2)));
            this.operando1 = this.result.toString();
            this.operando2 = "";
            this.operacion = "";
            this.nuevoOperando = false;
            this.resetearPantalla = true;
            this.escribirPantalla(this.result);
        }
        this.cOperation = true;
    }

    acos(){
        if (!this.nuevoOperando){
            this.result = Math.acos(Number(this.operando1));
            this.operando1 = this.result.toString();
            this.operando2 = "";
            this.operacion = "";
            this.nuevoOperando = false;
            this.resetearPantalla = true;
            this.escribirPantalla(this.result);
        }else{
            this.result = Math.acos(eval(Number(this.operando1)+ this.operacion + Number(this.operando2)));
            this.operando1 = this.result.toString();
            this.operando2 = "";
            this.operacion = "";
            this.nuevoOperando = false;
            this.resetearPantalla = true;
            this.escribirPantalla(this.result);
        }
        this.cOperation = true;
    }

    sin(){
        if (!this.nuevoOperando){
            this.result = Math.sin(Number(this.operando1));
            this.operando1 = this.result.toString();
            this.operando2 = "";
            this.operacion = "";
            this.nuevoOperando = false;
            this.resetearPantalla = true;
            this.escribirPantalla(this.result);
        }else{
            this.result = Math.sin(eval(Number(this.operando1)+ this.operacion + Number(this.operando2)));
            this.operando1 = this.result.toString();
            this.operando2 = "";
            this.operacion = "";
            this.nuevoOperando = false;
            this.resetearPantalla = true;
            this.escribirPantalla(this.result);
        }
        this.cOperation = true;
    }

    asin(){
        if (!this.nuevoOperando){
            this.result = Math.asin(Number(this.operando1));
            this.operando1 = this.result.toString();
            this.operando2 = "";
            this.operacion = "";
            this.nuevoOperando = false;
            this.resetearPantalla = true;
            this.escribirPantalla(this.result);
        }else{
            this.result = Math.asin(eval(Number(this.operando1)+ this.operacion + Number(this.operando2)));
            this.operando1 = this.result.toString();
            this.operando2 = "";
            this.operacion = "";
            this.nuevoOperando = false;
            this.resetearPantalla = true;
            this.escribirPantalla(this.result);
        }
        this.cOperation = true;
    }

    tan(){
        if (!this.nuevoOperando){
            this.result = Math.tan(Number(this.operando1));
            this.operando1 = this.result.toString();
            this.operando2 = "";
            this.operacion = "";
            this.nuevoOperando = false;
            this.resetearPantalla = true;
            this.escribirPantalla(this.result);
        }else{
            this.result = Math.tan(eval(Number(this.operando1)+ this.operacion + Number(this.operando2)));
            this.operando1 = this.result.toString();
            this.operando2 = "";
            this.operacion = "";
            this.nuevoOperando = false;
            this.resetearPantalla = true;
            this.escribirPantalla(this.result);
        }
        this.cOperation = true;
    }

    log(){
        if (!this.nuevoOperando){
            this.result = Math.log(Number(this.operando1));
            this.operando1 = this.result.toString();
            this.operando2 = "";
            this.operacion = "";
            this.nuevoOperando = false;
            this.resetearPantalla = true;
            this.escribirPantalla(this.result);
        }else{
            this.result = Math.log(eval(Number(this.operando1)+ this.operacion + Number(this.operando2)));
            this.operando1 = this.result.toString();
            this.operando2 = "";
            this.operacion = "";
            this.nuevoOperando = false;
            this.resetearPantalla = true;
            this.escribirPantalla(this.result);
        }

        this.cOperation = true;
        
    }

    factorial(){
        var i;
        if (!this.nuevoOperando){
            this.result = Number(this.operando1);
            this.operando1 = this.result.toString();
            this.operando2 = "";
            this.operacion = "";

            var limit = this.result;
            for ( i = 1; i<= limit; i++){
                this.result = this.result = eval(Number(this.result) * Number(i));
            }

            this.nuevoOperando = false;
            this.resetearPantalla = true;
            this.escribirPantalla(this.result);
        }else{
            
            this.result = eval(Number(this.operando1)+ this.operacion + Number(this.operando2));
            this.operando1 = this.result.toString();
            this.operando2 = "";
            this.operacion = "";
            
            var limit = this.result;
            for ( i = 1; i<= limit; i++){
                this.result = eval(Number(this.result) * Number(i));
            }

            this.nuevoOperando = false;
            this.resetearPantalla = true;
            this.escribirPantalla(this.result);
        }
        this.cOperation = true;
    }

    raiz(){
        if (!this.nuevoOperando){
            this.result = Math.sqrt(Number(this.operando1));
            this.operando1 = this.result.toString();
            this.operando2 = "";
            this.operacion = "";
            this.nuevoOperando = false;
            this.resetearPantalla = true;
            this.escribirPantalla(this.result);
        }else{
            this.result = Math.sqrt(eval(Number(this.operando1)+ this.operacion + Number(this.operando2)));
            this.operando1 = this.result.toString();
            this.operando2 = "";
            this.operacion = "";
            this.nuevoOperando = false;
            this.resetearPantalla = true;
            this.escribirPantalla(this.result);
        }
        this.cOperation = true;
    }

    cuadrado(){
        if (!this.nuevoOperando){
            this.result = Math.pow(Number(this.operando1), 2);
            this.operando1 = this.result.toString();
            this.operando2 = "";
            this.operacion = "";
            this.nuevoOperando = false;
            this.resetearPantalla = true;
            this.escribirPantalla(this.result);
        }else{
            this.result = Math.pow((eval(Number(this.operando1)+ this.operacion + Number(this.operando2))),2);
            this.operando1 = this.result.toString();
            this.operando2 = "";
            this.operacion = "";
            this.nuevoOperando = false;
            this.resetearPantalla = true;
            this.escribirPantalla(this.result);
        }
    }

    fraccion(){
        if (!this.nuevoOperando){
            this.result = eval(1/Number(this.operando1));
            this.operando1 = this.result.toString();
            this.operando2 = "";
            this.operacion = "";
            this.nuevoOperando = false;
            this.resetearPantalla = true;
            this.escribirPantalla(this.result);
        }else{
            this.result = eval(1/(Number(this.operando1)+ this.operacion + Number(this.operando2)));
            this.operando1 = this.result.toString();
            this.operando2 = "";
            this.operacion = "";
            this.nuevoOperando = false;
            this.resetearPantalla = true;
            this.escribirPantalla(this.result);
        }
    }

    potenciaDiez(){
        if (!this.nuevoOperando){
            this.result = Math.pow(10,Number(this.operando1));
            this.operando1 = this.result.toString();
            this.operando2 = "";
            this.operacion = "";
            this.nuevoOperando = false;
            this.resetearPantalla = true;
            this.escribirPantalla(this.result);
        }else{
            this.result = Math.pow(10, (eval(Number(this.operando1)+ this.operacion + Number(this.operando2))));
            this.operando1 = this.result.toString();
            this.operando2 = "";
            this.operacion = "";
            this.nuevoOperando = false;
            this.resetearPantalla = true;
            this.escribirPantalla(this.result);
        }
    }

    mod(){
        if (!this.nuevoOperando){
            this.result = Math.abs(eval(Number(this.operando1)));
            this.operando1 = this.result.toString();
            this.operando2 = "";
            this.operacion = "";
            this.nuevoOperando = false;
            this.resetearPantalla = true;
            this.escribirPantalla(this.result);
        }else{
            this.result = Math.abs(eval(Number(this.operando1)+ this.operacion + Number(this.operando2)));
            this.operando1 = this.result.toString();
            this.operando2 = "";
            this.operacion = "";
            this.nuevoOperando = false;
            this.resetearPantalla = true;
            this.escribirPantalla(this.result);
        }
    }

    exp(){
        if (!this.nuevoOperando){
            this.result = Math.exp(eval(Number(this.operando1)));
            this.operando1 = this.result.toString();
            this.operando2 = "";
            this.operacion = "";
            this.nuevoOperando = false;
            this.resetearPantalla = true;
            this.escribirPantalla(this.result);
        }else{
            this.result = Math.exp(eval(Number(this.operando1)+ this.operacion + Number(this.operando2)));
            this.operando1 = this.result.toString();
            this.operando2 = "";
            this.operacion = "";
            this.nuevoOperando = false;
            this.resetearPantalla = true;
            this.escribirPantalla(this.result);
        }
    }

    pi(){
        if (!this.nuevoOperando){
            this.operando1 = Math.PI.toString();
            this.escribirPantalla(this.operando1);
        }else{
            this.operando2 = Math.PI.toString();
            this.escribirPantalla(this.operando2);
        }
    }

    e(){
        if (!this.nuevoOperando){
            this.operando1 = Math.E.toString();
            this.escribirPantalla(this.operando1);
        }else{
            this.operando2 = Math.E.toString();
            this.escribirPantalla(this.operando2);
        }
    }

    masMenos(){
        if (!this.nuevoOperando){
            this.result = eval(0-Number(this.operando1));
            this.operando1 = this.result.toString();
            this.operando2 = "";
            this.operacion = "";
            this.nuevoOperando = false;
            this.resetearPantalla = true;
            this.escribirPantalla(this.result);
        }else{
            this.result = eval(0-(Number(this.operando1)+ this.operacion + Number(this.operando2)));
            this.operando1 = this.result.toString();
            this.operando2 = "";
            this.operacion = "";
            this.nuevoOperando = false;
            this.resetearPantalla = true;
            this.escribirPantalla(this.result);
        }
    }

    potencia(){
        if (this.operacion == ""){
            this.operacion = "^";
            this.nuevoOperando = true;
        }else{
            this.calcular();
            this.operacion = "^"
            this.nuevoOperando = true;
        }
        this.cOperation = true;
        this.escribirPantalla("^");
    }

    calcular(){
        
        if (this.operacion == "^"){
            this.result = Math.pow(Number(this.operando1), Number(this.operando2));
            this.operando1 = this.result.toString();
            this.operando2 = "";
            this.operacion = "";
            this.nuevoOperando = false;
            this.resetearPantalla = true;
            this.escribirPantalla(this.result);
        }
        else if (this.paretesis){
            this.result = eval(this.pantalla)
            this.operando1 = this.result.toString();
            this.operando2 = "";
            this.operacion = "";
            this.nuevoOperando = false;
            this.resetearPantalla = true;
            this.paretesis = false;
            this.escribirPantalla(this.result);
        }else{
            super.calcular();
        }
    }

    parentesisIzq(){
        this.escribirPantalla("(");
        this.paretesis = true;
    }

    parentesisDrch(){
        this.escribirPantalla(")");
        this.paretesis = true;
    }

    c(){
        
        if (this.operando2 == ""){
            if (this.operacion == ""){
                this.operando1 = this.operando1.slice(0, -1);
            }
            else{
                this.operacion = "";
            }
        }
        else{
            this.operando2 = this.operando2.slice(0, -1)
            
        }
        this.resetearPantalla = true;
        this.escribirPantalla(this.operando1 + this.operacion + this.operando2);
        if (this.operacion == ""){
            this.nuevoOperando = false;
        }else{
            this.nuevoOperando = true;
        }
    }

    sumar(){
        if (!this.paretesis){
            super.sumar();
        }else{
            this.escribirPantalla("+");
        }
    }

    multiplicar(){
        if (!this.paretesis){
            super.multiplicar();
        }else{
            this.escribirPantalla("*");
        }
    }

    restar(){
        if (!this.paretesis){
            super.restar();
        }else{
            this.escribirPantalla("-");
        }
    }

    dividir(){
        if (!this.paretesis){
            super.dividir();
        }else{
            this.escribirPantalla("/");
        }
    }
}

var calculadoraCientifica = new CalculadoraCientifica();