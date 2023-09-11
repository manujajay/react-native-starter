// Import necessary modules from React Native
import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

// Create a function-based React component
const App = () => {

  // Function to handle button press
  const handleButtonPress = () => {
    Alert.alert("Button Pressed", "You pressed the button!");
  };

  // JSX for the component
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to My Simple App</Text>
      <Button
        title="Press Me"
        onPress={handleButtonPress}
      />
    </View>
  );
};

// Create StyleSheet for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 20,
    margin: 10,
  },
});

// Export the component
export default App;
