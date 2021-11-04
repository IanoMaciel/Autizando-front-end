import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, RadioButton } from 'react-native-paper';
import { Radio } from '../component/Radio';
import { 
    View, Text, StyleSheet, TextInput,
    SafeAreaView, ScrollView, Picker, Dimensions, TouchableOpacity
} from 'react-native';

const width = Dimensions.get('window').width;

export function PatientForm()
{
    const [selectedEstado, setEstado] = useState("Estado");
    const [selectedCidade, setCidade] = useState("Cidade");
    const [value, setValue] = React.useState('');
    const [value1, setValue1] = React.useState('');
    const [value2, setValue2] = React.useState('');

	return (
		<SafeAreaView style={styles.scrollArea}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    <Text style={styles.textForm}>Nome completo<Text style={{color: 'red'}}>*</Text></Text>			
                    <TextInput style={styles.formInput} placeholder="Nome"></TextInput>
                    <Text style={styles.textForm}>Seu melhor e-mail<Text style={{color: 'red'}}>*</Text></Text>
                    <TextInput style={styles.formInput} placeholder="E-mail"></TextInput>
                    <Text style={styles.textForm}>Telefone<Text style={{color: 'red'}}>*</Text></Text>
                    <TextInput style={styles.formInput} placeholder="E-mail"></TextInput>
                    
                    <Text style={styles.textForm}>Onde você mora?<Text style={{color: 'red'}}>*</Text></Text>
                    
                    <View style={{flexDirection:'row'}}>
                        <View style={styles.selected}>
                            <Picker
                                selectedValue={selectedEstado}
                                style={styles.selectForm}
                                onValueChange={(itemValue, itemIndex) => setEstado(itemValue)}
                            >
                                <Picker.Item label="Estado" value="" />
                                <Picker.Item label="Amazonas" value="AM" />
                                <Picker.Item label="Rio de Janeiro" value="RJ" />
                            </Picker>
                        </View>

                        <View style={styles.selected}>
                            <Picker
                                selectedValue={selectedCidade}
                                style={styles.selectForm}
                                onValueChange={(itemValue, itemIndex) => setCidade(itemValue)}
                            >
                                <Picker.Item label="Cidade" value="" />
                                <Picker.Item label="Itacoatiara" value="1" />
                                <Picker.Item label="Rio de Janiero " value="2" />
                            </Picker>
                        </View>
                    </View>
                    <Text style={styles.textForm}>Idade<Text style={{color: 'red'}}>*</Text></Text>
                    <TextInput style={styles.formInput} placeholder="Idade"></TextInput>

                    <Text style={styles.textForm}>O que busca?<Text style={{color: 'red'}}>*</Text></Text>
                    <Radio/>
                    
                    <View style={{flexDirection: 'row', width: 340}}>
                        <View style={{marginRight: 40}}>
                            <Text style={styles.textFormSmall}>Já foi diagnosticado?<Text style={{color: 'red'}}>*</Text></Text>
                            <View style={{flexDirection: 'row'}}>
                                <RadioButton
                                    value="1"
                                    status={ value === '1' ? 'checked' : 'unchecked' }
                                    onPress={() => setValue('1')}
                                />
                                <Text style={{marginTop: 7}}>Sim</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <RadioButton
                                    value="2"
                                    status={ value === '2' ? 'checked' : 'unchecked' }
                                    onPress={() => setValue('2')}
                                />
                                <Text style={{marginTop: 7}}>Não</Text>
                            </View>
                        </View>

                        <View>
                            <Text style={styles.textFormSmall}>Tem plano de saúde?<Text style={{color: 'red'}}>*</Text></Text>
                            <View style={{flexDirection: 'row'}}>
                                <RadioButton
                                    value="3"
                                    status={ value1 === '3' ? 'checked' : 'unchecked' }
                                    onPress={() => setValue1('3')}
                                />
                                <Text style={{marginTop: 7}}>Sim</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <RadioButton
                                    value="4"
                                    status={ value1 === '4' ? 'checked' : 'unchecked' }
                                    onPress={() => setValue1('4')}
                                />
                                <Text style={{marginTop: 7}}>Não</Text>
                            </View>
                        </View>
                    </View>

                    <Text style={{color: '#c6c6c6', width: 340, textAlign: 'justify'}}>
                        Está ciente que esse projeto é social e sem fins lucrativos onde os profissionais atendem com valor social (abaixo do valor praticado no mercado), e esse valor será pago diretamente pelo paciente ao profissional.<Text style={{color: 'red'}}>*</Text>
                    </Text>
                    <View style={{flexDirection: 'row', width: 340, marginBottom: 10}}>
                        <View style={{flexDirection: 'row', marginRight: 170}}>
                            <RadioButton
                                value="1"
                                status={ value2 === '1' ? 'checked' : 'unchecked' }
                                onPress={() => setValue2('1')}
                            />
                            <Text style={{marginTop: 7}}>Sim</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <RadioButton
                                value="2"
                                status={ value2 === '2' ? 'checked' : 'unchecked' }
                                onPress={() => setValue2('2')}
                            />
                            <Text style={{marginTop: 7}}>Não</Text>
                        </View>
                    </View>

                    <Text style={{width: 310, textAlign: 'left'}}>Envie um cometário se desejar</Text>
                    <TextInput style={styles.formInput}></TextInput>

                    <TouchableOpacity style={styles.buttonSend}>
                        <Text style={{fontWeight: 'bold', color: '#fff'}}>Enviar</Text>
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
        width: width,
        alignItems: 'center',
        justifyContent: 'center'
    },
	formInput: {
		width: 340,
		height: 45,
		borderWidth: 1,
		borderColor: '#448893',
		borderRadius: 30,
		padding: 10,
		marginBottom: 10
	},
    textForm: {
        width: 310,
        textAlign: 'left'
    }, 
    textFormSmall: {
        marginLeft: 10
    },
    selectForm: {
        width: 160,
        height: 45,
        color: '#000',
    },
    selected: {
        borderWidth: 1,
        borderColor: '#448893',
        borderRadius: 30,
        marginRight: 5,
        marginLeft: 5,
        marginBottom: 10
    },
    buttonSend: {
        width: 340,
        height: 45,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 30,
        backgroundColor: '#50555c',
        alignItems: 'center',
        justifyContent: 'center'
    }
});


