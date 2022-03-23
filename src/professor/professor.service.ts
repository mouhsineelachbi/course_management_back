import { Professor } from './entities/professor.entity';
import { Injectable, Delete } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ProfessorService {
  constructor(
    @InjectRepository(Professor)
    private professorRepository: Repository<Professor>
  ){}

  create(createProfessorDto: CreateProfessorDto) {
    return this.professorRepository.save(createProfessorDto);
  }

  findAll() {
    return this.professorRepository.find();
  }

  findOne(id: number) {
    return this.professorRepository.findOne({where: {id: id}});
  }

  update(id: number, updateProfessorDto: UpdateProfessorDto) {
    return this.professorRepository.update(id, updateProfessorDto);
  }


  async removeMutlitple(professors: Professor[]){
    return this.professorRepository.remove(professors);
  }
}
