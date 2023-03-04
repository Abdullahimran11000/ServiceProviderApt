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
import {AppColor} from '../assets/colors/AppColors';
import {AppointmentStyle} from '../assets/styles/AppointmentStyle';
import NeoButton from '../components/NeoMorphButton/NeoButton';
import Lottie from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../components/ScreenHeader/Header';
const AppointmentsCards = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        style={AppointmentStyle.imageBackStyle}
        source={require('../assets/images/AppointmentsIntroPic.jpg')}>
        <View
          style={AppointmentStyle.imageBackView}>
          <Header
            styles={{color: '#f7c6d9'}}
            stylesText={{color: '#f7c6d9'}}
            buttonColor={'#f7c6d9'}>
            {'Appointment'}
          </Header>
          <Text style={AppointmentStyle.viewOneContainerInnerViewSecondText}>
              Appointment
          </Text>
          <Text style={AppointmentStyle.viewOneContainerInnerViewSecondText}>
              Effective appointment management in healthcare is crucial for
              ensuring patient satisfaction and improved outcomes. prioritizing
              timely appointments to build trust and foster strong doctor-patient
              relationships.
          </Text>
        </View>
      </ImageBackground>
      <ScrollView>
        <View style={AppointmentStyle.mainView}>
          <View style={AppointmentStyle.viewOneContainer}>
            <TouchableOpacity onPress={() => { navigation.navigate('TotalAppSlots')}}>
              <NeoButton height={hp(19)} width={wp(90)} borderRadius={20} backgroundColor={AppColor.blackOpacity4}>
                <View style={AppointmentStyle.viewOneContainerInnerView}>
                  <View style={AppointmentStyle.viewOneContainerInnerViewOne}>
                    <Text style={AppointmentStyle.viewOneContainerInnerViewFirstText}> 105 </Text>
                    <Text style={AppointmentStyle.viewOneContainerInnerViewSecondText }> Total Appointment Slots </Text>
                  </View>
                  <View style={AppointmentStyle.viewOneContainerInnerViewTwo}>
                    <Lottie style={{height: hp(17)}}
                      source={require('../assets/animations/slots.json')}
                      loop autoPlay />
                  </View>
                </View>
              </NeoButton>
            </TouchableOpacity>
          </View>
          <View style={AppointmentStyle.viewFiveContainer}>
            <TouchableOpacity onPress={() => {navigation.navigate('NewSchedule'); }}>
              <NeoButton height={hp(19)} width={wp(90)} borderRadius={20} backgroundColor={'#b0704d'} darkShadowColor={AppColor.black} marginBottom={hp(5)}>
                <View style={AppointmentStyle.viewFiveContainerInnerView}>
                  <View style={AppointmentStyle.viewFiveContainerInnerViewOne}>
                    <Text style={AppointmentStyle.viewFiveContainerInnerViewOneTextOne}>Add New{' '} </Text>
                    <Text style={AppointmentStyle.viewFiveContainerInnerViewOneTextOne}> Schedule </Text>
                  </View>
                  <View style={AppointmentStyle.viewFiveContainerInnerViewTwo}>
                    <Lottie style={{height: hp(30)}}
                      source={require('../assets/animations/addNewSchedule.json')} loop autoPlay />
                  </View>
                </View>
              </NeoButton>
            </TouchableOpacity>
          </View>
          <View style={AppointmentStyle.viewThreeContainer}>
            <TouchableOpacity onPress={() => {navigation.navigate('CompletedApp'); }}>
              <NeoButton height={hp(19)} width={wp(90)} borderRadius={20} backgroundColor={'#708eb3'}>
                <View style={AppointmentStyle.viewThreeContainerInnerView}>
                  <View style={AppointmentStyle.viewThreeContainerInnerViewOne}>
                    <Text style={AppointmentStyle.viewThreeContainerInnerViewOneTextOne}> 20 </Text>
                    <Text style={AppointmentStyle.viewThreeContainerInnerViewOneTextTwo }> Completed Appointments </Text>
                  </View>
                  <View style={AppointmentStyle.viewThreeContainerInnerViewTwo}>
                    <Lottie style={{height: hp(11)}}
                      source={require('../assets/animations/completedAppointments.json')} loop autoPlay />
                  </View>
                </View>
              </NeoButton>
            </TouchableOpacity>
          </View>
          <View style={AppointmentStyle.viewTwoContainer}>
            <TouchableOpacity onPress={() => {navigation.navigate('UpcomingApp'); }}>
              <NeoButton height={hp(19)} width={wp(90)} borderRadius={20} backgroundColor={'#a18eab'}>
                <View style={AppointmentStyle.viewTwoContainerInnerView}>
                  <View style={AppointmentStyle.viewTwoContainerInnerViewOne}>
                    <Text style={AppointmentStyle.viewTwoContainerInnerViewOneTextOne }>10 </Text>
                    <Text style={AppointmentStyle.viewTwoContainerInnerViewOneTextTwo }>Upcoming Appointments</Text>
                  </View>
                  <View style={AppointmentStyle.viewTwoContainerInnerViewTwo}>
                    <Lottie
                      style={{height: hp(17)}}
                      source={require('../assets/animations/UpcomingAppointments.json')} loop autoPlay/>
                  </View>
                </View>
              </NeoButton>
            </TouchableOpacity>
          </View>

          <View style={AppointmentStyle.viewFourContainer}>
            <TouchableOpacity onPress={() => {navigation.navigate('CancelledApp');}}>
              <NeoButton height={hp(19)} width={wp(90)} borderRadius={20} backgroundColor={'#fa998e'}>
                <View style={AppointmentStyle.viewFourContainerInnerView}>
                  <View style={AppointmentStyle.viewFourContainerInnerViewOne}>
                    <Text style={AppointmentStyle.viewFourContainerInnerViewOneTextOne}>105</Text>
                    <Text style={AppointmentStyle.viewFourContainerInnerViewOneTextTwo}>Cancelled Appointments</Text>
                  </View>
                  <View style={AppointmentStyle.viewFourContainerInnerViewTwo}>
                    <Lottie
                      style={{height: hp(30)}}
                      source={require('../assets/animations/cancelledAppointments.json')} loop autoPlay />
                  </View>
                </View>
              </NeoButton>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default AppointmentsCards;