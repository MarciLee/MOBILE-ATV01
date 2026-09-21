import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { DataProvider } from './src/contexts/DataContext';

import LoginScreen from './src/screens/LoginScreen';
import UserRegistrationScreen from './src/screens/UserRegistrationScreen';
import ContactListScreen from './src/screens/ContactListScreen';
import ContactRegistrationScreen from './src/screens/ContactRegistrationScreen';
import ContactEditScreen from './src/screens/ContactEditScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Login" 
          screenOptions={{ headerTitleAlign: 'center' }}
        >
          {/* Login sem Header */}
          <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{ headerShown: false }} 
          />
          
          <Stack.Screen 
            name="UserRegistration" 
            component={UserRegistrationScreen} 
            options={{ title: 'Cadastro de Usuário' }} 
          />
          
          {/* Lista de Contatos com botão '+' no Header */}
          <Stack.Screen 
            name="ContactList" 
            component={ContactListScreen} 
            options={({ navigation }) => ({
              title: 'Lista de Contatos',
              headerStyle: { backgroundColor: '#2196F3' },
              headerTintColor: '#fff',
              headerRight: () => (
                <Ionicons 
                  name="add" 
                  size={28} 
                  color="white" 
                  onPress={() => navigation.navigate('ContactRegistration')} 
                  style={{ marginRight: 15 }}
                />
              )
            })}
          />
          
          <Stack.Screen 
            name="ContactRegistration" 
            component={ContactRegistrationScreen} 
            options={{ title: 'Cadastro de Contato' }} 
          />
          
          <Stack.Screen 
            name="ContactEdit" 
            component={ContactEditScreen} 
            options={{ title: 'Alteração/Exclusão' }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
}