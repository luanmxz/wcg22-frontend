import { Resultado } from '../jogos/Resultado';

export interface NovaAposta {
  apostouEm: Resultado;
  idUser: number;
  idJogo: number;
}
