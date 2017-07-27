import React from 'react';
import { View, Text } from 'react-native';

const Card = (props) => {
  return (
    <View>
      {this.children}
    </View>
  )
}

const styles = {
  containerStyle : {
    padding : 5,
    borderColor : '#89EB37',
    margin : 5
  }
}

export { Card };
