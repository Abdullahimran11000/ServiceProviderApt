import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  View,
  TextInput,
} from 'react-native';
import {AppColor} from '../../../assets/colors/AppColors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DateTimePicker from 'react-native-modal-datetime-picker';
import DateTimePicker2 from 'react-native-modal-datetime-picker';
import NeoButton from '../../../components/NeoMorphButton/NeoButton';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment-timezone';
import {NewScheduleStyle} from '../../../assets/styles/NewScheduleStyle';
import {useNavigation} from '@react-navigation/native';
import Header from '../../../components/ScreenHeader/Header';
import CustomModal from '../../../components/Modal/CustomModal';
import NeoTextInput from '../../../components/NeoMorphTextInput/NeoTextInput';
const NewSchedule = () => {
  const navigation = useNavigation();
  const [amountInput, setAmountInput] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [labelShow, setLabelShow] = useState(AppColor.blackOpacity3);

  const [showStartDate, setShowStartDate] = useState(false);
  const [startDateValid, setStartDateValid] = useState(false);
  const [showStartSelectedDate, setShowStartSelectedDate] =
    useState('Start-date');
  const [showEndDate, setShowEndDate] = useState(false);
  const [endDateValid, setEndDateValid] = useState(false);
  const [showEndSelectedDate, setShowEndSelectedDate] = useState('End-date');
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
  const submitHandler = () => {
    if (amountInput === '') {
      setLabelShow(AppColor.red);
    }
    if (showStartSelectedDate === 'Start-date') {
      setStartDateValid(true);
    }
    if (showEndSelectedDate === 'End-date') {
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
      setLabelShow(AppColor.blackOpacity3)
    }
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: AppColor.whiteShade,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <CustomModal
        isVisible={modalOpen}
        onBackdropPress={() => {
          setModalOpen(false);
        }}
        source={require('../../../assets/animations/success.json')}
        lottieStyle={{width: wp('35'), height: wp('35')}}
        text={'Time Slot is added'}
        style={{marginTop: wp('12')}}
        modalButtonPress={() => {
          setModalOpen(false);
        }}
        buttonBackgroundColor={AppColor.primary}
        buttonText={'Close'}
      />
      <Header
        buttonColor={AppColor.whiteShade}
        styles={{color: AppColor.black}}
        stylesText={{color: AppColor.black}}
        backgroundColor={AppColor.whiteShade}>
        {'Schedule'}
      </Header>
      <NeoButton
        width={wp(90)}
        height={hp(8)}
        backgroundColor={AppColor.primary}
        borderRadius={wp(20)}>
        <Text style={NewScheduleStyle.viewOneText}>Add New Schedule</Text>
      </NeoButton>
      <View style={NewScheduleStyle.viewTwo}>
        <TouchableOpacity onPress={isDateStartVisible}>
          <NeoButton
            height={hp('15')}
            width={wp('35')}
            backgroundColor={AppColor.whiteShade}
            borderRadius={15}>
            <Icon name="calendar" size={wp(15)} color={AppColor.primary} />
            <Text
              style={[
                NewScheduleStyle.viewTwoTextOne,
                {color: startDateValid ? AppColor.red : AppColor.black},
              ]}>
              {showStartSelectedDate}
            </Text>
          </NeoButton>
          <DateTimePicker
            mode="date"
            isVisible={showStartDate}
            onConfirm={startDateHandler}
            onCancel={isDateStartHide}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={isDateEndVisible}>
          <NeoButton
            height={hp('15')}
            width={wp('35')}
            backgroundColor={AppColor.whiteShade}
            borderRadius={15}>
            <Icon name="calendar" size={wp(15)} color={AppColor.primary} />
            <Text
              style={[
                NewScheduleStyle.viewTwoTextOne,
                {color: endDateValid ? AppColor.red : AppColor.black},
              ]}>
              {showEndSelectedDate}
            </Text>
          </NeoButton>
          <DateTimePicker2
            mode="date"
            isVisible={showEndDate}
            onConfirm={endDateHandler}
            onCancel={isDateEndHide}
          />
        </TouchableOpacity>
      </View>
      <View style={NewScheduleStyle.viewTwo}>
        <TouchableOpacity onPress={isStartTimeShow}>
          <NeoButton
            height={hp('15')}
            width={wp('35')}
            backgroundColor={AppColor.whiteShade}
            borderRadius={15}>
            <Icon name="time" size={wp(15)} />
            <Text
              style={[
                NewScheduleStyle.viewTwoTextOne,
                {color: startTimeValid ? AppColor.red : AppColor.black},
              ]}>
              {showStartSelectedTime}
            </Text>
          </NeoButton>
          <DateTimePicker
            mode="time"
            isVisible={showStartTime}
            onConfirm={StartTimeHandler}
            onCancel={isStartTimeHide}
            is24Hour={false}
          />
        </TouchableOpacity>

        <View>
          <TouchableOpacity onPress={isEndTimeShow}>
            <NeoButton
              height={hp('15')}
              width={wp('35')}
              backgroundColor={AppColor.whiteShade}
              borderRadius={15}>
              <Icon name="time" size={wp(15)} />
              <Text
                style={[
                  NewScheduleStyle.viewTwoTextOne,
                  {color: endTimeValid ? AppColor.red : AppColor.black},
                ]}>
                {showEndSelectedTime}
              </Text>
            </NeoButton>
            <DateTimePicker2
              mode="time"
              isVisible={showEndTime}
              onConfirm={EndTimeHandler}
              onCancel={isEndTimeHide}
              is24Hour={false}
            />
          </TouchableOpacity>
        </View>
      </View>
      <NeoTextInput
        value={amountInput}
        placeholder="Enter Your Consultation fee"
        placeholderTextColor={labelShow}
        keyboardType="decimal-pad"
        returnKeyType="go"
        onSubmitEditing={submitHandler}
        onChangeText={text => {
          setAmountInput(text);
        }}>
        <View style={NewScheduleStyle.icon}>
          <Icon name="cash" size={wp(6)} color={'#567a49'} />
        </View>
      </NeoTextInput>
      
      <TouchableOpacity onPress={submitHandler}>
        <NeoButton
          height={hp('6')}
          width={wp('55')}
          borderRadius={wp('6')}
          marginVertical={wp('5')}
          backgroundColor={AppColor.primary}>
          <Text style={NewScheduleStyle.viewFiveText}>Create Appointment</Text>
        </NeoButton>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default NewSchedule;
