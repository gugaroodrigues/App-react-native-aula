import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import {
    ArrowLeft,
    EnvelopeIcon,
    Phone,
    UserIcon,
    PasswordIcon,
    IdentificationCardIcon,
} from 'phosphor-react-native';
import { TextInputMask } from 'react-native-masked-text';
import { styles } from '../Login/styles';
import { globalStyles } from '../../styles/global';
import AsyncStorage from '@react-native-async-storage/async-storage';
import bcrypt from 'react-native-bcrypt';

//import bcrypt from 'bcryptjs';

const CreateUser = ({ navigation }) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [cpf, setCpf] = useState('');
    const [cell, setCell] = useState('');

    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        const allFieldsFilled =
            nome.trim() !== '' &&
            email.trim() !== '' &&
            password.trim() !== '' &&
            confirmPassword.trim() !== '' &&
            cell.trim() !== '' &&
            cpf.replace(/[^0-9]/g, '').length === 11;

        setIsFormValid(allFieldsFilled);
    }, [nome, email, password, confirmPassword, cell, cpf]);

    const handleCadastro = async () => {
        if (password !== confirmPassword) {
            Alert.alert('Erro de Cadastro', 'As senhas não coincidem.');
            return;
        }

        // A criptografia agora é assíncrona para não travar o app
        const salt = bcrypt.genSaltSync(10);

        bcrypt.hash(password, salt, async (err, hashedPassword) => {
            if (err) {
                console.error('Erro de criptografia:', err);
                Alert.alert('Erro Crítico', 'Não foi possível processar a senha.');
                return;
            }

            // O resto da lógica vai aqui DENTRO do callback do hash
            try {
                const novoUsuario = {
                    nome,
                    email,
                    password: hashedPassword, // Usando a senha criptografada
                    cpf,
                    cell,
                };

                const stored = await AsyncStorage.getItem('@usuarios');
                const usuarios = stored ? JSON.parse(stored) : [];

                const jaExiste = usuarios.some(u => u.email.toLowerCase() === email.toLowerCase());
                if (jaExiste) {
                    Alert.alert('Erro', 'Já existe um usuário com este e-mail.');
                    return;
                }

                usuarios.push(novoUsuario);
                await AsyncStorage.setItem('@usuarios', JSON.stringify(usuarios));




                Alert.alert(
                    'Sucesso!',
                    'Usuário cadastrado. Faça seu login.',
                    [
                        {
                            text: 'OK',
                            onPress: () => navigation.navigate('Login'),
                        },
                    ]
                );

            } catch (error) {
                console.error('Erro ao salvar ou navegar:', error);
                Alert.alert('Erro', 'Não foi possível salvar o usuário.');
            }
        });
    };


    const limparStorage = async () => {
        try {
            await AsyncStorage.removeItem('@usuarios');
            // Se você usou a chave no singular antes, limpe-a também
            await AsyncStorage.removeItem('@usuario');
            Alert.alert('Sucesso', 'O armazenamento foi limpo. Tente cadastrar novamente.');
        } catch (e) {
            Alert.alert('Erro', 'Não foi possível limpar o armazenamento.');
        }
    };

    return (
        <View style={[globalStyles.container, styles.Container]}>
            <TouchableOpacity style={styles.header} onPress={() => navigation.goBack()}>
                <ArrowLeft size={32} color="#f4f4f4" weight="regular" />
            </TouchableOpacity>

            <Text style={globalStyles.title}>Faça seu cadastro!</Text>

            <View style={styles.content}>
                <View style={styles.contentInput}>
                    <UserIcon size={22} color="#8e8e8e" />
                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                        value={nome}
                        onChangeText={setNome}
                        placeholderTextColor="#757575"
                    />
                </View>

                <View style={styles.contentInput}>
                    <EnvelopeIcon size={22} color="#8e8e8e" />
                    <TextInput
                        style={styles.input}
                        placeholder="E-mail"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        placeholderTextColor="#757575"
                    />
                </View>

                <View style={styles.contentInput}>
                    <IdentificationCardIcon size={22} color="#8e8e8e" />
                    <TextInputMask
                        style={styles.input}
                        type={'cpf'}
                        placeholder="CPF"
                        value={cpf}
                        onChangeText={setCpf}
                        placeholderTextColor="#757575"
                    />
                </View>

                <View style={styles.contentInput}>
                    <Phone size={22} color="#8e8e8e" />
                    <TextInputMask
                        style={styles.input}
                        type={'cel-phone'}
                        options={{ maskType: 'BRL', withDDD: true, dddMask: '(99) ' }}
                        placeholder="Telefone"
                        value={cell}
                        onChangeText={setCell}
                        placeholderTextColor="#757575"
                    />
                </View>

                <View style={styles.contentInput}>
                    <PasswordIcon size={22} color="#8e8e8e" />
                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        placeholderTextColor="#757575"
                    />
                </View>

                <View style={styles.contentInput}>
                    <PasswordIcon size={22} color="#8e8e8e" />
                    <TextInput
                        style={styles.input}
                        placeholder="Confirme sua senha"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry
                        placeholderTextColor="#757575"
                    />
                </View>
            </View>

            <TouchableOpacity
                style={[globalStyles.button, !isFormValid && globalStyles.buttonDisabled]}
                onPress={handleCadastro}
            //disabled={!isFormValid}
            >
                <Text style={globalStyles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={globalStyles.button} onPress={limparStorage}>
                <Text style={globalStyles.buttonText}>Limpar Storage (Temporário)</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CreateUser;
