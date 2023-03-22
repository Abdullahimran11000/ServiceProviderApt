import React, {useState} from 'react';
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
import {PatientAppCardStyle} from '../../assets/styles/PatientAppCardStyle';
import {useNavigation} from '@react-navigation/native';
import PatientAppCancelModal from '../Modal/PatientAppCancelModal';

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
  rescheduleBtn,
  onPressYes,
}) => {
  const navigation = useNavigation();
  const [cancelModal, setCancelModal] = useState(false);
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
        PatientAppCardStyle.neoCard2Upcoming,
        {height: buttonShow ? hp('28') : hp('20')},
      ]}
      darkShadowColor={AppColor.black}>
      <View style={PatientAppCardStyle.patientCard}>
        <Image
          style={PatientAppCardStyle.patientProfileImage}
          source={require('../../assets/images/selfieOne.jpg')}
          resizeMode="cover"
        />
        <View style={PatientAppCardStyle.patientNameCont}>
          <Text
            style={PatientAppCardStyle.patientNameText}
            ellipsizeMode={'tail'}
            numberOfLines={1}>
            {item.name}
            {p_name}
          </Text>
          <Text style={PatientAppCardStyle.patientGenderText}>
            {item.gender}
            {p_gender}, {item.age}
            {p_age} years old
          </Text>
        </View>

        {nextButtonShow ? (
          <TouchableOpacity onPress={cardHandler}>
            <Neomorph
              style={[
                PatientAppCardStyle.forwardButtonView,
                {backgroundColor: buttonColor},
              ]}>
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
                style={PatientAppCardStyle.lottieStyleUpcoming}
                source={
                  buttonColor === '#e4bef7'
                    ? require('../../assets/animations/completedTag.json')
                    : require('../../assets/animations/upcomingTag.json')
                }
                autoPlay
              />
            ) : (
              <Lottie
                style={PatientAppCardStyle.lottieStyleUpcoming}
                source={require('../../assets/animations/cancelledTag.json')}
                autoPlay
              />
            )}
          </View>
        )}
      </View>

      <View style={PatientAppCardStyle.detailView}>
        <View style={PatientAppCardStyle.iconTextCont}>
          <Icon size={wp('4')} name="calendar" color={AppColor.black} />
          <Text style={PatientAppCardStyle.dateStyle}>
            {' '}
            {item.date}
            {p_date}
          </Text>
        </View>

        <View style={PatientAppCardStyle.iconTextCont}>
          <Icon size={wp('4')} name="clock-o" color={AppColor.black} />
          <Text style={PatientAppCardStyle.timeStyle}>
            {' '}
            {item.time}
            {p_time}
          </Text>
        </View>
        <View style={PatientAppCardStyle.iconTextCont}>
          <Icon size={wp('4')} name="hospital-o" color={AppColor.black} />
          <Text style={PatientAppCardStyle.destinationStyle}>
            {' '}
            {item.appDestination}
            {p_appDest}
          </Text>
        </View>
      </View>
      {buttonShow ? (
        <View style={PatientAppCardStyle.buttonView}>
          <TouchableOpacity
            onPress={() => {
              setCancelModal(true);
            }}>
            <NeoButton
              width={wp('30')}
              height={hp('5')}
              borderRadius={wp('6')}
              backgroundColor={AppColor.whiteShade}
              lightShadowColor={AppColor.white}>
              <LinearGradient
                style={PatientAppCardStyle.buttonTouchStyle}
                colors={[
                  'rgba(181, 27, 27, 0.4)',
                  'rgba(181, 27, 27, 0.5)',
                  'rgba(181, 27, 27,0.5)',
                ]}
                start={{x: 0.3, y: 0}}
                end={{x: 0.7, y: 1}}
                locations={[0.1, 0.3, 0.9]}>
                <Text style={PatientAppCardStyle.buttonTextStyle}>Cancel</Text>
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
              <Text style={PatientAppCardStyle.buttonTextStyle}>
                Reschedule
              </Text>
            </NeoButton>
          </TouchableOpacity>
        </View>
      ) : null}
      <PatientAppCancelModal
        isVisible={cancelModal}
        onBackdropPress={() => {
          setCancelModal(false);
        }}
        onPressNo={() => {
          setCancelModal(false);
        }}
        onPressYes={onPressYes}
      />
    </Neomorph>
  );
};

export default PatientAppCard;
