import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

export class User {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: string;

  @Column({
    name: 'uuid',
    nullable: false,
    default: uuidv4(),
    type: 'varchar',
  })
  uuid: string;

  @Column({
    nullable: false,
    default: '',
  })
  email: string;

  @Column({
    nullable: false,
    default: '',
  })
  password: string;

  @Column({
    nullable: false,
    default: '',
  })
  username: string;

  @Column({
    name: 'date_created',
    nullable: false,
    default: new Date(),
    type: 'timestamp',
  })
  dateCreated: Date;

  @Column({
    name: 'date_updated',
    nullable: false,
    default: new Date(),
    type: 'timestamp',
  })
  dateUpdated: Date;
}
