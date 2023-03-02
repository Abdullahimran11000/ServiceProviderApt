import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, FlatList, Text} from 'react-native';
import {AppColor} from '../assets/colors/AppColors';
import {useNavigation} from '@react-navigation/native';
import Header from '../components/ScreenHeader/Header';
import CalendarStrip from 'react-native-calendar-strip';
import Lottie from 'lottie-react-native';
import {Neomorph} from 'react-native-neomorph-shadows';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CompleteAppointmentCard from '../components/Appointments/CompleteAppointmentCard';
import {ScrollView} from 'react-native-virtualized-view';
import moment from 'moment-timezone';
import {onPress} from 'deprecated-react-native-prop-types/DeprecatedTextPropTypes';
import TotalAppointmentCards from '../components/Appointments/TotalAppointmentCards';
const TotalAppSlots = ({date}) => {
  const navigation = useNavigation();
  const [selectedDateInCalender, setSelectedDateInCalender] = useState(
    moment(date).format('DD MMMM YYYY'),
  );
  const [totalAppointmentsInfo, setTotalAppointmentsInfo] = useState([
    {
      id: 5,
      name: 'Ellyse Perry',
      gender: 'Male',
      age: '32',
      date: '03 March 2023',
      time: '10:30',
      appDestination: 'Chat',
    },
    {
      id: 6,
      name: 'Ellyse Perry',
      gender: 'Male',
      age: '32',
      date: '03 March 2023',
      time: '10:30',
      appDestination: 'Chat',
    },
    {
      id: 2,
      name: 'Ellyse Perry',
      gender: 'Male',
      age: '32',
      date: '14 March 2023',
      time: '10:30',
      appDestination: 'Chat',
    },
    {
      id: 1,
      name: 'Ellyse Perry',
      gender: 'Male',
      age: '32',
      date: '04 March 2023',
      time: '10:30',
      appDestination: 'Chat',
    },
    {
      id: 3,
      name: 'Ellyse Perry',
      gender: 'Male',
      age: '32',
      date: '01 March 2023',
      time: '10:30',
      appDestination: 'Chat',
    },
    {
      id: 4,
      name: 'Ellyse Perry',
      gender: 'Male',
      age: '32',
      date: '01 March 2023',
      time: '10:30',
      appDestination: 'Chat',
    },
    {
      id: 8,
      name: 'Ellyse Perry',
      gender: 'Male',
      age: '32',
      date: '01 March 2023',
      time: '10:30',
      appDestination: 'Chat',
    },
  ]);

  const filterArray = totalAppointmentsInfo.filter(
    item => item.date === selectedDateInCalender,
  );

  const renderItemofTotalAppSlots = ({item}) => (
    <TotalAppointmentCards item={item} calenderDate={selectedDateInCalender} />
  );

  const datesBlacklistFunc = date => {
    return date.isoWeekday() === 7; // disable Sundays
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: AppColor.whiteShade}}>
      <Header
        styles={{color: 'black'}}
        stylesText={{color: 'black'}}
        buttonColor={AppColor.whiteShade}>
        {'Slots'}
      </Header>
      <View style={{marginTop: hp(5)}}>
        <Neomorph
          style={{
            shadowRadius: 4,
            backgroundColor: AppColor.whiteShade,
            height: hp(20),
            width: wp(100),
          }}>
          <CalendarStrip
            calendarAnimation={{type: 'sequence', duration: 30}}
            daySelectionAnimation={{
              type: 'border',
              duration: 100,
              borderWidth: 1,
              borderHighlightColor: 'black',
            }}
            scrollable={true}
            // scrollerPaging={true}
            style={{height: hp(20), paddingTop: 20}}
            calendarHeaderStyle={{
              color: 'black',
              width: wp(60),
              fontSize: wp(4.5),
            }} //February
            dateNumberStyle={{color: AppColor.primary, fontSize: wp(4)}}
            dateNameStyle={{color: AppColor.primary, fontSize: wp(2.8)}}
            highlightDateNumberStyle={{color: AppColor.black}}
            highlightDateNameStyle={{color: AppColor.black}}
            disabledDateNameStyle={{color: 'grey'}}
            disabledDateNumberStyle={{color: 'grey'}}
            iconContainer={{flex: 0.1}}
            onDateSelected={date => {
              setSelectedDateInCalender(moment(date).format('DD MMMM YYYY'));
            }}
            datesBlacklist={datesBlacklistFunc}
          />
        </Neomorph>
      </View>
      <ScrollView>
        <View style={{marginTop: hp(2), backgroundColor: AppColor.whiteShade}}>
          {filterArray.length === 0 ? (
            <View style={{alignSelf: 'center', width: wp(95), height: hp(60)}}>
              <Neomorph
                style={{
                  width: wp(95),
                  height: hp(59),
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: wp(5),
                  backgroundColor: AppColor.whiteShade,
                  shadowRadius: 4,
                }}>
                <Lottie
                  style={{width: wp(70), height: hp(45)}}
                  source={require('../assets/animations/notFound.json')}
                  loop
                  autoPlay
                />
                <Neomorph
                  style={{
                    width: wp(90),
                    height: hp(10),
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: wp(5),
                    backgroundColor: AppColor.whiteShade,
                    shadowRadius: 4,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Poppins-SemiBold',
                      fontSize: wp(5),
                      color: AppColor.black,
                    }}>
                    No Data Found !
                  </Text>
                </Neomorph>
              </Neomorph>
            </View>
          ) : (
            <FlatList
              data={filterArray}
              renderItem={renderItemofTotalAppSlots}
              keyExtractor={item => item.id}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default TotalAppSlots;
