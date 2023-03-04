import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AppColor} from '../../assets/colors/AppColors';
import {Neomorph} from 'react-native-neomorph-shadows';
import AntDesign from 'react-native-vector-icons/AntDesign'
import {AppointmentStyle} from '../../assets/styles/AnimatedDrawerStyle/AppointmentStyle';
import Lottie from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';

const CompleteAppointmentCard = ({item, nextButtonShow, nav}) => {
  const navigation = useNavigation();
  const cardHandler = () => {
    if (item.name !== undefined) {
      navigation.navigate('PatientProfile', {
        name: item.name,
        gender: item.gender,
        age: item.age,
        date: item.date,
        time: item.time,
        appDes: item.appDestination,
      });
    }
  };
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
          {nextButtonShow ? (
            <TouchableOpacity
              style={{
                width: wp('8'),
                height: wp('8'),
                borderRadius: wp('8'),
                position: 'absolute',
                top: wp('2'),
                right: wp('0'),
              }}
              onPress={cardHandler}>
              <Neomorph
                style={{
                  width: wp('8'),
                  height: wp('8'),
                  borderRadius: wp('8'),
                  backgroundColor: '#e4bef7',
                  shadowRadius: 2,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <AntDesign
                  name="arrowright"
                  size={wp('4')}
                  color={AppColor.blackOpacity7}
                />
              </Neomorph>
            </TouchableOpacity>
          ) : (
            <View style={AppointmentStyle.lottieView}>
              <Lottie
                style={AppointmentStyle.lottieStyle}
                source={require('../../assets/animations/completedTag.json')}
                autoPlay/>
            </View>
          )}
        </View>

        <View style={AppointmentStyle.detailView}>
          <Icon size={wp('4')} name="calendar" color={AppColor.black}/>
          <Text style={AppointmentStyle.dateStyle}>{item.date}</Text>
          <Icon
            size={wp('4')}
            name="clock-o"
            style={AppointmentStyle.timeIconStyle}/>
          <Text style={AppointmentStyle.timeStyle}>{item.time}</Text>
          <Icon
            size={wp('4')}
            name="wechat"
            style={AppointmentStyle.callIconStyle}/>
          <TouchableOpacity onPress={nav}>
            <Text style={AppointmentStyle.destinationStyle}>
              {item.appDestination}
            </Text>
          </TouchableOpacity>
        </View>
      </Neomorph>
    </View>
  );
};

export default CompleteAppointmentCard;
