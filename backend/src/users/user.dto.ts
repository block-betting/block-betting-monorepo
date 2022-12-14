import { Roles, Asset } from '@prisma/client';

export class UserDto {
  id: string;
  name: string;
  email: string;
  password: string;
  roles: Roles[];
  assets?: Asset[];
}
