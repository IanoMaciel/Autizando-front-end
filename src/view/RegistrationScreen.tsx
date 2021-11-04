import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    View, Image, Text, TextInput, TouchableOpacity,
    StyleSheet, ScrollView, SafeAreaView, Dimensions
} from 'react-native';
import { Check } from '../component/Check';

const width = Dimensions.get('window').width;

export function RegistrationScreen()
{
    return(
        <SafeAreaView style={styles.scrollArea}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    <Image
                        style={styles.logo}
                        source={require('../img/Logo-png.png')}
                    />
                    <Text style={{fontWeight:'bold', paddingTop:50}}>Seja bem vindo(a)</Text>
                    <Text style={{marginTop: 10, paddingBottom: 20}}>Cadastra-se</Text>

                    <TextInput
                        style={styles.inputCad}
                        placeholder="Nome"
                    ></TextInput>

                    <TextInput
                        style={styles.inputCad}
                        placeholder="E-mail"
                    ></TextInput>
                    
                    <TextInput
                        secureTextEntry={true} 
                        style={styles.inputCad}
                        placeholder="Senha"
                    ></TextInput>

                    <View style={styles.termo}>
                        <Check/> 
                        <Text>
                            Eu li e concordo com os
                            <Text style={{color:'#448893'}}> Termos e Condições de Política de Privacidade</Text>
                        </Text>
                    </View>

                    <View style={styles.termo}>
                        <Check/> 
                        <Text style={{marginTop: 5}}>Sou profissional</Text>
                    </View>

                    <TouchableOpacity style={styles.buttonCad}>
                        <Text style={{color:'#fff', fontWeight: 'bold'}}>CADASTRAR</Text>
                    </TouchableOpacity>

                    <Text>Já possui conta?</Text>

                    <TouchableOpacity style={styles.buttonEntry}>
                        <Text style={{color:'#448893', fontWeight: 'bold'}}>ENTRE</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
		</SafeAreaView>
    );
}

const styles = StyleSheet.create({
    scrollArea: {
		flex: 1,
        paddingTop: 5,
        backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
    scrollView: {
        width:width,
        backgroundColor: '#fff'
    },
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    logo: {
        marginTop: 40,
        width: 90,
        height: 90
    }, 
    inputCad: {
        width: 320,
        height: 45,
        margin: 12,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#bcbcbc',
        padding:10
    },
    termo: {
        width: 310,
        marginLeft: -20,
        flexDirection: 'row'
    },
    buttonCad: {
        width: 320,
        height: 45,
        margin: 12,
        borderRadius: 30,
        backgroundColor: '#50555c',
        padding:10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonEntry: {
        width: 320,
        height: 45,
        margin: 12,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#448893',
        backgroundColor: '#fff',
        padding:10,
        alignItems: 'center',
        justifyContent: 'center'
    }
});