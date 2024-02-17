import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";
import { useState } from "react";

export default function AddMovie({ navigation, handleAddMovie }) {

    // movie object stores the added movie
    const [newMovie, setNewMovie] = useState(
        {
            id: Date.now(),
            title: '',
            year: '',
            director: '',
            desc: ''
        }
    );

    function handleClick() {
        handleAddMovie(newMovie);
    }

    return (
        <View style={styles.container}>

            <TextInput style={styles.inputField} placeholder="Title" value={newMovie.title} onChangeText={(text) => setNewMovie({ ...newMovie, title: text })} />
            <TextInput style={styles.inputField} placeholder="Year" value={newMovie.year} onChangeText={(text) => setNewMovie({ ...newMovie, year: text })} />
            <TextInput style={styles.inputField} placeholder="Director" value={newMovie.director} onChangeText={(text) => setNewMovie({ ...newMovie, director: text })} />
            <TextInput style={styles.inputField} placeholder="A brief description..." multiline numberOfLines={4} value={newMovie.desc} onChangeText={(text) => setNewMovie({ ...newMovie, desc: text })} />
            <Pressable style={styles.button} onPress={handleClick}>
                <Text>Add</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },

    inputField: {
        width: '100%',
        paddingVertical: 4,
        paddingHorizontal: 16,
        borderColor: '#e0e0e0',
        borderWidth: 1,
        borderRadius: 8,
        marginVertical: 12,
    },

    button: {
        backgroundColor: '#e0e0e0',
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 8,
        marginTop: 20,
        alignSelf: 'flex-end',
    },
})