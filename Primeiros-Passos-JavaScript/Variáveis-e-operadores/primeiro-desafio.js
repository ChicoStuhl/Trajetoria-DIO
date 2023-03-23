const precoCombustivel = 10.32;
const gastoMedioPorKm = 5;
const distanciaPercorridaEmKm = 100;

var litroPorKm = distanciaPercorridaEmKm / gastoMedioPorKm;
var custoViagem = litroPorKm * precoCombustivel;

console.log(custoViagem.toFixed(2));
