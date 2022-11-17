import { Resultado } from './Resultado';
import { Jogo } from './Jogo';

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
