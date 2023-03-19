import React, {useContext} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {AppColor} from '../../../../assets/colors/AppColors';
import PatientAppCard from '../../../../components/Appointments/PatientAppCard';
import Header from '../../../../components/ScreenHeader/Header';
import {ScrollView} from 'react-native-virtualized-view';
import AppContext from '../../../../assets/context/AppContext';

const CompletedApp = () => {
  const {compeletdAppointmentsInfo} = useContext(AppContext)
  const renderItemCompeletedAppointments = ({item}) => (
    <PatientAppCard
      item={item}
      nextButtonShow={true}
      buttonColor={'#e4bef7'}
      
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
        {'Completed'}
      </Header>
      <ScrollView>
        <SafeAreaView style={{marginTop: wp('5'), marginBottom: wp('5')}}>
          <FlatList
            data={compeletdAppointmentsInfo}
            renderItem={renderItemCompeletedAppointments}
          />
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CompletedApp;
