import { Course } from "./../course/entities/course.entity";
import { Student } from "./entities/student.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateStudentDto } from "./dto/create-student.dto";
import { UpdateStudentDto } from "./dto/update-student.dto";
import { Repository } from "typeorm";

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>
  ) {}

  create(createStudentDto: CreateStudentDto) {
    return this.studentRepository.save(createStudentDto);
  }

  findAll() {
    return this.studentRepository.find({
      relations: {
        courses: true,
      },
    });
  }

  findOne(id: number) {
    return this.studentRepository.findOne({ where: { id: id } });
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return this.studentRepository.save(updateStudentDto);
  }

  async removeMutlitple(students: Student[]) {
    return this.studentRepository.remove(students);
  }

  async findLastInserted() {
    return this.studentRepository.findOne({
      order: {
        id: "DESC",
      },
    });
  }
}
