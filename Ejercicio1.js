/*  1)Crear una función que reciba dos parámetros y retorne un valor.*/
function suma(a, b) {
    return a + b;
}
console.log(`El resultado es: ${suma(5, 10)}`);
/*
2) Crear una función que se llame calcularAreaCuadrado que reciba un parámetro que sea el
lado del cuadrado, calcule el área y la retorne.
*/

function calcularAreaCuadrado(a) {
    console.log(`El área del cuadrado es: ${a * a}`);
    return a * a;

}
calcularAreaCuadrado(4);

/*
3) Crear una función por declaración, puede hacer lo que quieras.
*/
function saludar(nombre) {
    console.log(`Hola, ${nombre}!`);
}
saludar("Juan");

/*4) Crear una función lambda por expresión que se llame autosuma, recibe un parámetro que
es un array de números y retorna la suma del total de los números (utilizar foreach para
recorrer el array)
*/
const autosuma = function (array) {
    let resultado = 0;
    array.forEach((element, i) => {
        resultado = resultado + element;
    })
    console.log(`El resultado es: ${resultado}`);
    return resultado;

}
autosuma([1, 2, 3, 4, 5]);

/*
5) Crear una función flecha (arrow function) que reciba un nombre, el año de nacimiento, y
retorne un string que diga: “Hola -nombre- este año tenes o cumplis -numero- años”  
*/

const saludo = (nombre, año) => {

    let saludito = `Hola ${nombre} este año tenes o cumplis ${2026 - año}`
    console.log(saludito)
    return saludito
}
saludo("miguel", 2003)


/* 
6) crear una función lambda que se llame inscribirAlumno, que reciba un array de alumnos y
un nombre, que agregue al alumno en la ultima posición del array
*/

const inscribirAlumno = function (array = [], nombre) {

    array.push(nombre)
    console.log(array)
}
inscribirAlumno(["tobias", "jose", "damian"], "miguel")

/* 
7) Crear una función que se llame buscador, que reciba un array con nombres de alumnos y un
nobre a buscar, y diga si encuentra el nombre en la lista.

*/

const buscador = (array = [], nombre) => {
    var encontrado
    array.forEach(element => {
        if (element == nombre) {
            encontrado = true
        }
    });
    if (encontrado) {
        console.log(`Se encontro el alumno: ${nombre}`)
    }
    else {
        console.log("No se logro encontrar el alumno")
    }
}

buscador(["tobias", "damian", "facu"], "Miguel")


/* 
1) Definir una función que se llame Calculadora, que reciba un array de números, y
una callback.
A) Pasarle por argumento una función arrow que realice la suma de los elemtos
del array.
B) Pasarle por argumento una función arrow que realice la resta de los elementos
del array.
C) Pasarle por argumento una función arrow que realice la multiplicación de los
elementos.
*/

function calculadora(array = [], funcion) {
    funcion(array)
}

calculadora([1, 2, 3, 4, 5], (array) => {
    let resultado = 0
    array.forEach(element => {
        resultado = resultado + element
    });
    console.log(`El resultado de la suma es: ${resultado}`)
})

calculadora([12, 13, 14, 15], (array) => {
    let resultado = array[0]
    for (let index = 1; index < array.length; index++) {
        resultado = resultado - array[index]
    }
    console.log(`El resultado de la resta es ${resultado}`)
})

calculadora([1, 2, 3, 4, 5], (array) => {
    let resultado = array[0]
    for (let index = 1; index < array.length; index++) {
        resultado = resultado * array[index]
    }
    console.log(`El resultado de la multiplicacion es: ${resultado}`)
})

/*
2) Definir una función llamada agregarSiEstaEntreCeroYDiez, que reciba un número,
y un array, la función debe validar si el número es mayor o igual a cero y menor o
igual a 10, en caso favorable, debe agregarlo en la primera posición del array, caso
contrario debe arrojar un error informando que el número es mayor o menor a lo
establecido. Debe retornar el array con el resultado
*/

function agregarSiEstaEntreCeroYDiez(array, numero, f) {
    f(array, numero)
}
agregarSiEstaEntreCeroYDiez([1, 2, 3, 4, 5], 2, (array, numero) => {
    if (numero >= 0 && numero <= 10) {

        array.push(numero)
        console.log(`Che socio este numero cumple con las condiciones asi que lo meto por aca ${array}`)
    }
    else {
        console.log("Lo siento papu no entra, porque es menor a 0 y mayor a 10")
    }
})
/*
3) Definir una función similar a la del punto 2, pero que en vez de un número reciba 
un array con números y valide si cada uno de los elementos cumple con la condición de estar entre cero y diez, debe retornar un array con los números que 
cumplan la función.
*/
function agregarSiestaEntreCeroYDiezConArrays(array1, array2, f) {
    f(array1, array2)
}
agregarSiestaEntreCeroYDiezConArrays([1, 2, 3, 4, 5], [12, 2, 22, 4, 10, 20], (array1, array2) => {

    array2.forEach(element => {
        if (element >= 0 && element <= 10) {
            array1.push(element)
        }
    });
    console.log(`Este es la array corregida ${array1}`)
    return array1
})
/*
4) Momento de creatividad! – Definir una función que reciba tres parámetros, algo, y 
dos callbacks, que internamente las ejecute y realice algún procedimiento.
*/
/*function cambiosAlPersonaje(objeto, func1, func2) {
    func1(objeto);
    func2(objeto)
}
const mago = {
    tipos: [{
        tipo: "fuego",
        habilidades: [
            {
                habilidad: "Bola de fuego",
                manaConsumido: 50,
                descripcion: "Es una gran bola de fuego",
                pasiva: "Deja con quemaduras a los enemigos por 3 rondas seguidas. La quemadura proporciona el 20% de daño de la habilidad",
                daño: 40
            },
            {
                habilidad: "Fenix",
                manaConsumido: 150,
                descripcion: "No es una habilidad actibable, se activa por si solo cunado el usuario llegue a la condicion para activar la pasiva",
                pasiva: "Cuando el usueario llegue a 0 de vida renace como el mitico ave fenix (Habilidad pasiva).",
                daño: 0
            },
            {
                habilidad: "Escudo de fuego",
                manaConsumido: 70,
                descripcion: "Es una especie de burbuja de fuego que se forma al rededor del usuario",
                pasiva: "Al usuario se le proporciona un escudo que es porporcional a el 50% de la vida restante. A causa de la explocion, hace un 20 de daño",
                daño: 20
            }
        ]
    },
    {
        tipo: "Agua",
        habilidades: [
            {
                habilidad: "Dragon de agua",
                manaConsumido: 40,
                detalle: "La hablidad tiene la forma de un drago de la mitologia asictica. Un ser imponente con una mirada amenazadora, y la vez con una gran sabiduria",
                pasiva: "Cuando choca con el enemigo crea una gran ola que deja aturdido a los enemigos",
                daño: 50
            },
            {
                habilidad: "Charco de sangre",
                manaConsumido: 20,
                detalle: "La habilidad tiene la apariencia de un charcho, pero cuando un enemigo pise este charcho salen agujas de agua",
                pasiva: " ",
                daño: 30
            },
            {
                habilidad: "Burbuja de curacion",
                manaConsumido: 70,
                detalle: "Esta habilidad encierra a los aliados en burbujas de agua, donde este regenera el 50% de vida faltante y un 30%",
                pasiva: " ",
                daño: 0
            }
        ]

    }

    ]

}
var mipersonaje = {
    nombre: "Tobias",
    vida: 120,
    mana: 150,
    rol: mago,
    def: 50,
    defMag: 150,
    habilidad: mago
}
console.log(mipersonaje)
cambiosAlPersonaje(mipersonaje, (mipersonaje, newnombre) => {
    newnombre = "miguel"
    mipersonaje.nombre = newnombre
    console.log(`Este es tu nuevo nombre ${mipersonaje.nombre}`)

},
() => {

})
Ignorar esta parte porque era una idea mal encanmidad, que se me surgio en el momento*/




function listaDeAlumnos(array, nombre, f) {
    f(array, nombre)
}
listaDeAlumnos(["lucas", "damian", "larre", "Santiago"], "Santiago", (array, nombre) => {
    let bandera = false
    array.forEach(element => {
        if (element == nombre) {
            bandera = true
        }
    });
    if (bandera) {
        console.log(`El nombre: ${nombre}, si se encuentra en la lista: ${array}`)
    }
    else {
        console.log(`El nombre: ${nombre}, no se logro encontrar en la lista`)
    }
})
listaDeAlumnos(["Miguel", "Nico", "Larre", "Tobi"], "lucas", (array, nombre) => {
    let bandera  = false
    array.forEach(element => {
        if (element == nombre) {
            bandera = true
        }
    });
    if (bandera) {
        console.log(`El nombre: ${nombre}, si se encuentra en la lista: ${array}, asi que no se puede agregar este nombre`)
    }
    else {
        array.unshift(nombre)
        console.log(`El nombre: ${nombre}, se ingreso en la lista ${array}`)
    }
})

/*
5) Realizar una función que se llame validarIngreso, que reciba una edad, y una 
callback. Esta función debe validar por medio de un operador ternario si puede 
intregar o no (la condición es que sea mayor a 18 años). El resultado del operador 
ternario de debe pasar como argumento a la ejecución de la callback. (Podes 
elegir que hacer con la función callback que le vas a pasar por agumento a la 
función validarIngreso)
*/


function validarIngreso (edad,f){
    var pasa = edad >=  18?pasa = true:pasa = false
    f(pasa)
}

validarIngreso ( 29, (pasa)=>{
    if(pasa){
        console.log ("Puede pasar")
    }
    else{
        console.log("no puede entrar")
    }
})





