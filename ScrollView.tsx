import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native';

const LoginPage = ({ navigation }) => { // Added navigation prop for routing
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [error, setError] = useState(null); // State for displaying errors

  const handleLogin = async () => { // Made it an async function
    setError(null); // Clear any previous errors
    setLoading(true); // Start loading

    if (!email || !password) {
      setError("Please enter both email and password"); // Set error message
      setLoading(false); // Stop loading
      return;
    }

    try {
      // Simulate an API call (replace with your actual login logic)
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate 2-second delay

      // In a real application, you would call your authentication API here
      // Example:
      // const response = await authService.login(email, password);

      // For now, we simulate a successful login
      setLoading(false); // Stop loading
      Alert.alert("Login Successful", `Welcome back!`);

      // Navigate to the main app screen (replace 'MainApp' with your screen name)
      navigation.navigate('MainApp'); // added navigation logic

    } catch (err) {
      setLoading(false); // Stop loading
      setError("Invalid credentials. Please try again."); // Set a generic error message
      console.error("Login error:", err); // Log the error for debugging
    }
  };

  const handleSignUpPress = () => {
    // Navigate to the sign-up screen (replace 'SignUp' with your screen name)
    navigation.navigate('SignUp');  // added navigation logic
  };


  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20} // Adjust the offset as needed
    >
      <View style={styles.container}>
        <Text style={styles.heading}>Login</Text>

        {error && <Text style={styles.error}>{error}</Text>} {/* Display error message */}

        <TextInput
          style={styles.input}
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          editable={!loading} // Disable input while loading
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          editable={!loading} // Disable input while loading
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}> {/* Disable button while loading */}
          {loading ? (
            <ActivityIndicator color="#fff" /> // Show loading indicator
          ) : (
            <Text style={styles.buttonText}>Login</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSignUpPress}>
          <Text style={styles.signupText}>
            Don’t have an account? <Text style={styles.signupLink}>Sign Up</Text>
          </Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#28a745',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  signupText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#666',
  },
  signupLink: {
    color: '#28a745',
    fontWeight: '600',
  },
  error: { // Style for error message
    color: 'red',
    marginBottom: 16,
    textAlign: 'center',
  },
});

export default LoginPage;
