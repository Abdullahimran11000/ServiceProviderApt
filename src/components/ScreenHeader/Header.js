import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {CertificatesStyle} from '../../assets/styles/CertificatesStyle';
import NeoButton from '../NeoMorphButton/NeoButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {AppColor} from '../../assets/colors/AppColors';

const Header = ({children, styles, stylesText, buttonColor}) => {
  const navigation = useNavigation();
  return (
    <View style={CertificatesStyle.headCont}>
      <View style={CertificatesStyle.headContInnerCont}>
        <View style={CertificatesStyle.headContMenuCont}>
          <NeoButton
            width={wp('8')}
            height={wp('8')}
            borderRadius={wp('5')}
            backgroundColor={buttonColor}
            marginTop={wp('-1')}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Ionicons
                name="chevron-back-sharp"
                size={wp('6')}
                color="black"
              />
            </TouchableOpacity>
          </NeoButton>
          <Text style={[CertificatesStyle.textStyle1, styles]}>
            Go To Dashboard
          </Text>
        </View>
        <Text style={[CertificatesStyle.textStyle, stylesText]}>
          {children}
        </Text>
      </View>
    </View>
  );
};

export default Header;