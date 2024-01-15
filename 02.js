/*. Create a currency converter between CLP, ARS, USD, EUR, TRY, GBP with the following features:
* 		The user must choose their initial currency and the currency they want to exchange to.
* 		The user can choose whether or not to withdraw their funds. If they choose not to withdraw, it should return to the main menu.
* 		If the user decides to withdraw the funds, the system will charge a 1% commission.
* 		Set a minimum and maximum amount for each currency, it can be of your choice.
* 		The system should ask the user if they want to perform another operation. If they choose to do so, it should restart the process; otherwise, the system should close.
*/

let Cclp, ars, usd, eur, tri, gbp = 0;

let menuConv = prompt("Bievenido a su conversor de divisas\n" + "Que moneda inicial desea convertir\n"+"1. CLP Peso Chileno\n"+"2. ARS Peso Argentino\n"+"3. USD Dolares\n"+"4. EUR Euros\n"+"5. TRY Lira Turca\n"+"6. GBP Lira Esterlina\n");

if (menuConv == "1") {
    let mon1 = prompt("Escoja divisa a convertir\n" + "1. ARS Peso Argentino\n"+"2. USD Dolares\n"+"3. EUR Euros\n"+"4. TRY Lira Turca\n"+"5. GBP Lira Esterlina\n");
    if (mon1 == "1"){
        clp = prompt("Valor a convertir");
            let clp1 = parseInt(clp) * 0.89829;
                alert(clp + " CLP" + " = " + clp1 + " ARS");
                menuConv = prompt("Bievenido a su conversor de divisas\n" + "Que moneda inicial desea convertir\n"+"1. CLP Peso Chileno\n"+"2. ARS Peso Argentino\n"+"3. USD Dolares\n"+"4. EUR Euros\n"+"5. TRY Lira Turca\n"+"6. GBP Lira Esterlina\n");

    }
    
}