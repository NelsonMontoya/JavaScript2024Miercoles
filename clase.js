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










