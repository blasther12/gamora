import { Entity, Column } from 'typeorm';

import { BaseEntity } from './base.entity';

@Entity('register')
export class RegisterEntity extends BaseEntity {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  date: Date;
}
