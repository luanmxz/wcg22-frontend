import { Resultado } from './Resultado';
import { Selecao } from './Selecao';
import { Grupo } from './Grupo';

export interface Jogo {
  id: number;
  idTimeA: Selecao;
  idTimeB: Selecao;
  golsA: number;
  golsB: number;
  dataInicio: Date;
  jaAconteceu: Boolean;
  resultado: Resultado;
}
