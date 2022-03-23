import { IsEmail,  IsNotEmpty,  Matches } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column() 
  @IsNotEmpty()
  username: string;

  @IsEmail({message :" invalide email"})
  @Column()
  email: string;
  

  
  @Column()
  @IsNotEmpty()
  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, { message: "invalid password" })
  password: string;
}
