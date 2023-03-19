import React, {useContext} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {AppColor} from '../../../../assets/colors/AppColors';
import Header from '../../../../components/ScreenHeader/Header';
import PatientAppCard from '../../../../components/Appointments/PatientAppCard';
import {ScrollView} from 'react-native-virtualized-view';
import AppContext from '../../../../assets/context/AppContext';

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
            data={cancelledAppointmentsInfo}
            renderItem={renderItemCancelledAppointments}
          />
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CancelledApp;
