import React from 'react';
import {Image, Animated, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

const Data = [
  require('../../assets/images/1.jpeg'),
  require('../../assets/images/2.jpeg'),
  require('../../assets/images/3.jpeg'),
  require('../../assets/images/4.jpeg'),
  require('../../assets/images/5.jpeg'),
  require('../../assets/images/6.jpeg'),
  require('../../assets/images/7.jpeg'),
  require('../../assets/images/8.jpeg'),
  require('../../assets/images/9.jpeg'),
  require('../../assets/images/10.jpeg'),
];

const MyImages = ({route}) => {
  const {topTabPosition} = route.params;

  const renderItem = ({item, index}) => {
    return (
      <Image
        source={item}
        style={{
          width: width / 3,
          height: width / 3,
          resizeMode: 'cover',
        }}
      />
    );
  };
  return (
    <Animated.FlatList
      onScroll={Animated.event(
        [{nativeEvent: {contentOffset: {y: topTabPosition}}}],
        {
          useNativeDriver: true,
        },
      )}
      contentContainerStyle={{
        paddingTop: 323,
      }}
      style={{
        backgroundColor: 'black',
      }}
      data={Data}
      renderItem={renderItem}
      numColumns={3}
    />
  );
};

export default MyImages;
