import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native'
import Cardview from './Cardview'
import data from './abc.JSON'

const Api = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data.India.States}
        keyExtractor={(item) => item[0]}
        renderItem={({ item }) => {
          const [stateName, stateDesc] = item;
            <FlatList
              data={stateDesc["Places to visit"]}
              keyExtractor={(place) => place.Name}
              renderItem={({ item: place }) => (
                <Cardview
                  imageSource={place.Attractions[0].Image}
                  title={place.Name}
                  description={place.Description}
                />
              )}
            />
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});

export default Api;
