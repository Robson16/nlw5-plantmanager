import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnvironmentButtonProps extends RectButtonProps {
  children: string;
  active?: boolean;
}

export const EnvironmentButton: React.FC<EnvironmentButtonProps> = ({ children, active = false, ...rest }) => {
  return (
    <RectButton
      style={[
        styles.container,
        active && styles.containerActive,
      ]}
      {...rest}
    >
      <Text style={[
        styles.text,
        active && styles.textActive,
      ]}>
        {children}
      </Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    width: 76,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginRight: 5,
  },
  containerActive: {
    backgroundColor: colors.green_light,
  },
  text: {
    fontFamily: fonts.text,
    color: colors.heading,
  },
  textActive: {
    fontFamily: fonts.heading,
    color: colors.green_dark,
  },
});