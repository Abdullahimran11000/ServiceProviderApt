import React, {useContext} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {AppColor} from '../../../../assets/colors/AppColors';
import PatientAppCard from '../../../../components/Appointments/PatientAppCard';
import {PatientAppCardStyle} from '../../../../assets/styles/PatientAppCardStyle';
import Header from '../../../../components/ScreenHeader/Header';
import {ScrollView} from 'react-native-virtualized-view';
import AppContext from '../../../../assets/context/AppContext';

const CompletedApp = () => {
  const {compeletdAppointmentsInfo} = useContext(AppContext);
  const renderItemCompeletedAppointments = ({item}) => (
    <PatientAppCard item={item} nextButtonShow={true} buttonColor={'#e4bef7'} />
  );
  return (
    <SafeAreaView style={PatientAppCardStyle.mainView}>
      <Header
        buttonColor={AppColor.whiteShade}
        styles={{color: AppColor.black}}
        stylesText={{color: AppColor.black}}
        backgroundColor={AppColor.whiteShade}>
        {'Completed'}
      </Header>
      <ScrollView contentContainerStyle={PatientAppCardStyle.scrollView}>
        <FlatList
          data={compeletdAppointmentsInfo}
          renderItem={renderItemCompeletedAppointments}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CompletedApp;
