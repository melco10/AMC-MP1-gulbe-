import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, Platform } from 'react-native';

const App = () => {
  const [switchValue, setSwitchValue] = useState(false);

  return (
     <View style={[styles.container, 
        { backgroundColor: switchValue ? '#FFCD4B' : '#80B3FF'   }]}>
     

      <Text style={styles.heading}>AMC MP1</Text>

      
      {/* Use conditional styling for bgTrack */}
      <View style={[styles.bgTrack, 
        { backgroundColor: switchValue ? '#F57D1F' : '#687EFF'   }]}>
      </View>
      <Switch style={styles.bulbThumb}
        value={switchValue}
        onValueChange={(value) => setSwitchValue(value)}
        trackColor={{ false: 'transparent', true: 'transparent' }}
        thumbColor={switchValue ? "#EBF400" : "#B6FFFA"}
        ios_backgroundColor="#3e3e3e" 
      />
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Platform.OS === 'android' ? '#e0e0e0' : 'transparent', // Basic color style specific for Android
  },
  heading: {
    marginTop: typeof window !== 'undefined' ? -200 : (Platform.OS === 'ios' ? -500 :   (Platform.OS === 'android' ? -300 : 0)), // Adjust marginTop for web, iOS, and Android
    marginBottom: 50,
    fontSize: 30,
    color: '#6200EE', // Basic color style
  },
  bgTrack: {
    ...Platform.select({
      ios: {
        display: 'none', // Hide the bgTrack component on iOS
      },
      android: {
        backgroundColor: 'black',
        borderRadius: 50,
        height: 100,
        width: 198,
      },
      web: {
        backgroundColor: 'black',
        borderRadius: 50,
        height: 100,
        width: 198,
      }
    }),
  },
    bulbThumb:{
      ...Platform.select({
        android: {
          position: "absolute",
          top: 260,left: 168,
          transform: [{ scale: 5 }],
        },
        web: {
          position: "absolute",
          top: 175,left: 148,
          transform: [{ scale: 5 }],
        }
      })
    }
});

export default App;
