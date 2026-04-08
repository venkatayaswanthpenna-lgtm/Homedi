import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';

const MOCK_HOSPITALS = [
  { id: '1', name: 'Apollo Hospitals', specialty: 'Cardiology', distance: '2.5 km', rating: 4.8 },
  { id: '2', name: 'KIMS Hospital', specialty: 'Neurology', distance: '4.1 km', rating: 4.7 },
  { id: '3', name: 'Care Hospitals', specialty: 'Orthopedics', distance: '5.2 km', rating: 4.6 },
];

export default function HospitalsListScreen() {
  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.hospitalName}>{item.name}</Text>
        <View style={styles.ratingBadge}>
          <Text style={styles.ratingText}>★ {item.rating}</Text>
        </View>
      </View>
      <Text style={styles.specialty}>{item.specialty} Specialist</Text>
      <Text style={styles.distance}>📍 {item.distance} away</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput 
          style={styles.searchInput}
          placeholder="Search hospitals or specialties..."
          placeholderTextColor="#9CA3AF"
        />
      </View>
      
      <FlatList
        data={MOCK_HOSPITALS}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  searchContainer: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  searchInput: {
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    color: '#111827',
  },
  list: {
    padding: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  hospitalName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
  },
  ratingBadge: {
    backgroundColor: '#ECFDF5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  ratingText: {
    color: '#10B981',
    fontWeight: 'bold',
    fontSize: 12,
  },
  specialty: {
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 8,
  },
  distance: {
    fontSize: 14,
    color: '#6B7280',
  },
});
