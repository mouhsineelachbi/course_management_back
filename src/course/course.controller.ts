import { Course } from './entities/course.entity';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.courseService.create(createCourseDto);
  }

  @Get()
  findAll() {
    return this.courseService.findAll();
  }

  @Get('/findone:id')
  findOne(@Param('id') id: string) {
    return this.courseService.findOne(+id);
  }

  @Get('/finalInserted')
  findLastInserted(){
    return this.courseService.findLastInserted();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.courseService.update(+id, updateCourseDto);
  }

  @Delete('/multiple')
  remove(@Body() courses: Course[]) {
    return this.courseService.removeMutlitple(courses);
  }
}
