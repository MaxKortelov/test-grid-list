import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { ROLE, STATUS } from '../../models/records';

export class Record {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  name: string;

  @Column({
    nullable: false,
    default: STATUS.OPEN,
  })
  status: STATUS;

  @Column({
    nullable: false,
    default: ROLE.CUSTOMER,
  })
  role: ROLE;

  @Column({
    nullable: false,
    default: '',
  })
  address: string;

  @Column({
    nullable: false,
    default: 0,
  })
  amount: number;
}
