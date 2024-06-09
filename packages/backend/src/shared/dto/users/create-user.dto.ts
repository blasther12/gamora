import { CreateRegisterDto } from '../register/create-register.dto';

export class CreateUserDto {
  username: string;
  password: string;
  register: CreateRegisterDto;
}
