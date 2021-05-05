import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Cadapio(props) {
    function filterDesc(desc){
        if(desc.length < 27){
            return desc;
        }
        return `${desc.substring(0, 20)}...`;
    }
    return (
        <TouchableOpacity style={styles.contiener} onPress={props.onClick}>
            <Image
                source={props.img}
                style={styles.hambImg}
            />
            <Text style={styles.hamText}>
               {filterDesc(props.children)}
            </Text>
            <View opacity={0.4}>
            <Text style={styles.hamText}> {props.cost} </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    contiener:{
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    hambImg:{
        width:175,
        height: 175,
    },
    hamText:{
        fontSize: 16
    }
    
})