import React from 'react'
import { ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { theme } from '../theme/Theme'

export default function Background({ children }) {
    return (
        <ImageBackground
            source={require('../images/background_dot.png')}
            resizeMode="repeat"
            style={styles.background}
        >
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                {children}
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: theme.colors.surface,
    },
    container: {
        flex: 1,
        padding: 15,
        width: '100%',
        maxWidth: 360,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
