import React, {useRef} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Animated} from 'react-native';

import Feed from '../../screens/Feed';
import Reels from '../../screens/Reels';
import MyImages from '../../screens/MyImages';
import ProfileScreen from '../../screens/ProfileScreen';

const TopTabData = [
  {
    name: 'Feed',
    component: Feed,
  },
  {
    name: 'Reels',
    component: Reels,
  },
  {
    name: 'MyImages',
    component: MyImages,
  },
];

const TopTab = () => {
  const topTabPosition = useRef(new Animated.Value(0)).current;
  const TopTab = createMaterialTopTabNavigator();

  return (
    <TopTab.Navigator
      tabBar={props => (
        <ProfileScreen topTabPosition={topTabPosition} {...props} />
      )}
      style={{
        flexGrow: 1,
      }}
      sceneContainerStyle={{
        flex: 1,
      }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'black',
        },
        tabBarIndicatorStyle: {
          backgroundColor: 'white',
        },
      }}>
      {TopTabData.map(k => {
        return (
          <TopTab.Screen
            name={k.name}
            component={k.component}
            initialParams={{
              topTabPosition: topTabPosition,
            }}
          />
        );
      })}
    </TopTab.Navigator>
  );
};

export default TopTab;
