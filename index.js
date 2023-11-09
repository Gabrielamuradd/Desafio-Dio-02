
function calcularNivel (vitórias, derrotas) {
    let saldoRanqueadas = vitórias - derrotas
let nivelJogador;

if (vitórias < 10) {
    nivelJogador ="Ferro";
} else if (vitórias >= 10 && vitórias <= 20){
    nivelJogador = "Bronze";

} else if (vitórias >= 21 && vitórias <= 50) {
    nivelJogador = "Prata";

} else if (vitórias >= 51 && vitórias <= 80) {
    nivelJogador = "Ouro";

} else if (vitórias >= 81 && vitórias <= 90) {
    nivelJogador = "Diamante";

} else if (vitórias >= 91 && vitórias <= 100) {
    nivelJogador = "Lendario";

} else {
    nivelJogador = "Imortal";
    }

    return "O jogador tem um saldo de " + saldoRanqueadas + " e está no nível " + nivelJogador;
}


let resultado = calcularNivel(80, 30)
console.log(resultado); 
