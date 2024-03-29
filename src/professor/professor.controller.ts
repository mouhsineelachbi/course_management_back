import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ProfessorService } from "./professor.service";
import { CreateProfessorDto } from "./dto/create-professor.dto";
import { UpdateProfessorDto } from "./dto/update-professor.dto";
import { Professor } from "./entities/professor.entity";

@Controller("professor")
export class ProfessorController {
  constructor(private readonly professorService: ProfessorService) {}

  @Post()
  create(@Body() createProfessorDto: CreateProfessorDto) {
    return this.professorService.create(createProfessorDto);
  }

  @Get()
  findAll() {
    return this.professorService.findAll();
  }

  @Get("/findone/:id")
  findOne(@Param("id") id: string) {
    return this.professorService.findOne(+id);
  }

  @Get("/finalInserted")
  findLastInsertedt() {
    return this.professorService.findLastInserted();
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateProfessorDto: UpdateProfessorDto
  ) {
    return this.professorService.update(+id, updateProfessorDto);
  }

  @Delete("/multiple")
  removeMultiple(@Body() professors: Professor[]) {
    return this.professorService.removeMutlitple(professors);
  }
}
