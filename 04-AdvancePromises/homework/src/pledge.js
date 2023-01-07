'use strict';
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:

function $Promise (executor){
    if(typeof executor !== "function"){
        throw  new TypeError("Executor y luego function")
    }
    this._state = "pending"

    const resolve = (value) => {this._internalResolve(value)}
    const reject = (reason) => {this._internalReject(reason)}
    executor(resolve,reject)
//  this._$Promise.then()
}

$Promise.prototype._internalResolve = function (data){
    if(this._state === "pending"){
        this._state = "fulfilled"
        this._value = data
    } 
}

$Promise.prototype._internalReject = function (reason){  
    if(this._state === "pending"){
        this._state = "rejected"
        this._value = reason
    } 
}


$Promise.prototype.then = function (succesHandler, errorHandler) {
    //  if (typeof succesHandler !== "function") succesHandler = false
    //     if (typeof errorHandler !== "function") errorHandler = false

//     const handleGroup = {
//         succesCallback : succesHandler,
//         errorCallBack : errorHandler
//     }

//     this._handleGroup.push(handleGroup)

//      if (this._state === "fulfilled") succesHandler (this._value)
//      if (this._state === "rejected") errorHandler (this.value)
// }

// $Promise.prototype._callHandlers = () => {
//     _internalResolve()
// }



module.exports = $Promise;
/*-------------------------------------------------------
El spec fue diseñado para funcionar con Test'Em, por lo tanto no necesitamos
realmente usar module.exports. Pero aquí está para referencia:

module.exports = $Promise;

Entonces en proyectos Node podemos esribir cosas como estas:

var Promise = require('pledge');
…
var promise = new Promise(function (resolve, reject) { … });
--------------------------------------------------------*/
