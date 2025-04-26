// this about screen page 
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';

const AboutScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/logo.png')} // replace with your logo path
        style={styles.logo}
      />
      <Text style={styles.appName}>MyApp</Text>
      <Text style={styles.version}>Version 1.0.0</Text>

      <Text style={styles.heading}>About This App</Text>
      <Text style={styles.description}>
        MyApp is designed to help users manage their daily tasks efficiently with simple and intuitive tools. Whether you're tracking goals, notes, or reminders, MyApp has got you covered.
      </Text>

      <Text style={styles.heading}>Developer</Text>
      <Text style={styles.description}>Jitendra Gupta</Text>

      <TouchableOpacity onPress={() => Linking.openURL('mailto:your-email@example.com')}>
        <Text style={styles.link}>Contact: your-email@example.com</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Linking.openURL('https://github.com/yourusername')}>
        <Text style={styles.link}>GitHub</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 20,
    marginBottom: 20,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  version: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 10,
    color: '#444',
  },
  link: {
    marginTop: 10,
    color: '#1e90ff',
    fontSize: 16,
  },
});

export default AboutScreen;
