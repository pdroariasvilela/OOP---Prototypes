//Callback
// function cb(){
//     console.log("Hola")
// }

// function fn (cb){
//     cb()
// }

//---------------//

// function saludar(saludo){
//     return function nombre(){
//         console.log(saludo + " " + nombre)
//     }
// }

// var saludarHola = saludar

// saludarHola('Tony');



function nombre(nombres) {
    return function (apellidos) {
        console.log(nombres + " " + apellidos)
    }
}

var nombreCompleto = nombre('Pedro')
nombreCompleto('Vilela')



