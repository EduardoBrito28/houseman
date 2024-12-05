import React, { useEffect, useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Layout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const userEmail = await AsyncStorage.getItem('userEmail');
        if (userEmail) {
          setIsLoggedIn(true);
          router.replace('/home'); // Redireciona para a página home
        }
      } catch (error) {
        console.error('Erro ao verificar status de login:', error);
      }
    };

    checkLoginStatus();
  }, []);

  return (
    <Stack>
      {/* Página Login (aparece somente se o usuário não estiver logado) */}
      {!isLoggedIn && (
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
      )}

      {/* Página Home */}
      <Stack.Screen
        name="home"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
