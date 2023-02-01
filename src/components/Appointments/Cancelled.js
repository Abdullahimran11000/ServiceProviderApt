import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AppColor} from '../../assets/colors/AppColors';
import {Neomorph} from 'react-native-neomorph-shadows';
import Lottie from 'lottie-react-native';
import {AppointmentStyle} from '../../assets/styles/AnimatedDrawerStyle/AppointmentStyle';

const CancelledAppointmentCard = ({item}) => {
  return (
    <View style={AppointmentStyle.appCard}>
      <Neomorph
        style={AppointmentStyle.neoCard2}
        darkShadowColor={AppColor.black}>
        <View style={AppointmentStyle.patientCard}>
          <View style={AppointmentStyle.patientProfileImageCont}>
            <Image
              style={AppointmentStyle.patientProfileImage}
              source={require('../../assets/images/selfieOne.jpg')}
              resizeMode="cover"
            />
          </View>
          <View style={AppointmentStyle.patientInfoView}>
            <Text style={AppointmentStyle.patientNameText}>{item.name}</Text>
            <Text style={AppointmentStyle.patientGenderText}>
              {item.gender}, {item.age} years old
            </Text>
          </View>
          <View style={AppointmentStyle.lottieView}>
            <Lottie
              style={AppointmentStyle.lottieStyle}
              source={require('../../assets/animations/cancelledTag.json')}
              autoPlay></Lottie>
          </View>
        </View>

        <View style={AppointmentStyle.detailView}>
          <Icon size={wp('4')} name="calendar" color={AppColor.black}></Icon>
          <Text style={AppointmentStyle.dateStyle}>{item.date}</Text>
          <Icon
            size={wp('4')}
            name="clock-o"
            style={AppointmentStyle.timeIconStyle}></Icon>
          <Text style={AppointmentStyle.timeStyle}>{item.time}</Text>
          <Icon
            size={wp('4')}
            name="wechat"
            style={AppointmentStyle.callIconStyle}></Icon>
          <TouchableOpacity>
            <Text style={AppointmentStyle.destinationStyle}>
              {item.appDestination}
            </Text>
          </TouchableOpacity>
        </View>
      </Neomorph>
    </View>
  );
};
export default CancelledAppointmentCard;
