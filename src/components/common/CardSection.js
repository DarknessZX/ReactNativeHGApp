import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  console.log('card');
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  )
}

const styles = {
  containerStyle : {
    margin : 5,
    backgroundColor : 'transparent',
    justifyContent : 'flex-start',
    flexDirection : 'row',
  }
}

export { CardSection };
