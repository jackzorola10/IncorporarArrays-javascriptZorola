/* 
Para la tarea, hagamos un objeto del usuario (nombre, dirección, teléfono, carrito(Este será un Array), código superFan) y los productos  (Tipo,[fisico/digital]  tamaño, precio).
Usamos todos los métodos de Array para quitar productos o modificar el carrito.
Constructor de usuarios y array de usuarios.
Agregar “id: 1” al objeto de  producto
Usar un for..of en un chiste donde enviamos una instrucción de entrega de un grupo de usuarios y supuestamente nos equivocamos y se lo dimos al usuario.  Pon nombres graciosos.
Un Array de tareas o funciones tambien puede ser. 
*/



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
    console.log(newArray);
    
    let i;

    menu[i] = "prenda " + item.id + " - " + "color: " + item.color + ", de tipo: " + item.tipo + ", y talla: " + item.talla + ".";

    i++

} 

let printedMenu = menu.join("\n");


alert("Bienvenido al intercambio de ropa de segunda mano, donde puede traer una prenda que ya no quieras y cambiarla por otra.") 

prompt(
    "De momento estas son las prendas que tenemos disponbiles:\n\n" +
    printedMenu
); 






/* function printClothes () {
    for (let i = 0; i < ropa.length; i++) {
        ropa[i].join
        console.log (ropa[i].join);
    }
} 

printClothes();

*/