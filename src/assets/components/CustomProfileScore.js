import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import Theme from '../../Theme/Theme';

const {width} = Dimensions.get('window');

const CustomProfleScore = ({tag, value}) => {
  return (
    <View
      style={{
        width: width * 0.2,
        alignItems: 'center',
        marginHorizontal: 5,
      }}>
      <Text
        style={{
          color: 'white',
          fontFamily: Theme.fontFamily.medium,
          fontSize: 16,
        }}>
        {value}
      </Text>
      <Text
        style={{
          color: '#FDFDFD',
          fontFamily: Theme.fontFamily.regular,
          fontSize: 14,
          marginTop: -5,
        }}>
        {tag}
      </Text>
    </View>
  );
};

export {CustomProfleScore};
