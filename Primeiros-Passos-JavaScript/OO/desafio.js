class Carro{
    marca;
    gastoMedio;
    cor;

    constructor(marca, gastoMedio, cor){
        this.marca = marca;
        this.gastoMedio = gastoMedio;
        this.cor = cor;
    }

    gastoPercurso = function (kilometragem, precoCombustivel){
        let precoViagem = (kilometragem / this.gastoMedio) * precoCombustivel;
        console.log('O valor total gasto vai ser de ' + precoViagem.toFixed(2) + " Reais");
        return precoViagem;
    }
}

const palio = new Carro("Fiat", 10, "Branco");
const toro = new Carro("Fiat", 18, "Marrom");

palio.gastoPercurso(10000, 5.8);
toro.gastoPercurso(10000, 5.8);


