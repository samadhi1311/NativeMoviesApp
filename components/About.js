import { Text, View, StyleSheet } from "react-native";

export default function About() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Movie App</Text>
            <Text>A simple movie app built using React Native with 💜</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    heading: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 16,
    }
})