import { User } from '../../domain/model/User';

export interface UserDto {
  id: number;
  name: string;
  username: string;
  email: string;
}

export function userDtoToUser(dto: UserDto): User {
  return {
    id: dto.id,
    name: dto.name,
    username: dto.username,
    email: dto.email,
  };
}
