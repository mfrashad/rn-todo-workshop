import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
import { LinearGradient }  from 'expo-linear-gradient';

const { height, width } = Dimensions.get('window');

export default class App extends React.Component {
  state = {
    newTodoItem: ''
  }

  newTodoItemController = textValue => {
    this.setState({newTodoItem: textValue})
  }

  render() {
    const { newTodoItem } = this.state
    return (
      <LinearGradient style={styles.container} colors={['#DA4453', '#89216B']}>
        <Text style={styles.appTitle}>Minimalist Todo App</Text>
        <View style={styles.card}>
          <TextInput 
            style={styles.input}
            placeholder="Add an Item"
            value={newTodoItem}
            onChangeText={this.newTodoItemController}
            placeholderTextColor="#999"
            returnKeyType="done"
            autoCorrect="false"
          ></TextInput>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 60,
    marginBottom: 30,
    fontWeight: '300'
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    width: width - 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24
  }
});
