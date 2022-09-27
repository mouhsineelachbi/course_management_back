import { Course } from "./../../course/entities/course.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Professor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  grade: string;

  @Column()
  age: number;

  @OneToMany(() => Course, (course) => course.professor, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  courses: Course[];
}
