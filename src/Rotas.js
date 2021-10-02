import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Servicos from './telas/Servicos';
import Carrinho from './telas/Carrinho';
import { cores } from './estilos';
const Tab = createBottomTabNavigator();

export default function Rotas(){
    return <NavigationContainer>
        <Tab.Navigator
            tabBar>
            <Tab.Screen name="Serviços" component={Servicos}/>
            <Tab.Screen name="Carrinho" component={Carrinho}/>
        </Tab.Navigator>
    </NavigationContainer>
}
