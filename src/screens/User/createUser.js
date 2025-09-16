import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
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

const CreateUser = ({ navigation }) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [cpf, setCpf] = useState('');
    const [cell, setCell] = useState('');

    const handleCadastro = () => {
        // lógica de cadastro
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
                        placeholderTextColor="#757575"
                        value={cpf}
                        onChangeText={setCpf}
                    />
                </View>

                <View style={styles.contentInput}>
                    <Phone size={22} color="#8e8e8e" />
                    <TextInputMask
                        style={styles.input}
                        type={'cel-phone'}
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) ',
                        }}
                        placeholder="Fone"
                        placeholderTextColor="#757575"
                        value={cell}
                        onChangeText={setCell}
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

            <TouchableOpacity style={globalStyles.button} onPress={handleCadastro}>
                <Text style={globalStyles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CreateUser;
