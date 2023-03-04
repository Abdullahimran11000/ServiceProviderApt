import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Neomorph} from 'react-native-neomorph-shadows';
import {AppColor} from '../../assets/colors/AppColors';
import Foundation from 'react-native-vector-icons/Foundation';
import ImageZoom from 'react-native-image-pan-zoom';

const PatientProfileRender = ({item, touchPress}) => {
  return (
    <Neomorph
      style={{
        width: wp('80'),
        height: hp('50'),
        borderRadius: wp('5'),
        backgroundColor: AppColor.black,
        shadowRadius: 4,
        overflow: 'hidden',
        marginLeft: wp('5'),
        marginRight: wp('5'),
      }}>
      <ImageZoom
        cropWidth={Dimensions.get('window').width}
        cropHeight={Dimensions.get('window').height}
        imageHeight={hp('100')}
        imageWidth={wp('100')}>
        <ImageBackground
          imageStyle={{borderRadius: wp('5')}}
          source={{uri: item.url}}
          style={{width: wp('80'), height: hp('50'), borderRadius: wp('5')}}
          resizeMode={'contain'}>
          <View
            style={{
              position: 'absolute',
              display: 'flex',
              flexDirection: 'row',
              top: wp('2'),
              right: wp('2'),
              width: wp('26'),
              height: wp('6.5'),
              borderRadius: wp('20'),
              backgroundColor: AppColor.black,
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: wp('2.7'),
                color: AppColor.white,
                marginLeft: wp('0.5'),
              }}>
              {item.id}
            </Text>
            <TouchableOpacity onPress={touchPress}>
              <Neomorph
                style={{
                  width: wp('5'),
                  height: wp('5'),
                  borderRadius: wp('5'),
                  backgroundColor: AppColor.red,
                  alignItems: 'center',
                  justifyContent: 'center',
                  shadowRadius: 0,
                  marginRight: wp('-1'),
                }}>
                <Foundation
                  name="x"
                  size={wp('4')}
                  color={AppColor.whiteShade}
                />
              </Neomorph>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ImageZoom>
    </Neomorph>
  );
};

export default PatientProfileRender;
