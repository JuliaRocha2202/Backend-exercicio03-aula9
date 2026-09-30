import readLine from "readline-sync";
import { ContaCorrente } from "./src/models/ContaCorrente.js";
import { ContaPoupanca } from "./src/models/ContaPoupanca.js";

console.log("=== CADASTRO DE CONTAS BANCÁRIAS ===");

// 1. Instanciando uma Conta Corrente
const cc = new ContaCorrente({
    numeroConta: "12345-6",
    titular: "Mariana Costa",
    saldo: 1500.00,
    limiteChequeEspecial: 500.00
});

console.log("\n================================================");
console.log("             DADOS DA CONTA CORRENTE            ");
console.log("================================================");
console.log(`Número da Conta:      ${cc.getNumeroConta()}`);
console.log(`Titular:              ${cc.getTitular()}`);
console.log(`Saldo Atual:          R$ ${cc.getSaldo().toFixed(2)}`);
console.log(`Limite do Cheque:     R$ ${cc.getLimiteChequeEspecial().toFixed(2)}`);
console.log("================================================\n");


// 2. Instanciando uma Conta Poupança
const poupanca = new ContaPoupanca({
    numeroConta: "98765-4",
    titular: "Mariana Costa",
    saldo: 5000.00,
    taxaRendimentoMensal: 0.005 // 0.5% ao mês
});

console.log("================================================");
console.log("             DADOS DA CONTA POUPANÇA            ");
console.log("================================================");
console.log(`Número da Conta:      ${poupanca.getNumeroConta()}`);
console.log(`Titular:              ${poupanca.getTitular()}`);
console.log(`Saldo Atual:          R$ ${poupanca.getSaldo().toFixed(2)}`);
console.log(`Taxa Rendimento:      ${(poupanca.getTaxaRendimentoMensal() * 100)}% ao mês`);
console.log("================================================\n");

