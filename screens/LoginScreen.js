import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, ImageBackground, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }
    Alert.alert('Success', 'You have logged in successfully!');
    navigation.navigate('Home', { username: email });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <ImageBackground 
          source={{ uri: 'https://i.blogs.es/b4dd5c/maps/1366_2000.png' }} 
          style={styles.imageBackground}
          blurRadius={3}
        >
          {/* App Name Section */}
          <View style={styles.appNameContainer}>
            <Text style={styles.appNameText}>Expl</Text>
            <Image 
            source={require('../assets/globe_13761530.png')}
           style={styles.worldImage}
            />
            <Text style={styles.appNameTextLast}>rE</Text>
          </View>

          {/* Login Section */}
          <View style={styles.login}>
            <Text style={styles.header}>Login</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <TouchableOpacity onPress={handleLogin} style={styles.button}>
              <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.link}>
              <Text>Don't have an account? Register</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flexGrow: 1, 
    justifyContent: 'center', 
    padding: 10 
  },
  imageBackground: { 
    width: '100%', 
    height: '100%', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  appNameContainer: {
    position: 'absolute', // This positions the app name at the top of the screen
    top: 90, // Adjust this to position the app name as desired
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1, // Keeps it above the background image
  },
  appNameText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#A0A6BE', // for "Expl"
    fontFamily: 'Cursive', // Use a cursive or beautiful font family if available
  },
  worldImage: {
    width: 40, // Adjust size
    height: 40,
    marginLeft: 5,
    marginRight: 5,
  },
  appNameTextLast: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#C481A7', // for "E"
    fontFamily: 'Cursive', // Same font for consistency
  },
  login: { 
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    padding: 20, 
    width: '80%', 
    borderRadius: 10,
    marginTop: 50, // Adjust to ensure the app name is above
  },
  header: { fontSize: 35, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { 
    borderWidth: 1, 
    padding: 10, 
    borderRadius: 5, 
    marginBottom: 10, 
    fontSize: 16 
  },
  button: { 
    padding: 10, 
    backgroundColor: '#C481A7', 
    borderRadius: 5, 
    alignItems: 'center', 
    marginTop: 20 
  },
  buttonText: { color: '#fff', fontSize: 16 },
  link: { marginTop: 10, alignSelf: 'center' },
});

export default LoginScreen;
