import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 50})
    fullname: string;

    @Column({type: 'int', default: 0})
    age: number;

    @Column({type: 'varchar', length: 50})
    email: string;

    @Column({type:'varchar', length: 50})
    username: string;

    @Column({type: 'varchar', length: 50})
    password: string;

    @Column({type: 'enum', enum: ['USER', 'ADMIN', 'SUPER_ADMIN']})
    role: string;

    @Column({type: 'varchar', length: 50})
    timestamp: Date;
}
