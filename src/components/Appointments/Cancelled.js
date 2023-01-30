import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { AppColor } from '../../assets/colors/AppColors';
import { Neomorph } from 'react-native-neomorph-shadows';
import NeoButton from '../NeoMorphButton/NeoButton';
import Lottie from 'lottie-react-native'
import { DashboardStyle } from '../../assets/styles/DashboardStyle/DashboardStyle';
import {AppointmentStyle} from '../../assets/styles/AnimatedDrawerStyle/AppointmentStyle';

const CancelledAppointmentCard = ({item, onPress}) => {
  const [showButton, setShowButton] = useState(false);
  return (
    <View style={DashboardStyle.appCard}>
      <Neomorph style={DashboardStyle.neoCard2} darkShadowColor={AppColor.black}>
          <View style={{display: 'flex', flexDirection: 'row', width: wp('80'), alignSelf: 'center', marginTop: wp('3')}}>
            <View style={DashboardStyle.patientProfileImageCont}>
              <Image
                style={DashboardStyle.patientProfileImage}
                source={require('../../assets/images/selfieOne.jpg')}
                resizeMode="cover"
              />
            </View>
            <View style={{position: 'absolute', left: wp('18'), top: wp('1.5'), display: 'flex', flexDirection: 'column'}}>
              <Text style={{fontFamily: 'Poppins-Bold', fontSize: wp('4.5'), color: AppColor.black}}>{item.name}</Text>
              <Text style={{fontFamily: 'Poppins-Medium', fontSize: wp('3'), color: AppColor.blackOpacity6, marginTop: wp("-1.5")}}>{item.gender}, {item.age} years old</Text>
            </View>
            <View style={{position: 'absolute', right: wp('0'), top: wp('-1')}}>
              {/* <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', width: wp('6'), height: wp('6'), borderRadius: wp('6')}} onPress={() => console.log()}>
                <NeoButton inner={false} width={wp('6')} height={wp('6')} borderRadius={wp('6')} backgroundColor={AppColor.whiteShade} lightShadowColor={AppColor.white}><Icon name="angle-down" size={15}/></NeoButton> 
              </TouchableOpacity> */}
              <Lottie style={{width: wp("12"), height: wp("12")}}
              source={require('../../assets/animations/cancelledTag.json')}
              autoPlay></Lottie>
            </View>
          </View>

          <View style={{display: 'flex', flexDirection: 'row', width: wp('80'), alignSelf: 'center', top: hp('11.5')}}>
            <Icon size={wp('4')} name="calendar" color={AppColor.black}></Icon>
            <Text style={{fontFamily: "Poppins-Medium", fontSize: wp('3'), position: 'absolute', left: wp('5')}}>{item.date}</Text>
            <Icon size={wp('4')} name="clock-o" color={AppColor.black} style={{left: wp('36'), position: 'absolute'}}></Icon>
            <Text style={{fontFamily: "Poppins-Medium", fontSize: wp('3'), position: 'absolute', left: wp('41')}}>{item.time}</Text>
            <Icon size={wp('4')} name="wechat" color={AppColor.black} style={{position: 'absolute', left: wp('63')}}></Icon>
            <TouchableOpacity><Text style={{fontFamily: "Poppins-Medium", fontSize: wp('3'), position: 'absolute', left: wp('66')}}>{item.appDestination}</Text></TouchableOpacity>
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
export default CancelledAppointmentCard;
