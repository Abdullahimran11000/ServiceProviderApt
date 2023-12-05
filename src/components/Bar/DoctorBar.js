import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {DoctorBarStyle} from '../../assets/styles/DashboardStyle/DoctorBarStyle';
import { AppColor } from '../../assets/colors/AppColors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign'

const DoctorBar = ({icon, onPress, One, Two}) => {
  return (
    <View style={DoctorBarStyle.mainView}>
      <Text style={DoctorBarStyle.textStyle}>{One}</Text>
      <TouchableOpacity onPress={onPress}>
        {icon ? (
          <AntDesign
          name="arrowright"
          size={wp('5')}
          color={AppColor.blackOpacity7}
        />
        ) : (
          <Text style={DoctorBarStyle.touchableText}>{Two}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default DoctorBar;
