import React, {useState} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {AppColor} from '../assets/colors/AppColors';
import Header from '../components/ScreenHeader/Header';
import AppointmentCard from '../components/Appointments/UpcomingAppointment';
import {ScrollView} from 'react-native-virtualized-view';

const CancelledApp = () => {
  const [CancelledAppointmentsInfo, setCancelledAppointmentsInfo] = useState([
    { id: 1,name: 'Amanda Johnson', gender: 'Female', age: '23',date: '22 March 2022', time: '10:30', appDestination: 'Hospital',},
    { id: 2,name: 'Ellyse Perry',   gender: 'Male',age: '32', date: '24 March 2022', time: '10:30', appDestination: 'Chat', },
    { id: 3,name: 'Miranda Jones',  gender: 'Female',age: '21',date: '22 March 2022',time: '10:30',appDestination: 'Video', },
  ]);
  const renderItemCancelledAppointments = ({item}) => (
    <AppointmentCard
      item={item}
      buttonColor={''}
      nav={() => {
        if (item.appDestination === 'Chat') {
          navigation.navigate('Chat');
        }
        if (item.appDestination === 'Call') {
          navigation.navigate('VideoCalling');
        }
      }}
    />
  );
  return (
    <SafeAreaView
      style={{display: 'flex', flex: 1, backgroundColor: AppColor.whiteShade}}>
      <Header
        buttonColor={AppColor.whiteShade}
        styles={{color: AppColor.black}}
        stylesText={{color: AppColor.black}}
        backgroundColor={AppColor.whiteShade}>
        {'Cancelled'}
      </Header>
      <ScrollView>
        <SafeAreaView style={{marginTop: wp('5'), marginBottom: wp('5')}}>
          <FlatList
            data={CancelledAppointmentsInfo}
            renderItem={renderItemCancelledAppointments}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CancelledApp;
