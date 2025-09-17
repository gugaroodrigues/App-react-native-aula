import React from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { SignOut, Trash } from 'phosphor-react-native';
import styles from './styles';

export default function HomeScreen() {
  const navigation = useNavigation();

  // Botão de logout: só sai para a tela de LoginScreen
  const handleLogout = () => {
    navigation.replace('LoginScreen');
  };

  // Botão para limpar TODO o AsyncStorage (apaga dados antigos)
  const handleClearAsync = async () => {
    try {
      await AsyncStorage.clear();
      Alert.alert('Sucesso', 'Todos os dados foram apagados!');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível limpar os dados.');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Botão Logout - canto superior direito */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <SignOut size={28} color="#fff" />
      </TouchableOpacity>

      {/* Botão para limpar Async - canto inferior direito */}
      <TouchableOpacity style={styles.fab} onPress={handleClearAsync}>
        <Trash size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
