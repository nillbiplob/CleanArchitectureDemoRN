import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { UserSelectionHolder } from '@/presentation/common/UserSelectionHolder';

export const options = {
  title: 'User Detail', // Or 'User List', etc.
};

const UserDetailScreen: React.FC = () => {
  const params = useLocalSearchParams();
  const userId = Number(params.userId);

  const user = UserSelectionHolder.getUserById(userId);

  if (!user) {
    return (
      <View style={styles.container}>
        <Text>No user found for ID {userId}</Text>
        <Text>DEBUG: {JSON.stringify(params)}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{user.name}</Text>
      <Text>@{user.username}</Text>
      <Text>{user.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 }
});

export default UserDetailScreen;
