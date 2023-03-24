const {gets, print} = require('./funcoes-auxiliares.js');

let maior = 0;

while (gets() != null){
    if (maior < gets()){
        maior = gets();
    }
}

print(maior);