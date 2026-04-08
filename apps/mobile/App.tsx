import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './src/screens/OnboardingScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import HospitalsListScreen from './src/screens/HospitalsListScreen';
import RecordUploadScreen from './src/screens/RecordUploadScreen';
import EmergencyScreen from './src/screens/EmergencyScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen 
          name="Onboarding" 
          component={OnboardingScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'HOMEDI Dashboard', headerBackVisible: false }}
        />
        <Stack.Screen 
          name="Hospitals" 
          component={HospitalsListScreen} 
          options={{ title: 'Find Hospital' }}
        />
        <Stack.Screen 
          name="UploadRecord" 
          component={RecordUploadScreen} 
          options={{ title: 'Upload Document' }}
        />
        <Stack.Screen 
          name="Emergency" 
          component={EmergencyScreen} 
          options={{ title: 'Emergency SOS' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
