import { User } from '@/domain/model/User';

export class UserSelectionHolder {
  static users: User[] = [];

  static setUsers(users: User[]) {
    this.users = users;
  }

  static getUserById(id: number) {
    return this.users.find(u => u.id === id);
  }
}