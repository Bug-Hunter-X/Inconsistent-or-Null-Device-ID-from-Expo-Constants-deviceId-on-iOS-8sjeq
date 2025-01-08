// bugSolution.js
import * as Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const generateUUID = () => {
  // Generate a UUID if none is found or if it's inconsistent. Using UUID improves chances of uniqueness.
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

export const getOrCreateDeviceId = async () => {
  try {
    const storedDeviceId = await AsyncStorage.getItem('deviceId');
    if (storedDeviceId) {
      return storedDeviceId;
    } else {
      const deviceId = Constants.deviceId || generateUUID(); // Fallback to UUID if deviceId is null
      await AsyncStorage.setItem('deviceId', deviceId);
      return deviceId;
    }
  } catch (error) {
    console.error('Error getting or creating device ID:', error);
    return generateUUID(); // Fallback to UUID on error
  }
};

// Example usage:
(async () => {
  const myDeviceId = await getOrCreateDeviceId();
  console.log('My Device ID:', myDeviceId);
})();