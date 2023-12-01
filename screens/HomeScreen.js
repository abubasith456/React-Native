
import { FlatList } from 'react-native';
import HomeTileCard from '../components/HomeTileCard';


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
        <FlatList data={DUMMYDATA} keyExtractor={item => item.id} renderItem={renderItem} numColumns={2} />
    );
}

export default HomeScreen;