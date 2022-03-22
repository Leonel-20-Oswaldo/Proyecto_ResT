import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Restaurants from '../screens/Restaurants'
import Favoritos from '../screens/Favoritos'
import TopRestaurants from '../screens/TopRestaurants'
import Search from '../screens/Search'
import Account from '../screens/Account'

const Tab = createBottomTabNavigator()

export default function Navigation(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                name='restaurants' 
                component={Restaurants}
                options={{title:"Restaurantes"}}
                />
                <Tab.Screen 
                name='favoritos' 
                component={Favoritos}
                options={{title:"Favoritos"}}
                />
                <Tab.Screen 
                name='TopRestaurants' 
                component={TopRestaurants}
                options={{title:"Top 5"}}
                />
                <Tab.Screen 
                name='Search' 
                component={Search}
                options={{title:"Buscar"}}
                />
                <Tab.Screen 
                name='Account' 
                component={Account}
                options={{title:"Cuenta"}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}