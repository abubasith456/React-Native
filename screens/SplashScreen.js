import { View, Text, Image, StyleSheet } from "react-native";
import { StackActions } from '@react-navigation/native';

const SplashScreen = ({ navigation }) => {

    setTimeout(function () {
        navigation.dispatch(
            StackActions.replace('Login', {
                user: 'jane',
            })
        );
    }, 4000);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Image source={require('../images/logo.png')}
                style={styles.image} />
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    image: {
        height: 250,
        width: 350,
    },
});

export default SplashScreen;