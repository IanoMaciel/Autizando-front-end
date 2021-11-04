import React from 'react';
import { View, Text, Image, StyleSheet  } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

export function CustomDrawer(props)
{
    return(
        <View style={styles.container}> 
            <View style={styles.areaProfile}>
                <Image
                    source={ require('../img/profile.png') }
                    style={styles.pictureProfile}
                />
                <Text style={{fontWeight: 'bold', fontSize: 19, color: '#000'}}>Full name</Text>
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>

            <View style={styles.logoDrawer}>
                <Image
                    source={ require('../img/Logo-png.png') }
                    style={{width: 60, height: 60}}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    pictureProfile: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 30
    },
    areaProfile: {
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoDrawer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        marginBottom: 50
    }
});