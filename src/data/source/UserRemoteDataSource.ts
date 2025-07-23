import axios from 'axios';
import { UserDto } from '../model/UserDto';

export const UserRemoteDataSource = {
  async fetchUsers(): Promise<UserDto[]> {
    const res = await axios.get<UserDto[]>('https://jsonplaceholder.typicode.com/users');
    return res.data;
  }
};
