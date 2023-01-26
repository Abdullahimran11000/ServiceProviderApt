import React from 'react';
import {SafeAreaView} from 'react-native';
import BackButton from '../components/ScrennHeader/BackButton';
import DoctorCard from '../components/DcotorsFlatlist/DoctorCard';
import { useNavigation } from '@react-navigation/native';

const DoctorNearby = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView>
      <BackButton onPress={() => {navigation.goBack()}}>
        {'Nearby Doctor'}
      </BackButton>
      <DoctorCard
        color={'rgba(247, 106, 106, 0.4)'}
        source={require('../assets/images/drOmer.png')}
        name={'Dr. Omer'}
        dept={'Urology'}
        star={'4.0'}
        experience={'2 years'}
      />
    </SafeAreaView>
  );
};

export default DoctorNearby;
