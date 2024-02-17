import { ScrollView, View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ViewMovies({ movies, handleDeleteMovie }) {

    return (
        <View style={styles.container}>
            <FlatList
                data={movies}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Pressable style={styles.button}>
                            <Ionicons name="close-circle-outline" size={24} color="#909090" onPress={() => handleDeleteMovie(item.id)} />
                        </Pressable>
                        <Text style={styles.title}>{item.title + " (" + item.year + ")"}</Text>
                        <Text>{"Directed by: " + item.director}</Text>
                        <Text>{item.desc}</Text>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    item: {
        marginHorizontal: 32,
        marginVertical: 16,
        paddingHorizontal: 16,
        paddingVertical: 16,
        backgroundColor: '#e0e0e0',
        borderRadius: 8,
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    button: {
        alignSelf: 'flex-end',
    }
})