import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ActivityIndicator, FlatList, ScrollView, SafeAreaView, TouchableHighlight, Linking, Button } from 'react-native';

import Icon from 'react-native-vector-icons/Fontisto';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Octicons from 'react-native-vector-icons/Octicons';






export const CardHome = ({ name, info }) => {
   return (
      <View style={styles.cardContainer}>

         <View style={styles.cardHeaderContaner}>
            <Text style={styles.cardHeading}>{name}</Text>
            <Text style={styles.cardMore}>See All</Text>
         </View>

         <View style={styles.cardBody}>
            <View style={styles.cardBodyTop}>
               <Image
                  style={styles.cardAvatar}
                  source={{
                     uri:
                        info.avatar_url,
                  }}
               />
               <View style={styles.cardLeftSide}>
                  <Text style={styles.tag}>{info.login}</Text>
                  <Text style={styles.cardName}>{info.name}</Text>
                  <Text style={styles.cardTime}>{info.bio}</Text>
                  <Text style={styles.cardAddress}>{info.location}</Text>
                  {/*  <Text style={styles.cardAddress}>{info.blog}</Text>
                  <Text style={styles.tag}>{info.html_url}</Text> */}

                  <View style={styles.iconMore}>
                     <Icon name="angle-right" color="gray" />
                  </View>

                  <View style={styles.margin} />
                  <View style={styles.cardBodyBottom}>
                     <View style={styles.cardGroupIcon}>
                        <FontAwesome name="grav" size={16} />
                        <Text style={styles.cardBottomTitle}>Website</Text>
                     </View>

                     <View style={styles.cardGroupIcon}>
                        <Octicons name="logo-github" size={16} />
                        <Text style={styles.cardBottomTitle}>GitHub</Text>
                     </View>

                  </View>



               </View>
            </View>



         </View>
      </View>
   );
};




class Profile extends Component {





   state = {
      data: ''
   }
   componentDidMount = () => {
      fetch('https://api.github.com/users/Joaosilgo', {
         method: 'GET'
      })
         .then((response) => response.json())
         .then((responseJson) => {
            console.log(responseJson);
            this.setState({
               data: responseJson
            })
         })
         .catch((error) => {
            console.error(error);
         });
   }




   render() {
      return (
         <View>
            {/* 
              <Text>
                 {this.state.data.name}               
              </Text>
              <Text>              
                 {this.state.data.bio}
              </Text>
              <Text>
                 {this.state.data.login}              
              </Text>
              <Text>              
                 {this.state.data.location}
              </Text>
              <Text>              
                 {this.state.data.public_repos}
              </Text>
              <Text>              
                 {this.state.data.blog}
              </Text>
              <Text>              
                 {this.state.data.followers}
              </Text>
              <Text>              
                 {this.state.data.following}
              </Text>

              */}

            <CardHome
               name="Home"
               info={{
                  avatar_url: this.state.data.avatar_url,
                  login: this.state.data.login,
                  name: this.state.data.name,
                  bio: this.state.data.bio,
                  location: this.state.data.location,
                  blog: this.state.data.blog,
                  html_url: this.state.data.html_url,

               }}
            />






         </View>
      )
   }





















}

const styles = StyleSheet.create({


   rating: {
      flexDirection: 'row',
      marginTop: 5,
   },
   tag: {
      color: '#708090',
   },
   cardContainer: {
      padding: 15,
      paddingBottom: 0,
   },
   margin: {
      height: 1,
      backgroundColor: '#F0F1F2',
      width: '100%',
      marginVertical: 10,
   },
   cardBodyBottom: {
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-around',
   },
   cardBottomTitle: {
      fontSize: 10,
      marginTop: 5,
   },
   cardGroupIcon: {
      justifyContent: 'space-around',
      alignItems: 'flex-start',
      alignContent: 'center',
      textAlign: 'left',
      color: '#708090',

   },

   iconMore: {
      position: 'absolute',
      bottom: 0,
      right: 0,
   },
   iconLike: {
      position: 'absolute',
      top: 0,
      right: 0,
   },
   cardBody: {
      padding: 15,
      backgroundColor: '#fff',
      marginTop: 15,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
   },
   cardBodyTop: {
      flexDirection: 'row',
   },
   cardLeftSide: {
      paddingHorizontal: 10,
      flex: 1,
   },
   cardName: {
      color: '#222',
      fontSize: 18,
      fontWeight: 'bold',
   },
   cardTime: {
      color: '#708090',
      fontSize: 16,
      fontWeight: '500',
      marginTop: 5,
   },
   cardAddress: {
      color: 'gray',
      fontSize: 15,
      fontWeight: '500',
      marginTop: 5,
   },
   cardAvatar: {
      height: 60,
      width: 60,
      backgroundColor: 'gray',
      borderRadius: 60,
   },
   cardHeaderContaner: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   cardHeading: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#708090',
   },
   cardMore: {
      fontWeight: 'bold',
      color: '#708090',
   },
   faceGroup: {
      justifyContent: 'center',
      alignItems: 'center',
   },
   faceContainer: {
      backgroundColor: '#fff',
      padding: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderRadius: 20,
      marginHorizontal: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      marginTop: 20,
   },
   faceText: {
      fontSize: 16,
      marginTop: 6,
   },

   container: {
      flex: 1,
   },
   headerContainer: {
      padding: 20,
      paddingHorizontal: 30,
      marginTop: 52,
   },
   heading: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#708090',
   },
   desc: {
      fontSize: 20,
      fontWeight: '400',
      color: '#708090',
      marginTop: 5,
   },
   buttonBooks: {
      flexDirection: 'row',
      marginTop: 20,
   },
   btnGradient: {
      padding: 10,
      borderRadius: 40,
   },
   btnBookText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#fff',
   },


});


export default Profile