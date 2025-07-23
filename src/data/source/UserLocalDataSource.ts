import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserDto } from '../model/UserDto';

export const UserLocalDataSource = {
  async saveUsers(users: UserDto[]): Promise<void> {
    await AsyncStorage.setItem('user_cache', JSON.stringify(users));
  },
  async getCachedUsers(): Promise<UserDto[]> {
    const json = await AsyncStorage.getItem('user_cache');
    if (!json) return [];
    return JSON.parse(json) as UserDto[];
  }
};
