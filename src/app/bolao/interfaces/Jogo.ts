import { Resultado } from './Resultado';
import { Selecao } from './Selecao';
import { Grupo } from './Grupo';

export interface Jogo {
  id: number;
  idTimeA: Selecao; /*{
    id: number;
    nomeSelecao: String;
    grupo: Grupo;
    pontos: number;
    vitorias: number;
    derrotas: number;
    empates: number;
    jogos: number;
    gols: number;
  };*/
  idTimeB: {
    id: number;
    nomeSelecao: String;
    grupo: Grupo;
    pontos: number;
    vitorias: number;
    derrotas: number;
    empates: number;
    jogos: number;
    gols: number;
  };
  golsA: number;
  golsB: number;
  dataInicio: Date;
  jaAconteceu: Boolean;
  resultado: Resultado;
}
