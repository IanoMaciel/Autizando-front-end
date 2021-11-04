import React, { useState } from 'react';
import { View, Picker, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export function FindExpertScreen() 
{
    const [selectedValue, setSelectedValue] = useState("java");
    return (

        <View style={styles.container}>
            
            <LinearGradient
                    // Background Linear Gradient
                    colors={['rgba(0,0,0,0.8)', 'transparent']}
                    style={styles.background}
                   
                />
            <Text style = {{color:'#FFF', textAlign: 'center', padding: 10, fontWeight: 'bold'}}>Encontre seu Profissional</Text>
           
            <View style={styles.buttonPicker1}>
            <Picker
                selectedValue={selectedValue}
                 style={{ height: 50, width: 150 }}
                 onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Localidade" value="java" />
                <Picker.Item label=" " value="js" />   
            </Picker>
            </View>

            <View style={styles.buttonPicker2}>
            <Picker
                selectedValue={selectedValue}
                 style={{ height: 50, width: 150 }}
                 onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Faixa de preços" value="java" />
                <Picker.Item label=" " value="js" />   
            </Picker>
            </View>

            <View style={styles.buttonPicker3}>
            <Picker
                selectedValue={selectedValue}
                 style={{ height: 50, width: 150 }}
                 onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Gênero do especialista" value="java" />
                <Picker.Item label=" " value="js" />   
            </Picker>
            </View>

            <TouchableOpacity style={styles.search}>
                <Text style = {{color:'#FFF', fontWeight: 'bold'}}>Buscar</Text>
            </TouchableOpacity>

            <Image
                style={styles.logo}
                source={require('../img/Logo-png.png')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#448893',
        paddingTop: 40,
        
    }, 
    search: {
        borderRadius: 30,
        padding: 10,
        width: 320,
        height: 45,
        textAlign: 'left',
        borderColor: '#b8b7b8',
        margin: 12,
        marginTop: 220,
        backgroundColor: '#448893',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        marginTop: 27,
        width: 90,
        height: 90,
    },

    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 2000,
    },
    
    buttonPicker1: {
        backgroundColor: '#ffff',
        borderRadius: 30,
        padding: 10,
        width: 320,
        height: 45,
        justifyContent: 'center',
        //alignItems: 'center',
        textAlign: 'left',
        borderColor: '#b8b7b8',   
        top: 40,
    },
    
    buttonPicker2: {
        backgroundColor: '#ffff',
        borderRadius: 30,
        padding: 10,
        width: 320,
        height: 45,
        justifyContent: 'center',
        //alignItems: 'center',
        textAlign: 'left',
        borderColor: '#b8b7b8',   
        top: 70,  
    },

    buttonPicker3: {
        backgroundColor: '#ffff',
        borderRadius: 30,
        padding: 15,
        width: 320,
        height: 45,
        justifyContent: 'center',
        //alignItems: 'center',
        textAlign: 'left',
        borderColor: '#b8b7b8', 
        top: 100,  
    },

});