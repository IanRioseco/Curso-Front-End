let edad=35;
let foo;
//foo=edad;

//console.log("esta es la variable log",foo);

const persona = {
    nombre: "jose",
    edad: 21,
    casado: false,
    hermano:{
        nombre: "Juan",
        edad: 20,
    },
    saludar: function(){
        console.log("hola"+ this.nombre);
    },
    hijos: ["juan", "pedro", "maria"]
}	
//console.log("obejto persona",persona.hermano?.nombre);

//arrays o arreglos

//const frutas=["manzana","pera","melocoton","limon"];
//console.log("arreglo frutas",frutas);

//console.log("arreglo frutas[0]",frutas[0]);

//const lonfitug= frutas.length

//console.log("longitud del arreglo",lonfitug);

//const indice = frutas.length-1;
//console.log("indice del ultimo elemento",indice);

//console.log("indice del ultimo elemento",frutas[indice]);

const pokemons =[
    {nombre: "bulbasaur", ataque: 49, defensa: 49, tipo: "grass"},
    {nombre: "charmander", ataque: 52, defensa: 43, tipo: "fire"},
    {nombre: "squirtle", ataque: 48, defensa: 65, tipo: "water"},
    {nombre: "pikachu", ataque: 55, defensa: 40, tipo: "electric"},
    {nombre: "charmander", ataque: 52, defensa: 43, tipo: "fire"},
    {nombre: "squirtle", ataque: 48, defensa: 65, tipo: "water"},
    {nombre: "pikachu", ataque: 55, defensa: 40, tipo: "electric"},
]

//console.log("pokemons",pokemons);

//console.log("pokemons[0]",pokemons[0].tipo);



saludar();
function saludar(){
    console.log("hola, soy una funcion nombrada");
}


const saludar2 = () => {
    console.log("hola, soy una funcion de flecha");
}
saludar2();

const saludar3 = function(){
}

const saludar4 = () => console.log("hola, soy una funcion de flecha sin llaves");
saludar4();

const saludar5 = (pepito) => console.log("hola, soy una funcion de flecha sin llave y con un parametro", pepito);
const pepito = "pepito";
saludar5(pepito);


const sumar = (a,b) =>{
    return a+b;
}

sumar(2,3);