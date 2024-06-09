import { Register } from './register.model';

interface UserParams {
  id?: number;
  username: string;
  password: string;
  isFirstAccess: boolean;
  register: Register;
}

export class User {
  public id?: number;
  public username: string;
  public password: string;
  public isFirstAccess?: boolean;
  public register: Register;

  constructor({ id, username, password, isFirstAccess, register }: UserParams) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.isFirstAccess = isFirstAccess;
    this.register = register;
  }
}
