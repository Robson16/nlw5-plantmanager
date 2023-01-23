import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { EnvironmentButton } from "../components/EnvironmentButton";
import { Header } from '../components/Header';
import api from "../services/api";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface EnvironmentProps {
  key: string;
  title: string;
}

export function PlantSelect() {
  const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);

  useEffect(() => {
    async function fetchEnvironment() {
      const { data } = await api.get('plants_environments');

      setEnvironments(data);
    }

    fetchEnvironment();
  }, []);

  return (
    <View style={styles.container}>
      <Header />

      <Text style={styles.title}>
        Em qual ambiente
      </Text>
      <Text style={styles.subtitle}>
        você quer colocar sua planta
      </Text>

      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.environmentList}
          data={environments}
          renderItem={({ item }) => (
            <EnvironmentButton>
              {item.title}
            </EnvironmentButton>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 17,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 20,
    marginTop: 15,
    paddingHorizontal: 30,
  },
  subtitle: {
    fontSize: 17,
    fontFamily: fonts.text,
    color: colors.heading,
    lineHeight: 20,
    paddingHorizontal: 30,
  },
  environmentList: {
    heading: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginLeft: 30,
    marginVertical: 30,
  }
});