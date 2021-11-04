import React from "react";
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { 
    View, Image, StyleSheet, TextInput,
    Text, TouchableOpacity, Dimensions, SafeAreaView, ScrollView
} from "react-native";

const width = Dimensions.get('window').width;

export function RecorverPass1()
{   
    const navigation = useNavigation(); 

    return(
        <SafeAreaView style={styles.scrollArea}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    <Image
                        style={styles.logo}
                        source={require('../img/Logo-png.png')}
                    />
                    <Text style = {{fontWeight: 'bold', paddingTop: 90 }}>Esqueci minha senha</Text>
                    <Text style = {{paddingTop: 26 }}>Informe o e-mail de recuperação</Text>

                    <TextInput
                    style={styles.InputLogin}
                    placeholder= "E-mail"
                    ></TextInput>

                    <TouchableOpacity style = {styles.ButtonSend} onPress={()=> { navigation.navigate('Senha') }}>
                        <Text style = {{color:'#FFF', fontWeight: 'bold'}}>ENVIAR</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <StatusBar style="auto" />
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
        marginTop: 90,
        width: 90,
        height: 90

    },
    InputLogin: {
        borderWidth: 1,
        borderRadius: 30,
        padding: 10,
        width: 320,
        height: 45,
        textAlign: 'left',
        borderColor: '#bcbcbc',
        margin: 12,
        marginTop: 90,

    },

    ButtonSend: {
        borderRadius: 30,
        padding: 10,
        width: 320,
        height: 45,
        textAlign: 'left',
        borderColor: '#b8b7b8',
        margin: 12,
        backgroundColor: '#448893',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },

    ButtonBack: {
        borderRadius: 30,


    },

});
