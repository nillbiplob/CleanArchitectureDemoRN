import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, RefreshControl } from 'react-native';
import { useRouter } from 'expo-router';
import { User } from '@/domain/model/User';
import { UserRepositoryImpl } from '@/data/repository/UserRepositoryImpl';
import { GetUsersUseCase } from '@/application/usecase/GetUsersUseCase';

import { UserSelectionHolder } from '@/presentation/common/UserSelectionHolder';

const UserListScreen: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const router = useRouter();

  const loadUsers = async () => {
    setLoading(true);
    const repo = new UserRepositoryImpl();
    const usecase = new GetUsersUseCase(repo);
    try {
      const data = await usecase.execute();
      setUsers(data);
      UserSelectionHolder.setUsers(data);
    } catch { setUsers([]); }
    setLoading(false);
    setRefreshing(false);
  };

  useEffect(() => { loadUsers(); }, []);

  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.username.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        style={styles.input}
        placeholder="Search users..."
        value={search}
        onChangeText={setSearch}
        clearButtonMode="always"
      />
      {loading ? (
        <ActivityIndicator style={{ marginTop: 20 }} />
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
onPress={() => router.push({ pathname: '/userdetail', params: { userId: item.id } })}
            >
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.subtitle}>{item.username}</Text>
            </TouchableOpacity>
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={() => { setRefreshing(true); loadUsers(); }} />
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: { margin: 12, padding: 10, borderWidth: 1, borderRadius: 8 },
  item: { padding: 16, borderBottomWidth: 1, borderColor: '#eee' },
  title: { fontSize: 18, fontWeight: 'bold' },
  subtitle: { color: '#888' }
});

export default UserListScreen;
