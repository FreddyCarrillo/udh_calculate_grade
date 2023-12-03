import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CalculateGradeScreen from '../screens/CalculateGrades/CalculateGradeScreen';

const Stack = createNativeStackNavigator();

export const Navigator = () => {

  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName="CalculateGradeScreen"
        >
          <Stack.Screen name="CalculateGradeScreen" component={CalculateGradeScreen} />
        </Stack.Navigator>
      </SafeAreaView>
    </PaperProvider>
  );
}
