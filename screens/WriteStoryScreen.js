import React from 'react';
import { Header } from 'react-native-elements';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class WriteStoryScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFFFFF',
        }}>
        <Header
          backgroundColor={'#FFC0CB'}
          centerComponent={{
             style: { fontSize: 32, color: '	#FF69B4', margin:20 },
            text: 'Story Hub',
           
          }}
        />
        <TextInput style={styles.inputBox} placeholder="Story Title" />
        <TextInput style={styles.inputBox} placeholder="Author" />
        <TextInput
          style={styles.inputBoxMultiline}
          placeholder="Write your Story"
          multiline="true"
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputBox: {
    width: '90%',
    height: 50,
    borderWidth: 2,
    margin: 20,
    padding: 5,
    backgroundColor:''
  },
  inputBoxMultiline: {
    width: '90%',
    height: '35%',
    borderWidth: 2,
    margin: 20,
    padding: 5,
  
  },
  button: {
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFB6C1',
    width: 100,
    height: 50,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor:''
  },
});
