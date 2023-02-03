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

const CompleteAppointmentCard = ({item}) => {
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

        {/* <View style={{width: wp('90'), display: 'flex', flexDirection: 'row', marginTop: wp('27'), justifyContent: 'space-evenly'}}>
            <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', width: wp('30'), height: hp('5'), borderRadius: wp('6')}} onPress={() => console.log()}>
              <NeoButton inner={false} width={wp('30')} height={hp('5')} borderRadius={wp('6')} backgroundColor={AppColor.whiteShade} lightShadowColor={AppColor.white}>
                <LinearGradient style={{justifyContent: 'center', alignItems: 'center', width: wp('30'), height: hp('5'), borderRadius: wp('6')}} colors={[
                    'rgba(181, 27, 27, 0.4)',
                    'rgba(181, 27, 27, 0.5)',
                    'rgba(181, 27, 27,0.5)',
                  ]}
                  start={{x: 0.3, y: 0}}
                  end={{x: 0.7, y: 1}}
                  locations={[0.1, 0.3, 0.9]}>
                  <Text style={{fontFamily: "Poppins-Medium", fontSize: wp('4'), color: AppColor.black}}>Cancel</Text>
                </LinearGradient>
              </NeoButton> 
            </TouchableOpacity>
            <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', width: wp('30'), height: hp('5'), borderRadius: wp('6')}} onPress={() => console.log()}>
              <NeoButton inner={false} width={wp('30')} height={hp('5')} borderRadius={wp('6')} backgroundColor={AppColor.whiteShade} lightShadowColor={AppColor.white}>
                <Text style={{fontFamily: "Poppins-Medium", fontSize: wp('4'), color: AppColor.black}}>Reschedule</Text>
              </NeoButton> 
            </TouchableOpacity>
          </View> */}
      </Neomorph>
    </View>
  );
};

export default CompleteAppointmentCard;
