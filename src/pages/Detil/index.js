import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import Dot from '../../componets/Dot';
import Buttom from '../../componets/Buttom';
import Button from '../../componets/Button';
import Footer from '../../componets/Footer';

export default function Home({navigation}){

    navigation.setOptions({
        headerTitle: 'Batatina',
    })


    return (
        <ScrollView style={styles.container}>
            <Image
            source={require('../../asset///batatinha.jpg')}
            style={styles.image}
            resizeMode="cover"
            />
            <View>
                
                <View>
                    <Text style={[styles.title, {fontSize: 24}]}>R$9,99</Text>
                </View>

                <View opacity={0.3}>
                    <Text style={[styles.title, {fontSize:30}]}>Batatina frita</Text>
                </View>

                <View  style={styles.dotContsiner}>
                    <Dot color="#2379f4"/>
                    <Dot color="#fb6e53"/>
                    <Dot color="#ddd"/>
                    <Dot color="#000"/>
                </View>

                <View style={{flexDirection: 'row', width: '100%'}}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <Buttom bgColor= "#17181a" color="#fff"> 40</Buttom>
                        <Buttom>37</Buttom>
                        <Buttom>39</Buttom>
                        <Buttom>42</Buttom>
                    </ScrollView>
                </View>
                <View style={styles.textContent}>
                    <Text style={styles.textTitle}>
                        Batatina frita
                    </Text>
                    <Text style={styles.textList}>
                        descrição do produtojjjjjjjjjjj
                        jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
                        jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
                        jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
                        jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
                        jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj 
                    </Text>
                </View>
    
                 <Button/>

                 <View style={styles.line}/>

                 <Footer/>
                        
                
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container:{
        flex:1 ,
        width: '100%',
        backgroundColor: '#fff'

    },
    image:{
        width: '99.90%',
        height: 300,
        paddingHorizontal: '2%'
    },
    title:{
        fontFamily: 'Anton_400Regular',
        paddingHorizontal: '3%'
    },
    dotContsiner:{
        flexDirection: 'row',
        marginVertical: '7%'
    },
    textContent:{
        fontSize: 16,
        lineHeight: 25,
        marginVertical: '2%',
        paddingHorizontal: '2%'
    },
    textTitle:{
        fontSize: 22,
        marginVertical: '2%'
    },
    textList:{
        fontSize:16,
        lineHeight: 25,
    },
    line:{
        borderWidth: 1,
        borderBottomColor: '#ddd',
        marginVertical: '2%'
    }


})