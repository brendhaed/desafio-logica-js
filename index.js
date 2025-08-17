// Desafio proposto: Classificador de nível de Herói

let nomeHeroi = "Batman"
let qtdXP = 3800
let nivelHeroi = ""

// estrutura de decisão do personagem
if (qtdXP <=1000) {
    nivelHeroi = "Ferro"
} else if(qtdXP >= 1001 && qtdXP <= 2000) {
    nivelHeroi = "Bronze"
} else if(qtdXP >= 2001 && qtdXP <= 5000) {
    nivelHeroi = "Prata"
} else if (qtdXP >= 5001 && qtdXP <= 7000) {
    nivelHeroi = "Ouro"
} else if (qtdXP >= 7001 && qtdXP <= 8000) {
    nivelHeroi = "Platina"
} else if (qtdXP >= 8001 && qtdXP <= 9000) {
    nivelHeroi = "Ascendente"
} else if(qtdXP >= 9001 && qtdXP <=10000) {
    nivelHeroi = "Imortal"
} else if(qtdXP >= 10001) 
    nivelHeroi = "Radiante"

   


// mensagem final
console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi )