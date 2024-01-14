/*1. Create an online banking system with the following features:

* Users must be able to log in with a username and password.
* If the user enters the wrong credentials three times, the system must lock them out.
* The initial balance in the bank account is $2000.
* The system must allow users to deposit, withdraw, view, and transfer money.
* The system must display a menu for users to perform transactions. 
*/
let user = new User("admin", "admin");
let saldo = 2000;

function User (name, passw) {
    this.name = name;
    this.passw = passw;
    }

function register (){
    let name = prompt("ingrese su nombre: ");
    let passw = prompt("ingrese su clave: ");
        user = new User(name, passw);
            alert("Usuario Registrado con exito");
} 

function login (){
    let i = 0;
    while (i <= 3) {
        
        let nombre = prompt("Ingrese su nombre");
        if (nombre === user.name){
            let clave = prompt("Ingrese su clave");
                if (clave === user.passw) {
                    let menuCuenta = prompt("Que desea hacer\n" + "1. Ver saldo\n" + "2. Depositar\n" + "3. Retirar\n" + "4. Transferir\n" + "5. Cerrar sesion");

                    
                                        while(true){
                                            if (menuCuenta == "1") {
                                                alert("Su saldo es: " + saldo);
                                                menuCuenta = prompt("Que desea hacer\n" + "1. Ver saldo\n" + "2. Depositar\n" + "3. Retirar\n" + "4. Transferir\n" + "5. Cerrar sesion");
                                            }else if (menuCuenta == "2") {
                                                let saldo1 = prompt("Valor a depositar:");
                                                saldo += parseInt(saldo1);
                                                menuCuenta = prompt("Que desea hacer\n" + "1. Ver saldo\n" + "2. Depositar\n" + "3. Retirar\n" + "4. Transferir\n"+ "5. Cerrar sesion");
                                                
                                            }else if (menuCuenta == "3") {
                                                saldo1 = prompt("Valor a Retirar:");
                                                saldo -= parseInt(saldo1);
                                                alert("Por favor retire el dinero de la rejilla");
                                                menuCuenta = prompt("Que desea hacer\n" + "1. Ver saldo\n" + "2. Depositar\n" + "3. Retirar\n" + "4. Transferir\n"+ "5. Cerrar sesion");
                                            }else if (menuCuenta == "4") {
                                                let numCuenta = prompt("Digite nuemero de cuenta a transferir");
                                                saldo1 = prompt("Digite valor a transferir");
                                                saldo -= parseInt(saldo1);
                                                menuCuenta = prompt("Que desea hacer\n" + "1. Ver saldo\n" + "2. Depositar\n" + "3. Retirar\n" + "4. Transferir\n"+ "5. Cerrar sesion");
                                            }else if (menuCuenta == "5"){
                                             login();   
                                            }else{
                                                alert("Opcion invalidad");
                                                menuCuenta = prompt("Que desea hacer\n" + "1. Ver saldo\n" + "2. Depositar\n" + "3. Retirar\n" + "4. Transferir\n"+ "5. Cerrar sesion");
                                                
                                            }
                                            
                                    }
                }else {
                    alert("Clave invalida");
                    i++
                }
            }else {
                alert("usuario no existe");
                i++
            }
    }

alert("usuario bloqueado");
}

let option = prompt("Bienvenido a su Banco\n" + "presione\n" + "1. para registrarse\n" + "2. para iniciar sesion\n" + "Escoja una opcion: "); 

if (option == "1") {
    register();
    login();
}if (option == "2") {
        login();
                } else {
        console.log("Opción inválida.");
    }
