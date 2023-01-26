import React, {useState} from 'react';
import Lottie from 'lottie-react-native';
import Modal from 'react-native-modal';
import {Neomorph} from 'react-native-neomorph-shadows';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import CalendarPicker from 'react-native-calendar-picker';
import {ScheduleStyle} from '../assets/styles/DashboardStyle/ScheduleStyle';
import BackButton from '../components/ScrennHeader/BackButton';
import { AppColor } from '../assets/colors/AppColors';
import Icon from 'react-native-vector-icons/AntDesign';
import NeoButton from '../components/NeoMorphButton/NeoButton';

const Schedule = props => {
  const [showModal, setShowModal] = useState(false);
  const [color, setColor] = useState('black');
  const [backColor, setBackColor] = useState('#E8E4E4');
  const colorHandler = () => {
    if (color === 'black' && backColor === '#E8E4E4') {
      setColor('white');
      setBackColor('#F9947F');
    } else {
      setColor('black');
      setBackColor('#E8E4E4');
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black', height: hp('100')}}>
      <ScrollView>
        <View style={{backgroundColor: AppColor.whiteShade}}>
          <BackButton onPress={() => props.navigation.goBack()}>Schedule</BackButton>
          <View style={ScheduleStyle.calenderView}>
            <CalendarPicker dayShape="circle" selectedDayTextColor="white"
              textStyle={{fontFamily: 'Poppins-Light',}}
              customDatesStyles={{fontFamily: 'Poppins-Medium',}}
              selectedDayColor={'#c8a7f2'}
              showDayStragglers={true}
              scrollable={true}
              monthTitleStyle={{ fontFamily: 'Poppins-SemiBold', fontSize: 17,}}
              yearTitleStyle={{fontFamily: 'Poppins-SemiBold',}}
              nextTitle={<Icon name="forward" size={wp('6')} />}
              nextTitleStyle={{color: AppColor.railBorderColor,}}
              previousTitle={<Icon name="banckward" size={wp('6')} />}
              previousTitleStyle={{color: AppColor.railBorderColor}}
            />
          </View>
          <View style={ScheduleStyle.firstHeading}>
            <Text style={ScheduleStyle.headingFirst}>Available Time</Text>
          </View>
          <View style={ScheduleStyle.viewFirst}>
            <TouchableOpacity onPress={colorHandler}>
              <NeoButton width={wp('27.5')} height={hp('4')} backgroundColor={'#E8E4E4'} borderRadius={20} justifyContent={'center'} marginLeft={wp('8')}>
                <Text style={ScheduleStyle.buttonsTextRow1}>08:00 am</Text>
              </NeoButton>
            </TouchableOpacity>
            <TouchableOpacity>
              <NeoButton  width={wp('27.5')}  height={hp('4')}backgroundColor={'#E8E4E4'} borderRadius={20} justifyContent={'center'} marginLeft={wp('8')}>
                <Text style={ScheduleStyle.buttonsTextRow1}>10:00 am</Text>
              </NeoButton>
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight: wp(8)}}>
              <NeoButton width={wp('27.5')} height={hp('4')} backgroundColor={'#E8E4E4'} borderRadius={20} justifyContent={'center'} marginLeft={wp('8')}>
                <Text style={ScheduleStyle.buttonsTextRow1}>14:00 pm</Text>
              </NeoButton>
            </TouchableOpacity>
          </View>
          <View style={ScheduleStyle.row2MainView}>
            <TouchableOpacity>
              <NeoButton  width={wp('27.5')} height={hp('4')} backgroundColor={'#E8E4E4'} borderRadius={wp(20)} justifyContent={'center'} alignItems={'center'} marginLeft={wp(8.5)}>
                <Text style={ScheduleStyle.buttonsTextRow2}>16:00 pm</Text>
              </NeoButton>
            </TouchableOpacity>
            <TouchableOpacity>
              <NeoButton width={wp('27.5')} height={hp('4')} backgroundColor={'#E8E4E4'}  borderRadius={wp(20)} justifyContent={'center'} alignItems={'center'}  marginLeft={wp(8.5)}>
                <Text style={ScheduleStyle.buttonsTextRow2}>18:00 pm</Text>
              </NeoButton>
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight: wp('8')}}>
              <NeoButton  width={wp('27.5')}  height={hp('4')} backgroundColor={'#E8E4E4'} borderRadius={wp(20)} justifyContent={'center'} alignItems={'center'} marginLeft={wp(9)}>
                <Text style={ScheduleStyle.buttonsTextRow2}>20:00 pm</Text>
              </NeoButton>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={ScheduleStyle.headingsecond}>Appointment Details</Text>
          </View>
          <View style={ScheduleStyle.rowTwoView}>
            <TouchableOpacity>
              <NeoButton width={wp('27.5')} height={hp('4')} backgroundColor={'#E8E4E4'} borderRadius={wp(20)} justifyContent={'center'} alignItems={'center'}  marginLeft={wp(8.5)}>
                <Text style={ScheduleStyle.buttonsTextRow3}>Hospital</Text>
              </NeoButton>
            </TouchableOpacity>
            <TouchableOpacity>
              <NeoButton width={wp('27.5')} height={hp('4')} backgroundColor={'#E8E4E4'} borderRadius={wp(20)} justifyContent={'center'} alignItems={'center'} marginLeft={wp(8.5)}>
                <Text style={ScheduleStyle.buttonsTextRow3}>Chat</Text>
              </NeoButton>
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight: wp(8)}}>
              <NeoButton width={wp('27.5')} height={hp('4')}backgroundColor={'#E8E4E4'}borderRadius={wp(20)}justifyContent={'center'}alignItems={'center'} marginLeft={wp(8.5)}>
                <Text style={ScheduleStyle.buttonsTextRow3}>Call</Text>
              </NeoButton>
            </TouchableOpacity>
          </View>
          <View style={ScheduleStyle.buttonsTextRow3LastButton}>
            <TouchableOpacity onPress={colorHandler} style={{marginRight: wp('8')}}>
              <NeoButton width={wp('27.5')} height={hp('4')} backgroundColor={'#E8E4E4'} borderRadius={wp(20)} justifyContent={'center'} alignItems={'center'}  marginLeft={wp(4.5)}>
                <Text style={ScheduleStyle.buttonsTextRow3}> Vedio Call</Text>
              </NeoButton>
            </TouchableOpacity>
          </View>
          <View style={ScheduleStyle.bookAppointmentButtonStyle}>
            <TouchableOpacity onPress={() => {setShowModal(true); }}>
              <NeoButton width={wp('90')} height={hp('7')} borderRadius={wp('10')} backgroundColor={AppColor.primary}>
                <Text style={ScheduleStyle.bookAppointmentButton}> Book Appointment</Text>
              </NeoButton>
            </TouchableOpacity>
          </View>
        </View>
        {showModal ? (
          <View style={ScheduleStyle.modalContainer}>
            <Modal visible={showModal} transparent={true} onBackdropPress={() => setShowModal(false)}>
              <View style={ScheduleStyle.modal}>
                <Neomorph style={ScheduleStyle.lottyView}>
                  <Neomorph inner style={ScheduleStyle.lottyViewInner}>
                    <Lottie source={require('../assets/animations/schedule.json')}
                      style={{ width: wp(60), height: wp(60),}}
                      autoPlay/>
                   </Neomorph>
                </Neomorph>
                <View style={{width: wp('50')}}>
                  <Text style={ScheduleStyle.modalMiddleView}> Your appointment has been created </Text>
                </View>
                <View style={{marginTop: hp(5), width: wp('75')}}>
                  <Text style={ScheduleStyle.modalMiddleView2}>Your appointment with Dr. Mazhar Salahudiin moak was made on wednesday,March 22 at 16:02 pm</Text>
                </View>
                <View style={ScheduleStyle.modalButtonView}>
                  <TouchableOpacity onPress={() => setShowModal(false)}>
                    <NeoButton width={wp(70)} height={hp(6.5)} backgroundColor={'#c28cde'} borderRadius={30} justifyContent={'center'} alignItems={'center'}>
                      <Text style={ScheduleStyle.modalDoneButton}>Done</Text>
                    </NeoButton>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
        ) : (
          ''
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Schedule;
