import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { MyCheckbox } from '~/components/checkBox';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    // Validação simples
    if (!email || !password) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert('Erro', 'Insira um email válido.');
      return;
    }

    try {
      // Armazena o email no AsyncStorage
      await AsyncStorage.setItem('userEmail', email);
      // Navega para a página Home
      router.push('/home');
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao armazenar os dados.');
    }
  };

  return (
    <SafeAreaView className="flex-1 px-10 py-28 flex-col justify-between">
      <View className="w-full justify-center items-center gap-5">
        <Text className="w-full text-center font-medium text-gray-900 text-2xl">Hello User!</Text>
        <Text className="w-[70%] text-center font-normal text-gray-500 text-lg">
          Welcome Back, You Have Been Missed For Long Time
        </Text>
      </View>

      <View className="flex w-full flex-col justify-center items-center">
        <View className="py-2 pl-2 pr-4 rounded-md bg-gray-200 w-full flex flex-row items-center">
          <TextInput
            placeholder="Email Address"
            className="w-full flex-1 text-gray-800"
            value={email}
            onChangeText={setEmail}
          />
          <MaterialCommunityIcons name="email-outline" size={22} color="#727A82" />
        </View>
        <View className="py-2 pl-2 pr-4 rounded-md bg-gray-200 w-full flex flex-row items-center mt-5">
          <TextInput
            placeholder="Password"
            className="w-full flex-1 text-gray-800"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <MaterialCommunityIcons
              name={showPassword ? 'eye-outline' : 'eye-off-outline'}
              size={22}
              color="#727A82"
            />
          </TouchableOpacity>
        </View>
        <View className="w-full flex flex-row justify-between items-center mt-2">
          <View className="flex flex-row gap-1 items-center">
            <MyCheckbox />
            <Text className="text-sm text-[#727A82] font-bold">Remember Me</Text>
          </View>
          <TouchableOpacity>
            <Text className="text-sm text-[#5F60B9] font-medium italic">Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity className="w-full mt-10 bg-[#5F60B9] p-4 rounded-md" onPress={handleLogin}>
          <Text className="text-white w-full text-center font-bold text-base">LOGIN</Text>
        </TouchableOpacity>
        <View className="w-full justify-center items-center flex flex-row mt-5">
          <Text className="text-[#727A82]">Don't have an account? </Text>
          <TouchableOpacity>
            <Text className="text-[#5F60B9] underline italic font-medium">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="w-full flex flex-col justify-center items-center">
        <View className="w-full flex gap-2 flex-row items-center">
          <View className="border-b border-[#ddd] flex-1"></View>
          <Text className="text-[#727A82] font-medium flex-1">Or Continue With</Text>
          <View className="border-b border-[#ddd] flex-1"></View>
        </View>
        <View className="w-full justify-center items-center gap-5 flex flex-row mt-4">
          <TouchableOpacity className="p-3 justify-center items-center bg-[#ccc] rounded-full">
            <AntDesign name="google" size={20} color="#474c50" />
          </TouchableOpacity>
          <TouchableOpacity className="p-3 justify-center items-center bg-[#ccc] rounded-full">
            <AntDesign name="phone" size={20} color="#474c50" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
