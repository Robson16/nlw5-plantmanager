import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import wateringImg from '../assets/watering.png';
import { Button } from "../components/Button";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Welcome() {
  const navigation = useNavigation();

  const handleStart = useCallback(() => {
    navigation.navigate('UserIdentification' as never);
  }, []);

  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {'\n'}
          suas plantas de {'\n'}
          forma fácil
        </Text>

        <Image
          source={wateringImg}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas.
          Nós cuidamos de lembrar você sempre que precisar.
        </Text>

        <Button
          style={styles.button}
          activeOpacity={0.7}
          icon="chevron-right"
          onPress={handleStart}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: fonts.heading,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    lineHeight: 34,
    marginTop: 38,
  },
  subtitle: {
    fontFamily: fonts.text,
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56,
  },
  image: {
    height: Dimensions.get('window').width * 0.7
  }
});