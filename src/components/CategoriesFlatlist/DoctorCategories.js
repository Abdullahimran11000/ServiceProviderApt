import React, {useContext, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { AppColor } from '../../assets/colors/AppColors';
import Octicons from 'react-native-vector-icons/Octicons';
import AppContext from '../../assets/context/AppContext';
import {Neomorph} from 'react-native-neomorph-shadows';
import {useNavigation} from '@react-navigation/native';

const DoctorCategories = ({
  outerWidth,
  outerHeight,
  outerRadius,
  outerMargin,
  innerWidth,
  innerHeight,
  innerRadius,
  backgroundColor,
  alignItems,
  justifyContent,
  item,
  boxWidth,
  boxHeight,
  boxRadius,
  textWidth,
  marginRight,
  marginBottom,
}) => {
  const {idOfSelectedCategoryDot, storeIdOfSelectedCategoryDot} =
    useContext(AppContext);
  // const {categoriesModalOpen, storeCategoriesModalOpen} =
  //   useContext(AppContext);
  const {selectedCategoryResult, storeSelectedCategoryResult} =
    useContext(AppContext);
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        width: outerWidth,
        height: outerHeight,
        borderRadius: outerRadius,
        margin: outerMargin,
        marginBottom: marginBottom,
        marginRight: marginRight,
        alignItems: alignItems,
        justifyContent: justifyContent,
      }}
      onPress={() => {
        storeIdOfSelectedCategoryDot(item.id);
        storeSelectedCategoryResult(item.deptName)
        // if (innerWidth === wp('21')) {
        //   storeIdOfSelectedCategoryDot(item.id);
        //   // storeCategoriesModalOpen(true);
        // } else if (innerWidth === wp('24')) {
        //   storeIdOfSelectedCategoryDot(item.id);
        //   navigation.navigate('DoctorSpecialist');
        //   storeSelectedCategoryResult(item.deptName)
        // } else {
        //   storeIdOfSelectedCategoryDot(item.id);
        //   // storeCategoriesModalOpen(false);
        //   storeSelectedCategoryResult(item.deptName)
        // }
      }}>
      {/* {idOfSelectedCategoryDot == item.id ? (
        <Octicons name="dot-fill" size={wp('5')} color={AppColor.primary} />
      ) : (
        <View style={{width: wp('5'), height: wp('5')}}></View>
      )} */}
      <Neomorph
        style={{
          width: innerWidth,
          height: innerHeight,
          borderRadius: innerRadius,
          backgroundColor: backgroundColor,
          alignItems: alignItems,
          justifyContent: justifyContent,
          shadowRadius: 4,
        }}>
        <Neomorph
          inner={idOfSelectedCategoryDot == item.id ? true : false}
          style={{
            width: boxWidth,
            height: boxHeight,
            borderRadius: boxRadius,
            backgroundColor: item.color,
            alignItems: 'center',
            justifyContent: 'center',
            shadowRadius: 4,
          }}>
          <Image
            style={{width: wp('10'), height: wp('10')}}
            source={item.source}
            resizeMode="cover"
          />
        </Neomorph>
      </Neomorph>
      <View style={{width: textWidth, marginTop: wp('2')}}>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: wp('3'),
            color: AppColor.black,
            textAlign: 'center',
          }}>
          {item.deptName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default DoctorCategories;
