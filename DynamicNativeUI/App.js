import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Dimensions } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <View style={styles.mainbox}>
        <Text style={styles.Text}>Changes you make will automatically reload.</Text>
      </View>
    </View>
  );
}

const boxWidth = Dimensions.get('window').width;
const boxHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainbox: {
    width: boxWidth - 50,
    height: boxHeight / 4,
    backgroundColor: 'red',
    padding: 20,
    borderRadius: 10,
    elevation: 2,
  },
  Text: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
