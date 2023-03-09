import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {BackButtonStyle} from '../../assets/styles/ScreenHeaderStyle/BackButtonStyle';
import NeoButton from '../../components/NeoMorphButton/NeoButton';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {AppColor} from '../../assets/colors/AppColors';
const BackButton = ({onPress, children}) => {
  return (
    <View style={BackButtonStyle.headerView}>
      <NeoButton
        width={wp('8')}
        height={wp('8')}
        borderRadius={wp('5')}
        backgroundColor={AppColor.whiteShade}
        darkShadowColor={AppColor.blackOpacity3}>
        <TouchableOpacity onPress={onPress}>
          <Ionicons name="chevron-back-sharp" size={wp('6')} color="black" />
        </TouchableOpacity>
      </NeoButton>
      <Text style={BackButtonStyle.headingText}>{children}</Text>
    </View>
  );
};

export default BackButton;
