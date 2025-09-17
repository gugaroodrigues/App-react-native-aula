import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { ArrowLeft, EnvelopeSimpleIcon, LockKeyIcon } from 'phosphor-react-native';
import { styles } from './styles';
import { globalStyles } from '../../styles/global';
import ModalMessage from '../../components/ModalMessage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import bcrypt from 'react-native-bcrypt';
//import bcrypt from 'bcryptjs';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(email.trim() !== '' && password.trim() !== '');
  }, [email, password]);

  const handleLogin = async () => {
    try {
        const usuariosJSON = await AsyncStorage.getItem('@usuarios');
        if (!usuariosJSON) {
            setModalVisible(true);
            return;
        }

        const todosUsuarios = JSON.parse(usuariosJSON);
        const usuarioAtual = todosUsuarios.find(user => user.email.toLowerCase() === email.toLowerCase());

        if (!usuarioAtual) {
            setModalVisible(false);
            return;
        }

        // A comparação também se torna assíncrona
        bcrypt.compare(password, usuarioAtual.password, (err, passwordMatch) => {
            if (err || !passwordMatch) {
                setModalVisible(true); // Mostra erro se a senha estiver errada ou se houver erro na comparação
            } else {
                // Sucesso!
                setModalVisible(false);
                navigation.navigate('appHome');
            }
        });

    } catch (error) {
        console.error('Erro ao fazer login:', error);
        Alert.alert("Erro", "Ocorreu um erro inesperado ao tentar fazer login.");
    }
};


  return (
    <View style={[globalStyles.container, styles.Container]}>
      <TouchableOpacity style={styles.header} onPress={() => navigation.goBack()}>
        <ArrowLeft size={32} color="#f4f4f4" weight="regular" />
      </TouchableOpacity>

      <Text style={globalStyles.title}>Faça seu Login</Text>

      <View style={styles.content}>
        <View style={styles.contentInput}>
          <EnvelopeSimpleIcon size={22} color="#8e8e8e" />
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="#757575"
          />
        </View>

        <View style={styles.contentInput}>
          <LockKeyIcon size={22} color="#8e8e8e" />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="#757575"
          />
        </View>
      </View>

      <TouchableOpacity
        style={[globalStyles.button, !isFormValid && globalStyles.buttonDisabled]}
        onPress={handleLogin}
        disabled={!isFormValid}
      >
        <Text style={globalStyles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={globalStyles.buttonSingUp}
        onPress={() => navigation.navigate('createUser')}>
        <Text style={globalStyles.buttonText}>Registrar</Text>
      </TouchableOpacity>

      <ModalMessage
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        message="Usuário ou senha incorretos!"
      />
    </View>
  );
};

export default LoginScreen;
