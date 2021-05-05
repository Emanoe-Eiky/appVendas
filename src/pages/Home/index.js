import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Touchable} from 'react-native';
import{MaterialIcons} from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native'
import {useFonts, Anton_400Regular} from '@expo-google-fonts/anton';


import Cadapio from '../../componets/hambugues/';

export default function Home(){
    const navigation = useNavigation();



    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                   source={require('../../asset/fotoDoBn.jpg')}
                   style={styles.image}
                />

                <View style={styles.textConteiner}>
                    <Text style={styles.text}>Hambúrguer</Text>
                    <Text style={[styles.text, {color: '#cececf'}]}>-</Text>
                    <Text style={[styles.text, {color: '#cececf'}]}>Fritas</Text>
                    <TouchableOpacity style={{position: 'absolute', right:0, alignSelf: 'center'}}>
                        <MaterialIcons
                        name="filter-list"
                        size={24}
                        color="#000"
                        />
                    </TouchableOpacity>
                </View>
            </View>

              <View style={styles.line} />
        
              <ScrollView>
                  <Text style={styles.text}>Cardápio</Text>

                  <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                      <Cadapio img={require('../../asset/batatinha.jpg')} cost="R$9,99" onClick={ ()=> navigation.navigate('Detil')}>
                          Batatinha
                      </Cadapio>
                      <Cadapio img={require('../../asset/pexels-andra-918581.jpg')} cost="R$20,99"  onClick={ ()=> navigation.navigate('Detil')}>
                          Hambúrguer de Bacon
                      </Cadapio>
                  </View>

                  <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                      <Cadapio img={require('../../asset/hambVega.jpg')} cost="R$40,99"  onClick={ ()=> navigation.navigate('Detil')}>
                          Hambúrguer vegano
                      </Cadapio>
                      <Cadapio img={require('../../asset/Pizza.jpg')} cost="R$70,99"  onClick={ ()=> navigation.navigate('Detil')}>
                         Pizza de Quijo e Pimenta
                      </Cadapio>
                  </View>

                  <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                      <Cadapio img={require('../../asset/HambBata.jpg')} cost="R$19,99"  onClick={ ()=> navigation.navigate('Detil')}>
                          Hambúrguer Batatinha
                      </Cadapio>
                      <Cadapio img={require('../../asset/pexels-valeria-boltneva-1251198.jpg')} cost="R$20,00"  onClick={ ()=> navigation.navigate('Detil')}>
                         Hambúrguer Gurme
                      </Cadapio>
                  </View>

                  <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                      <Cadapio img={require('../../asset/pizzaMu.jpg')} cost="R$60,99"  onClick={ ()=> navigation.navigate('Detil')}>
                          Pizza G da Queijo 
                      </Cadapio>
                      <Cadapio img={require('../../asset/HambConb.jpg')} cost="R$90,90"  onClick={ ()=> navigation.navigate('Detil')}>
                          Combo  de Hambúrguer mais fritras
                      </Cadapio>
                  </View>

                  <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                      <Cadapio img={require('../../asset/MiniPizza.jpg')} cost="R$15,99"  onClick={ ()=> navigation.navigate('Detil')}>
                          Mini Pizza
                      </Cadapio>
                      <Cadapio img={require('../../asset/hambMol.jpg')} cost="R$19,90"  onClick={ ()=> navigation.navigate('Detil')}>
                          Combo  de Hambúrguer mais fritras
                      </Cadapio>
                  </View>

              </ScrollView>        

        </View>
    );
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',

    },
    header:{
        marginBottom: 8
    },
    image:{
        width: '100%',
        height: 200,
    },

    textConteiner:{
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%',
    },

    text:{
        fontFamily: 'Anton_400Regular',
        fontSize: 26,
        marginHorizontal: '1%',
    },

    line:{
        borderBottomColor: '#d8d8d8',
        borderBottomWidth: 2,
    }
})