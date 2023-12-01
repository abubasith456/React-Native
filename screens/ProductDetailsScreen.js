import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';


function ProductDetailsScreen({ route }) {
    const item = route.params.item

    return (
        <View>
            <Text>{item.name}</Text>
        </View>
    );
}

export default ProductDetailsScreen;