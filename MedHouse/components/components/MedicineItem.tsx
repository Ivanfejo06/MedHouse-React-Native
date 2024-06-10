// MedicineItem.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface MedicineItemProps {
  name: string;
  status: string;
}

const MedicineItem: React.FC<MedicineItemProps> = ({ name, status }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.name}>{name}</Text>
      {status === 'Sin Stock' && <Text style={styles.outOfStock}>Sin Stock</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 363,
    height: 80,
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  name: {
    fontSize: 16,
  },
  outOfStock: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default MedicineItem;