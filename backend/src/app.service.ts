import { Injectable, BadRequestException, HttpStatus } from '@nestjs/common';
import { UsersService } from './users/users.service';

@Injectable()
export class AppService {
  constructor(private readonly usersService: UsersService) {}

  getInfo(): string {
    return 'This is a Protected Route.';
  }
}
