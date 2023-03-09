import React, {useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Lottie from 'lottie-react-native';
import {CongratulationStyle} from '../../assets/styles/AuthStyle/CongratulationStyle';
import {AppColor} from '../../assets/colors/AppColors';
import NeoButton from '../../components/NeoMorphButton/NeoButton';
import {useNavigation} from '@react-navigation/native';

const Congratulation = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.addListener('focus', () => {
      console.log('Congratulation screen is focusing right now!');
    });
  }, [navigation]);
  return (
    <SafeAreaView style={CongratulationStyle.mainView}>
      <Lottie
        style={CongratulationStyle.animationStyle}
        source={require('../../assets/animations/appIntroCongrats.json')}
        autoPlay
      />
      <Text style={CongratulationStyle.tagText}>Congrats!</Text>
      <Text style={CongratulationStyle.paraText}>
        Your password has been changed. Please log in again with new password
      </Text>
      <TouchableOpacity
        style={{marginVertical: wp('5')}}
        onPress={() => {
          navigation.navigate('LogIn');
        }}>
        <NeoButton
          darkShadowColor={AppColor.black}
          width={wp('55')}
          backgroundColor={AppColor.primary}
          height={hp('6')}
          borderRadius={wp('10')}
          marginBottom={wp('3')}>
          <Text style={CongratulationStyle.touchableText}>Start Now</Text>
        </NeoButton>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Congratulation;
