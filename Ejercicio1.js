/*  1)Crear una función que reciba dos parámetros y retorne un valor.*/
function suma( a , b ){
    return a + b;
}
console.log( `El resultado es: ${suma(5,10)}`);
/*
2) Crear una función que se llame calcularAreaCuadrado que reciba un parámetro que sea el
lado del cuadrado, calcule el área y la retorne.
*/

function calcularAreaCuadrado(a){
    console.log(`El área del cuadrado es: ${a*a}`);
    return a*a;

}
calcularAreaCuadrado(4);

/*
3) Crear una función por declaración, puede hacer lo que quieras.
*/
function saludar(nombre){
    console.log(`Hola, ${nombre}!`);
}
saludar("Juan");

/*4) Crear una función lambda por expresión que se llame autosuma, recibe un parámetro que
es un array de números y retorna la suma del total de los números (utilizar foreach para
recorrer el array)
*/
const autosuma = function(array){ 
    let resultado = 0; 
    array.forEach((element, i) => {
        resultado = resultado + element;
    })
    console.log(`El resultado es: ${resultado}`);
    return resultado; 

}
autosuma([1,2,3,4,5]);

/*
5) Crear una función flecha (arrow function) que reciba un nombre, el año de nacimiento, y
retorne un string que diga: “Hola -nombre- este año tenes o cumplis -numero- años”  
*/

const saludo = (nombre,año)=>{

    let saludito = `Hola ${nombre} este año tenes o cumplis ${2026 - año }`
    console.log(saludito)
    return saludito
}
saludo ("miguel" , 2003)


/* 
6) crear una función lambda que se llame inscribirAlumno, que reciba un array de alumnos y
un nombre, que agregue al alumno en la ultima posición del array
*/

const inscribirAlumno = function(array =[], nombre){
    
    array.push(nombre)
    console.log(array)
}
inscribirAlumno(["tobias", "jose", "damian"],"miguel")

/* 
7) Crear una función que se llame buscador, que reciba un array con nombres de alumnos y un
nobre a buscar, y diga si encuentra el nombre en la lista.

*/

const buscador = (array = [], nombre )=>{
    var encontrado
    array.forEach(element => {
        if(element == nombre){
            encontrado = true 
        }
    });
    if (encontrado){
        console.log(`Se encontro el alumno: ${nombre}`)
    }
    else{
        console.log("No se logro encontrar el alumno")
    }
}

buscador(["tobias","damian", "facu"], "facu")