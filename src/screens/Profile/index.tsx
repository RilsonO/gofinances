import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export function Profile() {
  return (
    <View>
      <Text>Perfil</Text>

      <TextInput
        testID='input-name'
        placeholder='Nome'
        autoCorrect={false}
        value='Rilson'
      />

      <TextInput
        testID='input-surname'
        placeholder='Sobrenome'
        autoCorrect={false}
        value='Oliveira'
      />

      <Button title={'Salvar'} onPress={() => {}} />
    </View>
  );
}
