/*. Create a currency converter between CLP, ARS, USD, EUR, TRY, GBP with the following features:
* 		The user must choose their initial currency and the currency they want to exchange to.
* 		The user can choose whether or not to withdraw their funds. If they choose not to withdraw, it should return to the main menu.
* 		If the user decides to withdraw the funds, the system will charge a 1% commission.
* 		Set a minimum and maximum amount for each currency, it can be of your choice.
* 		The system should ask the user if they want to perform another operation. If they choose to do so, it should restart the process; otherwise, the system should close.
*/

let div = 0;

let menuConv = prompt("Bienvenido a su conversor de divisas\n" + "Que moneda inicial desea convertir\n"+"1. CLP Peso Chileno\n"+"2. ARS Peso Argentino\n"+"3. USD Dolares\n"+"4. EUR Euros\n"+"5. TRY Lira Turca\n"+"6. GBP Lira Esterlina\n");
//Peso Chileno
if (menuConv == "1") {
    let mon1 = prompt("Escoja divisa a convertir\n" + "1. ARS Peso Argentino\n"+"2. USD Dolares\n"+"3. EUR Euros\n"+"4. TRY Lira Turca\n"+"5. GBP Lira Esterlina\n");
    if (mon1 == "1"){
        div = prompt("Valor a convertir");
            let div1 = parseInt(div) * 0.89829;
                alert(div + " CLP" + " = " + div1 + " ARS");
                menuConv = prompt("Bienvenido a su conversor de divisas\n" + "Que moneda inicial desea convertir\n"+"1. CLP Peso Chileno\n"+"2. ARS Peso Argentino\n"+"3. USD Dolares\n"+"4. EUR Euros\n"+"5. TRY Lira Turca\n"+"6. GBP Lira Esterlina\n");

    } else if (mon1 == "2"){
        div = prompt("Valor a convertir");
            let div1 = parseInt(div) * 0.001099;
                alert(div + " CLP" + " = " + div1 + " USD");
                menuConv = prompt("Bienvenido a su conversor de divisas\n" + "Que moneda inicial desea convertir\n"+"1. CLP Peso Chileno\n"+"2. ARS Peso Argentino\n"+"3. USD Dolares\n"+"4. EUR Euros\n"+"5. TRY Lira Turca\n"+"6. GBP Lira Esterlina\n");

    }else if (mon1 == "3"){
        div = prompt("Valor a convertir");
            let div1 = parseInt(div) * 0.001003;
                alert(div + " CLP" + " = " + div1 + " EUR");
                menuConv = prompt("Bienvenido a su conversor de divisas\n" + "Que moneda inicial desea convertir\n"+"1. CLP Peso Chileno\n"+"2. ARS Peso Argentino\n"+"3. USD Dolares\n"+"4. EUR Euros\n"+"5. TRY Lira Turca\n"+"6. GBP Lira Esterlina\n");

    }else if (mon1 == "4"){
        div = prompt("Valor a convertir");
            let div1 = parseInt(div) * 0.03306;
                alert(div + " CLP" + " = " + div1 + " TRY");
                menuConv = prompt("Bienvenido a su conversor de divisas\n" + "Que moneda inicial desea convertir\n"+"1. CLP Peso Chileno\n"+"2. ARS Peso Argentino\n"+"3. USD Dolares\n"+"4. EUR Euros\n"+"5. TRY Lira Turca\n"+"6. GBP Lira Esterlina\n");

    }else if (mon1 == "5"){
        div = prompt("Valor a convertir");
            let div1 = parseInt(div) * 0.0008626;
                alert(div + " CLP" + " = " + div1 + " GBP");
                menuConv = prompt("Bienvenido a su conversor de divisas\n" + "Que moneda inicial desea convertir\n"+"1. CLP Peso Chileno\n"+"2. ARS Peso Argentino\n"+"3. USD Dolares\n"+"4. EUR Euros\n"+"5. TRY Lira Turca\n"+"6. GBP Lira Esterlina\n");
    }
//Peso Argentino
    }else if (menuConv == "2") {
        let mon1 = prompt("Escoja divisa a convertir\n" + "1. CLP Peso Chileno\n"+"2. USD Dolares\n"+"3. EUR Euros\n"+"4. TRY Lira Turca\n"+"5. GBP Lira Esterlina\n");
        if (mon1 == "1"){
            div = prompt("Valor a convertir");
                let div1 = parseInt(div) * 1.1165;
                    alert(div + " ARS" + " = " + div1 + " CLP");
                    menuConv = prompt("Bienvenido a su conversor de divisas\n" + "Que moneda inicial desea convertir\n"+"1. CLP Peso Chileno\n"+"2. ARS Peso Argentino\n"+"3. USD Dolares\n"+"4. EUR Euros\n"+"5. TRY Lira Turca\n"+"6. GBP Lira Esterlina\n");
    
        } else if (mon1 == "2"){
            div = prompt("Valor a convertir");
                let div1 = parseInt(div) * 0.001227;
                    alert(div + " ARS" + " = " + div1 + " USD");
                    menuConv = prompt("Bienvenido a su conversor de divisas\n" + "Que moneda inicial desea convertir\n"+"1. CLP Peso Chileno\n"+"2. ARS Peso Argentino\n"+"3. USD Dolares\n"+"4. EUR Euros\n"+"5. TRY Lira Turca\n"+"6. GBP Lira Esterlina\n");
    
        }else if (mon1 == "3"){
            div = prompt("Valor a convertir");
                let div1 = parseInt(div) * 0.001120;
                    alert(div + " ARS" + " = " + div1 + " EUR");
                    menuConv = prompt("Bienvenido a su conversor de divisas\n" + "Que moneda inicial desea convertir\n"+"1. CLP Peso Chileno\n"+"2. ARS Peso Argentino\n"+"3. USD Dolares\n"+"4. EUR Euros\n"+"5. TRY Lira Turca\n"+"6. GBP Lira Esterlina\n");
    
        }else if (mon1 == "4"){
            div = prompt("Valor a convertir");
                let div1 = parseInt(div) * 0.03691;
                    alert(div + " ARS" + " = " + div1 + " TRY");
                    menuConv = prompt("Bienvenido a su conversor de divisas\n" + "Que moneda inicial desea convertir\n"+"1. CLP Peso Chileno\n"+"2. ARS Peso Argentino\n"+"3. USD Dolares\n"+"4. EUR Euros\n"+"5. TRY Lira Turca\n"+"6. GBP Lira Esterlina\n");
    
        }else if (mon1 == "5"){
            div = prompt("Valor a convertir");
                let div1 = parseInt(div) * 0.0009631;
                    alert(div + " ARS" + " = " + div1 + " GBP");
                    menuConv = prompt("Bienvenido a su conversor de divisas\n" + "Que moneda inicial desea convertir\n"+"1. CLP Peso Chileno\n"+"2. ARS Peso Argentino\n"+"3. USD Dolares\n"+"4. EUR Euros\n"+"5. TRY Lira Turca\n"+"6. GBP Lira Esterlina\n");
        }
        //Dolares 
        }else if (menuConv == "3") {
            let mon1 = prompt("Escoja divisa a convertir\n" + "1. CLP Peso Chileno\n"+"2. ARS Peso Argentino\n"+"3. EUR Euros\n"+"4. TRY Lira Turca\n"+"5. GBP Lira Esterlina\n");
            if (mon1 == "1"){
                div = prompt("Valor a convertir");
                    let div1 = parseInt(div) * 910.22;
                        alert(div + " USD" + " = " + div1 + " CLP");
                        menuConv = prompt("Bienvenido a su conversor de divisas\n" + "Que moneda inicial desea convertir\n"+"1. CLP Peso Chileno\n"+"2. ARS Peso Argentino\n"+"3. USD Dolares\n"+"4. EUR Euros\n"+"5. TRY Lira Turca\n"+"6. GBP Lira Esterlina\n");
        
            } else if (mon1 == "2"){
                div = prompt("Valor a convertir");
                    let div1 = parseInt(div) * 0.001227;
                        alert(div + " USD" + " = " + div1 + " ARS");
                        menuConv = prompt("Bienvenido a su conversor de divisas\n" + "Que moneda inicial desea convertir\n"+"1. CLP Peso Chileno\n"+"2. ARS Peso Argentino\n"+"3. USD Dolares\n"+"4. EUR Euros\n"+"5. TRY Lira Turca\n"+"6. GBP Lira Esterlina\n");
        
            }else if (mon1 == "3"){
                div = prompt("Valor a convertir");
                    let div1 = parseInt(div) * 0.91325;
                        alert(div + " USD" + " = " + div1 + " EUR");
                        menuConv = prompt("Bienvenido a su conversor de divisas\n" + "Que moneda inicial desea convertir\n"+"1. CLP Peso Chileno\n"+"2. ARS Peso Argentino\n"+"3. USD Dolares\n"+"4. EUR Euros\n"+"5. TRY Lira Turca\n"+"6. GBP Lira Esterlina\n");
        
            }else if (mon1 == "4"){
                div = prompt("Valor a convertir");
                    let div1 = parseInt(div) * 30.0914;
                        alert(div + " USD" + " = " + div1 + " TRY");
                        menuConv = prompt("Bienvenido a su conversor de divisas\n" + "Que moneda inicial desea convertir\n"+"1. CLP Peso Chileno\n"+"2. ARS Peso Argentino\n"+"3. USD Dolares\n"+"4. EUR Euros\n"+"5. TRY Lira Turca\n"+"6. GBP Lira Esterlina\n");
        
            }else if (mon1 == "5"){
                div = prompt("Valor a convertir");
                    let div1 = parseInt(div) * 0.78539;
                        alert(div + " USD" + " = " + div1 + " GBP");
                        menuConv = prompt("Bienvenido a su conversor de divisas\n" + "Que moneda inicial desea convertir\n"+"1. CLP Peso Chileno\n"+"2. ARS Peso Argentino\n"+"3. USD Dolares\n"+"4. EUR Euros\n"+"5. TRY Lira Turca\n"+"6. GBP Lira Esterlina\n");
        
            }
// EUROS
    }else if (menuConv == "4") {
        let mon1 = prompt("Escoja divisa a convertir\n" + "1. CLP Peso Chileno\n"+"2. ARS Peso Argentino\n"+"3. Dolares\n"+"4. TRY Lira Turca\n"+"5. GBP Lira Esterlina\n");
        if (mon1 == "1"){
            div = prompt("Valor a convertir");
                let div1 = parseInt(div) * 996.74;
                    alert(div + " EUR" + " = " + div1 + " CLP");
                    menuConv = prompt("Bienvenido a su conversor de divisas\n" + "Que moneda inicial desea convertir\n"+"1. CLP Peso Chileno\n"+"2. ARS Peso Argentino\n"+"3. USD Dolares\n"+"4. EUR Euros\n"+"5. TRY Lira Turca\n"+"6. GBP Lira Esterlina\n");
    
        } else if (mon1 == "2"){
            div = prompt("Valor a convertir");
                let div1 = parseInt(div) * 892.93;
                    alert(div + " EUR" + " = " + div1 + " ARS");
                    menuConv = prompt("Bienvenido a su conversor de divisas\n" + "Que moneda inicial desea convertir\n"+"1. CLP Peso Chileno\n"+"2. ARS Peso Argentino\n"+"3. USD Dolares\n"+"4. EUR Euros\n"+"5. TRY Lira Turca\n"+"6. GBP Lira Esterlina\n");
    
        }else if (mon1 == "3"){
            div = prompt("Valor a convertir");
                let div1 = parseInt(div) * 1.0695;
                    alert(div + " EUR" + " = " + div1 + " USD");
                    menuConv = prompt("Bienvenido a su conversor de divisas\n" + "Que moneda inicial desea convertir\n"+"1. CLP Peso Chileno\n"+"2. ARS Peso Argentino\n"+"3. USD Dolares\n"+"4. EUR Euros\n"+"5. TRY Lira Turca\n"+"6. GBP Lira Esterlina\n");
    
        }else if (mon1 == "4"){
            div = prompt("Valor a convertir");
                let div1 = parseInt(div) * 32.9507;
                    alert(div + " EUR" + " = " + div1 + " TRY");
                    menuConv = prompt("Bienvenido a su conversor de divisas\n" + "Que moneda inicial desea convertir\n"+"1. CLP Peso Chileno\n"+"2. ARS Peso Argentino\n"+"3. USD Dolares\n"+"4. EUR Euros\n"+"5. TRY Lira Turca\n"+"6. GBP Lira Esterlina\n");
    
        }else if (mon1 == "5"){
            div = prompt("Valor a convertir");
                let div1 = parseInt(div) * 0.86008;
                    alert(div + " EUR" + " = " + div1 + " GBP");
                    menuConv = prompt("Bienvenido a su conversor de divisas\n" + "Que moneda inicial desea convertir\n"+"1. CLP Peso Chileno\n"+"2. ARS Peso Argentino\n"+"3. USD Dolares\n"+"4. EUR Euros\n"+"5. TRY Lira Turca\n"+"6. GBP Lira Esterlina\n");
    
        }
//Liras Trucas
    }else if (menuConv == "5") {
        let mon1 = prompt("Escoja divisa a convertir\n" + "1. CLP Peso Chileno\n"+"2. ARS Peso Argentino\n"+"3. dolares\n" + "4. EUR Euros\n"+"5. GBP Lira Esterlina\n");
        if (mon1 == "1"){
            div = prompt("Valor a convertir");
                let div1 = parseInt(div) * 30.2493;
                    alert(div + " TRY" + " = " + div1 + " CLP");
                    menuConv = prompt("Bienvenido a su conversor de divisas\n" + "Que moneda inicial desea convertir\n"+"1. CLP Peso Chileno\n"+"2. ARS Peso Argentino\n"+"3. USD Dolares\n"+"4. EUR Euros\n"+"5. TRY Lira Turca\n"+"6. GBP Lira Esterlina\n");
    
        } else if (mon1 == "2"){
            div = prompt("Valor a convertir");
                let div1 = parseInt(div) * 27.0991;
                    alert(div + " TRY" + " = " + div1 + " ARS");
                    menuConv = prompt("Bienvenido a su conversor de divisas\n" + "Que moneda inicial desea convertir\n"+"1. CLP Peso Chileno\n"+"2. ARS Peso Argentino\n"+"3. USD Dolares\n"+"4. EUR Euros\n"+"5. TRY Lira Turca\n"+"6. GBP Lira Esterlina\n");
    
        }else if (mon1 == "3"){
            div = prompt("Valor a convertir");
                let div1 = parseInt(div) * 0.03323;
                    alert(div + " TRY" + " = " + div1 + " USD");
                    menuConv = prompt("Bienvenido a su conversor de divisas\n" + "Que moneda inicial desea convertir\n"+"1. CLP Peso Chileno\n"+"2. ARS Peso Argentino\n"+"3. USD Dolares\n"+"4. EUR Euros\n"+"5. TRY Lira Turca\n"+"6. GBP Lira Esterlina\n");
    
        }else if (mon1 == "4"){
            div = prompt("Valor a convertir");
                let div1 = parseInt(div) * 0.03034;
                    alert(div + " TRY" + " = " + div1 + " EUR");
                    menuConv = prompt("Bienvenido a su conversor de divisas\n" + "Que moneda inicial desea convertir\n"+"1. CLP Peso Chileno\n"+"2. ARS Peso Argentino\n"+"3. USD Dolares\n"+"4. EUR Euros\n"+"5. TRY Lira Turca\n"+"6. GBP Lira Esterlina\n");
    
        }else if (mon1 == "5"){
            div = prompt("Valor a convertir");
                let div1 = parseInt(div) * 0.78539;
                    alert(div + " TRY" + " = " + div1 + " GBP");
                    menuConv = prompt("Bienvenido a su conversor de divisas\n" + "Que moneda inicial desea convertir\n"+"1. CLP Peso Chileno\n"+"2. ARS Peso Argentino\n"+"3. USD Dolares\n"+"4. EUR Euros\n"+"5. TRY Lira Turca\n"+"6. GBP Lira Esterlina\n");
    
        }
//Lira Esterlina
    }else if (menuConv == "6") {
        let mon1 = prompt("Escoja divisa a convertir\n" + "1. CLP Peso Chileno\n"+"2. ARS Peso Argentino\n"+"3. USD Dolares\n"+"4. EUR Euros\n"+"5. TRY Lira Truca\n");
        if (mon1 == "1"){
            div = prompt("Valor a convertir");
                let div1 = parseInt(div) * 1.159;
                    alert(div + " GBP" + " = " + div1 + " CLP");
                    menuConv = prompt("Bienvenido a su conversor de divisas\n" + "Que moneda inicial desea convertir\n"+"1. CLP Peso Chileno\n"+"2. ARS Peso Argentino\n"+"3. USD Dolares\n"+"4. EUR Euros\n"+"5. TRY Lira Turca\n"+"6. GBP Lira Esterlina\n");
    
        } else if (mon1 == "2"){
            div = prompt("Valor a convertir");
                let div1 = parseInt(div) * 1.038;
                    alert(div + " GBP" + " = " + div1 + " ARS");
                    menuConv = prompt("Bienvenido a su conversor de divisas\n" + "Que moneda inicial desea convertir\n"+"1. CLP Peso Chileno\n"+"2. ARS Peso Argentino\n"+"3. USD Dolares\n"+"4. EUR Euros\n"+"5. TRY Lira Turca\n"+"6. GBP Lira Esterlina\n");
    
        }else if (mon1 == "3"){
            div = prompt("Valor a convertir");
                let div1 = parseInt(div) * 1.2739;
                    alert(div + " GBP" + " = " + div1 + " USD");
                    menuConv = prompt("Bienvenido a su conversor de divisas\n" + "Que moneda inicial desea convertir\n"+"1. CLP Peso Chileno\n"+"2. ARS Peso Argentino\n"+"3. USD Dolares\n"+"4. EUR Euros\n"+"5. TRY Lira Turca\n"+"6. GBP Lira Esterlina\n");
    
        }else if (mon1 == "4"){
            div = prompt("Valor a convertir");
                let div1 = parseInt(div) * 1.16929;
                    alert(div + " GBP" + " = " + div1 + " EUR");
                    menuConv = prompt("Bienvenido a su conversor de divisas\n" + "Que moneda inicial desea convertir\n"+"1. CLP Peso Chileno\n"+"2. ARS Peso Argentino\n"+"3. USD Dolares\n"+"4. EUR Euros\n"+"5. TRY Lira Turca\n"+"6. GBP Lira Esterlina\n");
    
        }else if (mon1 == "5"){
            div = prompt("Valor a convertir");
                let div1 = parseInt(div) * 38.3359;
                    alert(div + " GBP" + " = " + div1 + " TRY");
                    menuConv = prompt("Bienvenido a su conversor de divisas\n" + "Que moneda inicial desea convertir\n"+"1. CLP Peso Chileno\n"+"2. ARS Peso Argentino\n"+"3. USD Dolares\n"+"4. EUR Euros\n"+"5. TRY Lira Turca\n"+"6. GBP Lira Esterlina\n");
    
        }
    }

