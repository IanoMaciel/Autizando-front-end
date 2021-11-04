import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export function Logout() 
{
    return (
        <View style={styles.container}>
            <Text>Sair da aplicação</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center'
    }
});