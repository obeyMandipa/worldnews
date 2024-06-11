import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles';
import Login from './components/Login';

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <Login/>
    </View>
  );
}


