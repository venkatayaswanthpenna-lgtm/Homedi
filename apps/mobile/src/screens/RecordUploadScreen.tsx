import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function RecordUploadScreen() {
  const [recordType, setRecordType] = useState('Prescription');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Upload Record</Text>
        <Text style={styles.subtitle}>Securely store your medical documents encoded in our compliant database.</Text>
      </View>

      <View style={styles.uploadArea}>
        <View style={styles.uploadIconPlaceholder}>
          <Text style={styles.uploadIconText}>+</Text>
        </View>
        <Text style={styles.uploadText}>Select PDF or Image from device</Text>
        <Text style={styles.uploadSubText}>Supported formats: JPEG, PNG, PDF (Max 10MB)</Text>
      </View>

      <View style={styles.formSection}>
        <Text style={styles.label}>Record Type</Text>
        <View style={styles.typeSelector}>
          {['Prescription', 'Lab Report', 'Scan'].map(type => (
            <TouchableOpacity 
              key={type}
              style={[styles.typeBadge, recordType === type && styles.typeBadgeActive]}
              onPress={() => setRecordType(type)}
            >
              <Text style={[styles.typeText, recordType === type && styles.typeTextActive]}>{type}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Upload & Encrypt Data</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    padding: 24,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 8,
  },
  uploadArea: {
    margin: 24,
    backgroundColor: '#EEF2FF',
    borderWidth: 2,
    borderColor: '#C7D2FE',
    borderStyle: 'dashed',
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadIconPlaceholder: {
    width: 64,
    height: 64,
    backgroundColor: '#E0E7FF',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  uploadIconText: {
    fontSize: 32,
    color: '#4F46E5',
    fontWeight: '300',
  },
  uploadText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  uploadSubText: {
    fontSize: 12,
    color: '#6B7280',
  },
  formSection: {
    padding: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 12,
  },
  typeSelector: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 32,
  },
  typeBadge: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  typeBadgeActive: {
    backgroundColor: '#2563EB',
  },
  typeText: {
    color: '#4B5563',
    fontWeight: '500',
  },
  typeTextActive: {
    color: '#FFFFFF',
  },
  submitButton: {
    backgroundColor: '#2563EB',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
