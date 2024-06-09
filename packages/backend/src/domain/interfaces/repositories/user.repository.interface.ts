import { User } from '../../models/user.model';

export interface IUserRepository {
  create(user: User): Promise<User>;
  findAll(): Promise<User[]>;
  findOne(id: number): Promise<User | null>;
  remove(id: number): Promise<void>;
}
