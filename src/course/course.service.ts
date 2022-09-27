import { Course } from "./entities/course.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateCourseDto } from "./dto/create-course.dto";
import { UpdateCourseDto } from "./dto/update-course.dto";
import { Repository } from "typeorm";

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>
  ) {}
  create(createCourseDto: CreateCourseDto) {
    return this.courseRepository.save(createCourseDto);
  }

  findAll() {
    return this.courseRepository.find({
      relations: {
        students: true,
        professor: true,
      },
    });
  }

  findOne(id: number) {
    return this.courseRepository.findOne({ where: { id: id } });
  }

  findLastInserted() {
    return this.courseRepository.findOne({ order: { id: "DESC" } });
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return this.courseRepository.save(updateCourseDto);
  }

  async removeMutlitple(courses: Course[]) {
    return this.courseRepository.remove(courses);
  }
}
