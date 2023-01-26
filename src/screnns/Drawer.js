import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { AppColor } from '../assets/colors/AppColors';
import Dashboard from './Dashboard';
import {DrawerStyle} from '../assets/styles/AnimatedDrawerStyle/DrawerStyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import NeoButton from '../components/NeoMorphButton/NeoButton';

const Drawer = () => {
  const navigation = useNavigation();

  const moveRight = useSharedValue(wp('0'));
  const scaling = useSharedValue(1);
  const moveRight1 = useSharedValue(wp('100'));
  const scaling1 = useSharedValue(1);

  const [showMenu, setShowMenu] = useState(false);
  const smallView = useAnimatedStyle(() => {
    return {
      transform: [
        {scale: (scaling1.value = 0.68)},
        {translateX: (moveRight1.value = 205)},
      ],
    };
  });

  const largeView = useAnimatedStyle(() => {
    return {
      transform: [{scale: scaling.value}, {translateX: moveRight.value}],
    };
  });

  const pressHandler = () => {
    if (scaling.value === 1) {
      moveRight.value = withTiming(220, {duration: 700});
      scaling.value = withTiming(0.8, {duration: 700});
      setShowMenu(true);
    } else {
      moveRight.value = withSpring(0, {stiffness: 150});
      scaling.value = withSpring(1, {stiffness: 150});
      setShowMenu(false);
    }
  };

  return (
    <Animated.View style={DrawerStyle.mainView}>
      <Animated.View style={DrawerStyle.mainView}>
        <TouchableOpacity
          style={DrawerStyle.baseViewProfilePic}
          onPress={pressHandler}>
          <NeoButton width={wp('16')} height={wp('16')} borderRadius={wp('8')} backgroundColor={AppColor.whiteShade} lightShadowColor={AppColor.primary}>  
          <Image
            style={DrawerStyle.imageStyle}
            source={require('../assets/images/profile.jpg')}></Image>
          </NeoButton>
        </TouchableOpacity>
        <Text style={DrawerStyle.nameText}>Dara Amanda</Text>
        <Text style={DrawerStyle.designationText}>CEO BTS</Text>

        <View style={DrawerStyle.menuView}>
          <View style={DrawerStyle.menuItemView}>
            <FontAwesome
              name={'user-o'}
              size={wp('5')}
              color={AppColor.white}
            />
            <TouchableOpacity
              style={DrawerStyle.touchableView}
              onPress={() => navigation.navigate('MyProfile')}>
              <Text style={DrawerStyle.menuItemText}>My Profile</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={DrawerStyle.menuView2}>
          <View style={DrawerStyle.menuItemView}>
            <MaterialCommunityIcons
              name={'calendar'}
              size={wp('5')}
              color={AppColor.white}
            />
            <TouchableOpacity
              style={DrawerStyle.touchableView}
              onPress={() => navigation.navigate('MyAppointment')}>
              <Text style={DrawerStyle.menuItemText}>Appointment</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={DrawerStyle.menuView2}>
          <View style={DrawerStyle.menuItemView}>
            <Ionicons
              name={'notifications-outline'}
              size={wp('5')}
              color={AppColor.white}
            />
            <TouchableOpacity
              style={DrawerStyle.touchableView}
              onPress={() => navigation.navigate('Notifications')}>
              <Text style={DrawerStyle.menuItemText}>Notification</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={DrawerStyle.menuView2}>
          <View style={DrawerStyle.menuItemView}>
            <MaterialIcons
              name={'message'}
              size={wp('5')}
              color={AppColor.white}
            />
            <TouchableOpacity
              style={DrawerStyle.touchableView}
              onPress={() => navigation.navigate('Message')}>
              <Text style={DrawerStyle.menuItemText}>Message</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={DrawerStyle.menuView2}>
          <View style={DrawerStyle.menuItemView}>
            <AntDesign name={'setting'} size={wp('5')} color={AppColor.white} />
            <TouchableOpacity
              style={DrawerStyle.touchableView}
              onPress={() => navigation.navigate('MyProfile')}>
              <Text style={DrawerStyle.menuItemText}>Setting</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={DrawerStyle.logOutView}>
          <MaterialIcons name="logout" size={wp('5')} color={AppColor.white} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('LogIn');
            }}>
            <Text style={DrawerStyle.menuItemText}>Log out</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>

      <Animated.View
        style={[
          DrawerStyle.smallAnimatedView,
          {borderRadius: showMenu ? wp('10') : 0},
          smallView,
        ]}></Animated.View>

      <Animated.View
        style={[
          DrawerStyle.largeAnimatedView,
          {borderRadius: showMenu ? wp('10') : 0},
          largeView,
        ]}>
        <Dashboard pressHandler={pressHandler}></Dashboard>
      </Animated.View>
    </Animated.View>
  );
};

export default Drawer;
