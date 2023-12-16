import React, { useEffect, useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import Background from '../components/Background'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { CommonActions } from '@react-navigation/native';
import { theme } from '../theme/Theme'
import { confirmPasswordValidator, passwordValidator } from '../helper/PasswordValidator'
import Progress from '../components/ProgressBar'
import { useSelector, useDispatch } from 'react-redux'
import BackButton from '../components/BackButton'
import ShowDialog from '../components/Dailog'
import { resetState } from '../redux/loginRedux/loginSlice'
import { loggedInUser } from '../services/StorageUtils'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { updatePasword } from '../repositories/apiRepo'


const UpdatePasswordScreen = ({ navigation, route }) => {

    const [password, setPassword] = useState({ value: '', error: '' })
    const [confPassword, setConfirmPassword] = useState({ value: '', error: '' })
    const [visible, setVisible] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfPassword, setConfShowPassword] = useState(false);
    const dispatch = useDispatch();
    const { data, isLoader, isError } = useSelector(state => state.updatePassword);
    useEffect(() => {
        console.log(route.params.email)
        if (data != null) {
            if (data.status == 200) {
                setVisible(true)
            } else {
                setVisible(true)
            }
        } else {
            if (isError) {
                setVisible(true)
            }
        }
    }, [data, isLoader, isError])

    const onUpdatePressed = () => {
        const passwordError = passwordValidator(password.value)
        const confirmPasswordError = confirmPasswordValidator(password.value, confPassword.value)
        if (passwordError || confirmPasswordError) {
            setConfirmPassword({ ...confPassword, error: confirmPasswordError })
            setPassword({ ...password, error: passwordError })
            return
        }
        const email = route.params.email
        const passwordValue = password.value
        const confirmPasswordValue = confPassword.value
        dispatch(updatePasword({ email, passwordValue, confirmPasswordValue }))
    }

    function onDialogPressed() {
        setVisible(false)
        if (data.status == 200) {
            navigation.dispatch(
                CommonActions.navigate({
                    name: 'Login',
                })
            )
        }
    }

    function goBack() {
        navigation.dispatch(
            CommonActions.navigate({
                name: 'Login',
            })
        )
    }

    return (
        < Background >
            {isLoader ? <Progress isLoading={isLoader} /> : null}
            {visible ? <ShowDialog message={data.message} onPress={onDialogPressed} /> : null}
            <BackButton goBack={goBack} />
            <Header>Update Password</Header>
            <View style={styles.searchSection}>
                <TextInput
                    label="Password"
                    returnKeyType="next"
                    value={password.value}
                    onChangeText={(text) => setPassword({ value: text, error: '' })}
                    error={!!password.error}
                    errorText={password.error}
                    secureTextEntry={!showPassword}
                />
                <Ionicons style={styles.searchIcon} name={showPassword ? "ios-eye" : "ios-eye-off"} size={25} color={25} onPress={() => {
                    setShowPassword(!showPassword)
                }} />
            </View>
            <View style={styles.searchSection}>
                <TextInput
                    label="ConfPassword"
                    returnKeyType="done"
                    disabled={password.value.length == 0 ? true : false}
                    value={confPassword.value}
                    onChangeText={(text) => setConfirmPassword({ value: text, error: '' })}
                    error={!!confPassword.error}
                    errorText={confPassword.error}
                    secureTextEntry={!showConfPassword}
                />
                <Ionicons style={styles.searchIcon} name={showConfPassword ? "ios-eye" : "ios-eye-off"} size={25} color={25} onPress={() => {
                    setConfShowPassword(!showConfPassword)
                }} />
            </View>
            {/* <View style={styles.forgotPassword}>
                <TouchableOpacity
                    onPress={() =>
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'TabNavigator' }],
                        })
                    }
                >
                </TouchableOpacity>
            </View> */}
            <Button mode="contained" onPress={onUpdatePressed}>
                Update
            </Button>
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
        width: '100%',
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
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