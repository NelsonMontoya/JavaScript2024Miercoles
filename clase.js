//declara variables


let pi = 3.1416;
let nombre = "PEDRO";
let usuario = "juan"

console.log(pi);
//const no se deja modificar
const variableEntorno = "www.nsa.la";
//variableEntorno = 2.35;
console.log(variableEntorno);

//concatenar
let saludo = 'Hola';
//primera forma
let textoCompleto = saludo +" " +"Juan Carlos" + ' ' +"Bienvenido";
//segunda forma
let mensaje =`${saludo} Juan Carlos.  Bienvenido. Tu número de la suerte es ${pi}`
console.log(`${saludo} Juan Carlos.  Bienvenido. Tu número de la suerte es ${pi}`);
console.log(mensaje);

//operador ternario
/**
 * Valida si pi = 3.1416
 * True: a pi le suma 1
 * False: a pi le resta 1
 */
pi === 3.1416 ? pi+=1:pi-=1
/**
 * if (pi === 3.1416){
 *  pi+=1
 * }else{
 *  pi-=1
 * }
 */
let validacion = pi === 3.1416 ? saludo ==='hola'?saludo="True":saludo="Chao":pi-=1
/**
 * if (pi === 3.1416){
 *  if(saludo === 'hola'){
 *  saludo = True
 * }else{
 *  saludo = False
 * }
 * }else{
 *  pi-=1
 * }
 */
//

let suma = pi + saludo;
console.log(suma);


//funciones  Tipo Flecha

//no tiene y solo hace una función
// no recibe parámetros y devuelve la suma de 3+5
const sumarNumeros = () => 5+3;

//cuando un sólo párametro
const saludarUsuario = usuario => `Hola ${usuario}.  Bienvenmido`

//cuando son dos o más parámetros
const elevarAlCuadrado = (n1,n2) => n1*n1 +n2*n2

//cuando ya las funciones hacen más de una cosa.

const sumarNumerosDos = () =>{
    let suma = 5+3
    let mensaje  =`La suma realizada fue ${suma}`
    return mensaje
}
//llamado de la función
let message = sumarNumeros();
let cuadrado = elevarAlCuadrado(3,20);
//log llamando la funcion
console.log(elevarAlCuadrado(8,9));

//asignar una función a una variable
let cuadradosNumeros = elevarAlCuadrado;
console.log(cuadradosNumeros(3,7));

//Arreglos en JavaScript
//este arreglo lo puedo agrandar agregando datos
let datos = [];
//este arreglo tendrá 4 posiciones, no se puede agregar más posiciones
//pero el contenido de cada posición, si se puede cambiar
const numbers = [3,5,8,9];

/**
 * Los arreglos no tienen que ser del mismo tipo de dato
 */

let data = ["Juan",false,20.1,'c',null,undefined]

//llenado uno a uno por posición
datos[0]= 20
datos[1] = null
datos[2] = 30

console.log(datos.length);//debe dar como resultado 3

// .push()  agrega dato al final del arreglo
datos.push(98)
//.pop() quita el dato al final del arreglo (último)
data.pop()  //quita el último dato, el undefined para el caso

//.reduce()
//en valorTomado siempre se cambia por el valor de las posiciones hasta el final
//en suma siempre se acumula
let sumaTotal = numbers.reduce((suma,valorTomado)=>{
    return suma+valorTomado
})

//.forEach()
//en numero se reemplaza cada posicion del arreglo hasta el final
let totalSuma = 0
numbers.forEach(numero =>{
    suma+=numero
})

//.map()
//debo esperar un arreglo nuevo, por lo tanto hay que guardarlo si no 
//se quiere perder el resultado
//se modificó cada posicion multiplicando por 0.03 y se guarda en el nuevo arreglo
let mapeo = numbers.map(numero=>{
    return numero*0.03
})

//.filter()
//filtrar por una condición establecida.  Los que cumplen quedan en el nuevo arreglo

let filtrado = numbers.filter( numero =>{
    return numero >7
})













