import { StyleSheet, Text, View, Image } from 'react-native';
import { Input, Button } from 'react-native-elements';

export default function TelaLogin() {
  return (
    <View style={[styles.container, {
      flexDirection: "column",
    }]}>
      <View style={{ flex: 2 }}>
        <Image style={{ width: 220, height: 220 }} source={require('../loginTela/assets/Marca.jpeg')} />
        <Text style={{ color: "red", textAlign: 'center', fontWeight: 'bold', fontSize: 30 }}>ACESSO</Text>
        <br></br>
      </View>

      <Input label='Email' placeholder="Informe o seu E-mail" />
      <br></br>
      <Input label='Senha' placeholder="Informe a sua Senha" />
      <br></br>

      <View style={{ flex: 2, marginVertical: 'auto' }} >

        <Button title="Logar" buttonStyle={{ backgroundColor: 'red', width: 150, padding: 10, justifyContent: 'center' }} />
        <br></br>
        <Button title="Cadastra-se" buttonStyle={{ backgroundColor: 'red', width: 150, padding: 10, justifyContent: 'center' }} />

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 5,
    alignContent: 'center',
    alignItems: 'center'
  },

});
