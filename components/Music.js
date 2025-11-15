import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Music = ({ title, band, icon_name, poster }) => (
    <View style={styles.Box}>
        <Image source = {poster} style={{width: '100%', height: 400}} />
        <Text>Album: {title}</Text>
        <Text>Band: {band}</Text>
        <FontAwesome6 name={icon_name} size={20} color="#B23B23" />
    </View>
);

const styles = StyleSheet.create ({
    Box: {
        width: 370,
        height: 450,
        marginTop: 50,
        borderColor: 'black',
        borderWidth: 3,
    },
})

export default Music;