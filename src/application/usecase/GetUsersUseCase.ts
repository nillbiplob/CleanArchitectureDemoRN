import { UserRepository } from '../../../scripts/domain/repository/UserRepository';
// Update the path below to the correct location of your User model
import { User } from '../../../src/domain/model/User';

export class GetUsersUseCase {
  private repo: UserRepository;
  constructor(repo: UserRepository) {
    this.repo = repo;
  }
  async execute(): Promise<User[]> {
    return await this.repo.getUsers();
  }
}
