import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
    View, Text, StyleSheet, Image,
    SafeAreaView, ScrollView, Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export function Profile()
{
    return (
		<SafeAreaView style={styles.scrollArea}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    {/* foto perfil  */}
                    <Image
                        style={styles.profilePicture}
                        source={require('../img/profile.png')}
                    />
                    <View style={{width: 340, borderWidth:0}}>
                        <Text style={{fontSize: 24, marginBottom: 10, marginTop: 10}}>Full Name, Age</Text>
                        
                        <View style={{flexDirection:'row'}}>
                            <Icon
                                name="map-marker"
                                size={20}
                                color="#000"
                            />
                            <Text style={{marginLeft: 20, fontSize:18}}>Manaus, Amazonas</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Icon
                                name="id-card"
                                size={20}
                                color="#000"
                            />
                            <Text style={{marginLeft: 10, fontSize:18}}>Psiquiatra</Text>
                        </View>  
                        <Text style={{color: '#448893', fontSize: 18, fontWeight:'bold'}}>R$ 60,00 - 60 MIN</Text>
                        
                        <Text style={{textAlign:'center', marginTop: 10, marginBottom: 10}}>
                            Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book
                        </Text>

                        <Text style={styles.textProfile}>Perfil</Text>
                        <View style={styles.hr}/>
                        <Text style={{color:'#448893', fontSize:18}}>Especialidade</Text>
                        <Text style={{fontSize:18}}>Exemple 1</Text>
                        <Text style={{fontSize:18}}>Exemple 2</Text>

                        <View style={styles.hr}/>
                        <Text style={{color:'#448893', fontSize:18}}>Experiência</Text>
                        <Text style={{fontSize:18}}>Exemple 1</Text>
                        <Text style={{fontSize:18}}>Exemple 2</Text>

                        <View style={styles.hr}/>
                        <Text style={{color:'#448893', fontSize:18}}>Formação</Text>
                        <Text style={{fontSize:18}}>Exemple 1</Text>
                        <Text style={{fontSize:18}}>Exemple 2</Text>   
                    </View>

                    <LinearGradient 
                    style={{
                        width: width,
                        height: height, 
                        marginTop: 15, 
                        alignItems: 'center',
                    }}
                        colors={['#448893','#fff']}>
                    
                        <View style={{width: 340}}>
                            <Text style={{color: '#fff', fontSize:24, fontWeight: 'bold', textAlign: 'center', marginTop: 10, marginBottom: 10}}>Avaliações</Text>
                            <View style={{alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
                                <Icon name="star" size={30} color="#fabc30"/>
                                <Icon name="star" size={30} color="#fabc30"/>
                                <Icon name="star" size={30} color="#fabc30"/>
                                <Icon name="star" size={30} color="#fabc30"/>
                                <Icon name="star" size={30} color="#fabc30"/>
                            </View>

                            <View style={styles.avaliacao}>
                                <View style={{alignItems:'center', justifyContent:'center', flexDirection:'row', marginTop: 10}}>
                                    <Icon name="star" size={30} color="#fabc30"/>
                                    <Icon name="star" size={30} color="#fabc30"/>
                                    <Icon name="star" size={30} color="#fabc30"/>
                                    <Icon name="star" size={30} color="#fabc30"/>
                                    <Icon name="star" size={30} color="#fabc30"/>
                                </View>
                                <View style={{marginTop: 10, marginBottom: 10}}>
                                    <Text style={{fontSize: 20, textAlign:'center'}}>Exemplo de avaliação sobre este profissional</Text>
                                    <Text style={{fontSize: 20, textAlign:'center', marginTop: 10}}>Name - Date</Text>
                                </View>
                            </View>

                            <View style={styles.avaliacao}>
                                <View style={{alignItems:'center', justifyContent:'center', flexDirection:'row', marginTop: 10}}>
                                    <Icon name="star" size={30} color="#fabc30"/>
                                    <Icon name="star" size={30} color="#fabc30"/>
                                    <Icon name="star" size={30} color="#fabc30"/>
                                    <Icon name="star" size={30} color="#fabc30"/>
                                    <Icon name="star" size={30} color="#fabc30"/>
                                </View>
                                <View style={{marginTop: 10, marginBottom: 10}}>
                                    <Text style={{fontSize: 20, textAlign:'center'}}>Exemplo de avaliação sobre este profissional</Text>
                                    <Text style={{fontSize: 20, textAlign:'center', marginTop: 10}}>Name - Date</Text>
                                </View>
                            </View>

                            <View style={styles.avaliacao}>
                                <View style={{alignItems:'center', justifyContent:'center', flexDirection:'row', marginTop: 10}}>
                                    <Icon name="star" size={30} color="#fabc30"/>
                                    <Icon name="star" size={30} color="#fabc30"/>
                                    <Icon name="star" size={30} color="#fabc30"/>
                                    <Icon name="star" size={30} color="#fabc30"/>
                                    <Icon name="star" size={30} color="#fabc30"/>
                                </View>
                                <View style={{marginTop: 10, marginBottom: 10}}>
                                    <Text style={{fontSize: 20, textAlign:'center'}}>Exemplo de avaliação sobre este profissional</Text>
                                    <Text style={{fontSize: 20, textAlign:'center', marginTop: 10}}>Name - Date</Text>
                                </View>
                            </View>
                            
                            <View style={styles.avaliacao}>
                                <View style={{alignItems:'center', justifyContent:'center', flexDirection:'row', marginTop: 10}}>
                                    <Icon name="star" size={30} color="#fabc30"/>
                                    <Icon name="star" size={30} color="#fabc30"/>
                                    <Icon name="star" size={30} color="#fabc30"/>
                                    <Icon name="star" size={30} color="#fabc30"/>
                                    <Icon name="star" size={30} color="#fabc30"/>
                                </View>
                                <View style={{marginTop: 10, marginBottom: 10}}>
                                    <Text style={{fontSize: 20, textAlign:'center'}}>Exemplo de avaliação sobre este profissional</Text>
                                    <Text style={{fontSize: 20, textAlign:'center', marginTop: 10}}>Name - Date</Text>
                                </View>
                            </View>
                        </View>
                        
                    </LinearGradient>
                </View>
            </ScrollView>
            <StatusBar style="auto" />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
    scrollArea: {
		flex: 1,
        backgroundColor: '#fff',
		alignItems: 'center',		
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
    profilePicture: {
        width: width,
        height: 400
    }, 
    textProfile: {
        fontWeight:'bold',
        fontSize: 18,
        paddingBottom: 5
    }, 
    hr: {borderBottomWidth: 2, marginTop: 5, marginBottom: 5},
    avaliacao: {
        width: 339,
        marginTop: 20,
        borderRadius: 30,
        backgroundColor: '#fff',
    }
});