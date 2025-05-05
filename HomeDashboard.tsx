
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
  ActivityIndicator,
  Platform, // Import Platform
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import * as Notifications from 'expo-notifications'; // Import Notifications
import * as Device from 'expo-device'; // Import Device
import Constants from 'expo-constants'; // Import Constants

// Define notification handling functions outside the component for clarity
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

//the line 
const HomeDashboard = () => {
  const navigation = useNavigation(); // Use useNavigation hook
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(false); // State for managing notification
  const [expoPushToken, setExpoPushToken] = useState(''); // State for Expo push token
  const notificationListener = React.useRef();
  const responseListener = React.useRef();

  // Function to register for push notifications
  async function registerForPushNotificationsAsync() {
    let token;

    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = await Notifications.getExpoPushTokenAsync({
        projectId: Constants.expoConfig.extra.eas.projectId, // Use the correct EAS project ID
      });
      console.log(token);
    } else {
      alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }

    return token;
  }

  useEffect(() => {
    setIsLoading(true);
    // Register for push notifications and get token
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
    setIsLoading(false);


    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    // Cleanup function
    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  const handleLogin = () => {
    // Navigate to the Login screen
    navigation.navigate('Login');
  };

  const handleSignup = () => {
    // Navigate to the Signup screen
    navigation.navigate('Signup');
  };


  const handleStartExam = () => {
    // Navigate to the Exam screen
    navigation.navigate('Exam');
  };

  const handlePractice = () => {
    // Navigate to the Practice screen
    navigation.navigate('Practice');
  };

  const handleStudyMaterials = () => {
    // Navigate to the StudyMaterials screen
    navigation.navigate('StudyMaterials');
  };

  const handleProfile = () => {
    // Navigate to the Profile screen
    navigation.navigate('Profile');
  };

  const handleSettings = () => {
    // Navigate to the Settings screen
    navigation.navigate('Settings');
  };

  if (isLoading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }


  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.hamburger}
        onPress={() => navigation.openDrawer()}
      >
        <Text style={styles.hamburgerText}>☰</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.scrollContainer}>

        <Text style={styles.title}>Welcome to Clear Exam</Text>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleStartExam}>
          <Text style={styles.buttonText}>Start Exam</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handlePractice}>
          <Text style={styles.buttonText}>Practice</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleStudyMaterials}>
          <Text style={styles.buttonText}>Study Materials</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleProfile}>
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleSettings}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.testNotificationButton}
          onPress={async () => {
            await sendPushNotification(expoPushToken);
          }}>
          <Text style={styles.buttonText}>Test Notification</Text>
        </TouchableOpacity>
        {/* Display notification data if a notification is received */}
        {notification && (
          <View style={styles.notificationContainer}>
            <Text style={styles.notificationTitle}>Notification Data:</Text>
            <Text>Title: {notification.request.content.title}</Text>
            <Text>Body: {notification.request.content.body}</Text>
            <Text>Data: {JSON.stringify(notification.request.content.data)}</Text>
          </View>
        )}
        <View style={{ height: 20 }} />  {/* Add some bottom spacing */}
      </ScrollView>
    </SafeAreaView>
  );
};

// Can use this function below, or ...
async function sendPushNotification(expoPushToken) {
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: 'Original Title',
    body: 'And here is the body!',
    data: { someData: 'goes here' },
  };

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
}


export default HomeDashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 18, // Reduced padding for more buttons
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 15, // Reduced margin for more buttons
    width: '80%', // Increased width for better appearance
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  hamburger: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  hamburgerText: {
    fontSize: 32,
    color: '#007AFF',
  },
   notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  notificationContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
  },
  testNotificationButton: {
    backgroundColor: '#4CAF50',  // Green color
    paddingVertical: 18, // Reduced padding for more buttons
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 15, // Reduced margin for more buttons
    width: '80%', // Increased width for better appearance
    alignItems: 'center',
  }
});
