// MainScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MedicineList from './MedicineList';

const MainScreen: React.FC = () => {
  const medicines = [
    { name: 'Fiebrexol', status: 'Sin Stock' },
    { name: 'Tempra', status: '' },
    { name: 'Tafirol', status: '' },
    { name: 'Geniol', status: '' },
    { name: 'Genfar', status: '' },
    { name: 'IbuEvanol', status: '' },
    { name: 'IbuPirac', status: '' },
    { name: 'Actron', status: '' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Paracetamol 500mg</Text>
      </View>
      <MedicineList medicines={medicines} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingTop: 50,
  },
  header: {
    backgroundColor: '#007bff',
    padding: 15,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default MainScreen;