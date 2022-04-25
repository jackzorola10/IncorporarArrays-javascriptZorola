// El objetivo de esta entrega es demostrar el uso de los arrays, metodos, objetos y constructores.

// La tematica del simulador es la de un oueeto de intercambio de ropa. Donde tu tomas una prenda del monton y luego dejas otra. 

// Primero definí un array de 5 objetos (las prendas de ropa)
const ropa = [
    { id:1, color: "Azul", tipo: "vestido", talla: "Mediano" },
    { id:2, color: "Rojo", tipo: "Pantalones", talla: "Pequeño" },
    { id:3, color: "Verde", tipo: "Camiseta", talla: "Mediano" },
    { id:4, color: "Café", tipo: "Chamarra", talla: "Pequeño" },
    { id:5, color: "Azul", tipo: "Pantalones", talla: "Grande" },
];

// I created two variables: "menu" is used to put together the info from "ropa", in order to be later joined in the "printedMenu". This merely to present it in a dynamic and readable way to the user.
const menu = [];
let printedMenu;

// I made this function, that does the entire thing i mentioned above, it takes the values from "ropa", then pushes them into "menu". It was important to have it done in a function because I need it to call it everytime the user does the input.
// Please note the splice that pretty much resets the entire menu. Erasing all the values from the array. 
function printingMenu () {
    menu.splice(0, menu.length);
    for (const item of ropa ) {
        
        // newArray recolecta los valores de los objetos en el string "ropa"
        const newArray = [ item.id, item.color, item.tipo, item.talla ];
        
        // Luego uso .push para unirlos todos en una string dentro de menu, los valores de los objetos son recolectados y guardados como strings.
        menu.push("Prenda " + item.id + " - " + "color: " + item.color + ", de tipo: " + item.tipo + ", y talla: " + item.talla + ".");
    } 
    // Luego los strings de arriba, se unen, separados por un \n y ahora es mucho mas facil presentarlos de una manera facil y visual al usuario. 
    printedMenu = menu.join("\n");
    console.log(printedMenu)
}

printingMenu();

// Este es el constructor para cuando el usuario quiere crear un nuevo objeto en "ropa"
class cloth {
    constructor(color, tipo, talla) {
        this.id = ropa.length + 1;
        this.color = colorInput;
        this.tipo = tipoInput;
        this.talla = tallaInput;
    }
}


// COMIENZA EL FLUJO DEL USUARIO:
alert("Bienvenido al intercambio de ropa de segunda mano, donde puede traer una prenda que ya no quieras y cambiarla por otra.") 

// Solicitamos al usuario que seleccione que prenda quiere llevarse. 
let userSelection = prompt(
    "De momento estas son las prendas que tenemos disponbiles, por favor selecciona incluyendo el numero de la prenda que vos queres:\n\n" +
    printedMenu
); 

let tipoInput = prompt("Por favor ingresa el tipo de prenda que entregaras, por ejemplo: 'Camiseta'");
let colorInput = prompt("Por favor ingresa el color de prenda");
let tallaInput = prompt("Por favor ingresa la talla de la prenda");

// Se mandan los valores para el constructor, se elimina la entrada que el usuario selecciono en userSelection, y se vuelve a generar el con la funcion printingMenu();
ropa.push(new cloth(colorInput, tipoInput, tallaInput));
ropa.splice (userSelection -1, 1);
printingMenu();


// Finalmente imprime las nuevas prendas junto con la que incluyo el usuario.
alert(
    "Gracias! Ahora estos son las nuevas prendas con las que contamos. \n\n" +
    printedMenu
);


