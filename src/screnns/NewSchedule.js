import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  View,
  TextInput,
} from 'react-native';
import {AppColor} from '../assets/colors/AppColors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DateTimePicker from 'react-native-modal-datetime-picker';
import DateTimePicker2 from 'react-native-modal-datetime-picker';
import NeoButton from '../components/NeoMorphButton/NeoButton';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment-timezone';
import {NewScheduleStyle} from '../assets/styles/NewScheduleStyle';
import {useNavigation} from '@react-navigation/native';
import Header from '../components/ScreenHeader/Header';
import CustomModal from '../components/Modal/CustomModal';
const NewSchedule = () => {
  const navigation = useNavigation();
  const [amountInput, setAmountInput] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [labelShow, setLabelShow] = useState(false);

  const [showStartDate, setShowStartDate] = useState(false);
  const [startDateValid, setStartDateValid] = useState(false);
  const [showStartSelectedDate, setShowStartSelectedDate] =
    useState('start-date');
  const [showEndDate, setShowEndDate] = useState(false);
  const [endDateValid, setEndDateValid] = useState(false);
  const [showEndSelectedDate, setShowEndSelectedDate] = useState('end-date');
  const [showStartTime, setShowStartTime] = useState(false);
  const [startTimeValid, setStartTimeValid] = useState(false);
  const [showStartSelectedTime, setShowStartSelectedTime] =
    useState('start-time');
  const [showEndTime, setShowEndTime] = useState(false);
  const [endTimeValid, setEndTimeValid] = useState(false);
  const [showEndSelectedTime, setShowEndSelectedTime] = useState('end-time');
  const isDateStartVisible = () => {
    setShowStartDate(true);
  };
  const isDateStartHide = () => {
    setShowStartDate(false);
  };
  const isDateEndVisible = () => {
    setShowEndDate(true);
  };
  const isDateEndHide = () => {
    setShowEndDate(false);
  };
  const startDateHandler = date => {
    setShowStartSelectedDate(moment(date).format('MMM Do YYYY'));
    setStartDateValid(false);
    isDateStartHide();
  };
  const endDateHandler = date => {
    setShowEndSelectedDate(moment(date).format('MMM Do YYYY'));
    setEndDateValid(false);
    isDateEndHide();
  };
  const isStartTimeShow = () => {
    setShowStartTime(true);
  };
  const isEndTimeShow = () => {
    setShowEndTime(true);
  };
  const isStartTimeHide = () => {
    setShowStartTime(false);
  };
  const isEndTimeHide = () => {
    setShowEndTime(false);
  };
  const StartTimeHandler = time => {
    setShowStartSelectedTime(moment(time).format('h:mm a'));
    setStartTimeValid(false);
    isStartTimeHide();
  };
  const EndTimeHandler = time => {
    setShowEndSelectedTime(moment(time).format('h:mm a'));
    setEndTimeValid(false);
    isEndTimeHide();
  };
  return (
    <SafeAreaView
      style={{display: 'flex', flex: 1, backgroundColor: AppColor.whiteShade}}>
      <ScrollView>
        <View style={NewScheduleStyle.mainView}>
          <CustomModal
            isVisible={modalOpen}
            onBackdropPress={() => {
              setModalOpen(false);
            }}
            source={require('../assets/animations/success.json')}
            text={'Time Slot is added'}
            style={{marginTop: wp('12')}}
            modalButtonPress={() => {
              setModalOpen(false);
            }}
            buttonBackgroundColor={AppColor.primary}
          />
          <Header buttonColor={AppColor.whiteShade}>{'Schedule'}</Header>

          <View style={NewScheduleStyle.viewOne}>
            <TouchableOpacity>
              <NeoButton
                width={wp(90)}
                height={hp(8)}
                backgroundColor={AppColor.primary}
                borderRadius={wp(20)}>
                <Text style={NewScheduleStyle.viewOneText}>
                  Add New Schedule
                </Text>
              </NeoButton>
            </TouchableOpacity>
          </View>
          <View style={NewScheduleStyle.viewTwo}>
            <View>
              <TouchableOpacity onPress={isDateStartVisible}>
                <NeoButton
                  height={hp(14)}
                  width={wp(36)}
                  backgroundColor={AppColor.whiteShade}
                  borderRadius={15}>
                  <Icon
                    name="calendar"
                    size={wp(15)}
                    color={AppColor.primary}
                  />
                  <Text
                    style={[
                      NewScheduleStyle.viewTwoTextOne,
                      {color: startDateValid ? AppColor.red : AppColor.black},
                    ]}>
                    {showStartSelectedDate}
                  </Text>
                </NeoButton>
              </TouchableOpacity>
              <View>
                <DateTimePicker
                  mode="date"
                  isVisible={showStartDate}
                  onConfirm={startDateHandler}
                  onCancel={isDateStartHide}
                />
              </View>
            </View>
            <View>
              <TouchableOpacity onPress={isDateEndVisible}>
                <NeoButton
                  height={hp(14)}
                  width={wp(36)}
                  backgroundColor={AppColor.whiteShade}
                  borderRadius={15}>
                  <Icon
                    name="calendar"
                    size={wp(15)}
                    color={AppColor.primary}
                  />
                  <Text
                    style={[
                      NewScheduleStyle.viewTwoTextTwo,
                      {color: endDateValid ? AppColor.red : AppColor.black},
                    ]}>
                    {showEndSelectedDate}
                  </Text>
                </NeoButton>
              </TouchableOpacity>
              <View>
                <DateTimePicker2
                  mode="date"
                  isVisible={showEndDate}
                  onConfirm={endDateHandler}
                  onCancel={isDateEndHide}
                />
              </View>
            </View>
          </View>
          <View style={NewScheduleStyle.viewTwo}>
            <View>
              <TouchableOpacity onPress={isStartTimeShow}>
                <NeoButton
                  height={hp(14)}
                  width={wp(36)}
                  backgroundColor={AppColor.whiteShade}
                  borderRadius={15}>
                  <Icon name="time" size={wp(15)} />
                  <Text
                    style={[
                      NewScheduleStyle.viewThreeTextOne,
                      {color: startTimeValid ? AppColor.red : AppColor.black},
                    ]}>
                    {showStartSelectedTime}
                  </Text>
                </NeoButton>
              </TouchableOpacity>
              <View>
                <DateTimePicker
                  mode="time"
                  isVisible={showStartTime}
                  onConfirm={StartTimeHandler}
                  onCancel={isStartTimeHide}
                  is24Hour={false}
                />
              </View>
            </View>
            <View>
              <TouchableOpacity onPress={isEndTimeShow}>
                <NeoButton
                  height={hp(14)}
                  width={wp(36)}
                  backgroundColor={AppColor.whiteShade}
                  borderRadius={15}>
                  <Icon name="time" size={wp(15)} />
                  <Text
                    style={[
                      NewScheduleStyle.viewThreeTextTwo,
                      {color: endTimeValid ? AppColor.red : AppColor.black},
                    ]}>
                    {showEndSelectedTime}
                  </Text>
                </NeoButton>
              </TouchableOpacity>
              <View>
                <DateTimePicker2
                  mode="time"
                  isVisible={showEndTime}
                  onConfirm={EndTimeHandler}
                  onCancel={isEndTimeHide}
                  is24Hour={false}
                />
              </View>
            </View>
          </View>
          <View style={NewScheduleStyle.viewFour}>
            <NeoButton
              height={hp('8.5')}
              width={wp('90')}
              borderRadius={wp('5')}
              backgroundColor={AppColor.whiteShade}>
              <TextInput
                value={amountInput}
                style={NewScheduleStyle.viewFourTextInput}
                placeholder="Enter Your Consultation fee"
                keyboardType="decimal-pad"
                returnKeyType="go"
                onChangeText={text => {
                  setAmountInput(text);
                }}
                onSubmitEditing={() => {
                  if (amountInput === '') {
                    setLabelShow(true);
                  } else {
                    setLabelShow(false);
                  }
                }}
              />
            </NeoButton>
            <Icon
              style={{position: 'absolute', right: wp(5), top: hp(2.3)}}
              name="cash"
              size={wp(6)}
              color={'#567a49'}
            />
          </View>
          {labelShow ? (
            <Text
              style={{
                fontFamily: 'Poppins-Light',
                fontSize: wp('3.8'),
                color: AppColor.red,
                marginLeft: wp('5'),
                marginTop: wp('3'),
              }}>
              Please enter your amount!
            </Text>
          ) : null}
          <View style={NewScheduleStyle.viewFive}>
            <TouchableOpacity
              onPress={() => {
                if (amountInput === '') {
                  setLabelShow(true);
                }
                if (showStartSelectedDate === 'start-date') {
                  setStartDateValid(true);
                }
                if (showEndSelectedDate === 'end-date') {
                  setEndDateValid(true);
                }
                if (showStartSelectedTime === 'start-time') {
                  setStartTimeValid(true);
                }
                if (showEndSelectedTime === 'end-time') {
                  setEndTimeValid(true);
                }
                if (
                  showStartSelectedDate != 'start-date' &&
                  showEndSelectedDate != 'end-date' &&
                  showStartSelectedTime != 'start-time' &&
                  showEndSelectedTime != 'end-time' &&
                  amountInput != ''
                ) {
                  setModalOpen(true);
                  setShowStartSelectedDate('start-time');
                  setShowEndSelectedDate('end-date');
                  setShowStartSelectedTime('start-time');
                  setShowEndSelectedTime('end-time');
                  setAmountInput('');
                }
              }}>
              <NeoButton
                height={hp(8)}
                width={wp(90)}
                borderRadius={wp(10)}
                backgroundColor={AppColor.primary}>
                <Text style={NewScheduleStyle.viewFiveText}>
                  Create Appointment
                </Text>
              </NeoButton>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewSchedule;
