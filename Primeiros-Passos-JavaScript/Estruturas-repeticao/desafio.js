const numero = 1;
for (let i = 0; i <= 10; i++) {
    console.log(`${numero} * ${i} = `+ (i * numero));
}


const lista = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < lista.length; i++) {
    if (lista[i] % 2 === 0 && lista[i] != 0){
        console.log(`O numero na posição ${i} é par: ${lista[i]}`)
    }
}