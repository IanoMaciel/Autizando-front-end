import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


export function HomeScreen()
{
    const navigation = useNavigation(); 
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonHome} onPress={()=> { navigation.navigate('Profile') }}>
                <Text>Volte para tela de profile</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonHome: {
        width: 300,
        height: 45,
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
