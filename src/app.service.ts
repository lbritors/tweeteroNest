import { Body, Injectable, Post } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dtos/user.dto';

@Injectable()
export class AppService {
  private users: User[];
  
  getTweets() {
     
  }

  createUser(body: CreateUserDto) {
    const user = new User(body.name, body.email);
    return this.users.push(user);
  }
 
}

