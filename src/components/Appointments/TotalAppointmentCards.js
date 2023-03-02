import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AppColor} from '../../assets/colors/AppColors';
import {Neomorph} from 'react-native-neomorph-shadows';
import {AppointmentStyle} from '../../assets/styles/AnimatedDrawerStyle/AppointmentStyle';
import Lottie from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const TotalAppointmentCards = ({item, calenderDate}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      style={AppointmentStyle.appCard}
      onPress={() => {
        navigation.navigate('PatientProfile', {
          name: item.name,
          gender: item.gender,
          age: item.age,
          date: item.date,
          time: item.time,
          appDes: item.appDestination,
        });
      }}>
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
              source={require('../../assets/animations/completedTag.json')}
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
    </TouchableOpacity>

    
  );
};

export default TotalAppointmentCards;
