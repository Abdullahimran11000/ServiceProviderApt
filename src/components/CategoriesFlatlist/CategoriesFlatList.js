import React, {useContext, useState} from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import DoctorCategories from './DoctorCategories';
import { AppColor } from '../../assets/colors/AppColors';
import AppContext from '../../assets/context/AppContext';

const CategoriesFlatList = ({
  outerWidth,
  outerHeight,
  outerRadius,
  outerMargin,
  innerWidth,
  innerHeight,
  innerRadius,
  alignItems,
  justifyContent,
  boxWidth,
  boxHeight,
  boxRadius,
  marginRight,
  marginBottom,
  textWidth,
  numColumns,
  horizontal,
}) => {
  const {allCategoriesFromContext} = useContext(AppContext);

  const renderItem = ({item}) => (
    <DoctorCategories
      outerWidth={outerWidth}
      outerHeight={outerHeight}
      outerRadius={outerRadius}
      outerMargin={outerMargin}
      innerWidth={innerWidth}
      innerHeight={innerHeight}
      innerRadius={innerRadius}
      backgroundColor={AppColor.whiteShade}
      alignItems={alignItems}
      justifyContent={justifyContent}
      item={item}
      boxWidth={boxWidth}
      boxHeight={boxHeight}
      boxRadius={boxRadius}
      marginRight={marginRight}
      marginBottom={marginBottom}
      textWidth={textWidth}></DoctorCategories>
  );

  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={allCategoriesFromContext}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={numColumns}
          horizontal={horizontal}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default CategoriesFlatList;
