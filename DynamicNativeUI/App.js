import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';

export default function App() {
  const [windowdimesion, setWindowdimesion] = useState(
    {
      window: Dimensions.get('window')
    }
  )

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window }) => {
        setWindowdimesion({ window });
      }
    );

    return () => {
      subscription?.remove();
    };

  }, []);

    const {window}= windowdimesion;
    const boxWidth = window.width;
    const boxHeight = window.height;
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    <View style={[
      styles.mainbox,
      {
        width: boxWidth > 500 ? '70%' : '90%',
        height: boxHeight > 600 ? '60%' : '90%',
      }
    ]}>
        <Text style={[styles.Text,{fontSize: boxHeight > 500 ? 50 : 18}]}>Changes you </Text>
      </View>
    </View>
  );
}

// const boxWidth = Dimensions.get('window').width;
// const boxHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    mainbox: {
  //   width: boxWidth >500 ? '70%':'90%',
  //   height: boxHeight >600 ? '60%':'90%',
    backgroundColor: 'red',
    padding: 20,
    borderRadius: 10,
    elevation: 2,
  },
  Text: {
    color: 'white',
    // fontSize: boxHeight >500 ? 50:18,
    textAlign: 'center',
  },
});
