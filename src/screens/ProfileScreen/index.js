import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  Animated,
} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

import Theme from '../../Theme/Theme';
import {AppIcons, AppImages} from '../../Theme/AppIcons';
import {CustomProfleScore} from '../../assets/components/CustomProfileScore';
import CustomImageIcon from '../../assets/components/CustomImageIcon';
import styles from './styles';

const {width} = Dimensions.get('window');

const TabData = {
  Feed: AppIcons.feed,
  Reels: AppIcons.reel,
  MyImages: AppIcons.avatar,
};

const CustomButton = ({tag}) => {
  return (
    <TouchableOpacity
      style={{
        width: (width - width * 0.05 - 45) * 0.5,
        height: 35,
        borderRadius: 10,
        backgroundColor: '#262626',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          color: 'white',
          fontSize: 14,
          fontFamily: Theme.fontFamily.medium,
        }}>
        {tag}
      </Text>
    </TouchableOpacity>
  );
};

const ProfileScreen = ({topTabPosition, state, navigation}) => {
  const tabTranslation = topTabPosition.interpolate({
    inputRange: [0, 240],
    outputRange: [0, -240],
    extrapolate: 'clamp',
  });

  const headerTranslation = topTabPosition.interpolate({
    inputRange: [0, 240],
    outputRange: [0, 240],
    extrapolate: 'clamp',
  });

  const tabIndicator = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(tabIndicator, {
      toValue: parseInt(state.index) * (width / 3),
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [state.index]);

  return (
    <Animated.View
      style={[
        {
          transform: [
            {
              translateY: tabTranslation,
            },
          ],
        },
        styles.mainContainer,
      ]}>
      <View style={styles.profileImageContainer}>
        <View>
          <Image
            source={AppImages.proflePicture}
            resizeMode="cover"
            style={styles.profilePicture}
          />
          <TouchableOpacity style={styles.profilePicButtonWrapper}>
            <Image
              style={styles.profilePickButtonImage}
              tintColor={'white'}
              source={AppIcons.plus}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.scoreWrapper}>
          <CustomProfleScore tag="Posts" value={'22'} />
          <CustomProfleScore tag="Followers" value={'181'} />
          <CustomProfleScore tag="Following" value={'316'} />
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: '2.5%',
          marginBottom: 10,
        }}>
        <Text style={styles.userName}>Ibrar Hussain</Text>
        <View style={styles.linksContainer}>
          <FontAwesome6 name="threads" color="white" size={14} />
          <Text style={styles.linkText}>MianIbrarHusain</Text>
        </View>
        <Text style={styles.userBio}>Software Engineer | React Native</Text>
        <View style={styles.editButtonWrapper}>
          <CustomButton tag="Edit Profile" />
          <CustomButton tag="Share Profile" />
          <TouchableOpacity style={styles.buttonContainer}>
            <Image
              resizeMode="contain"
              style={styles.addFriendIcon}
              source={AppIcons.add}
              tintColor={'white'}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.topTabContainer}>
        {state.routes.map((k, kindex) => {
          return (
            <CustomImageIcon
              style={{
                width: width / state.routes.length,
                ...styles.tabWrapper,
              }}
              source={TabData[k.name]}
              focus={state.index === kindex ? true : false}
              onPress={() => {
                navigation.jumpTo(k.name);
              }}
            />
          );
        })}
      </View>
      <Animated.View
        style={[
          {
            transform: [
              {
                translateX: tabIndicator,
              },
            ],
          },
          styles.tabIndicator,
        ]}
      />
      <Animated.View
        style={[
          styles.header,
          {
            transform: [
              {
                translateY: headerTranslation,
              },
            ],
          },
        ]}>
        <View style={styles.headerNameContainer}>
          <Text style={styles.headerName}>IBRAR_HUSSAIN</Text>
          <Image
            source={AppIcons.arrowDown}
            tintColor={'white'}
            resizeMode="contain"
            style={styles.headerCaret}
          />
        </View>
        <View style={styles.headerNameContainer}>
          <CustomImageIcon source={AppIcons.more} />
          <CustomImageIcon
            style={{
              marginLeft: 15,
            }}
            source={AppIcons.burgerBar}
          />
        </View>
      </Animated.View>
    </Animated.View>
  );
};

export default ProfileScreen;
