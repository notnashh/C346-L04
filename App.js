import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Music from "./components/Music";


class MyApp extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require("./img/header.jpg")} 	style={{width: '100%', height: 120}} />
                <ScrollView style={styles.scroll}>
                    <Music title="We're here not to be loved" band="Fleshwater" icon_name="skull" poster={require("./img/fleshwater.jpg")} />
                    <Music title="Divine Inner Tension" band="Hail The Sun" icon_name="skull" poster={require("./img/hailthesun.jpg")} />
                    <Music title="With Ears To See And Eyes To Hear" band="Sleeping With Sirens" icon_name="skull" poster={require("./img/sleepingwithsirens.jpg")} />
                    <Music title="Slipknot" band="Slipknot" icon_name="skull" poster={require("./img/slipknot.jpg")} />
                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'left',
        backgroundColor: '#90EE90',
        justifyContent: 'center',
    },
    scroll: {
        marginTop: 20,
        width: '100%',
        paddingHorizontal: 20,
        backgroundColor: '#90EE90'
    },
});

export default MyApp;