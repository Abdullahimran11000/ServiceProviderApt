import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Lottie from 'lottie-react-native';
import {AppColor} from '../../assets/colors/AppColors';
import {Neomorph} from 'react-native-neomorph-shadows';
import NeoButton from '../NeoMorphButton/NeoButton';
import {AppointmentStyle} from '../../assets/styles/AnimatedDrawerStyle/AppointmentStyle';
import {useNavigation} from '@react-navigation/native';

const PatientAppCard = ({
  item,
  p_name,
  p_age,
  p_gender,
  p_appDest,
  p_date,
  p_time,
  buttonShow,
  nextButtonShow,
  buttonColor,
  nav,
  rescheduleBtn
}) => {
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
        color: buttonColor,
      });
    }
  };
  return (
    <Neomorph
      style={[
        AppointmentStyle.neoCard2Upcoming,
        {height: buttonShow ? hp('28') : hp('20')},
      ]}
      darkShadowColor={AppColor.black}>
      <View style={AppointmentStyle.patientCard}>
        <Image
          style={AppointmentStyle.patientProfileImage}
          source={require('../../assets/images/selfieOne.jpg')}
          resizeMode="cover"
        />
        <View>
          <Text style={AppointmentStyle.patientNameText}>
            {item.name}
            {p_name}
          </Text>
          <Text style={AppointmentStyle.patientGenderText}>
            {item.gender}
            {p_gender}, {item.age}
            {p_age} years old
          </Text>
        </View>

        {nextButtonShow ? (
          <TouchableOpacity onPress={cardHandler}>
            <Neomorph
              style={{
                width: wp('8'),
                height: wp('8'),
                borderRadius: wp('8'),
                backgroundColor: buttonColor,
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
          <View>
            {buttonColor !== '' ? (
              <Lottie
                style={AppointmentStyle.lottieStyleUpcoming}
                source={
                  buttonColor === '#e4bef7'
                    ? require('../../assets/animations/completedTag.json')
                    : require('../../assets/animations/upcomingTag.json')
                }
                autoPlay
              />
            ) : (
              <Lottie
                style={AppointmentStyle.lottieStyleUpcoming}
                source={require('../../assets/animations/cancelledTag.json')}
                autoPlay
              />
            )}
          </View>
        )}
      </View>

      <View style={AppointmentStyle.detailView}>
        <View style={{flexDirection: 'row'}}>
          <Icon size={wp('4')} name="calendar" color={AppColor.black}></Icon>
          <Text style={AppointmentStyle.dateStyle}>
            {' '}
            {item.date}
            {p_date}
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Icon
            size={wp('4')}
            name="clock-o"
            style={AppointmentStyle.timeIconStyle}></Icon>
          <Text style={AppointmentStyle.timeStyle}>
            {' '}
            {item.time}
            {p_time}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Icon
            size={wp('4')}
            name="wechat"
            style={AppointmentStyle.callIconStyle}></Icon>
          <TouchableOpacity onPress={nav}>
            <Text style={AppointmentStyle.destinationStyle}>
              {' '}
              {item.appDestination}
              {p_appDest}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {buttonShow ? (
        <View style={AppointmentStyle.buttonView}>
          <TouchableOpacity>
            <NeoButton
              width={wp('30')}
              height={hp('5')}
              borderRadius={wp('6')}
              backgroundColor={AppColor.whiteShade}
              lightShadowColor={AppColor.white}>
              <LinearGradient
                style={AppointmentStyle.buttonTouchStyle}
                colors={[
                  'rgba(181, 27, 27, 0.4)',
                  'rgba(181, 27, 27, 0.5)',
                  'rgba(181, 27, 27,0.5)',
                ]}
                start={{x: 0.3, y: 0}}
                end={{x: 0.7, y: 1}}
                locations={[0.1, 0.3, 0.9]}>
                <Text style={AppointmentStyle.buttonTextStyle}>Cancel</Text>
              </LinearGradient>
            </NeoButton>
          </TouchableOpacity>
          <TouchableOpacity onPress={rescheduleBtn}>
            <NeoButton
              inner={false}
              width={wp('30')}
              height={hp('5')}
              borderRadius={wp('6')}
              backgroundColor={AppColor.whiteShade}
              lightShadowColor={AppColor.white}>
              <Text style={AppointmentStyle.buttonTextStyle}>Reschedule</Text>
            </NeoButton>
          </TouchableOpacity>
        </View>
      ) : null}
    </Neomorph>
  );
};

export default PatientAppCard;
