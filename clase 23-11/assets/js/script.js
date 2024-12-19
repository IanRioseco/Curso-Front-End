
const pokemon = [
    {nombre: 'Pikachu',tipo: 'Electrico'},
    {nombre: 'Charmander',tipo: 'Fuego',},
    {nombre: 'Bulbasaur',tipo: 'Planta'},
    {nombre: 'Squirtle',tipo: 'Agua'},
    {nombre: 'Charmeleon',tipo: 'Fuego'},
    {nombre: 'Weedle',tipo: 'bicho'},
    {nombre: 'Charizard',tipo: 'Fuego'}
   ]



console.log("arreglo antes del forEach",pokemon)
pokemon.forEach((element, index, array) => {
    console.log(element.nombre)
    element.nombre = element.nombre.toUpperCase()
    console.log(element.nombre)
})

const pokemon2 = pokemon.map((element, index, array) => {
    return { nombre: element.nombre.toUpperCase(), tipo: element.tipo}
})

console.log("arreglo antes del map",pokemon)

console.log("arreglo despues del map",pokemon2)