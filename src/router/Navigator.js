import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from "../screens/SplashScreen"
import Home from "../screens/HomeScreen";
import Login from "../screens/LoginScreen"
import SignUp from "../screens/SignUpScreen"
import Forgot from "../screens/ForgotPasswordScreen"
import OTP from "../screens/OTPVerificationScren"
import Details from "../screens/ProductDetailsScreen"
import { Button, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export const RootStack = () => {
    const navigation = useNavigation();
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
                name="Splash"
                component={Splash}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name="Login" component={Login} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="Home" component={Home} options={{
                headerStyle: {
                    backgroundColor: '#3498db', // Set the background color of the app bar
                },
                headerTintColor: '#fff', // Set the text color of the app bar
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerRight: () => (
                    <Button
                        style={styles.button}
                        onPress={() => navigation.navigate('Login', {
                            item: "Abu"
                        })}
                        title="LOGOUT"
                        color="#fff"
                    />
                ),
            }} />
            <Stack.Screen name="Forgot" component={Forgot} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="OTP" component={OTP} options={{
                headerShown: false,
                headerTitleAlign: 'left'
            }} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    button: {
        width: '100%',
        marginVertical: 10,
        paddingVertical: 2,
        backgroundColor: "#00BFFF",
        fontStyle: "normal",
        fontWeight: "bold"
    },

})