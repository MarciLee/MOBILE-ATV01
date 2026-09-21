import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    navigation.navigate('ContactList');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Login</Text>
        
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} value={login} onChangeText={setLogin} />
        
        <Text style={styles.label}>Senha</Text>
        <TextInput style={styles.input} secureTextEntry value={senha} onChangeText={setSenha} />
        
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Logar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UserRegistration')}>
          <Text style={styles.buttonText}>Cadastre-se</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => alert('Esqueceu a senha')}>
          <Text style={styles.link}>esqueceu a senha</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 30 },
  label: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  input: { backgroundColor: '#f0f0f0', borderRadius: 5, padding: 10, marginBottom: 15 },
  button: { backgroundColor: '#2ecc71', padding: 15, borderRadius: 5, alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  link: { color: '#000', textAlign: 'center', marginTop: 20, fontWeight: 'bold' },
});