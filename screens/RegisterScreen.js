import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image, ImageBackground, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }
    Alert.alert('Success', 'You have registered successfully!');
    navigation.navigate('Login');
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
              source={require('../assets/globe_13761530.png')}  // Ensure correct path here
              style={styles.worldImage}
            />
            <Text style={styles.appNameTextLast}>rE</Text>
          </View>

          {/* Registration Form */}
          <View style={styles.formContainer}>
            <Text style={styles.header}>Create an Account</Text>
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
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
            <Button color='#C481A7' title="Register" onPress={handleRegister} />
            <View style={styles.footer}>
              <Text style={styles.footerText}>Already have an account?</Text>
              <Button color='#C481A7' title="Login" onPress={() => navigation.navigate('Login')} />
            </View>
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
    padding: 20, 
  },
  imageBackground: { 
    width: '100%', 
    height: '100%', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  appNameContainer: {
    position: 'absolute', // Keeps app name at the top
    top: 20, // Adjust to position the app name as desired
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  appNameText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#A0A6BE',
    fontFamily: 'Cursive', // Beautiful font family
  },
  worldImage: {
    width: 40,  // Adjust size for better visibility
    height: 40,
    marginLeft: 5,
    marginRight: 5,
  },
  appNameTextLast: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#C481A7',
    fontFamily: 'Cursive',
  },
  formContainer: { 
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    padding: 20, 
    width: '80%', 
    borderRadius: 10,
    marginTop: 100, // Adjust to position the form higher
  },
  header: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20, 
    textAlign: 'center', 
    color: '#333' 
  },
  input: { 
    borderWidth: 1, 
    padding: 12, 
    borderRadius: 5, 
    marginBottom: 10, 
    borderColor: '#ccc', 
    backgroundColor: '#fff'
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerText: {
    marginBottom: 10,
    fontSize: 14,
    color: '#888',
  },
});

export default RegisterScreen;
