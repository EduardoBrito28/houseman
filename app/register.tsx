import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Register() {

  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [focusedInput, setFocusedInput] = useState<null | string>(null);
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
      await AsyncStorage.setItem('fullName', fullName);
      await AsyncStorage.setItem('userName', userName);
      await AsyncStorage.setItem('userEmail', email);
      // Navega para a página Home
      router.push('/home');
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao armazenar os dados.');
    }
  };

  const goToLogin = () => {
    router.replace('/');
  }

  return (
    <SafeAreaView className="flex-1 px-10 flex-col justify-center gap-12">

      <View className="w-full justify-center items-center gap-5">
        <View className='p-7 rounded-full bg-[#5F60B9]'>
          <Ionicons name="person-outline" size={35} color="#fff" />
        </View>
        <Text className="w-full text-center font-medium text-gray-900 text-2xl">Hello User!</Text>
        <Text className="w-[70%] text-center font-normal text-gray-500 text-lg">
          Signup For Better Experience
        </Text>
      </View>

      <View className="flex w-full flex-col justify-center items-center">

        <View className={`py-2 pl-2 pr-4 rounded-md bg-gray-200 w-full flex flex-row items-center ${focusedInput === 'fullName' && 'border border-[#5F60B9]'}`}>
          <TextInput
            placeholder="Full Name"
            className={`w-full flex-1 text-gray-800`}
            value={fullName}
            onChangeText={setFullName}
            onFocus={() => setFocusedInput('fullName')}
            onBlur={() => setFocusedInput(null)}
          />
          <Ionicons name="person-outline" size={22} color="#727A82" />
        </View>

        <View className={`py-2 pl-2 pr-4 rounded-md bg-gray-200 w-full flex flex-row items-center mt-5 ${focusedInput === 'userName' && 'border border-[#5F60B9]'}`}>
          <TextInput
            placeholder="User Name"
            className="w-full flex-1 text-gray-800"
            value={userName}
            onChangeText={setUserName}
            onFocus={() => setFocusedInput('userName')}
            onBlur={() => setFocusedInput(null)}
          />
          <Ionicons name="person-outline" size={22} color="#727A82" />
        </View>

        <View className={`py-2 pl-2 pr-4 rounded-md bg-gray-200 w-full flex flex-row items-center mt-5 ${focusedInput === 'email' && 'border border-[#5F60B9]'}`}>
          <TextInput
            placeholder="Email Address"
            className="w-full flex-1 text-gray-800"
            value={email}
            onChangeText={setEmail}
            onFocus={() => setFocusedInput('email')}
            onBlur={() => setFocusedInput(null)}
          />
          <MaterialCommunityIcons name="email-outline" size={22} color="#727A82" />
        </View>

        <View className={`py-2 pl-2 pr-4 rounded-md bg-gray-200 w-full flex flex-row items-center mt-5 ${focusedInput === 'password' && 'border border-[#5F60B9]'}`}>
          <TextInput
            placeholder="Password"
            className="w-full flex-1 text-gray-800"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            onFocus={() => setFocusedInput('password')}
            onBlur={() => setFocusedInput(null)}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <MaterialCommunityIcons
              name={showPassword ? 'eye-outline' : 'eye-off-outline'}
              size={22}
              color="#727A82"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity className="w-full mt-10 bg-[#5F60B9] p-4 rounded-md" onPress={handleLogin}>
          <Text className="text-white w-full text-center font-bold text-base">SIGNUP</Text>
        </TouchableOpacity>

        <View className="w-full justify-center items-center flex flex-row mt-5">
          <Text className="text-[#727A82]">Already have an account? </Text>
          <TouchableOpacity onPress={goToLogin}>
            <Text className="text-[#5F60B9] underline italic font-medium">Sign In</Text>
          </TouchableOpacity>
        </View>

      </View>

    </SafeAreaView>
  );
}
