import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {DoctorBarStyle} from '../../assets/styles/DashboardStyle/DoctorBarStyle';
import Lottie from 'lottie-react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const DoctorBar = ({lottieAdd, onPress, One, Two}) => {
  return (
    <View style={DoctorBarStyle.mainView}>
      <View style={DoctorBarStyle.textView}>
        <Text style={DoctorBarStyle.textStyle}>{One}</Text>
      </View>
      <View style={DoctorBarStyle.touchableView}>
        <TouchableOpacity onPress={onPress}>
          {lottieAdd ? (
            <Lottie
              source={require('../../assets/animations/forward.json')}
              style={{width: wp('8'), height: wp('8')}}
              autoPlay
              loop/>
          ) : (
            <Text style={DoctorBarStyle.touchableText}>{Two}</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DoctorBar;
