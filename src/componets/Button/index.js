import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from  'react-native';

export default function Button(){
    return(
        <View style={styles.container}> 
            <TouchableOpacity style={styles.bnContainer}>
                <Text style={styles.Title}>Comprar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',

    },
    bnContainer:{
        width: '90%',
        height: 50,
        backgroundColor: '#17181a',
        marginVertical: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Title:{
        fontSize: 17,
        color: '#fff'
    }

})