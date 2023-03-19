import React, {useContext, useState} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {AppColor} from '../../../../assets/colors/AppColors';
import Header from '../../../../components/ScreenHeader/Header';
import {ScrollView} from 'react-native-virtualized-view';
import PatientAppCard from '../../../../components/Appointments/PatientAppCard';
import AppContext from '../../../../assets/context/AppContext';

const UpcomingApp = ({navigation}) => {
  const {upcomingAppointmentsInfo, storeUpcomingAppointmentsInfo} = useContext(AppContext)

  const updateArray = (id) =>{
    const filteredArray = upcomingAppointmentsInfo.filter(item=> item.id !== id)
    storeUpcomingAppointmentsInfo(filteredArray)
  }
  const renderItemUpcomingAppointments = ({item}) => (
    <PatientAppCard
      item={item}
      buttonShow={true}
      nextButtonShow={true}
      buttonColor={'#dafccf'}
      onPressYes={()=>{updateArray(item.id)}}
      rescheduleBtn={() => {
        navigation.navigate('TotalAppSlots', {check: false});
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
        {'Upcoming'}
      </Header>
      <ScrollView>
        <SafeAreaView style={{marginTop: wp('5'), marginBottom: wp('5')}}>
          <FlatList
            data={upcomingAppointmentsInfo}
            renderItem={renderItemUpcomingAppointments}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UpcomingApp;
