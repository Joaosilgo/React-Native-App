
import { createStackNavigator } from "@react-navigation/stack";
import * as theme from '../../theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React, { useEffect, useState, Component, useCallback, useRef } from 'react';
import { View, Button, Text, Animated, FlatList, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator, Image, ImageBackground, Dimensions, Platform } from 'react-native';
import { color } from "react-native-reanimated";
const { width, height } = Dimensions.get('window');

const images = require("../../Assets/banner.jpg");

export const dummyData =
  [{
    title: 'thumbnail', url: require('../../Assets/banner.jpg'),
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 1

  },
  {
    title: 'thumbnail', url: require('../../Assets/banner.jpg'),
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 2
  },
  {
    title: 'thumbnail', url: require('../../Assets/banner.jpg'),
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 3
  },
  {
    title: 'thumbnail', url: require('../../Assets/banner.jpg'),
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 4
  },
  {
    title: 'Vegatable Salad', url: require('../../Assets/banner.jpg'),
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 5
  }];

function HomeScreen({ navigation }) {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch('https://joaosilgo.github.io/dummy_db/restaurants.json')
    fetch('https://api.github.com/users/Joaosilgo/repos?per_page=100')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);




  const CardInfo = ({ info }) => {
    return (
      <TouchableOpacity activeOpacity={0.8}
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
            info: { info },
            id: info.id,
            data: info.data

          });
        }}>

        <ImageBackground
          style={[styles.flex, styles.info, styles.shadow]}
          imageStyle={{ borderRadius: theme.sizes.radius }}
          // source={{ uri: info.photograph }}
          // source={require("../../Assets/banner.jpg")}
          source={images}
        >

          {/*
full_name: item.full_name,
        name: item.name,
        description: item.description,
        language: item.language,
        login: item.owner.login,
        html_url: item.html_url,
*/}

          <View style={[styles.column, { flex: 2, paddingHorizontal: theme.sizes.title }]}>
            <Text style={{ color: theme.colors.active, fontWeight: 'bold' }}>{info.name}</Text>
            <Text style={{ color: theme.colors.active }}>
              <FontAwesome
                name="pagelines"
                size={theme.sizes.font * 0.8}
                color={theme.colors.active}
              />
              {info.full_name}</Text>

            {/*   <Text style={{ flex: 1 }} numberOfLines={10} ellipsizeMode='tail'> {info.description}</Text> */}

            <Text style={{ color: theme.colors.active, fontSize: theme.sizes.base * 0.5, fontWeight: '700' }}> {info.language} </Text>
            <Text style={{ color: theme.colors.active, fontStyle: 'italic' }}> {info.login} </Text>

          </View>
        </ImageBackground>
      </TouchableOpacity>

    )
  };

  const renderItem = useCallback(({ item }) => (<View style={{ flex: 1 }}>
    <CardInfo
      info={{
        /*
        id: item.id,
        name: item.name,
        photograph: item.photograph,
        neighborhood: item.neighborhood,
        address: item.address,
        data: item*/

        id: item.id,
        full_name: item.full_name,
        name: item.name,
        description: item.description,
        language: item.language,
        login: item.owner.login,
        html_url: item.html_url,
        data: item

      }} />
  </View>),
    []
  );




  return (


    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: theme.sizes.padding }}
    >
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <View style={[styles.flex, styles.row, styles.header]}>
          <View>
            <Text style={{ color: theme.colors.gray }}>Info</Text>
            <Text style={{ fontSize: theme.sizes.font * 2, color: '#2f4f4f' }}>
              <FontAwesome
                name="pied-piper-alt"
                size={theme.sizes.title * 0.8}
                color={theme.colors.active}
              />  Information</Text>
          </View>

        </View>


        {/*  <Text>Home Screen</Text> */}

        {/*  {data.restaurants && data.restaurants.map(info => { return (<Text>{info.id}</Text>) })}  */}

        { /* 1. Navigate to the Details route with params /}
       {/*   <Button
            title="Go to Details"
            onPress={() => {
           
              navigation.navigate('Details', {
                itemId: 86,
                otherParam: 'anything you want here',
              });
            }}
          /> */}



        {
          isLoading ? <ActivityIndicator size="small" color="#2f4f4f" /> : (


            < View style={[styles.column, styles.infos]}>
              <FlatList
                horizontal
                pagingEnabled
                scrollEnabled
                showsHorizontalScrollIndicator={false}
                decelerationRate={0}
                scrollEventThrottle={16}
                snapToAlignment="center"

                // data={data.restaurants}
                data={data}
                keyExtractor={({ id }, index) => id.toString()}
                renderItem={renderItem}
              />
            </View>


          )}





        <View style={[styles.flex, styles.info]}>
          <Text style={styles.paragraph}>
            Local files and assets can be imported by dragging and dropping them into the editor</Text>

        </View>




      </View>
    </ScrollView>





  );
}

function DetailsScreen({ route, navigation }) {




  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
      // Call any action
      var date = new Date();
      console.log('Details Focus ' + date);
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount

    return unsubscribe;
  }, [navigation]);




  const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

    React.useEffect(() => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true
        },

      ).start();
    }, [fadeAnim])

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {props.children}
      </Animated.View>
    );
  }


  /* 2. Get the param */
  const { itemId } = route.params;
  const { otherParam } = route.params;
  const { info } = route.params;
  const { id } = route.params;
  const { data } = route.params;

  var license = '';

  if (data.license) {

    license = data.license.name;

  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/*  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> */}
      <View style={{ flex: 1 }}>

        <View style={styles.detailTop}>
          <View style={styles.meta}>
            <Text style={[styles.name, { color: theme.colors.active }]}>
              {data.name}
            </Text>
            <Text style={[styles.timestamp, { color: theme.colors.active }]}>{data.created_at}</Text>
          </View>
        </View>


        <TouchableOpacity activeOpacity={0.8}>

          {/*  <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Text>Info: {JSON.stringify(info)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>*/}
          <FadeInView>
            <Image
              source={images}
              resizeMode="contain"
              style={{ width, height: height / 2.8 }}
            />
          </FadeInView>

        </TouchableOpacity>

        <View style={styles.infoDetail}>

          <View style={styles.row} >
            <Text style={{ fontSize: theme.sizes.h2 }} >{data.name}</Text>
          </View>
          <Text style={{ fontSize: theme.sizes.caption, color: theme.colors.active }} >{id}</Text>
          <Text style={{ fontSize: theme.sizes.caption, color: theme.colors.active }} >{data.full_name}</Text>
          <Text style={{ fontSize: theme.sizes.caption, color: theme.colors.active }} >{license}</Text>
          <Text style={{ fontSize: theme.sizes.caption, color: theme.colors.active }} >{data.description}</Text>
          <Text style={{ fontSize: theme.sizes.caption, color: theme.colors.active }} >{data.private.toString()}</Text>
          <Text style={{ fontSize: theme.sizes.caption, color: theme.colors.active }} >{data.size}</Text>
          <Text style={{ fontSize: theme.sizes.caption, color: theme.colors.active }} >{data.language}</Text>

          <Text style={{ fontSize: theme.sizes.caption, color: theme.colors.active }} >{data.html_url}</Text>
          <Text style={{ fontSize: theme.sizes.caption, color: theme.colors.active }} >{data.html_url}</Text>
          <Text style={{ fontSize: theme.sizes.caption, color: theme.colors.active }} >{data.fork}</Text>
          <Text style={{ fontSize: theme.sizes.caption, color: theme.colors.active }} >{data.created_at}</Text>
          <Text style={{ fontSize: theme.sizes.caption, color: theme.colors.active }} >{data.updated_at}</Text>
          <Text style={{ fontSize: theme.sizes.caption, color: theme.colors.active }} >{data.default_branch}</Text>

          <Text style={{ fontSize: theme.sizes.raw, color: theme.colors.gray, fontWeight: '200', lineHeight: 22 }}   >{JSON.stringify(data, null, 3)}</Text>
        </View>






        <View>
          <Text style={{ fontSize: theme.sizes.h2, color: theme.colors.active, fontWeight: "500" }} semibold>Gallery</Text>

          <FadeInView style={styles.row} style={{ margin: theme.sizes.padding * 0.9 }} >

            <FlatList
              data={dummyData}
              keyExtractor={({ id }, index) => id.toString()}
              horizontal
              pagingEnabled
              scrollEnabled
              snapToAlignment="center"
              scrollEventThrottle={16}
              decelerationRate={"fast"}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => {

                return <Image style={styles.image} source={item.url} />
              }}

            />

          </FadeInView>
        </View>

      </View>
    </ScrollView>
  );
}

function SettingsScreen() {


  return (


    <View>
      <Text>Settings Screen</Text>
    </View>

  );
};

const forFade = ({ current, next }) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  return {
    leftButtonStyle: { opacity },
    rightButtonStyle: { opacity },
    titleStyle: { opacity },
    backgroundStyle: { opacity },
  };
};

const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <TouchableOpacity activeOpacity={0.8}  >
      < FontAwesome
        name="ravelry"
        size={theme.sizes.title}
        color={theme.colors.active}
      />
    </TouchableOpacity>

  );
};

function InfoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyleInterpolator: forFade,
          headerTintColor: 'white',
          headerTitle: <LogoTitle />,
          headerStyle: { backgroundColor: '#c0c0c0' },
          headerTitleStyle: { fontWeight: 'bold' }
        }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ headerStyleInterpolator: forFade }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerStyleInterpolator: forFade }}
      />
    </Stack.Navigator>
  );
};

export default function Info() {
  return (

    <InfoStack />

  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 0,
  },
  column: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  header: {
    //backgroundColor: theme.colors.white,
    paddingHorizontal: theme.sizes.padding,
    paddingTop: theme.sizes.padding * 1.33,
    paddingBottom: theme.sizes.padding * 0.66,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infos: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 5,
  },
  info: {
    width: width - (theme.sizes.padding * 2),
    height: width * 0.6,
    marginHorizontal: theme.sizes.margin,
    paddingHorizontal: theme.sizes.padding,
    paddingVertical: theme.sizes.padding * 0.8,
    borderRadius: theme.sizes.radius,
  },
  shadow: {
    shadowColor: theme.colors.white,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 5,
  },
  infoDetail: {
    paddingHorizontal: theme.sizes.base * 2,
    paddingVertical: theme.sizes.padding
  },
  detailTop: {
    flexDirection: 'row',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  meta: {
    marginHorizontal: 8,
    justifyContent: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
  },
  timestamp: {
    opacity: 0.5,
    fontSize: 14,
    lineHeight: 21,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    //margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
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
  image: {
    width: width / 3.26,
    height: width / 3.26,
    marginRight: theme.sizes.base
  }

})







