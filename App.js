import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, TouchableOpacity, ScrollView, SafeAreaView, TouchableHighlight, Linking, Button } from 'react-native';

import Profile from './profile.js';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Explore from './screens/explore'


import _About from './screens/_about'
import Home from './screens/home'

console.log("🚀 Running");






const Tab = createBottomTabNavigator();



function MyTabs() {
  return (


    
    

    <Tab.Navigator initialRouteName="Explore"
      tabBarOptions={{
        activeTintColor: '#2f4f4f',
        inactiveTintColor: '#c0c0c0',
        
        
      }}

   
     
    >
      
      <Tab.Screen name="Explore" component={Explore} options={{
        tabBarLabel: 'Explore',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="atom" color={color} size={size} />
        ),
      }}
      />
      <Tab.Screen name="Home" component={Home} options={{
        
        tabBarLabel: 'Home',
        
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="lighthouse" color={color} size={size} />
        ),
      }}
      />

      <Tab.Screen name="About" component={_About} options={{
        tabBarLabel: 'About',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="barley" color={color} size={size} />
        ),
      }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (

    <NavigationContainer>
         
      <MyTabs />
    </NavigationContainer>
  );
}

/*

export default function App() {



  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/Joaosilgo/repos?per_page=100')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);





  return (






    <View style={{ flex: 1, padding: 24, alignContent: 'center', justifyContent: 'center', }} >


      <Profile />



      {isLoading ? <ActivityIndicator size="small" color="#0000ff" /> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id.toString()}
          renderItem={({ item }) => (<View style={{ flex: 1, padding: 24, alignContent: 'center', justifyContent: 'center', }} >

            <Text style={styles.title}>{"\n"}{item.name}{"\n"}</Text>
            <Text>{item.full_name}{"\n"}</Text>
            <Text>{item.html_url}{"\n"}</Text>
            <Text>{item.description}{"\n"}</Text>
            <Text>{item.language}{"\n"}</Text>

            <Text>{"\n"}{item.owner.login}{"\n"}</Text>
            <TouchableHighlight >
              <View >
                <Button title=" URL " onPress={() => Linking.openURL(item.html_url)}>Touch Here</Button>
              </View>
            </TouchableHighlight>

          </View>)}


        />
      )}


    </View >



  );






}

const styles = StyleSheet.create({
  item: {
    // padding: 20,
    // marginVertical: 8,
    // marginHorizontal: 16,
    // backgroundColor: '#d3d3d3'
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,

    marginHorizontal: 16
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 5,
    padding: 5,
    fontSize: 28,
  }





});



*/


