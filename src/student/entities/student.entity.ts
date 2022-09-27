import { Course } from "./../../course/entities/course.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  age: number;

  @Column()
  cne: string;

  @ManyToMany(() => Course, (course) => course.students, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  courses: Course[];
}
