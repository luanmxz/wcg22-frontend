import { Jogo } from '../jogos/Jogo';
import { Resultado } from '../jogos/Resultado';
import { Selecao } from '../jogos/Selecao';

export interface Aposta {
  id: number;
  apostouEm: Resultado;
  estaAtiva: boolean;
  idUser: {
    id: number;
    email: string;
    pontos: number;
    enabled: true;
    username: string;
  };
  idJogo: Jogo;
  dataDaAposta: Date;
}
