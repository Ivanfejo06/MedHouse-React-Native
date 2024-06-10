// MedicineList.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import MedicineItem from './MedicineItem';

interface Medicine {
  name: string;
  status: string;
}

interface MedicineListProps {
  medicines: Medicine[];
}

const MedicineList: React.FC<MedicineListProps> = ({ medicines }) => {
  return (
    <View style={styles.listContainer}>
      {medicines.map((medicine, index) => (
        <MedicineItem key={index} name={medicine.name} status={medicine.status} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    margin: 10,
  },
});

export default MedicineList;