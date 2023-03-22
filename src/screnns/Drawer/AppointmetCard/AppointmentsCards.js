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
    <SafeAreaView style={AppointmentStyle.mainView}>
      <ImageBackground
        style={AppointmentStyle.imageBackStyle}
        source={require('../../../assets/images/AppointmentsIntroPic.jpg')}>
        <View style={AppointmentStyle.imageHead}>
          <Header
            styles={{color: AppColor.lightPink}}
            stylesText={{color: AppColor.lightPink}}
            buttonColor={AppColor.lightPink}
            lightShadowColor={'rgba(0,0,0,0)'}>
            {'Appointment'}
          </Header>
        </View>
        <View style={AppointmentStyle.imageMiddle}>
          <Text style={AppointmentStyle.headerTextOne}>Appointment</Text>
          <Text style={AppointmentStyle.headerTextTwo}>
            Effective appointment management in healthcare is crucial for
            ensuring patient satisfaction and improved outcomes. prioritizing
            timely appointments to build trust and foster strong doctor-patient
            relationships.
          </Text>
        </View>
      </ImageBackground>
      <ScrollView contentContainerStyle={AppointmentStyle.scrollView}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('TotalAppSlots');
          }}>
          <NeoButton
            height={hp('20')}
            width={wp('90')}
            borderRadius={wp('6')}
            marginVertical={wp('3.5')}
            backgroundColor={AppColor.blackOpacity4}>
            <View style={AppointmentStyle.viewOneContainerInnerView}>
              <View style={AppointmentStyle.cardTextCont}>
                <Text
                  style={AppointmentStyle.viewOneContainerInnerViewFirstText}>
                  50
                </Text>
                <Text
                  style={AppointmentStyle.viewOneContainerInnerViewSecondText}>
                  Total Appointment Slot
                </Text>
              </View>
              <View style={AppointmentStyle.cardLottieCont}>
                <Lottie
                  style={{width: wp('25')}}
                  source={require('../../../assets/animations/slots.json')}
                  loop
                  autoPlay
                />
              </View>
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
            marginVertical={wp('3.5')}
            backgroundColor={AppColor.darkBrown}
            darkShadowColor={AppColor.black}>
            <View style={AppointmentStyle.viewOneContainerInnerView}>
              <View style={AppointmentStyle.cardTextCont}>
                <Text
                  style={AppointmentStyle.viewOneContainerInnerViewFirstText}>
                  Add
                </Text>
                <Text
                  style={AppointmentStyle.viewOneContainerInnerViewSecondText}>
                  New Schedule
                </Text>
              </View>
              <View style={AppointmentStyle.cardLottieCont}>
                <Lottie
                  style={{width: wp('25')}}
                  source={require('../../../assets/animations/addNewSchedule.json')}
                  loop
                  autoPlay
                />
              </View>
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
            marginVertical={wp('3.5')}
            backgroundColor={AppColor.darkBlue}>
            <View style={AppointmentStyle.viewOneContainerInnerView}>
              <View style={AppointmentStyle.cardTextCont}>
                <Text
                  style={AppointmentStyle.viewOneContainerInnerViewFirstText}>
                  88
                </Text>
                <Text
                  style={AppointmentStyle.viewOneContainerInnerViewSecondText}>
                  Completed Appointment
                </Text>
              </View>
              <View style={AppointmentStyle.cardLottieCont}>
                <Lottie
                  style={{width: wp('25')}}
                  source={require('../../../assets/animations/completedAppointments.json')}
                  loop
                  autoPlay
                />
              </View>
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
            marginVertical={wp('3.5')}
            backgroundColor={AppColor.lightPurple}>
            <View style={AppointmentStyle.viewOneContainerInnerView}>
              <View style={AppointmentStyle.cardTextCont}>
                <Text
                  style={AppointmentStyle.viewOneContainerInnerViewFirstText}>
                  50
                </Text>
                <Text
                  style={AppointmentStyle.viewOneContainerInnerViewSecondText}>
                  Upcoming Appointment
                </Text>
              </View>
              <View style={AppointmentStyle.cardLottieCont}>
                <Lottie
                  style={{width: wp('25')}}
                  source={require('../../../assets/animations/UpcomingAppointments.json')}
                  loop
                  autoPlay
                />
              </View>
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
            marginVertical={wp('3.5')}
            backgroundColor={AppColor.redOpacity1}>
            <View style={AppointmentStyle.viewOneContainerInnerView}>
              <View style={AppointmentStyle.cardTextCont}>
                <Text
                  style={AppointmentStyle.viewOneContainerInnerViewFirstText}>
                  20
                </Text>
                <Text
                  style={AppointmentStyle.viewOneContainerInnerViewSecondText}>
                  Cancelled Appointment
                </Text>
              </View>
              <View
                style={{
                  flex: 1.5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Lottie
                  style={{width: wp('17')}}
                  source={require('../../../assets/animations/cancelledAppointments.json')}
                  loop
                  autoPlay
                />
              </View>
            </View>
          </NeoButton>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
export default AppointmentsCards;
