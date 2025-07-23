import { User } from '../../domain/model/User';
import { UserRepository } from '../../domain/repository/UserRepository';
import { UserDto, userDtoToUser } from '../model/UserDto';
import { UserLocalDataSource } from '../source/UserLocalDataSource';
import { UserRemoteDataSource } from '../source/UserRemoteDataSource';

export class UserRepositoryImpl implements UserRepository {
  async getUsers(): Promise<User[]> {
    try {
      const dtos: UserDto[] = await UserRemoteDataSource.fetchUsers();
      await UserLocalDataSource.saveUsers(dtos);
      return dtos.map(userDtoToUser);
    } catch (e) {
      const cached = await UserLocalDataSource.getCachedUsers();
      if (!cached.length) throw new Error('No cached data available');
      return cached.map(userDtoToUser);
    }
  }
}
