import { User } from 'src/app/core/interfaces/user';

export interface Log {
  id: number;
  usuario: User;
  action: string;
  dateOfAction: Date;
}
