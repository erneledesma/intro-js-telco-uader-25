// Promises

// Resolve -> ejucuta el llamodo al Priomise cuando el llamado es exitoso/correcto
//Reject -> ejecuta el llamado al Promise cuando el llamado es erroneo


const aplicarDescuento = new Promise((resolve, reject) => {
    setTimeout ( () => {
        const descuento = derer;

        if (descuento) {
            resolve('Descuento aplicado');
        } else {
            reject('Descuento no aplicado');
        }
 }, 3000);
})

aplicarDescuento.then(resultado => {
    console.log(resultado);
}).catch(error => {
    console.log(error);
})


