import { StatusBar } from 'expo-status-bar';
import React from "react";
import { 
    View, StyleSheet, TextInput, Text, TouchableOpacity, 
    Image, ScrollView, SafeAreaView, Dimensions
} from "react-native";

const width = Dimensions.get('window').width;

export function RecorverPass2(){
    return(
        <SafeAreaView style={styles.scrollArea}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    <Image
                        style = {styles.logo}
                        source={require('../img/Logo-png.png')}
                    />
                    <Text style = {{fontWeight: 'bold', paddingTop: 100, marginBottom: 30 }}>Esqueci minha senha</Text>
                    <Text style = {{paddingTop: 26 }}>Insirra o código enviado para</Text>
                    <Text style = {{color:'#448893', fontWeight:'bold'}}>nome@gmail.com</Text>

                    <View style={styles.pass}> 
                        <TextInput style={styles.InputPass}></TextInput>
                        <TextInput style={styles.InputPass}></TextInput>
                        <TextInput style={styles.InputPass}></TextInput>
                        <TextInput style={styles.InputPass}></TextInput>
                    </View>

                    <TouchableOpacity style = {styles.ButtonSend}>
                    <Text style = {{color:'#FFF', fontWeight: 'bold'}}>CONTINUAR</Text>
                    </TouchableOpacity>
                    <StatusBar style="auto" />
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
    pass: {
        marginTop: 40,
        marginBottom: 30,
        flexDirection: 'row',
        padding: 10
    },
    InputPass: {
        width: 58,
        height: 57,
        backgroundColor: '#c4c4c4',
        borderRadius: 12,
        margin: 10,
        padding: 15,
        textAlign: 'center'
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
    }
});
