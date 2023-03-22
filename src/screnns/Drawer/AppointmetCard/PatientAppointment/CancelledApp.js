import React, {useContext} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {AppColor} from '../../../../assets/colors/AppColors';
import Header from '../../../../components/ScreenHeader/Header';
import PatientAppCard from '../../../../components/Appointments/PatientAppCard';
import {ScrollView} from 'react-native-virtualized-view';
import AppContext from '../../../../assets/context/AppContext';
import { PatientAppCardStyle } from '../../../../assets/styles/PatientAppCardStyle';

const CancelledApp = () => {
  const {cancelledAppointmentsInfo} = useContext(AppContext)
  const renderItemCancelledAppointments = ({item}) => (
    <PatientAppCard
      item={item}
      buttonColor={''}
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
        {'Cancelled'}
      </Header>
      <ScrollView style={PatientAppCardStyle.scrollView}>
          <FlatList
            data={cancelledAppointmentsInfo}
            renderItem={renderItemCancelledAppointments}
          />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CancelledApp;
