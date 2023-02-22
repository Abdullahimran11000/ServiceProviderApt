import React from 'react';
import {View, ImageBackground, Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Neomorph} from 'react-native-neomorph-shadows';
import {AppColor} from '../../assets/colors/AppColors';
import {CertificatesStyle} from '../../assets/styles/CertificatesStyle';
import Foundation from 'react-native-vector-icons/Foundation';

const PatientProfileRender = ({item, touchPress}) => {
  return (
    <Neomorph style={CertificatesStyle.neumorphListView}>
      <ImageBackground
        imageStyle={{borderRadius: wp('5')}}
        source={{uri: item.url}}
        style={CertificatesStyle.listImageView}
        resizeMode={'contain'}>
        <View style={CertificatesStyle.crossSign}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: wp('3.7'),
              color: AppColor.white,
              marginLeft: wp('0.5'),
            }}>
            {item.date}
          </Text>
          <TouchableOpacity onPress={touchPress}>
            <Neomorph
              style={{
                width: wp('8'),
                height: wp('8'),
                borderRadius: wp('8'),
                backgroundColor: AppColor.red,
                alignItems: 'center',
                justifyContent: 'center',
                shadowRadius: 0,
                marginRight: wp('-1'),
              }}>
              <Foundation
                name="x"
                size={wp('4.5')}
                color={AppColor.whiteShade}
              />
            </Neomorph>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </Neomorph>
  );
};

export default PatientProfileRender;
