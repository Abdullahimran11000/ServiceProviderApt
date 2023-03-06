import React, {useRef, useState} from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import {AppColor} from '../assets/colors/AppColors';
import Header from '../components/ScreenHeader/Header';
import CalendarStrip from 'react-native-calendar-strip';
import {Neomorph} from 'react-native-neomorph-shadows';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import moment from 'moment-timezone';
import TimeSlotsRender from '../components/RenderFunction/TimeSlotsRender';
import {ScrollView} from 'react-native-virtualized-view';

const TotalAppSlots = ({date}) => {

  const [selectedDateInCalender, setSelectedDateInCalender] = useState(
    moment(date).format('DD MMMM'),

  const [calendarDate, setCalendarDate] = useState(moment(),);
    
  const [timeSlots, setTimeSlots] = useState([
    {id: 1, day: '24', month: 'July', startTime: '8:00', endTime: '8:25'},
    {id: 2, day: '06', month: 'August', startTime: '8:00', endTime: '8:25'},
    {id: 3, day: '05', month: 'June', startTime: '8:00', endTime: '8:25'},
    {id: 4, day: '06', month: 'March', startTime: '8:00', endTime: '8:25'},
    {id: 5, day: '15', month: 'April', startTime: '8:00', endTime: '8:25'},
    {id: 6, day: '10', month: 'March', startTime: '8:25', endTime: '8:50'},
  ]);

  const submitHandler = id => {
    const filteredArray = timeSlots.filter(item => item.id !== id);
    setTimeSlots(filteredArray);
  };

  const filteredArray = timeSlots.filter(
    item =>
      item.day === selectedDateInCalender.slice(0, 2) &&
      item.month === selectedDateInCalender.slice(3),
  );

  const renderTimeSlots = ({item}) => {
    return (
      <TimeSlotsRender
        item={item}
        onPress={() => {
          submitHandler(item.id);
        }}
      />
    );
  };
  return (
    <SafeAreaView
      style={{backgroundColor: AppColor.whiteShade, display: 'flex', flex: 1}}>
      <ScrollView>
        <Header
          styles={{color: 'black'}}
          stylesText={{color: 'black'}}
          buttonColor={AppColor.whiteShade}>
          {'Slots'}
        </Header>
        <View
          style={{
            width: wp('90'),
            alignItems: 'center',
            alignSelf: 'center',
            marginBottom: wp('2'),
            marginTop: hp('2'),
          }}>
          <Neomorph
            style={{
              shadowRadius: 4,
              backgroundColor: AppColor.whiteShade,
              height: wp('40'),
              width: wp('90'),
              borderRadius: wp('4'),
              alignItems: 'center'
            }}>
            
            <CalendarStrip
              datesBlacklist={date => {
                return date.isoWeekday() === 6;
              }}
              calendarAnimation={{type: 'sequence', duration: 2}}
              selectedDate={calendarDate}
              startingDate={calendarDate}
              scrollable={true}
              style={{height: wp('35'), width: wp('95'), marginTop: wp('2.5')}}
              calendarHeaderContainerStyle={{height: wp('15'), justifyContent: 'center', alignItems: 'center', marginBottom: wp('-2'), marginTop: wp('-3')}}
              calendarHeaderStyle={{fontFamily: "Poppins-Bold", fontSize: wp('5'), color: AppColor.blackOpacity5}}
              dayComponentHeight={wp('20')}
              responsiveSizingOffset={wp('2')}
              dayContainerStyle={{backgroundColor: AppColor.railBorderColor, width: wp('12'), height: wp('18')}}
              dateNameStyle={{fontFamily: 'Poppins-Light', color: AppColor.white, fontSize: wp('3.5')}}
              dateNumberStyle={{fontFamily: 'Poppins-Medium', fontSize: wp('4'), color: AppColor.white}}
              daySelectionAnimation={{type: 'border', duration: 0, borderWidth: 1.5, borderHighlightColor: AppColor.white}}
              iconLeft={{}} iconRight={{}} onDateSelected={(date)=>{setSelectedDateInCalender(moment(date).format('DD MMMM')); setCalendarDate(moment(date))}}
            />
          </Neomorph>
        </View>
        <View style={{marginTop: wp('5')}}>
          <FlatList
            data={filteredArray}
            renderItem={renderTimeSlots}></FlatList>
        </View>
      </ScrollView>
    </SafeAreaView>



  
  );
};
export default TotalAppSlots;
