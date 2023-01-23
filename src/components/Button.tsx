import { Feather } from '@expo/vector-icons';
import React from "react";
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {
  children?: string;
  icon?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, icon, ...rest }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      {...rest}
    >
      {icon &&
        <Feather
          name={icon}
          style={styles.icon}
        />
      }

      <Text style={styles.text}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    height: 56,
  },
  icon: {
    color: colors.white,
    fontSize: 32,
    marginTop: 20,
  },
  text: {
    fontFamily: fonts.heading,
    fontSize: 16,
    color: colors.white,
  }
});