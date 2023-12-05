import React from 'react';
import Modal from 'react-native-modal';
import {AppColor} from '../../assets/colors/AppColors';
import {Neomorph} from 'react-native-neomorph-shadows';
import {Text, View, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import NeoButton from '../NeoMorphButton/NeoButton';
import LinearGradient from 'react-native-linear-gradient';

const PatientAppCancelModal = ({isVisible, onBackdropPress, onPressNo, onPressYes}) => {
  return (
    <Modal isVisible={isVisible} onBackdropPress={onBackdropPress}>
      <View style={{flex: 10}}>
        <View style={{flex: 3}}></View>
        <View style={{flex: 4, alignItems: 'center', justifyContent: 'center'}}>
          <Neomorph
            style={{
              width: wp('80'),
              height: wp('50'),
              borderRadius: wp('10'),
              shadowRadius: 1,
              backgroundColor: AppColor.whiteShade,
              flex: 4,
              padding: wp('5'),
              justifyContent: 'space-evenly'
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: wp('4'),
                color: AppColor.black,
                textAlign: 'center',
              }}>
              Are you sure to cancel the appointment?
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <TouchableOpacity
                onPress={onPressNo}>
                <NeoButton
                  width={wp('25')}
                  height={hp('5')}
                  borderRadius={wp('6')}
                  backgroundColor={AppColor.whiteShade}
                  lightShadowColor={AppColor.white}>
                  <LinearGradient
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: wp('25'),
                      height: hp('5'),
                      borderRadius: wp('6'),
                    }}
                    colors={[
                      'rgba(181, 27, 27, 0.4)',
                      'rgba(181, 27, 27, 0.5)',
                      'rgba(181, 27, 27,0.5)',
                    ]}
                    start={{x: 0.3, y: 0}}
                    end={{x: 0.7, y: 1}}
                    locations={[0.1, 0.3, 0.9]}>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Regular',
                        fontSize: wp('4'),
                        color: AppColor.black,
                      }}>
                      No
                    </Text>
                  </LinearGradient>
                </NeoButton>
              </TouchableOpacity>
              <TouchableOpacity onPress={onPressYes}>
                <NeoButton
                  inner={false}
                  width={wp('25')}
                  height={hp('5')}
                  borderRadius={wp('6')}
                  backgroundColor={AppColor.whiteShade}
                  lightShadowColor={AppColor.white}>
                 <LinearGradient
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: wp('25'),
                      height: hp('5'),
                      borderRadius: wp('6'),
                    }}
                    colors={[
                      'rgba(95, 250, 123, 0.4)',
                      'rgba(95, 250, 123, 0.5)',
                      'rgba(95, 250, 123,0.7)',
                    ]}
                    start={{x: 0.3, y: 0}}
                    end={{x: 0.7, y: 1}}
                    locations={[0.1, 0.3, 0.9]}>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Regular',
                        fontSize: wp('4'),
                        color: AppColor.black,
                      }}>
                      Yes
                    </Text>
                  </LinearGradient>
                </NeoButton>
              </TouchableOpacity>
            </View>
          </Neomorph>
        </View>

        <View style={{flex: 3}}></View>
      </View>
    </Modal>
  );
};

export default PatientAppCancelModal;
