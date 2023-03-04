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
import {ScrollView} from 'react-native-virtualized-view';
import moment from 'moment-timezone';
import TotalAppointmentCards from '../components/Appointments/TotalAppointmentCards';
import { TotalAppointmentSlots } from '../assets/styles/TotalAppointmentSlots';
const TotalAppSlots = ({date}) => {
  const navigation = useNavigation();
  const [selectedDateInCalender, setSelectedDateInCalender] = useState((moment(date).format('DD MMMM YYYY')));
  const [totalAppointmentsInfo, setTotalAppointmentsInfo] = useState([
    { id: 1, name: 'Ellyse Perry', gender: 'Male', age: '32', date: '04 March 2023', time: '10:30', appDestination: 'Chat'},
    { id: 2, name: 'Ellyse Perry', gender: 'Male', age: '32', date: '14 March 2023', time: '10:30', appDestination: 'Chat'},
    { id: 3, name: 'Ellyse Perry', gender: 'Male', age: '32', date: '01 March 2023', time: '10:30', appDestination: 'Chat'},
    { id: 4, name: 'Ellyse Perry', gender: 'Male', age: '32', date: '01 March 2023', time: '10:30', appDestination: 'Chat'},
    { id: 5, name: 'Ellyse Perry', gender: 'Male', age: '32', date: '03 March 2023', time: '10:30', appDestination: 'Chat'},
    { id: 6, name: 'Ellyse Perry', gender: 'Male', age: '32', date: '03 March 2023', time: '10:30', appDestination: 'Chat'},
    { id: 8, name: 'Ellyse Perry', gender: 'Male', age: '32', date: '01 March 2023', time: '10:30', appDestination: 'Chat'},
    { id: 9, name: 'Ellyse Perry', gender: 'Male', age: '32', date: '01 March 2023', time: '10:30', appDestination: 'Chat'},
    { id: 10,name: 'Ellyse Perry', gender: 'Male', age: '32', date: '01 March 2023', time: '10:30', appDestination: 'Chat'},
    { id: 11,name: 'Ellyse Perry', gender: 'Male', age: '32', date: '01 March 2023', time: '10:30', appDestination: 'Chat'},
    { id: 12,name: 'Ellyse Perry', gender: 'Male', age: '32', date: '01 March 2023', time: '10:30', appDestination: 'Chat'}
    ]);

  const filterArray = totalAppointmentsInfo.filter(
    item => item.date === selectedDateInCalender,
  );

  const renderItemofTotalAppSlots = ({item}) => (
    <TotalAppointmentCards item={item} calenderDate={selectedDateInCalender} />
  );

  const datesBlacklistFunc = date => {
    return date.isoWeekday() === 7; // disable Sundays
  

  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: AppColor.whiteShade}}>
      <Header
        styles={{color: 'black'}}
        stylesText={{color: 'black'}}
        buttonColor={AppColor.whiteShade}>
        {'Slots'}
      </Header>
      
      <View style={TotalAppointmentSlots.mainView}>
        <Neomorph  style={TotalAppointmentSlots.neomorphButtonOne}>
          <Neomorph style={TotalAppointmentSlots.neomorphButtonInner}>
            <CalendarStrip
              calendarAnimation={{type: 'sequence', duration: 30}}
              daySelectionAnimation={{type: 'border', duration: 100, borderWidth: 1, borderHighlightColor: 'black',}}
              scrollable={true}
              style={{height: hp(20), paddingTop: 20}}
              calendarHeaderStyle={{color: 'black', width: wp(60), fontSize: wp(4.5),}} //February
              dateNumberStyle={{color: AppColor.primary, fontSize: wp(4)}}
              dateNameStyle={{color: AppColor.primary, fontSize: wp(2.8)}}
              highlightDateNumberStyle={{color: AppColor.black}}
              highlightDateNameStyle={{color: AppColor.black}}
              disabledDateNameStyle={{color: 'grey'}}
              disabledDateNumberStyle={{color: 'grey'}}
              iconContainer={{flex: 0.1}}
              onDateSelected={date => {setSelectedDateInCalender(moment(date).format('DD MMMM YYYY'));}}
              datesBlacklist={datesBlacklistFunc}
            />
          </Neomorph>
        </Neomorph>
      </View>
      <ScrollView>
        <View style={TotalAppointmentSlots.viewOne}>
          {filterArray.length === 0 ? (
            <View style={TotalAppointmentSlots.viewTwo}>
              <Neomorph style={TotalAppointmentSlots.neomorphButtonTwo}>
                <Lottie style={TotalAppointmentSlots.lottyView}
                  source={require('../assets/animations/notFound.json')} loop autoPlay/>
                    <Neomorph style={TotalAppointmentSlots.neomorphButtonThree}>
                      <Text style={TotalAppointmentSlots.textView}> No Appointments Found ! </Text>
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
