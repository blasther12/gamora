import { User } from '../../../domain/models/user.model';

export interface IUserService {
  create(user: User): Promise<User>;
  findAll(): Promise<User[]>;
  findOne(id: number): Promise<User | null>;
  remove(id: number): Promise<void>;
}
