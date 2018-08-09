import React from 'react';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';

export default class App extends React.Component {

  constructor () {
   super();
   this.state = {printText:false};
   this.state = {textValue:'Change me'};
  } 

  showText = () => {
    this.setState({printText:true});
  }
  hideText = () => {
    this.setState({printText:false});
  }
  changeText = () => {
    this.setState({textValue:"You've changed"});
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          id='change'
          onPress={() => this.changeText() }
          title='Change button'
          color='red'
        />
        <Text id='text'>{this.state.textValue}</Text>
        <View style={styles.buttonContainer}>
          <Button
            id='button'
            onPress={() => this.showText() } 
            title="Search!"
            color="#841584" 
          />
          {this.state.printText && <Text>Text appeared</Text> }
          <Button
            id='hideButton'
            onPress={() => this.hideText() }
            title='Hide!'
            color='blue'
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
});

