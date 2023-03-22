import React, {useContext} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {AppColor} from '../../../../assets/colors/AppColors';
import Header from '../../../../components/ScreenHeader/Header';
import {ScrollView} from 'react-native-virtualized-view';
import PatientAppCard from '../../../../components/Appointments/PatientAppCard';
import AppContext from '../../../../assets/context/AppContext';
import NoDataFound from '../../../../components/NoDataView/NoDatFound';
import { PatientAppCardStyle } from '../../../../assets/styles/PatientAppCardStyle';

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
      style={PatientAppCardStyle.mainView}>
      <Header
        buttonColor={AppColor.whiteShade}
        styles={{color: AppColor.black}}
        stylesText={{color: AppColor.black}}
        backgroundColor={AppColor.whiteShade}>
        {'Upcoming'}
      </Header>
      <ScrollView contentContainerStyle={PatientAppCardStyle.scrollView}>
        {upcomingAppointmentsInfo.length > 0 ? (
          <FlatList
            data={upcomingAppointmentsInfo}
            renderItem={renderItemUpcomingAppointments}
            keyExtractor={item => item.id}
          />
        ) : (
          <NoDataFound />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default UpcomingApp;
