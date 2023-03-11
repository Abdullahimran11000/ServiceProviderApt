import React from 'react';
import {View, TextInput} from 'react-native';
import {TextInputStyle} from '../../assets/styles/ComponentStyle/CustomTextInputStyle/TextInputStyle';
import {Neomorph} from 'react-native-neomorph-shadows';
import {AppColor} from '../../assets/colors/AppColors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const NeoTextInput = ({
  placeholder,
  keyboardType,
  secureTextEntry,
  styles,
  value,
  onChangeText,
  children,
  returnKeyType,
  onSubmitEditing,
  reference,
  autoFocus,
  placeholderTextColor
}) => {
  return (
    
      <Neomorph
        style={{
          width: wp('90'),
          height: hp('7.5'),
          borderRadius: wp('3'),
          marginVertical: wp('3'),
          shadowRadius: 3,
          flexDirection: 'row',
          backgroundColor: AppColor.whiteShade,
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: wp('3'),
        }}>
        <TextInput
          value={value}
          autoFocus={autoFocus}
          ref={reference}
          style={[TextInputStyle.inputStyle, styles]}
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          placeholderTextColor={placeholderTextColor}
        />
        {children}
      </Neomorph>
  );
};

export default NeoTextInput;
