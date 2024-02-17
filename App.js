import { StatusBar } from 'expo-status-bar';

import { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'react-native';

import Home from './components/Home';
import AddMovie from './components/AddMovie';
import ViewMovies from './components/ViewMovies';
import About from './components/About';

export default function App() {

  const Drawer = createDrawerNavigator();

  const Tab = createBottomTabNavigator();

  // movies object array stores the added movies
  const [movies, setMovies] = useState([]);

  if (movies.length === 0) {
    movies.push({
      id: Date.now(),
      title: 'A Movie About Us',
      year: '2022',
      director: 'Sithu',
      desc: 'idk. but, it had a great plot and soothing soundtrack...'
    })
  }

  // This function adds movies to the movies object array
  function handleAddMovie(movie) {
    setMovies([...movies,
    {
      id: Date.now(),
      title: movie.title,
      year: movie.year,
      director: movie.director,
      desc: movie.desc
    }
    ]);
  }

  // This function deletes movies from the movies object array
  function handleDeleteMovie(id) {
    setMovies(movies.filter(movie => movie.id !== id));
  }


  return (
    <NavigationContainer>

      <Drawer.Navigator>
        <Drawer.Screen name="Root" children={
          () => (
            <Tab.Navigator>
              <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: () => <Ionicons name="home-outline" size={24} color="black" />, headerShown: false }} />

              <Tab.Screen name="ViewMovies" children={(props) => <ViewMovies movies={movies} handleDeleteMovie={handleDeleteMovie} />} options={{ title: 'View All Movies', tabBarIcon: () => <Ionicons name="grid-outline" size={24} color="black" /> }} />
              <Tab.Screen name="AddMovie" children={(props) => <AddMovie handleAddMovie={handleAddMovie} />} options={{ title: 'Add a movie', tabBarIcon: () => <Image source={require('./assets/favicon.png')} style={{ width: 24, height: 24 }} /> }} />
            </Tab.Navigator>
          )
        } options={{ title: 'Movie App' }} />
        <Drawer.Screen name="About" component={About} options={{ title: 'About' }} />
      </Drawer.Navigator>

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}