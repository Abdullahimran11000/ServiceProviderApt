import React from 'react';
import {Neomorph} from 'react-native-neomorph-shadows';

const NeoButton = ({
  marginBottom,
  marginTop,
  marginLeft,
  width,
  height,
  backgroundColor,
  borderRadius,
  lightShadowColor,
  darkShadowColor,
  inner,
  children,
}) => {
  return (
    <Neomorph
      inner={inner}
      lightShadowColor={lightShadowColor}
      darkShadowColor={darkShadowColor}
      style={{
        marginTop: marginTop,
        marginBottom: marginBottom,
        marginLeft:marginLeft,
        width: width,
        height: height,
        borderRadius: borderRadius,
        shadowRadius: 4,
        backgroundColor: backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {children}
    </Neomorph>
  );
};

export default NeoButton;
