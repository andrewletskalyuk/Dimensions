import React from 'react';
import { Image, ImageBackground, StyleSheet, Text } from 'react-native';
import { View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/background.jpg')}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <Text>Віра рятує нас</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#DAF7A6'
    },
    logo: {
        width: 150,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: "center"
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#BEC438'
    },
})

export default WelcomeScreen;