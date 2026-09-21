import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const data = [
  { id: '1', emri: 'Ardit', mosha: 20 },
  { id: '2', emri: 'Ana', mosha: 22 },
  { id: '3', emri: 'Erion', mosha: 19 },
  { id: '4', emri: 'Sara', mosha: 21 },
];

export default function App() {
  return ( 
    <View style={styles.container}>
      <Text style={styles.title}>Students</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.emri}</Text>
            <Text>Mosha: {item.mosha}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#f5f5f5',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  item: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});