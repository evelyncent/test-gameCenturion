// No cambies los nombres de las funciones.

import { suma } from "../level1/level1";

export function obtenerMayor(x, y) {

  if(x>y){
    return x;
  }else{
    return y;
  }

}

export function mayoriaDeEdad(edad) {
  if(edad>= 18){
    return "Allowed";
  }else{
    return "Not allowed";
  }

  
}
  
export function conection(status) {
  switch (status) {
    case 1:
      return "Online";
      case 2:
      return "Away";
    case 3:
      return "Offline";
      default:
        return"Offline";
      
  }
 
}

export function saludo(idioma) {  
  switch (idioma) {
    case "aleman":
      return "Guten Tag!";
      case "ingles":
      return "Hello!";
    case "mandarin":
      return "Ni Hao!";
      case "frances":
        return "Hola!";
      default:
        return"Hola!";
      
  }
}

export function colors(color) {  
  switch (color) {
    case "blue":
      return "This is blue";
      case "red":
      return "This is red";
    case "green":
      return "This is green";
      case "orange":
      return "This is orange"
      case"pink":
      return"Color not found";
      default:
        return"Color not found";
      
  }
}

export function esDiezOCinco(numero) {
if(numero==5 || numero ==10){
  return true;
}else{
  return false;
}

  
}

export function estaEnRango(numero) {  
 if(numero>=21 && numero<=49){
  return true;
 }else{
  return false;
 }


}

export function esEntero(numero) {
  if(numero==parseInt(numero)){
    return true;
   }else{
    return false;
   }

 
}

export function fizzBuzz(numero) {
  if(numero%3==0 && numero%5==0){
    return "fizzbuzz";
  }
  if(numero%3==0){
    return "fizz";
  }if(numero%5==0){
    return "buzz";
  }else{
    return numero;
  }
 
 
}

export function operadoresLogicos(num1, num2, num3) {
  if(num1==0|| num2==0 || num3==0){
    return "Error";
  }
  if(num1<0 || num2<0 || num3<0){
    return "Hay negativos";}
if(num1>num2 && num1>num3 && num1>0 ){
  return"Número 1 es mayor y positivo";
}else if (num3>num1 && num3>num2){
  return num3+1;
}else{
  return false;
}
  

}

export function esPrimo(numero) {
  if (numero<=1) {
  return false;
}
  for (var i = 2; i <= numero-1; i++)
      if (numero % i == 0) {
        return false;
      }else{
  return true;
}

 
}

export function esVerdadero(valor){
  if (valor==true){
    return "Soy verdadero";
  }else{
    return "Soy falso";
  }

 
}

export function tablaDelSeis(){
 
var numArray=[];
for(var i=0;i<11;i++){
  numArray.push(i*6);
}
return(numArray);

}

export function tieneTresDigitos(numero){ 

if((numero.toString().split("").length)==3){
  return true;
}else{
  return false;
}
 
}

export function doWhile(numero) {
  let i=0;
  let resultado=0;
  let suma=numero;
  
   
  do{

     
   
   i++;
   return resultado;
  }while(i<8);
  
 
}