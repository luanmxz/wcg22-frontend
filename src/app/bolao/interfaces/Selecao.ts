import { Grupo } from './Grupo';

export interface Selecao {
  id: number;
  nomeSelecao: String;
  grupo: Grupo;
  pontos: number;
  vitorias: number;
  derrotas: number;
  empates: number;
  jogos: number;
  gols: number;
}
