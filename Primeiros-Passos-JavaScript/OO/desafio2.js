class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.altura = altura;
        this.nome = nome;
        this.peso = peso;
    }

    calculaIMC(){
        let imc = this.peso / (Math.pow(this.altura, 2))
        console.log("O imc da "+ this.nome + " é " + imc.toFixed(2));
        return imc;
    }

}


const maria = new Pessoa("Maria", 50, 1.75);
maria.calculaIMC();

new Pessoa("pedro", 50, 2).calculaIMC();
