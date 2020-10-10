import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, ScrollView, SafeAreaView, TouchableHighlight, Linking, Button } from 'react-native';

import Profile from './profile.js';


console.log("🚀 Running");



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

  /*
    const [info, setInfo] = useState([]);
  
    useEffect(() => {
      fetch('https://api.github.com/users/Joaosilgo')
        .then((response) => response.json())
        .then((json) => setInfo(json))
        .catch((error) => console.error(error));
  
    }, []);
  
    */



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



  /*
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text></Text>
        <StatusBar style="auto" />
      </View>
    );
    */




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
