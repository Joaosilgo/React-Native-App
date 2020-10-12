import React, { Component } from 'react'
import { Text, StyleSheet, View, Animated, Image, Dimensions, ScrollView, TouchableOpacity, Linking, SafeAreaView } from 'react-native'
import * as theme from '../theme';

const { width, height } = Dimensions.get('window');

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
        // backgroundColor: 'transparent',
        paddingHorizontal: theme.sizes.padding,
        paddingTop: theme.sizes.padding,
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
    back: {
        width: theme.sizes.base * 3,
        height: theme.sizes.base * 3,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    content: {
        // backgroundColor: theme.colors.active,
        // borderTopLeftRadius: theme.sizes.border,
        // borderTopRightRadius: theme.sizes.border,
    },
    contentHeader: {
        backgroundColor: 'transparent',
        padding: theme.sizes.padding,
        backgroundColor: theme.colors.white,
        borderTopLeftRadius: theme.sizes.radius,
        borderTopRightRadius: theme.sizes.radius,
        marginTop: -theme.sizes.padding / 2,
    },
    avatar: {
        position: 'absolute',
        top: -theme.sizes.margin,
        right: theme.sizes.margin,
        width: theme.sizes.padding * 2,
        height: theme.sizes.padding * 2,
        borderRadius: theme.sizes.padding,
    },
    shadow: {
        shadowColor: theme.colors.black,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    dotsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 36,
        right: 0,
        left: 0
    },
    dots: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 6,
        backgroundColor: theme.colors.gray,
    },
    title: {
        fontSize: theme.sizes.font * 2,
        fontWeight: 'bold',
        color: '#2f4f4f'
    },
    description: {
        fontSize: theme.sizes.font * 1,
        lineHeight: theme.sizes.font * 1.2,
        color: theme.colors.caption
    }
});

class Article extends Component {
    scrollX = new Animated.Value(0);

    render() {


        return (
            <ScrollView>
                <SafeAreaView style={styles.flex}>
                    <View style={[styles.flex]}>
                        <ScrollView
                            horizontal
                            pagingEnabled
                            scrollEnabled
                            showsHorizontalScrollIndicator={false}
                            decelerationRate={0}
                            scrollEventThrottle={16}
                            snapToAlignment="center"
                            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.scrollX } } }], { useNativeDriver: true })}>

                            <Image source={require('../Assets/banner.jpg')} resizeMode='cover' style={{ width, height: width }} />
                        </ScrollView>
                    </View>

                    <View style={[styles.flex, styles.content]}>
                        <View style={[styles.flex, styles.contentHeader]}>
                            <Text style={styles.title}>João Gomes</Text>
                            {/* </View> <TouchableOpacity onPress={() => Linking.openURL('https://github.com/Joaosilgo')}> */}
                            <Text style={styles.description}>Finalist in Computer Engineering Degree, for the last three consecutive years i had the opportunity of acquire technical knowledge and practices at the level of various programming languages ​​and business management where various work methodology was imposed, methodology based on requirements gathering, analysis, design, implementation, installation, maintenance as well as a project management. It has been a course with a strong component of practice, where I have been acquiring a lot of knowledge that serves as a basis for entering in the market. At this point is only missing an internship component curriculum for finish the degree...</Text >
                            <Text style={{ color: theme.colors.active }} onPress={() => Linking.openURL('https://github.com/Joaosilgo')}> Read More </Text>
                            {/* </TouchableOpacity> */}
                        </View>
                    </View>
                </SafeAreaView >
            </ScrollView>
        )
    }
}

export default Article;