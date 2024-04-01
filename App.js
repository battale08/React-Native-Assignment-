// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TabContent from './components/TabContent'; // Create this component to render tab content
import sampleData from './components/sampleData.json';
import TableScreen from './components/TableScreen';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarLabelStyle={{backgroundColor :'red'}}>
        {Object?.keys(sampleData.report)?.map((tabName, index) => (
          <Tab.Screen key={index} name={tabName}>
            {() => <TabContent data={sampleData?.report[tabName]} />}
          </Tab.Screen>
        ))}
        <Tab.Screen name="House Cusps And Sandhi" component={TableScreen} initialParams={{ data: sampleData.houseCuspsAndSandhi[0].data }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
