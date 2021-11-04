import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

/*View and component*/
import { HomeScreen } from './src/view/HomeScreen';
import { Profile } from './src/view/Profile';
import { CustomDrawer } from './src/component/CustomDrawer';
import { PatientForm } from './src/view/PatientForm';
import { Login } from './src/view/Login';
import { Logout } from './src/view/Logout';
import { RecorverPass1 } from './src/view/RecorverPass1';
import { RecorverPass2 } from './src/view/RecoverPass2';
import { RegistrationScreen } from './src/view/RegistrationScreen';
import { FindExpertScreen } from './src/view/FindExpertScreen';


const Drawer = createDrawerNavigator();

export function MyDrawer()
{
  return(
    <Drawer.Navigator 
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#448893',
          //width: 240,
        },
        drawerActiveBackgroundColor: '#fff',
        drawerInactiveTintColor: '#fff',
        drawerActiveTintColor: '#000',
        headerStyle: {
          backgroundColor: '#448893', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
      }}
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawer {...props}/>}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Perfil" component={Profile} />
      <Drawer.Screen name="Cadastro" component={RegistrationScreen} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Formulário do Paciente" component={PatientForm}/>
      <Drawer.Screen name="Encontrar Especialista" component={FindExpertScreen}/>
      <Drawer.Screen name="Recuperar Senha" component={RecorverPass1}/>
      <Drawer.Screen name="Senha" component={RecorverPass2}/>
      <Drawer.Screen name="Sair" component={Logout}/>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
  );
}