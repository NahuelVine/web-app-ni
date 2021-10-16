import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class List {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    content: string;
}