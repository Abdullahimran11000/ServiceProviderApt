import React from 'react';
import {AppColor} from '../../assets/colors/AppColors';
import {View, Text, TouchableOpacity} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const TimeSlotsRender = ({item, onPress, check}) => {
  return (
    <Neomorph
      style={{
        width: wp('90'),
        height: wp('25'),
        borderRadius: wp('4'),
        shadowRadius: 3,
        backgroundColor: AppColor.whiteShade,
        marginHorizontal: wp('5'),
        marginVertical: wp('3'),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}>
      <Neomorph
        style={{
          width: wp('19'),
          height: wp('19'),
          borderRadius: wp('3'),
          shadowRadius: 2,
          backgroundColor: AppColor.railFillColor,
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'Poppins-Bold',
            fontSize: wp('8'),
            color: AppColor.white,
            flex: 2,
          }}>
          {item.day}
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Light',
            fontSize: wp('3'),
            color: AppColor.white,
            flex: 1,
          }}>
          {item.month}
        </Text>
      </Neomorph>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'Poppins-Bold',
            fontSize: wp('3.5'),
            color: AppColor.railFillColor,
          }}>
          Available Time
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Bold',
            fontSize: wp('5'),
            color: AppColor.blackOpacity4,
          }}>
          {item.startTime.slice(0, 2)}
          <Text style={{fontSize: wp('4')}}>{item.startTime.slice(2)}</Text>
          <Text style={{fontSize: wp('3')}}> pm</Text> -{' '}
          {item.endTime.slice(0, 2)}
          <Text style={{fontSize: wp('4')}}>{item.endTime.slice(2)}</Text>
          <Text style={{fontSize: wp('3')}}> pm</Text>
        </Text>
      </View>
      {check ? (
        <MaterialIcons name="done-all" size={wp('8')} color={"#4db86d"} />
      ) : (
        <TouchableOpacity onPress={onPress}>
          <Neomorph
            style={{
              width: wp('13'),
              height: wp('15'),
              borderRadius: wp('3'),
              shadowRadius: 2,
              backgroundColor: AppColor.railFillColor,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <FontAwesome name="trash" size={wp('6')} color={AppColor.white} />
          </Neomorph>
        </TouchableOpacity>
      )}
    </Neomorph>
  );
};

export default TimeSlotsRender;
