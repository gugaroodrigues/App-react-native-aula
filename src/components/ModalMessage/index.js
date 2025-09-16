import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { modalStyles } from './styles';

export default function ModalMessage({ visible, onClose, message }) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={modalStyles.overlay}>
        <View style={modalStyles.modalContainer}>
          <Text style={modalStyles.title}>Erro de Login</Text>
          <Text style={modalStyles.message}>{message}</Text>

          <TouchableOpacity style={modalStyles.button} onPress={onClose}>
            <Text style={modalStyles.buttonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
