import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Animated } from 'react-native';
import { Shield, MapPin, Truck, Phone } from 'lucide-react-native';

export default function EmergencyScreen() {
  const [emergencyTriggered, setEmergencyTriggered] = useState(false);
  const [pulseAnim] = useState(new Animated.Value(1));

  useEffect(() => {
    if (emergencyTriggered) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.2,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    }
  }, [emergencyTriggered]);

  const handleTriggerEmergency = () => {
    Alert.alert(
      "Emergency Triggered",
      "We are sending your location to the nearest hospital and dispatching an ambulance.",
      [{ text: "OK", onPress: () => setEmergencyTriggered(true) }]
    );
  };

  return (
    <View style={styles.container}>
      {!emergencyTriggered ? (
        <View style={styles.initialContent}>
          <Shield size={80} color="#EF4444" />
          <Text style={styles.title}>Emergency Help</Text>
          <Text style={styles.subtitle}>
            Press and hold the button below for immediate medical assistance.
          </Text>
          
          <TouchableOpacity 
            style={styles.emergencyButton}
            onLongPress={handleTriggerEmergency}
            delayLongPress={1000}
          >
            <View style={styles.innerButton}>
              <Text style={styles.buttonText}>SOS</Text>
            </View>
          </TouchableOpacity>
          
          <Text style={styles.hint}>Hold for 1 second</Text>
        </View>
      ) : (
        <View style={styles.trackingContent}>
          <Animated.View style={[styles.pulseCircle, { transform: [{ scale: pulseAnim }] }]}>
            <Truck size={40} color="#FFFFFF" />
          </Animated.View>
          
          <Text style={styles.statusTitle}>Ambulance Dispatched</Text>
          <Text style={styles.statusSubtitle}>Estimated arrival: 4 mins</Text>
          
          <View style={styles.infoCard}>
            <View style={styles.infoRow}>
              <MapPin size={20} color="#3B82F6" />
              <Text style={styles.infoText}>Sending live location...</Text>
            </View>
            <View style={[styles.infoRow, { marginTop: 12 }]}>
              <Shield size={20} color="#10B981" />
              <Text style={styles.infoText}>Hospital: Apollo City Center</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.callButton}>
            <Phone size={24} color="#FFFFFF" />
            <Text style={styles.callButtonText}>Call Medic</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.cancelButton} onPress={() => setEmergencyTriggered(false)}>
            <Text style={styles.cancelButtonText}>Cancel Emergency</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 24,
    justifyContent: 'center',
  },
  initialContent: {
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginTop: 24,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 48,
    lineHeight: 24,
  },
  emergencyButton: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerButton: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#EF4444',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#EF4444',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 48,
    fontWeight: 'bold',
  },
  hint: {
    marginTop: 24,
    color: '#9CA3AF',
    fontSize: 14,
  },
  trackingContent: {
    alignItems: 'center',
  },
  pulseCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#3B82F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  statusTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  statusSubtitle: {
    fontSize: 18,
    color: '#3B82F6',
    fontWeight: '600',
    marginBottom: 40,
  },
  infoCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 32,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 16,
    color: '#4B5563',
    marginLeft: 12,
  },
  callButton: {
    flexDirection: 'row',
    backgroundColor: '#10B981',
    width: '100%',
    padding: 18,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  callButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  cancelButton: {
    padding: 12,
  },
  cancelButtonText: {
    color: '#EF4444',
    fontSize: 16,
    fontWeight: '600',
  },
});
