import React from 'react';
import {View, Text, StyleSheet, ScrollView} from  'react-native';

import Cadapio from '../hambugues';

export default function Footer(){
    return(
        <View>
            <Text style={styles.title}>Você Também pode Gostar</Text>
            <View style={{flexDirection: 'row'}}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{marginHorizontal: 10}}>
                        <Cadapio img={require('../../asset/hambMol.jpg')} cost="9,99">
                            Hambúrgue com molho 
                        </Cadapio>
                    </View>
                    <View style={{marginHorizontal: 10}}>
                        <Cadapio img={require('../../asset/hambMol.jpg')} cost="9,99">
                            Hambúrgue com molho 
                        </Cadapio>
                    </View>
                    
                </ScrollView>
            </View>
        </View>
        )
}
 const styles = StyleSheet.create({
     title:{
         fontSize: 24,
         fontFamily: 'Anton_400Regular',
         marginVertical: '2%',
         paddingHorizontal: '2%'

     }

 })