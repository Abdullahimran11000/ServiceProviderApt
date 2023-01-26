import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BackButton from '../components/ScrennHeader/BackButton';
import CategoriesFlatList from '../components/CategoriesFlatlist/CategoriesFlatList';
import {useNavigation} from '@react-navigation/core';
import {CongratulationStyle} from '../assets/styles/AuthStyle/CongratulationStyle';
import DoctorsFlatList from '../components/DcotorsFlatlist/DoctorsFlatList';
import {ScrollView} from 'react-native-virtualized-view';

const DoctorSpecialist = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <SafeAreaView style={CongratulationStyle.mainView}>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}>
          Doctor Specialist
        </BackButton>
        <CategoriesFlatList
          outerWidth={wp('20')}
          outerHeight={hp('22')}
          outerRadius={wp('7')}
          outerMargin={wp('5')}
          alignItems={'center'}
          justifyContent={'center'}
          innerWidth={wp('25')}
          innerHeight={wp('25')}
          innerRadius={wp('8')}
          boxWidth={wp('23')}
          boxHeight={wp('23')}
          boxRadius={wp('7')}
          textWidth={wp('25')}
          horizontal={true}
        />
        <View style={CongratulationStyle.flatListView}>
          <DoctorsFlatList
            horizontal={false}
            numColumns={2}
            marginRight={wp('16')}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default DoctorSpecialist;
