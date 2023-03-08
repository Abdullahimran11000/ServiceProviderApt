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
  width,
  placeholder,
  keyboardType,
  secureTextEntry,
  styles,
  marginBottom,
  value,
  onChangeText,
  children,
  onEndEditing,
  returnKeyType,
  onSubmitEditing,
  reference,
  autoFocus,
  placeholderTextColor
}) => {
  return (
    <View
      style={{
        width: wp('90'),
        height: hp('7.5'),
        alignSelf: 'center',
        borderRadius: wp('3'),
        marginBottom: marginBottom,
      }}>
      <Neomorph
        style={{
          width: width,
          height: hp('7.5'),
          borderRadius: wp('3'),
          marginTop: wp('2'),
          shadowRadius: 4,
          backgroundColor: AppColor.whiteShade,
          alignItems: 'center',
          justifyContent: 'center',
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
          onEndEditing={onEndEditing}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          placeholderTextColor={placeholderTextColor}
        />
        {children}
      </Neomorph>
    </View>
  );
};

export default NeoTextInput;
