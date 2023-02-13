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
const NewSchedule = () => {
  const [showStartDate, setShowStartDate] = useState(false);
  const [showEndDate, setShowEndDate] = useState(false);
  const [showStartSelectedDate, setShowStartSelectedDate] =
    useState('start-date');
  const [showEndSelectedDate, setShowEndSelectedDate] = useState('end-date');
  const [showStartTime, setShowStartTime] = useState(false);
  const [showEndTime, setShowEndTime] = useState(false);
  const [showStartSelectedTime, setShowStartSelectedTime] =
    useState('start-time');
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
    isDateStartHide();
  };
  const endDateHandler = date => {
    setShowEndSelectedDate(moment(date).format('MMM Do YYYY'));
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
    isStartTimeHide();
  };
  const EndTimeHandler = time => {
    setShowEndSelectedTime(moment(time).format('h:mm a'));
    isEndTimeHide();
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={NewScheduleStyle.mainView}>
          <View style={NewScheduleStyle.viewOne}>
            <TouchableOpacity>
              <NeoButton
                width={wp(82)}
                height={hp(10)}
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
                  <Text style={NewScheduleStyle.viewTwoTextOne}>
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
              <TouchableOpacity
                onPress={isDateEndVisible}
                style={{left: wp(10)}}>
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
                  <Text style={NewScheduleStyle.viewTwoTextTwo}>
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
          <View style={NewScheduleStyle.viewThree}>
            <View>
              <TouchableOpacity onPress={isStartTimeShow}>
                <NeoButton
                  height={hp(14)}
                  width={wp(36)}
                  backgroundColor={AppColor.whiteShade}
                  borderRadius={15}>
                  <Icon name="time" size={wp(15)} />
                  <Text style={NewScheduleStyle.viewThreeTextOne}>
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
              <TouchableOpacity onPress={isEndTimeShow} style={{left: wp(10)}}>
                <NeoButton
                  height={hp(14)}
                  width={wp(36)}
                  backgroundColor={AppColor.whiteShade}
                  borderRadius={15}>
                  <Icon name="time" size={wp(15)} />
                  <Text style={NewScheduleStyle.viewThreeTextTwo}>
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
              height={hp(8)}
              width={wp(82)}
              borderRadius={wp(20)}
              backgroundColor={AppColor.whiteShade}>
              <TextInput
                style={NewScheduleStyle.viewFourTextInput}
                placeholder="Enter Your Consultation fee"
              />
            </NeoButton>
            <Icon
              style={{position: 'absolute', right: wp(5), top: hp(2.3)}}
              name="cash"
              size={wp(6)}
              color={'#567a49'}
            />
          </View>
          <View style={NewScheduleStyle.viewFive}>
            <TouchableOpacity>
              <NeoButton
                height={hp(8)}
                width={wp(82)}
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
