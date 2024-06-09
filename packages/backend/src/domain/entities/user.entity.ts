import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';

import { BaseEntity } from './base.entity';
import { RegisterEntity } from './register.entity';

@Entity('user')
export class UserEntity extends BaseEntity {
  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  is_first_acess: boolean;

  @OneToOne(() => RegisterEntity)
  @JoinColumn()
  register: RegisterEntity;
}
