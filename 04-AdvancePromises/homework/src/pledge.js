'use strict';
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:

function $Promise (executor){
  if(typeof executor !== "function") {
    throw  new TypeError("Cualquier mensaje de error conteniendo Executor y luego function")
  }
  
  this._state = "pending" //instancia de promesa que comienza como pending
  this._handlerGroups = []
  this._value = undefined

  const resolve = (value) => {this._internalResolve(value)}
  const reject = (reason) => {this._internalReject(reason)}
  
  //executor(this._internalResolve.bind(this),this._internalReject.bind(this))
  executor(resolve,reject)

}

//metodo de instancia // $Promise.prototype._nombreDelMetodo = () => {}

$Promise.prototype._internalResolve = function (value){ 
  if(this._state === "pending"){ //no afecta a una promesa ya completada 
      this._state = "fulfilled"
      this._value = value // value = data
      //hago los llamados
      this._callHandlers(value)
  } 
}

$Promise.prototype._internalReject = function (reason){  
  if(this._state === "pending"){
      this._state = "rejected"
      this._value = reason
      //hago los llamados
      this._callHandlers(reason)
  } 
}


$Promise.prototype.then = function (successHandler, errorHandler) {
  if (typeof successHandler !== "function") successHandler = false;
  if (typeof errorHandler !== "function") errorHandler = false;

  const downstreamPromise = new $Promise(() => {})

  const handlerGroup = {
    successCb: successHandler, 
    errorCb: errorHandler, 
    downstreamPromise
  };

  this._handlerGroups.push(handlerGroup);
//this._handlerGroups.push({
//  succesCb: typeof successCb === "function" ? successCb : false
//  errorCb: typeof errorCb === "function" ? errorCb : false
//  })

  this._state !== 'pending' && this._callHandlers()
//            hago los llamados
  return downstreamPromise

};


//logica de los llamados
$Promise.prototype._callHandlers = function () {
  while (this._handlerGroups.length) { 
    //mientras haya handlers para ejecutar: ejecuta
    // si esta resolved: succesHandler
    // si esta rejected: errorHandler
    const group = this._handlerGroups.shift(); //Saco los handlers que pushie

    this._state === "fulfilled" &&
      group.successCb &&
      group.successCb(this._value);
// if (this._state === "fulfilled" && group.succesCb) group.succesCb(this._value) //recibe el valor de la promesa

    this._state === "rejected" &&
      group.errorCb &&
      group.errorCb(this._value);
// if (this._state === "rejected" && group.errorCb) group.errorCb(this._value) //recibe el valor de la promesa
  }
};




$Promise.prototype.catch = function (errorHandler) {
  this.then(null,errorHandler)

}



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
