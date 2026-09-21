import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { DataContext } from '../contexts/DataContext';

export default function ContactListScreen({ navigation }) {
  const { contacts } = useContext(DataContext);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.contactItem}
      onPress={() => navigation.navigate('ContactEdit', { contact: item })}
    >
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{item.nome.charAt(0)}</Text>
      </View>
      <View>
        <Text style={styles.contactName}>{item.nome}</Text>
        <Text style={styles.contactPhone}>{item.telefone}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  contactItem: { flexDirection: 'row', alignItems: 'center', padding: 15, backgroundColor: '#fff' },
  avatar: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#2196F3', justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  avatarText: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  contactName: { fontSize: 18, fontWeight: 'bold' },
  contactPhone: { fontSize: 16, color: '#555' },
  separator: { height: 1, backgroundColor: '#ccc' },
});