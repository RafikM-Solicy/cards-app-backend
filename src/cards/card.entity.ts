import { AbstractEntity } from "src/abstract/abstract.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class Card extends AbstractEntity {
  @Column()
  value: number;
}
