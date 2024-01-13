import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import Theme from '../../Theme/Theme';

const CustomImageIcon = ({source, onPress, focus, style}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        ...style,
      }}
      onPress={onPress}>
      <Image
        source={source}
        tintColor={
          focus === false ? Theme.colors.unfocusedTabIconColor : 'white'
        }
        resizeMode="contain"
        style={{
          width: Theme.fontSizes.iconSize,
          height: Theme.fontSizes.iconSize,
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default CustomImageIcon;
