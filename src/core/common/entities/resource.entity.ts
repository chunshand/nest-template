import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Resource {
    @PrimaryColumn()
    id: string;

    @Column({
        type: "json"
    })
    data: string;

    @Column()
    type: string;

}