import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const AboutScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/logo.png')} // Replace with your logo
        style={styles.logo}
      />
      <Text style={styles.heading}>About Us</Text>
      <Text style={styles.text}>
        Welcome to our app! We're dedicated to providing the best experience for our users.
        This app is designed to help you [describe your app purpose here briefly].
      </Text>
      <Text style={styles.subHeading}>Our Mission</Text>
      <Text style={styles.text}>
        Our mission is to deliver high-quality services with a focus on user satisfaction,
        reliability, and innovation.
      </Text>
      <Text style={styles.subHeading}>Contact Us</Text>
      <Text style={styles.text}>
        Email: support@example.com{'\n'}
        Phone: +91-1234567890
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#333',
  },
  subHeading: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
    color: '#555',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: '#666',
  },
});

export default AboutScreen;
