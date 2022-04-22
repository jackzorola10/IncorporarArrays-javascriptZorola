



const ropa = [
    { id:1, color: "Azul", tipo: "vestido", talla: "Mediano" },
    { id:2, color: "Rojo", tipo: "Pantalones", talla: "Pequeño" },
    { id:3, color: "Verde", tipo: "Camiseta", talla: "Mediano" },
    { id:4, color: "Café", tipo: "Chamarra", talla: "Pequeño" },
    { id:5, color: "Azul", tipo: "Pantalones", talla: "Grande" },
];

const menu = [];

for (const item of ropa ) {
    const newArray = [ item.id, item.color, item.tipo, item.talla ];

    menu.push("Prenda " + item.id + " - " + "color: " + item.color + ", de tipo: " + item.tipo + ", y talla: " + item.talla + ".");

} 

let printedMenu = menu.join("\n");
console.log(printedMenu)


alert("Bienvenido al intercambio de ropa de segunda mano, donde puede traer una prenda que ya no quieras y cambiarla por otra.") 

prompt(
    "De momento estas son las prendas que tenemos disponbiles, por favor selecciona incluyendo el numero de la prenda que vos queres:\n\n" +
    printedMenu
); 



