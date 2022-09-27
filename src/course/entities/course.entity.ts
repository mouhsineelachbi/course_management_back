import { Student } from "./../../student/entities/student.entity";
import { Professor } from "./../../professor/entities/professor.entity";
import { Column, JoinColumn, JoinTable, ManyToMany, ManyToOne } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm";
import { Entity } from "typeorm";
@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  duration: number;

  @Column()
  language: string;

  @ManyToOne(() => Professor, (professor) => professor.courses, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  professor: Professor;

  @ManyToMany(() => Student, (student) => student.courses, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinTable()
  students: Student[];
}
