

import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, ScrollView, SafeAreaView, TouchableHighlight, Linking, Button } from 'react-native';


import Profile from '../profile';





function Projects() {



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






class Explore extends Component {





    render() {
        return (
            /*
            <View style={styles.container}>
                <Text>Explore</Text>
            </View>
            */
            <Projects />

        );


    }
}
export default Explore;

/*
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
*/