import { IsNotEmpty, IsString, IsUrl } from "class-validator";


export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;
  @IsString()
  @IsNotEmpty()
  @IsUrl()
  avatar: string;
}