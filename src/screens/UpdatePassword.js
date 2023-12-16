import React, { useEffect, useState } from 'react'
import { TouchableOpacity, StyleSheet, View, Spinner } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { CommonActions } from '@react-navigation/native';
import { theme } from '../theme/Theme'
import { emailValidator } from '../helper/EmailValidator'
import { passwordValidator } from '../helper/PasswordValidator'
import Progress from '../components/ProgressBar'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../repositories/apiRepo';
import ShowDialog from '../components/Dailog'
import { resetState } from '../redux/loginRedux/loginSlice'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loggedInUser } from '../services/StorageUtils'



const UpdatePasswordScreen = ({ navigation }) => {
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();
    const { data, isLoader, isError } = useSelector(state => state.login);
    useEffect(() => {
        if (data != null) {
            if (data.status == 200) {
                const userId = data.userData.user_id
                loggedInUser(userId.toString());
                dispatch(resetState())
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'TabNavigator' }],
                })
            } else {
                setVisible(true)
            }
        } else {
            if (isError) {
                setVisible(true)
            }
        }
    }, [data, isLoader, isError])

    const onLoginPressed = () => {
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)
        if (emailError || passwordError) {
            setEmail({ ...email, error: emailError })
            setPassword({ ...password, error: passwordError })
            return
        }
        const emailValue = email.value
        const passwordValue = password.value
        dispatch(login({ emailValue, passwordValue }))
    }

    function onDialogPressed() {
        setVisible(false)
    }

    return (
        < Background >
            {isLoader ? <Progress isLoading={isLoader} /> : null}
            {visible ? <ShowDialog message={data.message} onPress={onDialogPressed} /> : null}
            <Header>Welcome back.</Header>
            <TextInput
                label="Email"
                returnKeyType="next"
                value={email.value}
                onChangeText={(text) => setEmail({ value: text, error: '' })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
            />
            <View style={styles.searchSection}>
            <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000"/>
                <TextInput
                    label="Password"
                    returnKeyType="done"
                    value={password.value}
                    onChangeText={(text) => setPassword({ value: text, error: '' })}
                    error={!!password.error}
                    errorText={password.error}
                    secureTextEntry
                />
            </View>
            <View style={styles.forgotPassword}>
                <TouchableOpacity
                    onPress={() =>
                        navigation.dispatch(
                            CommonActions.navigate({
                                name: 'Forgot',
                            })
                        )
                    }
                >
                    <Text style={styles.forgot}>Forgot your password?</Text>
                </TouchableOpacity>
            </View>
            <Button mode="contained" onPress={onLoginPressed}>
                Login
            </Button>
            <View style={styles.row}>
                <Text>Don’t have an account? </Text>
                <TouchableOpacity onPress={() =>
                    navigation.dispatch(
                        CommonActions.navigate({
                            name: 'SignUp',
                        })
                    )
                }>
                    <Text style={styles.link}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </Background >
    )
}


export default UpdatePasswordScreen

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
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },
})