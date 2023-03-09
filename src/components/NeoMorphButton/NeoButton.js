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
  left,
  marginVertical
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
        marginVertical: marginVertical,
        height: height,
        borderRadius: borderRadius,
        shadowRadius: 3,
        backgroundColor: backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        left: left,
      }}>
      {children}
    </Neomorph>
  );
};

export default NeoButton;
