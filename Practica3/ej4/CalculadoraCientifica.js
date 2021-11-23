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
    }

    cos(){
        this.escribirPantalla("cos");
    }

    sin(){
        this.escribirPantalla("sin");
    }

    tan(){
        this.escribirPantalla("tan");
    }
}

var calculadoraCientifica = new CalculadoraCientifica();