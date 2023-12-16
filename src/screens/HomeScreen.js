
import { FlatList, View, StyleSheet, ScrollView } from 'react-native';
import HomeTileCard from '../components/HomeTileCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Searchbar } from 'react-native-paper';


const DUMMYDATA = [
    { id: 1, name: "Abu", age: 13, },
    { id: 2, name: "AbuBasith", age: 10, },
    { id: 3, name: "Javith", age: 13, },
    { id: 4, name: "Iswar", age: 16, },
    { id: 5, name: "Arvind", age: 17, },
    { id: 6, name: "Basith", age: 18, }
]

function HomeScreen({ navigation }) {
    function renderItem({ item }) {
        function pressHandler() {
            navigation.navigate('Details', {
                item: item
            })
        }
        return <HomeTileCard item={item} onPress={pressHandler} />
    }
    return (
        <SafeAreaView style={styles.bodyContainer}>
            <ScrollView>
                <View >
                    <Searchbar style={styles.bodyContainer}>

                    </Searchbar>
                </View>

                <FlatList
                    data={DUMMYDATA} keyExtractor={item => item.id} renderItem={renderItem} numColumns={2} />

            </ScrollView>
        </SafeAreaView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirecion: "row",
        backgroundColor: 'red',
        alignItems: "center",
        justifyContent: "flex-start",
        paddingBottom: 0,
        flex: 1,
    },
    bodyContainer: {
        width: "100%",
        flexDirecion: "row",
        paddingBottom: 0,
        flex: 1,
    },
    searchContainer: {
        marginTop: 10,
        width: "100%",
    },
    inputContainer: {
        width: "70%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
});
