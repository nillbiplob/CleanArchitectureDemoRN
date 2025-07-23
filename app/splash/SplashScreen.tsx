import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { UserRepositoryImpl } from '@/data/repository/UserRepositoryImpl';
import { GetUsersUseCase } from '@/application/usecase/GetUsersUseCase';

const SplashScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const repo = new UserRepositoryImpl();
    const usecase = new GetUsersUseCase(repo);
    usecase.execute().then(users => {
      setLoading(false);
      setTimeout(() => router.replace('/userlist'), 1200); // minimum splash
    }).catch(e => {
      setLoading(false);
      setError(e.message || 'Error');
    });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <>
          <ActivityIndicator size="large" />
          <Text style={styles.text}>Loading users...</Text>
        </>
      ) : error ? (
        <>
          <Text style={styles.text}>{error}</Text>
          <Button title="Retry" onPress={() => router.replace('/splash')} />
        </>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { marginTop: 20, fontSize: 16 }
});

export default SplashScreen;
