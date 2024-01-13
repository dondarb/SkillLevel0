/*1. Create an online banking system with the following features:

* Users must be able to log in with a username and password.
* If the user enters the wrong credentials three times, the system must lock them out.
* The initial balance in the bank account is $2000.
* The system must allow users to deposit, withdraw, view, and transfer money.
* The system must display a menu for users to perform transactions.2. 
*/

function User () {
    this.name = "";
    this.passw = "";

}

console.log("Bienvenido al Banco DonDarb");
console.log ("Presione 1, para registrarse");
console.log("Presione 2 para iniciar sesion");

let option = prompt("escoja una opcion: "); 

    if (option == "1") {
        let name = prompt("ingrese su nombre: ");
        let passw = prompt("ingrese su clave: ");
            let user = new User();
                user.name = name;
                user.passw = passw;
                console.log("usuario registrado con exito");
    }else if (opcion === "2") {
        console.log("Iniciar sesión.");
    } else {
        console.log("Opción inválida.");
    }