import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {AppColor} from '../../../assets/colors/AppColors';
import {AppointmentStyle} from '../../../assets/styles/AppointmentStyle';
import NeoButton from '../../../components/NeoMorphButton/NeoButton';
import Lottie from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../../../components/ScreenHeader/Header';
const AppointmentsCards = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: AppColor.whiteShade}}>
      <ImageBackground
        style={AppointmentStyle.imageBackStyle}
        source={require('../../../assets/images/AppointmentsIntroPic.jpg')}>
        <View style={AppointmentStyle.imageBackView}>
          <View style={{flex: 1}}>
            <Header
              styles={{color: AppColor.lightPink}}
              stylesText={{color: AppColor.lightPink}}
              buttonColor={AppColor.lightPink}
              lightShadowColor={'rgba(0,0,0,0)'}>
              {' '}
              {'Appointment'}
            </Header>
          </View>
          <View style={{ flex: 3.8, justifyContent: 'center'}}>
            <Text style={AppointmentStyle.headerTextOne}>Appointment</Text>
            <Text style={AppointmentStyle.headerTextTwo}>
              Effective appointment management in healthcare is crucial for
              ensuring patient satisfaction and improved outcomes. prioritizing
              timely appointments to build trust and foster strong
              doctor-patient relationships.
            </Text>
          </View>
          <View style={{flex: 0.2}}></View>
        </View>
      </ImageBackground>
      <ScrollView style={{marginHorizontal: wp('5'), width: wp('100')}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('TotalAppSlots');
          }}>
          <NeoButton
            height={hp('20')}
            width={wp('90')}
            borderRadius={wp('6')}
            marginVertical={wp('5')}
            backgroundColor={AppColor.blackOpacity4}>
            <View style={AppointmentStyle.viewOneContainerInnerView}>
              <View>
                <Text
                  style={AppointmentStyle.viewOneContainerInnerViewFirstText}>
                  105
                </Text>
                <Text
                  style={AppointmentStyle.viewOneContainerInnerViewSecondText}>
                  Total Appointment Slot
                </Text>
              </View>
              <Lottie
                style={{width: wp('30'), height: wp('30')}}
                source={require('../../../assets/animations/slots.json')}
                loop
                autoPlay
              />
            </View>
          </NeoButton>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('NewSchedule');
          }}>
          <NeoButton
            height={hp('20')}
            width={wp('90')}
            borderRadius={wp('6')}
            marginVertical={wp('5')}
            backgroundColor={AppColor.darkBrown}
            darkShadowColor={AppColor.black}>
            <View style={AppointmentStyle.viewOneContainerInnerView}>
              <View>
                <Text
                  style={{
                    fontSize: wp('5'),
                    fontFamily: 'Poppins-Bold',
                    color: AppColor.white,
                  }}>
                  Add New
                </Text>
                <Text
                  style={AppointmentStyle.viewOneContainerInnerViewSecondText}>
                  Schedule
                </Text>
              </View>
              <Lottie
                style={{
                  height: wp('30'),
                }}
                source={require('../../../assets/animations/addNewSchedule.json')}
                loop
                autoPlay
              />
            </View>
          </NeoButton>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CompletedApp');
          }}>
          <NeoButton
            height={hp('20')}
            width={wp('90')}
            borderRadius={wp('6')}
            marginVertical={wp('5')}
            backgroundColor={AppColor.darkBlue}>
            <View style={AppointmentStyle.viewOneContainerInnerView}>
              <View>
                <Text
                  style={AppointmentStyle.viewOneContainerInnerViewFirstText}>
                  105
                </Text>
                <Text
                  style={AppointmentStyle.viewOneContainerInnerViewSecondText}>
                  Completed Appointment
                </Text>
              </View>
              <Lottie
                style={{
                  height: wp('35'),
                }}
                source={require('../../../assets/animations/completedAppointments.json')}
                loop
                autoPlay
              />
            </View>
          </NeoButton>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('UpcomingApp');
          }}>
          <NeoButton
            height={hp('20')}
            width={wp('90')}
            borderRadius={wp('6')}
            marginVertical={wp('5')}
            backgroundColor={AppColor.lightPurple}>
            <View style={AppointmentStyle.viewOneContainerInnerView}>
              <View>
                <Text
                  style={AppointmentStyle.viewOneContainerInnerViewFirstText}>
                  105
                </Text>
                <Text
                  style={AppointmentStyle.viewOneContainerInnerViewSecondText}>
                  Upcoming Appointment
                </Text>
              </View>
              <Lottie
                style={{
                  height: wp('40'),
                }}
                source={require('../../../assets/animations/UpcomingAppointments.json')}
                loop
                autoPlay
              />
            </View>
          </NeoButton>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CancelledApp');
          }}>
          <NeoButton
            height={hp('20')}
            width={wp('90')}
            borderRadius={wp('6')}
            marginVertical={wp('5')}
            backgroundColor={AppColor.redOpacity1}>
            <View style={AppointmentStyle.viewOneContainerInnerView}>
              <View>
                <Text
                  style={AppointmentStyle.viewOneContainerInnerViewFirstText}>
                  105
                </Text>
                <Text
                  style={AppointmentStyle.viewOneContainerInnerViewSecondText}>
                  Cancelled Appointment
                </Text>
              </View>
              <Lottie
                style={{
                  height: wp('30'),
                }}
                source={require('../../../assets/animations/cancelledAppointments.json')}
                loop
                autoPlay
              />
            </View>
          </NeoButton>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
export default AppointmentsCards;
