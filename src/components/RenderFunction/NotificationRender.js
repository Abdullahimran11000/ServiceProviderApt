import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {NotificationStyle} from '../../assets/styles/AnimatedDrawerStyle/NotificationStyle';
import {Neomorph} from 'react-native-neomorph-shadows';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Ionicons';
import { AppColor } from '../../assets/colors/AppColors';

const NotificationRender = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Neomorph style={NotificationStyle.innerItems}>
        <View style={NotificationStyle.headContImageCont}>
          <item.iconprovider
            name={item.iconname}
            size={wp('5')}
            color={item.iconColor}
          />
        </View>
        <View>
          <Text
            style={NotificationStyle.middleInnerContFirstHeading}
            ellipsizeMode={'tail'}
            numberOfLines={2}>
            {item.title}
          </Text>
          <Text style={NotificationStyle.middleInnerContSecondHeading}>
            {item.time}
          </Text>
        </View>

        {item.open ? (
          <Entypo
            name="dot-single"
            size={wp('5')}
            color={AppColor.whiteShade}
          />
        ) : (
          <Icon
            name="checkmark-done-circle-outline"
            size={wp('5')}
            color={'blue'}
          />
        )}
      </Neomorph>
    </TouchableOpacity>
  );
};

export default NotificationRender;
