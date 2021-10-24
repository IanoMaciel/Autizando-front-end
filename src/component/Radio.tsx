import * as React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

export function Radio()
{
    const [value, setValue] = React.useState('');

    return (
        <View style={{flexDirection:'row', width: 340, marginBottom: 10}}>
            <View>
                <View style={{flexDirection:'row'}}>
                    <RadioButton
                        value="1"
                        status={ value === '1' ? 'checked' : 'unchecked' }
                        onPress={() => setValue('1')}
                    />
                    <Text style={{marginTop: 7}}>Diagnóstico</Text>
                </View>

                <View style={{flexDirection:'row'}}>
                    <RadioButton
                        value="2"
                        status={ value === '2' ? 'checked' : 'unchecked' }
                        onPress={() => setValue('2')}
                    />
                    <Text style={{marginTop: 7}}>Psicologo</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <RadioButton
                        value="3"
                        status={ value === '3' ? 'checked' : 'unchecked' }
                        onPress={() => setValue('3')}
                    />
                    <Text style={{marginTop: 7}}>Pediatra</Text>
                </View>
            </View>
            
            <View>
                <View style={{flexDirection:'row'}}>
                    <RadioButton
                        value="4"
                        status={ value === '4' ? 'checked' : 'unchecked' }
                        onPress={() => setValue('4')}
                    />
                    <Text style={{marginTop: 7}}>Neurologista</Text>
                </View>

                <View style={{flexDirection:'row'}}>
                    <RadioButton
                        value="5"
                        status={ value === '5' ? 'checked' : 'unchecked' }
                        onPress={() => setValue('5')}
                    />
                    <Text style={{marginTop: 7}}>Fonoaudiologo</Text>
                </View>

                <View style={{flexDirection:'row'}}>
                    <RadioButton
                        value="6"
                        status={ value === '6' ? 'checked' : 'unchecked' }
                        onPress={() => setValue('6')}
                    />
                    <Text style={{marginTop: 7}}>Outro:</Text>
                    <TextInput style={styles.input}></TextInput>
                </View>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        borderRadius: 30,
        borderColor: '#448893',
        width: 143,
        marginLeft: 10,
        paddingLeft: 10
    }

});