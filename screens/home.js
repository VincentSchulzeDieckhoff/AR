import React from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';


import {globalStyles} from '../global/globalStyles';

const Home = ({navigation}) => {
  return (
    <View style={globalStyles.container}>
      <TouchableOpacity>
        <View
          style={{
            ...globalStyles.homeItem,
            ...globalStyles.listItemContainer,
          }}>
          <Text
            style={{
              ...globalStyles.homeItemText,
              width: '70%',
            }}>
            Routen
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={{
            ...globalStyles.homeItem,
            ...globalStyles.listItemContainer,
          }}>
          <Text
            style={{
              ...globalStyles.homeItemText,
              width: '70%',
            }}>
            POI
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={{
            ...globalStyles.homeItem,
            ...globalStyles.listItemContainer,
          }}>
          <Text
            style={{
              ...globalStyles.homeItemText,
              width: '70%',
            }}>
            Blind Date
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AR');
        }}>
        <View
          style={{
            ...globalStyles.homeItem,
            ...globalStyles.listItemContainer,
          }}>
          <Text
            style={{
              ...globalStyles.homeItemText,
              width: '70%',
            }}>
            AR Feature
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
