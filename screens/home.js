import React from "react";
import { View, Text, Button, FlatList } from "react-native";


const Home = ({navigation}) => {

    return (
        <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
            <Button title="AR Feature" onPress={() => {
                navigation.navigate("AR")
            }}/>
        </View>
    )
}

export default Home;