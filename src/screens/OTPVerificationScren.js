import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Header from '../components/Header'
import Button from '../components/Button'
import { CommonActions } from '@react-navigation/native';
import { theme } from '../theme/Theme'
import { otpValidator } from '../helper/OTPValidator'
import BackButton from '../components/BackButton'
import OTPInputView from '@twotalltotems/react-native-otp-input'

export default function OTPVerificationScreen({ navigation }) {
    const [otp, setOtp] = useState({ value: '', error: '' })

    const onLoginPressed = () => {
        console.log(otp.value)
        const emailError = otpValidator(otp, 4)
        if (emailError) {
            setOtp({ ...otp, error: emailError })
            return
        }
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
        })
    }

    return (
        <Background>
            <BackButton goBack={goBack} />
            <Header>OTP verification</Header>
            <OTPInputView
                style={{ width: '100%', height: 100 }}
                pinCount={4}
                onCodeChanged={code => {
                    console.log(code)
                    setOtp(code)
                }}
                autoFocusOnLoad={true}
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled={(code => {
                    console.log(`Code is ${code}, you are good to go!`)
                })}
                selectionColor={"#03DAC6"}
            />
            {otp.error ? <Text style={styles.error}>{otp.error}</Text> : null}
            <Button mode="contained" onPress={onLoginPressed} >
                Verify
            </Button>
        </Background>
    )

    function goBack() {
        navigation.dispatch(CommonActions.goBack())
    }
}

const styles = StyleSheet.create({
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    forgot: {
        fontSize: 13,
        color: theme.colors.secondary,
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
    error: {
        fontSize: 13,
        color: theme.colors.error,
        paddingTop: 8,
    },
})