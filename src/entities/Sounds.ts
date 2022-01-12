import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

interface ISounds {
  id: string;
  name: string;
  created_at: Date;
}

@Entity('sounds')
export default class Sounds implements ISounds {
  @PrimaryColumn()
  id: string;
  @Column()
  name: string;
  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
