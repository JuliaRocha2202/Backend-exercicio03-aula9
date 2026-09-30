import { ContaBancariaProps } from "../interfaces/ContaBancariaProps.js";

// A classe recebe o Generic <T> para tipar o objeto protected 'props'
export class ContaBancaria<T extends ContaBancariaProps = ContaBancariaProps> {
  constructor(protected props: T) {}

  public getNumeroConta(): string {
    return this.props.numeroConta;
  }

  public getTitular(): string {
    return this.props.titular;
  }

  public getSaldo(): number {
    return this.props.saldo;
  }
}
