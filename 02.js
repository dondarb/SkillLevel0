/*. Create a currency converter between CLP, ARS, USD, EUR, TRY, GBP with the following features:
* 		The user must choose their initial currency and the currency they want to exchange to.
* 		The user can choose whether or not to withdraw their funds. If they choose not to withdraw, it should return to the main menu.
* 		If the user decides to withdraw the funds, the system will charge a 1% commission.
* 		Set a minimum and maximum amount for each currency, it can be of your choice.
* 		The system should ask the user if they want to perform another operation. If they choose to do so, it should restart the process; otherwise, the system should close.
*/

let CLP, ARS, USD, EUR, TRY, GBP;

let menuConv = promt("Bievenido a su conversor de divisas\n" + "Que moneda inicial desea convertir\n"+"1. CLP Peso Chileno\n"+"2. ARS Peso Argentino"+"3. USD Dolares"+"4. EUR Euros"+"5. TRY Lira Turca"+"6. GBP Lira Esterlina");