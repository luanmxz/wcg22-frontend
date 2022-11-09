export interface User {
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
  lastUpdate: Date;
  admin: boolean;
}
