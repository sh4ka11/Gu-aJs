// variable para almacenar tu nombre y muestra un saludo en la consola.

var nombre = "Dayron"
window.alert ("Bienvenido "+nombre)
console.log("hola desde la consola");
console.log(nombre)


// Escribe una función que calcule el área de un triángulo.

// var Base = 10
// var altura = 2

function AreaTriangunlo (Base,altura){
    return (Base * altura)/2;
    
}
let Area = AreaTriangunlo(10,2);
// console.log("Los Datos ue ingresaste son: Base --> "+Base +" Altura --> " + altura)
console.log("El area del triangulo es igual a: "+Area)
document.write("El area del triangulo es igual a: \n"+Area)
// alert("El area del triangulo es igual a: "+Area)


// Crea un programa que verifique si un número es positivo o negativo.


let num =786  ;
console.log("el numero que ingresaste es: "+num)
// document.write("\nel numero que ingresaste es: "+num )
// alert("el numero que ingresaste es: "+num)

if( num > 0 ){
 
    console.log("el numero es positivo")
    // document.write("el numero es positivo")
    // alert("el numero es positivo")

}
else if (num < 0){

    console.log("el numero es negativo")
    // document.write("el numero es negativo")
    // alert("el numero es negativo") 

}

else if(num==0){

    console.log("el numero es cero")
    // document.write("el numero es cero")
    // alert("el numero es cero") 

}
else{

    console.log("Error")
    document.write("Error")
    alert("Error") 

}

// Escribe un bucle que muestre los números del 1 al 10 en la consola.


for (i = 0; i<11;i++){

    console.log(i)

}
 
// Cambia el color de fondo de un elemento cuando se haga clic en él.
// Selecciona un botón en tu página y cambia su texto.
// Selección de Elementos
const boton = document.querySelector("#miboton");
boton.textContent = "nuevo Texto del Botón";

// Modificación del Contenido
const div = document.querySelector("#miDiv");
div.addEventListener("click", function() {
    div.style.backgroundColor = "blue";
});

// Eventos
boton.addEventListener("click", function() {
    alert("¡Botón clickeado!");
});


