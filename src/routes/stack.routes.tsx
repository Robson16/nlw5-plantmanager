import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import { Confirmation } from '../pages/Confirmation';
import { PlantSave } from "../pages/PlantSave";
import { UserIdentification } from '../pages/UserIdentification';
import { Welcome } from "../pages/Welcome";
import AuthRoutes from "./tab.routes";

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
      <Stack.Screen name="PlantSelect" component={AuthRoutes} />
      <Stack.Screen name="PlantSave" component={PlantSave} />
      <Stack.Screen name="MyPlants" component={AuthRoutes} />
    </Stack.Navigator>
  );
}

export default StackRoutes;