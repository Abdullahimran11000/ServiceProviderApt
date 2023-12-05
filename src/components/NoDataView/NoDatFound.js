import React from 'react';
import {Neomorph} from 'react-native-neomorph-shadows';
import {Text} from 'react-native';
import {PatientAppCardStyle} from '../../assets/styles/PatientAppCardStyle';

const NoDataFound = () => {
  return (
    <Neomorph style={PatientAppCardStyle.cardView}>
      <Text style={PatientAppCardStyle.cardText}>No Data Found!</Text>
    </Neomorph>
  );
};

export default NoDataFound;
