interface RegisterParams {
  id?: number;
  name: string;
  email: string;
  date?: Date;
}

export class Register {
  public readonly id?: number;
  public readonly name: string;
  public readonly email: string;
  public readonly date?: Date;

  constructor({ id, name, email, date }: RegisterParams) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.date = date;
  }
}
