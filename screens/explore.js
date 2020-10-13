
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, Component, useCallback } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Share, TouchableOpacity, ToastAndroid, TouchableWithoutFeedback, Platform, Vibration, RefreshControl, ScrollView, SafeAreaView, TouchableHighlight, Linking, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


async function onShare(name, description, url) {
    try {
        const result = await Share.share({

            url: url,
            message: url,
            title: name
        });

        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                // shared with activity type of result.activityType
                console.log('ACTIVITY TYPE :: ', result.activityType);

            } else {
                // shared
                ToastAndroid.showWithGravity('Shared', ToastAndroid.SHORT, ToastAndroid.TOP);
            }
        } else if (result.action === Share.dismissedAction) {
            // dismissed
            //  ToastAndroid.showWithGravity('Dismissed', ToastAndroid.LONG, ToastAndroid.BOTTOM);
        }
    } catch (error) {
        alert(error.message);
    }
};



function press(url) {
    Vibration.vibrate(50);
   // if (url != null || url != nil || !url) {
    if (url) {
        
        if (Platform.OS === 'android') {
            //ToastAndroid.showWithGravity('OS: ' +  Platform.OS + ' VERSION: ' + Platform.Version , ToastAndroid.SHORT, ToastAndroid.TOP)
            ToastAndroid.showWithGravity(url, ToastAndroid.SHORT, ToastAndroid.TOP);
            Linking.openURL(url);
            //alert('Pressed!');
        }
    }
}

export const CardProject = ({ info }) => {
    return (
        //<TouchableWithoutFeedback onLongPress={() => press() }>
        <TouchableOpacity activeOpacity={0.7} onLongPress={() => press(info.homepage)}>

            <SafeAreaView style={styles.cardContainer}>
                <View style={styles.cardBody}>
                    <View style={styles.cardBodyTop}>
                        <View style={styles.cardLeftSide}>
                        { info.homepage ? <MaterialCommunityIcons name="check-decagram" color="gray" /> : ( <Text style={styles.cardAddress}>{info.homepage}</Text>)  }
                            <Text style={styles.tag}>{info.full_name}</Text>
                            
                            <Text style={styles.cardName}>{info.name}</Text>
                            <Text style={styles.cardTime}>{info.description}</Text>
                            <Text style={styles.cardAddress}>{info.language}</Text>
                            <Text style={styles.cardAddress}>{info.login}</Text>

                          

                            {/*  <Text style={styles.tag}>{info.html_url}</Text> */}
                            <View style={styles.cardBodyBottom}>

                                <TouchableOpacity activeOpacity={0.4} >
                                    <MaterialIcons name="star" color="gray" />
                                    <Text color="gray" style={styles.cardBottomTitle}>{info.stargazers_count}</Text>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.4} >
                                    <AntDesign name="fork" color="gray" />
                                    <Text color="gray" style={styles.cardBottomTitle}>{info.forks_count}</Text>
                                </TouchableOpacity>


                                <TouchableOpacity activeOpacity={0.4} >
                                    <AntDesign name="eye" color="gray" />
                                    <Text color="gray" style={styles.cardBottomTitle}>{info.watchers_count}</Text>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.4} >
                                    <MaterialCommunityIcons name="dumbbell" color="gray" />
                                    <Text color="gray" style={styles.cardBottomTitle}>{info.size}</Text>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.4} >
                                    <Octicons name="issue-opened" color="gray" />
                                    <Text color="gray" style={styles.cardBottomTitle}>{info.open_issues_count}</Text>
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity activeOpacity={0.4} onPress={() => Linking.openURL(info.homepage)}  >
                                <View style={styles.iconMore}>
                                    <Icon name="angle-right" color="gray" />
                                </View>
                            </TouchableOpacity>

                            <View style={styles.margin} />
                            <View style={styles.cardBodyBottom} >
                                <View style={styles.cardGroupIcon}>
                                    <TouchableOpacity activeOpacity={0.4} onPress={() => Linking.openURL(info.html_url)} >
                                        <Octicons color="gray" name="logo-github" size={16} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.cardGroupIcon}>
                                    <TouchableOpacity activeOpacity={0.4} onPress={() => onShare(info.name, info.description, info.html_url)} >
                                        <AntDesign color="gray" name="sharealt" size={16} />
                                        <Text color="gray" style={styles.cardBottomTitle} >Share</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ SafeAreaView >

        </TouchableOpacity>
        //  </TouchableWithoutFeedback>
    );
};






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






    const keyExtractor = useCallback(({ id }, index) => id.toString(), []);

    const renderItem = useCallback(
        ({ item }) =>
            (<View style={{ flex: 1 }}>


                <CardProject

                    info={{
                        full_name: item.full_name,
                        name: item.name,
                        description: item.description,
                        language: item.language,
                        login: item.owner.login,
                        html_url: item.html_url,
                        stargazers_count: item.stargazers_count,
                        forks_count: item.forks_count,
                        watchers_count: item.watchers_count,
                        size: item.size,
                        open_issues_count: item.open_issues_count,
                        homepage: item.homepage

                    }}
                />


            </View>




            ),
        []
    );




    return (



        /*  <View style={{ flex: 1, padding: 24, alignContent: 'center', justifyContent: 'center', }} > */

        <View>
            <View style={styles.headerContainer}>
                <Text style={styles.heading} >
                    <Entypo name="network" color="#708090" size={20} /> Projectos</Text>
                <Text style={styles.desc}>Repositório</Text>

            </View>



            {
                isLoading ? <ActivityIndicator size="small" color="#2f4f4f" /> : (




                    <FlatList

                        data={data}
                        //  keyExtractor={({ id }, index) => id.toString()}
                        keyExtractor={keyExtractor}
                        //   initialNumToRender={8}
                        // maxToRenderPerBatch={8}
                        //updateCellsBatchingPeriod={50}
                        renderItem={renderItem}

                    //less optimal way to render files

                    //       renderItem={({ item }) => (
                    //
                    //                            <View style={{ flex: 1 }} >
                    //                                
                    //
                    //
                    //                              <CardProject
                    //
                    //                                   info={{
                    //                                        full_name: item.full_name,
                    //                                        name: item.name,
                    //                                        description: item.description,
                    //                                        language: item.language,
                    //                                        login: item.owner.login,
                    //                                        html_url: item.html_url,
                    //                                        stargazers_count: item.stargazers_count,
                    //                                       forks_count: item.forks_count,
                    //                                        watchers_count: item.watchers_count,
                    //
                    //                                    }}
                    //                                />


                    /*<Text style={styles.title}>{"\n"}{item.name}{"\n"}</Text>
    <Text>{item.full_name}{"\n"}</Text>
    <Text>{item.html_url}{"\n"}</Text>
    <Text>{item.description}{"\n"}</Text>
    <Text>{item.language}{"\n"}</Text>
    <Text>{"\n"}{item.owner.login}{"\n"}</Text>
    <TouchableHighlight >
        <View >
            <Button title=" URL " onPress={() => Linking.openURL(item.html_url)}>Touch Here</Button>
        </View>
    </TouchableHighlight>*/

                    //                            </View>)} 





                    />
                )
            }

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
        color: '#708090',
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
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardTime: {
        color: '#708090',
        fontSize: 12,
        fontWeight: '200',
        marginTop: 5,
    },
    cardAddress: {
        color: 'gray',
        fontSize: 15,
        fontWeight: '500',
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
        padding: 15,
        paddingHorizontal: 50,
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