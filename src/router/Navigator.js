import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from "../screens/SplashScreen"
import Home from "../screens/HomeScreen";
import Login from "../screens/LoginScreen"
import SignUp from "../screens/SignUpScreen"
import Forgot from "../screens/ForgotPasswordScreen"
import OTP from "../screens/OTPVerificationScren"
import Details from "../screens/ProductDetailsScreen"

const Stack = createNativeStackNavigator();

export const RootStack = () => {
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
            <Stack.Screen name="Home" component={Home} />
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