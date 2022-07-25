
// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

export function devolverString(valor) {
  var string=valor.toString();

  return string;  
}

export function suma(x,y) {
 var suma=x+y;

  return suma;  
}

export function resta(x,y) {
 var resta=x-y;
  return resta;
}

export function multiplica(x,y) {
  var multiplica=x*y;

  return multiplica;
}

export function divide(x,y) { 
  var divide=x/y;

  return divide;
}

export function sonIguales(x,y) {  
  var uno=x;
  var dos=y;
  if(x ==y){
    return true;
  }else{
    return false;
  }
}

export function tienenMismaLongitud(str1,str2) {  
  var uno=str1;
  var dos=str2;
  if(str1.length ==str2.length){
    return true;
  }else{
    return false;
  }

  
}

export function menosQueNoventa(num) {  
if(num<90){
  return true;
}else{
  return false;
}

  
}

export function mayorQueCincuenta(num) {  
 if(num>50){
  return true;
 }else{
  return false;
 }

  
}

export function obtenerResto(x,y) {  
 var resto=x%y;

  return resto;
}

export function esPar(num) {
  
  if(num%2==0){
    return true;

  }else{
    return false;
  }
  
}

export function esImpar(num) {  
  if(num%2==0){
    return false;

  }else{
    return true;
  }

  
}

export function elevarAlCuadrado(num) {  
 var cuadrado=num**2;

  return cuadrado;
}

export function elevarAlCubo(num) { 
  
var cubo=num**3;
  return cubo;
}

export function elevar(num,exponent) {  
  var elevado=num**exponent;

  return elevado;
}

export function redondearNumero(num) {
  var numero=Math.round(num);  
  

  return numero;
}

export function redondearHaciaArriba(num) { 

var numeror=num;
var redondeo=Math.ceil(numeror);
  return redondeo;
}

export function numeroRandom() {  
 var numer=Math.random();
 return numer;
 }

  


export function esPositivo(numero) {
  if(numero>0){
    return "Es positivo";
  }if(numero==0){
    return false;
  }else{
    return "Es negativo";
  }

  }
  
 



export function agregarSimboloExclamacion(str) {  
  
var signo= str + "!";
  return signo;
}

export function combinarNombres(firstName,lastName) {
  var nombres=firstName+" "+lastName;

  return nombres;
}

export function obtenerSaludo(name) {
 var nombre="Hola "+ name + "!";

  return nombre;
}

export function obtenerAreaRectangulo(alto,ancho) {  
  let areaRectangulo=alto*ancho;

  return areaRectangulo;
}


export function retornarPerimetro(lado){
  var perimetro=l*4;

  return perimetro;
}


export function areaDelTriangulo(base,altura){
let area=((base*altura)/2);

  return area;
}


export function deEuroAdolar(euro){
 var resultado=euro*1.2;

  return resultado;
}


export function esVocal(letra){
 if(
 letra==="a"||letra==="e"||letra==="i"||letra==="o"||letra==="u"
 ){
  return "Es vocal";
 }else {
  return"Dato incorrecto";
 }


}
