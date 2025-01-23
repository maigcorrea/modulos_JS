function hola(){
    return "Hola";
}

//Arrow function
let hola= () =>{
    return "Hola";
}

//Como no tiene parámetros se puede hacer así
let hola = () => "Hola";

//Con un parámetro
let hola = ms => ms;

//Con varios
let hola = (ms,hl) => ms;

console.log(hola("Hola anigo"));
