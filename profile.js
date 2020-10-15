import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert, Vibration, ToastAndroid, ActivityIndicator, FlatList, ScrollView, SafeAreaView, TouchableHighlight, Linking, Button } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import * as theme from './theme';

import * as SMS from 'expo-sms';

async function sendSMS() {

   const isAvailable = await SMS.isAvailableAsync();
   if (isAvailable) {
      // do your SMS stuff here

      const { result } = await SMS.sendSMSAsync(
         ['+351964575619'],
         'hi There 🎉',

      );
   } else {
      // misfortune... there's no SMS available on this device
      console.log('misfortune... theres no SMS available on this device');
   }

}



const ONE_SECOND_IN_MS = 1000;
const PATTERN = [75, 75, 75, 75, 75, 225, 75, 75, 75, 75, 75, 75, 75, 225, 75, 75, 75, 75, 75, 75, 75, 225, 75, 75, 75, 75, 75, 75, 75, 225, 75, 75, 75, 75, 75, 75, 75, 225, 75, 75, 75, 75, 75, 225, 75, 75, 75, 225, 75, 75, 75, 225, 75, 75, 75, 225, 75, 75, 75, 75, 75, 225, 75, 75, 75, 75, 75, 75, 75, 225, 75, 75, 75, 75, 75, 75, 75, 225, 75, 75, 75, 75, 75, 75, 75, 225, 75, 75, 75, 75, 75, 75, 75, 225, 75, 75, 75, 75, 75, 75];


const showAlert = () => {
   Alert.alert(
      'Hi There ',
      'Pick One',
      [
         { text: 'Inspiration..', onPress: () => ToastAndroid.showWithGravity('Rise Above the Storm...And You Will Find The Sunchine :)', ToastAndroid.LONG, ToastAndroid.BOTTOM) },
         { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
         { text: 'OK', onPress: () => Vibration.vibrate(PATTERN) },
      ],
      { cancelable: false }
   )
}


export const CardHome = ({ name, info }) => {
   return (
      <SafeAreaView style={styles.cardContainer}>
         <View style={styles.cardHeaderContaner}>
            <Text style={styles.cardHeading}> < MaterialCommunityIcons name="shield-home" color="gray" /> {name} </Text>
            <TouchableOpacity activeOpacity={0.4} onPress={showAlert} >
               <Text style={styles.cardMore}>See All</Text>
            </TouchableOpacity>
         </View>
         <View style={styles.cardBody}>
            <View style={styles.cardBodyTop}>
               <Image style={styles.cardAvatar} source={{ uri: info.avatar_url }} />

               <View style={styles.cardLeftSide}>
                  <Text style={styles.tag}>{info.login}</Text>
                  <Text style={styles.cardName}>{info.name}</Text>
                  <Text style={styles.cardTime}>{info.bio}</Text>
                  <Text style={styles.cardAddress}>{info.location}</Text>
                  <Text style={{ color: theme.colors.active }} onPress={() => Linking.openURL('mailto:joaosilgo96@gmail.com?subject=Hey&body=whasuppp 👽')}> joaosilgo96@gmail.com </Text>
                  {/*  <Text style={styles.cardAddress}>{info.blog}</Text>
                  <Text style={styles.tag}>{info.html_url}</Text> */}

                  <View style={styles.iconMore}>
                     <TouchableOpacity activeOpacity={0.4} >
                        {/*  <Icon name="angle-right" color="gray" /> */}
                        < MaterialCommunityIcons name="dots-vertical" color="gray" />
                     </TouchableOpacity>
                  </View>

                  <View style={styles.margin} />
                  <View style={styles.cardBodyBottom}>
                     <View style={styles.cardGroupIcon}>
                        <TouchableOpacity activeOpacity={0.4} onPress={() => Linking.openURL(info.blog)}>
                           <FontAwesome color="gray" name="grav" size={16} onPress={() => Linking.openURL(info.blog)} />
                           <Text style={styles.cardBottomTitle} >Website</Text>
                        </TouchableOpacity>
                     </View>

                     <View style={styles.cardGroupIcon}>
                        <TouchableOpacity activeOpacity={0.4} onPress={() => Linking.openURL(info.html_url)} >
                           <Octicons color="gray" name="logo-github" size={16} onPress={() => Linking.openURL(info.html_url)} />
                           <Text style={styles.cardBottomTitle} >GitHub</Text>
                        </TouchableOpacity>
                     </View>

                     <View style={styles.cardGroupIcon}>
                        <TouchableOpacity activeOpacity={0.4} onPress={sendSMS} >
                           <FontAwesome5 color="gray" name="sms" size={16} onPress={sendSMS} />
                           <Text style={styles.cardBottomTitle} >SMS</Text>
                        </TouchableOpacity>
                     </View>

                     <View style={styles.cardGroupIcon}>
                        <TouchableOpacity activeOpacity={0.4} size={16} onPress={() => Linking.openURL(info.html_url)} >
                           <AntDesign color="gray" name="sharealt" size={16} onPress={() => Linking.openURL(info.html_url)} />
                           <Text style={styles.cardBottomTitle} >Share</Text>
                        </TouchableOpacity>
                     </View>
                  </View>
               </View>
            </View>
         </View>


         <View style={styles.cardBody}>

            <View style={styles.cardBodyBottom}>
               <TouchableOpacity activeOpacity={0.4} >
                  < Zocial size={16} name="facebook" color="gray" onPress={() => Linking.openURL('https://www.facebook.com/joaosilgo')} />
               </TouchableOpacity>

               <TouchableOpacity activeOpacity={0.4} onPress={() => Linking.openURL('https://www.pinterest.pt/joaosilgo96/')} >
                  < Zocial size={16} name="pinterest" color="gray" />
               </TouchableOpacity>

               <TouchableOpacity activeOpacity={0.4} >
                  < MaterialCommunityIcons size={16} name="facebook-messenger" color="gray" onPress={() => Linking.openURL('http://m.me/joaosilgo')} />
               </TouchableOpacity>

               <TouchableOpacity activeOpacity={0.4} onPress={() => Linking.openURL('https://api.whatsapp.com/send?phone=+351964575619&text=Whasuppp!! 🚀')}  >
                  < MaterialCommunityIcons size={16} name="whatsapp" color="gray" />
               </TouchableOpacity>

               <TouchableOpacity activeOpacity={0.4} >
                  < MaterialCommunityIcons name="dots-vertical" color="gray" />
               </TouchableOpacity>

            </View>
         </View>
      </SafeAreaView >
   );
};




function _loadProfile() {

   const [isLoading, setLoading] = useState(true);
   const [data, setData] = useState([]);

   useEffect(() => {
      fetch('https://api.github.com/users/Joaosilgo')
         .then((response) => response.json())
         .then((json) => setData(json))
         .catch((error) => console.error(error))
         .finally(() => setLoading(false));
   }, []);
   return (

      <View>
         {
            isLoading ? <ActivityIndicator size="small" color="#2f4f4f" /> : (

               <CardHome
                  name="Account"
                  info={{
                     avatar_url: data.avatar_url,
                     login: data.login,
                     name: data.name,
                     bio: data.bio,
                     location: data.location,
                     blog: data.blog,
                     html_url: data.html_url,

                  }}
               />

            )}
      </View>

   )


}




class Profile extends Component {


   /* 
     
      state = {
         loading: false,
         data: ''
      }
      
     
      componentDidMount = () => {
         fetch('https://api.github.com/users/Joaosilgo', {
            method: 'GET'
         })
            .then((response) => response.json())
            .then((responseJson) => {
              // console.log(responseJson);
               this.setState({data: responseJson})})
            .catch((error) => {console.error(error);});
          // .finally(() => setLoading(false));     
      }
      */

   render() {
      return (
         <View style={styles.container}>
            <View style={styles.headerContainer}>
               <Text style={styles.heading}>Hello</Text>
               <Text style={styles.desc}>I'm João Gomes. A Computer Engineering Student , from Portugal</Text>
            </View>
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


            {/*
            <CardHome
               name="Account"
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

            */}


            <_loadProfile />

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
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-around',
      color: '#708090',
      fontSize: 7.5,
   },
   cardBottomTitle: {
      fontSize: 7.5,
      marginTop: 5,
      textAlign: 'center',
      color: '#708090',
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

      color: '#2f4f4f',
      fontSize: 20,
      fontWeight: 'bold',
   },
   cardTime: {
      color: '#708090',
      fontSize: 14,
      fontWeight: '200',
      marginTop: 10,
   },
   cardAddress: {
      color: 'gray',
      fontSize: 16,
      fontWeight: '600',
      marginTop: 5,
   },
   cardAvatar: {
      height: 50,
      width: 50,
      backgroundColor: 'white',
      borderRadius: 50,
   },
   cardHeaderContaner: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   cardHeading: {
      fontSize: 20,
      fontWeight: '600',
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
      padding: 15,
      paddingHorizontal: 30,
      marginTop: 15,
   },
   heading: {
      fontSize: 25,
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