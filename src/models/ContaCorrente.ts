import { ContaBancaria } from "./ContaBancaria.js";
import { ContaCorrenteProps } from "../interfaces/ContaBancariaProps.js";

export class ContaCorrente extends ContaBancaria<ContaCorrenteProps> {
  constructor(props: ContaCorrenteProps) {
    super(props); // Repassa as propriedades estruturadas para a classe mãe
  }

  public getLimiteChequeEspecial(): number {
    return this.props.limiteChequeEspecial;
  }
}
