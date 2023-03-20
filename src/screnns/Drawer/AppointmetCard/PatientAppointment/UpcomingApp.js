import React, {useContext} from 'react';
import {SafeAreaView, FlatList, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {AppColor} from '../../../../assets/colors/AppColors';
import Header from '../../../../components/ScreenHeader/Header';
import {ScrollView} from 'react-native-virtualized-view';
import PatientAppCard from '../../../../components/Appointments/PatientAppCard';
import AppContext from '../../../../assets/context/AppContext';
import {Neomorph} from 'react-native-neomorph-shadows';

const UpcomingApp = ({navigation}) => {
  const {upcomingAppointmentsInfo, storeUpcomingAppointmentsInfo} =
    useContext(AppContext);

  const updateArray = id => {
    const filteredArray = upcomingAppointmentsInfo.filter(
      item => item.id !== id,
    );
    storeUpcomingAppointmentsInfo(filteredArray);
  };
  const renderItemUpcomingAppointments = ({item}) => (
    <PatientAppCard
      item={item}
      buttonShow={true}
      nextButtonShow={true}
      buttonColor={'#dafccf'}
      onPressYes={() => {
        updateArray(item.id);
      }}
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
          {upcomingAppointmentsInfo.length > 0 ? (
            <FlatList
              data={upcomingAppointmentsInfo}
              renderItem={renderItemUpcomingAppointments}
              keyExtractor={item => item.id}
            />
          ) : (
            <Neomorph
              style={{
                width: wp('80'),
                height: wp('20'),
                backgroundColor: AppColor.whiteShade,
                shadowRadius: 4,
                borderRadius: wp('5'),
                marginHorizontal: wp('10'),
                marginVertical: wp('5'),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Bold',
                  color: AppColor.red,
                  fontSize: wp('4'),
                }}>
                No Data Found!
              </Text>
            </Neomorph>
          )}
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UpcomingApp;
