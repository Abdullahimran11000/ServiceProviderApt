import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { HeaderStyle } from '../../assets/styles/HeaderStyle';
import NeoButton from '../NeoMorphButton/NeoButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {AppColor} from '../../assets/colors/AppColors';

const Header = ({
  children,
  styles,
  stylesText,
  buttonColor,
  backgroundColor,
  lightShadowColor,
}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={[HeaderStyle.headCont, {backgroundColor: backgroundColor}]}>
      <NeoButton
        width={wp('8')}
        height={wp('8')}
        borderRadius={wp('5')}
        backgroundColor={buttonColor}
        lightShadowColor={lightShadowColor}
        marginTop={wp('-1')}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Ionicons
            name="chevron-back-sharp"
            size={wp('6')}
            color={AppColor.black}
          />
        </TouchableOpacity>
      </NeoButton>
      <Text style={[HeaderStyle.textStyle1, styles]}>Dashboard</Text>
      <Text style={[HeaderStyle.textStyle, stylesText]}>{children}</Text>
    </SafeAreaView>
  );
};

export default Header;
