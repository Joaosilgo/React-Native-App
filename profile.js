import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, Component    }   from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, ScrollView, SafeAreaView, TouchableHighlight,Linking, Button } from 'react-native';








  class  Profile extends Component {



  

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
           </View>
        )
     }
  

    
   
    
















}

const styles = StyleSheet.create({
  

});


export default Profile