import { StyleSheet, Text, View, Image } from 'react-native';
import { Input, Button } from 'react-native-elements';

export default function cadastroTela() {
  return (
    <View style={[styles.container, {
      flexDirection: "column",
    }]}>
      <View style={{ flex: 2 }}>
        <Image style={{ width: 220, height: 220 }} source={require('../cadastroTela/assets/Marca.jpeg')} />
        <Text style={{ color: "red", textAlign: 'center', fontWeight: 'bold', fontSize: 30 }}>CADASTRO</Text>
      </View>

      <Input label='Nome' placeholder="Informe o seu Nome" />
      
      <Input label='Email' placeholder="Informe a seu Email" />
      
      <Input label='Senha' placeholder="Informe a sua Senha" />
      <br></br>

      <View style={{ flex: 1 }} >

        <Button title="Cadastrar" buttonStyle={{ backgroundColor: 'red', width: 150, padding: 10, justifyContent: 'center' }} />

      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
