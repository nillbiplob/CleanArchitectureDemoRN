
import { User } from '../../model/User';

// Update the import path below if the User model is in a different location
// If the correct path is different, update '../../model/User' to the actual relative path of your User model file.

export interface UserRepository {
  getUsers(): Promise<User[]>;
}