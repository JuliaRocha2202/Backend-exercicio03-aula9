import { ContaBancaria } from "./ContaBancaria.js";
import { ContaPoupancaProps } from "../interfaces/ContaBancariaProps.js";

export class ContaPoupanca extends ContaBancaria<ContaPoupancaProps> {
  constructor(props: ContaPoupancaProps) {
    super(props); // Repassa as propriedades estruturadas para a classe mãe
  }

  public getTaxaRendimentoMensal(): number {
    return this.props.taxaRendimentoMensal;
  }
}

