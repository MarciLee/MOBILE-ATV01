import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, SafeAreaView } from 'react-native';
import { DataContext } from '../contexts/DataContext';

export default function ContactEditScreen({ route, navigation }) {
  // Recebe o parâmetro passado pela lista de contatos
  const { contact } = route.params;
  const { updateContact, deleteContact } = useContext(DataContext);

  const [nome, setNome] = useState(contact.nome);
  const [email, setEmail] = useState(contact.email);
  const [telefone, setTelefone] = useState(contact.telefone);

  const handleAlterar = () => {
    updateContact(contact.id, { nome, email, telefone });
    navigation.goBack();
  };

  const handleExcluir = () => {
    Alert.alert('Excluir contato', 'Tem certeza que deseja excluir?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Excluir', onPress: () => {
          deleteContact(contact.id);
          navigation.goBack();
        }
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.headerTitle}>ALTERAÇÃO/EXCLUSÃO DE CONTATOS</Text>
        
        <Text style={styles.label}>Contato</Text>
        <TextInput style={styles.input} value={nome} onChangeText={setNome} />
        
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />
        
        <Text style={styles.label}>Telefone</Text>
        <TextInput style={styles.input} value={telefone} onChangeText={setTelefone} keyboardType="phone-pad" />

        <TouchableOpacity style={[styles.button, styles.alterar]} onPress={handleAlterar}>
          <Text style={styles.buttonText}>Alterar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.button, styles.excluir]} onPress={handleExcluir}>
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 20 },
  headerTitle: { fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  label: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  input: { backgroundColor: '#f0f0f0', borderRadius: 5, padding: 10, marginBottom: 15 },
  button: { padding: 15, borderRadius: 5, alignItems: 'center', marginTop: 10 },
  alterar: { backgroundColor: '#2ecc71' },
  excluir: { backgroundColor: '#e74c3c' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});