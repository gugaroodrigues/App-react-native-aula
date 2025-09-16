import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { ArrowLeft, EnvelopeSimpleIcon, LockKeyIcon } from 'phosphor-react-native';
import { styles } from './styles';
import { globalStyles } from '../../styles/global';
import ModalMessage from '../../components/ModalMessage';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState('');

  const handleLogin = () => {
    if (email === 'test@test.com' && password === '1234567') {
      setModalVisible(false);
      navigation.navigate('appHome');
    } else {
      setModalVisible(true);
    }
  };

  return (
    <View style={[globalStyles.container, styles.Container]}>
      <TouchableOpacity style={styles.header}>
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

      <TouchableOpacity style={globalStyles.button} onPress={handleLogin}>
        <Text style={globalStyles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('createUser')}>
          <Text style={styles.singupLink}>Ainda não possui uma conta?</Text>
        </TouchableOpacity>
      </View>

      <ModalMessage
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        message="Usuário ou senha incorretos!"
      />
    </View>
  );
};

export default LoginScreen;
