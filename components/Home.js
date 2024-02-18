import { Text, View, StyleSheet, Pressable } from 'react-native';
import MyComponent from './MyComponent';

export default function Home({ navigation }) {
	return (
		<View style={styles.container}>
			<Text style={styles.heading}>Welcome Back</Text>

			<View style={styles.buttonContainer}>
				<Pressable
					style={styles.button}
					onPress={() => navigation.navigate('AddMovie')}
				>
					<Text>Add a movie</Text>
				</Pressable>
				<Pressable
					style={styles.button}
					onPress={() => navigation.navigate('ViewMovies')}
				>
					<Text>View all movies</Text>
				</Pressable>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},

	heading: {
		fontSize: 32,
		fontWeight: 'bold',
		color: '#81f',
	},

	buttonContainer: {
		flex: 0.5,
		alignItems: 'center',
		justifyContent: 'center',
	},

	button: {
		backgroundColor: '#e0e0e0',
		paddingVertical: 16,
		paddingHorizontal: 32,
		borderRadius: 8,
		marginTop: 20,
	},
});
