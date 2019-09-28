import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native';

const { height, width } = Dimensions.get('window');

class TodoList extends Component {
  state = {
    isEditing: false
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <View style={styles.circle} />
        </TouchableOpacity>
        <Text style={styles.text}>Todo List will show here</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width - 50,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontWeight: '500',
    fontSize: 18,
    marginVertical: 20
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: 'red',
    borderWidth: 3,
    marginRight: 20
  }
});

export default TodoList;