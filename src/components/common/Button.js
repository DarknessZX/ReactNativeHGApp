import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity style={styles.buttonStyle}>
      <Text style={styles.textStyle}>{props.children}</Text>
    </TouchableOpacity>
  )
}

const styles = {
  buttonStyle : {
    borderWidth : 1,
    borderColor : "#007aff",
    borderRadius : 10
  },
  textStyle : {
    fontSize : 16,
    fontColor : "#111E9C"
  }
}

export { Button };
