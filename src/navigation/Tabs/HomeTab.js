import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View, Dimensions, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import TopTab from './TopTab';
import CustomImageIcon from '../../assets/components/CustomImageIcon';
import {AppIcons, AppImages} from '../../Theme/AppIcons';

const {width} = Dimensions.get('window');

const HomeTab = () => {
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation();

  const TabData = [
    {
      name: 'Home',
      component: CustomScreen,
      icon: ({focused}) => {
        return (
          <CustomImageIcon
            onPress={() => navigation.navigate('Home')}
            source={focused ? AppIcons.hutFilled : AppIcons.hut}
            focus={focused}
            style={TabStyle}
          />
        );
      },
    },
    {
      name: 'Search',
      component: CustomScreen,
      icon: ({focused}) => {
        return (
          <CustomImageIcon
            onPress={() => navigation.navigate('Search')}
            source={focused ? AppIcons.searchFilled : AppIcons.search}
            focus={focused}
            style={TabStyle}
          />
        );
      },
    },
    {
      name: 'Add',
      component: CustomScreen,
      icon: ({focused}) => {
        return (
          <CustomImageIcon
            onPress={() => navigation.navigate('Add')}
            source={focused ? AppIcons.more : AppIcons.more}
            focus={focused}
            style={TabStyle}
          />
        );
      },
    },
    {
      name: 'Reels',
      component: CustomScreen,
      icon: ({focused}) => {
        return (
          <CustomImageIcon
            onPress={() => navigation.navigate('Reels')}
            source={focused ? AppIcons.reelFilled : AppIcons.reel}
            focus={focused}
            style={TabStyle}
          />
        );
      },
    },
    {
      name: 'Profile',
      component: TopTab,
      icon: ({focused}) => {
        return (
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.navigate('Profile')}
            style={TabStyle}>
            <Image
              resizeMode="cover"
              source={AppImages.proflePicture}
              style={{
                width: 24,
                height: 24,
                borderRadius: 100,
                borderWidth: focused ? 1 : 0,
                borderColor: 'white',
              }}
            />
          </TouchableOpacity>
        );
      },
    },
  ];

  return (
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
        orientation: 'portrait',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'black',
          borderColor: 'black',
        },
      }}>
      {TabData.map(k => {
        return (
          <Tab.Screen
            name={k.name}
            component={k.component}
            options={{
              tabBarIcon: k.icon,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

const CustomScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          color: 'white',
        }}>
        Dummy Screen
      </Text>
    </View>
  );
};

const TabStyle = {
  width: width / 5,
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
};

export default HomeTab;
