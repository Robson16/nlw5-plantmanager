import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import { Confirmation } from '../pages/Confirmation';
import { PlantSelect } from "../pages/PlantSelect";
import { UserIdentification } from '../pages/UserIdentification';
import { Welcome } from "../pages/Welcome";

const Stack = createNativeStackNavigator();

const StackRoutes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="UserIdentification" component={UserIdentification} />
      <Stack.Screen name="Confirmation" component={Confirmation} />
      <Stack.Screen name="PlantSelect" component={PlantSelect} />
    </Stack.Navigator>
  );
}

export default StackRoutes;