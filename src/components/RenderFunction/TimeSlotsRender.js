import React from 'react';
import {AppColor} from '../../assets/colors/AppColors';
import {View, Text, TouchableOpacity} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const TimeSlotsRender = ({item, onPress}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Neomorph
        style={{
          width: wp('90'),
          height: wp('24'),
          borderRadius: wp('4'),
          shadowRadius: 4,
          backgroundColor: AppColor.whiteShade,
          marginBottom: wp('5'),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            display: 'flex',
            width: wp('85'),
            flex: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Neomorph
            style={{
              width: wp('19'),
              height: wp('19'),
              borderRadius: wp('3'),
              shadowRadius: 2,
              backgroundColor: AppColor.railFillColor,
              flex: 3,
              alignItems: 'center',
            }}>
            <View style={{marginBottom: wp('-3')}}>
              <Text
                style={{
                  fontFamily: 'Poppins-Bold',
                  fontSize: wp('8'),
                  color: AppColor.white,
                }}>
                {item.day}
              </Text>
            </View>
            <Text
              style={{
                fontFamily: 'Poppins-Light',
                fontSize: wp('3'),
                color: AppColor.white,
              }}>
              {item.month}
            </Text>
          </Neomorph>
          <View
            style={{
              flex: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <View>
              <Text
                style={{
                  fontFamily: 'Poppins-Bold',
                  fontSize: wp('3.5'),
                  color: AppColor.railFillColor,
                }}>
                Available Time
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontFamily: 'Poppins-Bold',
                  fontSize: wp('5'),
                  color: AppColor.blackOpacity4,
                }}>
                {item.startTime.slice(0,2)}<Text style={{fontSize: wp('4')}}>{item.startTime.slice(2,)}</Text>
                <Text style={{fontSize: wp('3')}}> pm</Text> - {item.endTime.slice(0,2)}
                <Text style={{fontSize: wp('4')}}>{item.endTime.slice(2,)}</Text>
                <Text style={{fontSize: wp('3')}}> pm</Text>
              </Text>
            </View>
          </View>
          <TouchableOpacity onPress={onPress}>
            <Neomorph
              style={{
                width: wp('13'),
                height: wp('15'),
                borderRadius: wp('3'),
                shadowRadius: 2,
                backgroundColor: AppColor.railFillColor,
                flex: 3,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <FontAwesome
                name="trash"
                size={wp('6')}
                color={AppColor.white}></FontAwesome>
            </Neomorph>
          </TouchableOpacity>
        </View>
      </Neomorph>
    </View>
  );
};

export default TimeSlotsRender;
