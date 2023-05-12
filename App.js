import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Input } from 'react-native-elements';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./assets/download.png')}
      />
      <Text style={styles.text}> Bem-Vindo ao Twitter!</Text>
      <Button
        title="Entrar"
        onPress={() => navigation.navigate('Opcoes')}
        style={styles.button}
      />
    </View>
  );
};

const OpcoesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./assets/download.png')}
      />
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
        style={styles.button}
      />
      <Button
        title="Cadastro"
        onPress={() => navigation.navigate('Cadastro')}
        style={styles.button}
      />
    </View>
  );
};

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Input placeholder="E-mail" />
      <Input placeholder="Senha" secureTextEntry />
      <Button
        title="Enviar"
        onPress={() => navigation.navigate('loginSucesso')}
        style={styles.button}
      />
    </View>
  );
};

const CadastroScreen = () => {
  return (
    <View style={styles.container}>
      <Input placeholder="Nome" />
      <Input placeholder="Data de Nascimento" />
      <Input placeholder="E-mail" />
      <Input placeholder="Senha" secureTextEntry />
      <Button
        title="Enviar"
        onPress={() => navigation.navigate('CadastroSucesso')}
        style={styles.button}
      />
    </View>
  );
};

const loginSucesso = () => {
  return (
    <View style={styles.container}>
      <Input placeholder="E-mail" />
      <Button
        title="Enviar"
        onPress={() => navigation.navigate('Cadastro')}
        style={styles.button}
      />
    </View>
  );
};

const CadastroSucesso = () => {
  return (
    <View style={styles.container}>
      <Input placeholder="Nome" />
      <Button
        title="Enviar"
        onPress={() => navigation.navigate('Cadastro')}
        style={styles.button}
      />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Opcoes" component={OpcoesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#50ABF1',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    marginVertical: 20,
    color: '#fff',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  button: {
    marginVertical: 10,
    color: 'fff'
  },
});

export default App;