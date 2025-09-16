import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { globalStyles } from '../../styles/global';


const appHome = ({ navigation }) => {


    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [cpf, setCpf] = useState('');
    const [cell, setCell] = useState('');

    const handleHome = () => {
        // lógica de cadastro
    };


    return (

        <View style={[globalStyles.container, styles.Container]}>
            <View>
                
            </View>
        </View>
    );




};



export default appHome;