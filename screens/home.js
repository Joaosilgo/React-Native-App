import React, { Component } from 'react'
import Profile from '../profile';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, ScrollView, SafeAreaView, TouchableHighlight, Linking, Button } from 'react-native';







class Home extends Component {





    render() {
        return (
            
            <View style={styles.container}>
            
                <Profile/>
            </View>
          

        );


    }
}
export default Home;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    }
});