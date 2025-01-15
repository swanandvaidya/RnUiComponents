import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import getMovieData from '../../../utility/MovieData';

const FlatListComponent = () => {
  let movieData = getMovieData;
  console.log('Movie Data: ', movieData);
  let timestamp = new Date().getTime();
  console.log('Time Stamp: ', timestamp);

  const MovieItem = ({item}) => (
    <View style={styles.item}>
      <Text style={{marginBottom: 8}}>Movie Name: {item.movieName}</Text>
      <Text>Launch Date: {item.launchDate}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, marginBottom: 20}}>Flat List Component</Text>
      <FlatList
        data={movieData}
        renderItem={MovieItem}
        keyExtractor={movieData => {
          movieData.id;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'green',
  },
  item: {
    padding: 16,
    marginVertical: 10,
    backgroundColor: 'lightgrey',
    borderRadius: 10,
  },
});

export default FlatListComponent;
