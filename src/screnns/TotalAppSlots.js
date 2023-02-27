import React from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import {AppColor} from '../assets/colors/AppColors';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment-timezone';
import Header from '../components/ScreenHeader/Header';
import CalendarStrip from 'react-native-calendar-strip';
import {Neomorph} from 'react-native-neomorph-shadows';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const TotalAppSlots = () => {
  const navigation = useNavigation();
  // let datesWhitelist = [
  //     {
  //       start: moment(),
  //       end: moment().add(3, 'days'), // total 4 days enabled
  //     },
  //   ];
  //   let datesBlacklist = [moment().add(1, 'days')]; // 1 day disabled

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
              duration: 200,
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
            // calendarHeaderContainerStyle={{color:AppColor.primary}}
            // calendarColor={{color: 'pink'}}
            dateNumberStyle={{color: AppColor.primary, fontSize: wp(4)}}
            dateNameStyle={{color: AppColor.primary, fontSize: wp(2.8)}}
            highlightDateNumberStyle={{color: AppColor.black}}
            highlightDateNameStyle={{color: AppColor.black}}
            disabledDateNameStyle={{color: 'grey'}}
            disabledDateNumberStyle={{color: 'grey'}}
            // weekendDateNameStyle={{color:AppColor.black}}
            // weekendDateNumberStyle={{color: 'blue'}}
            // styleWeekend={true}
            // datesWhitelist={datesWhitelist}
            // datesBlacklist={datesBlacklist}
            iconContainer={{flex: 0.1}}
          />
        </Neomorph>
      </View>
    </SafeAreaView>
  );
};
export default TotalAppSlots;
