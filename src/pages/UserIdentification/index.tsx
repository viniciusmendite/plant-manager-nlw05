import React, { useState } from 'react';
import { Keyboard, Platform, TouchableWithoutFeedback, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Button } from '../../components/Button';

import {
  Container,
  KeyboardAvoiding,
  Content,
  Form,
  Emoji,
  Title,
  Input,
  Footer
} from './styles';

export function UserIdentification() {
  const { navigate } = useNavigation();

  const [isFocused, setIsFocused] = useState(false);
  const [name, setName] = useState('');

  function handleInputBlur() {
    setIsFocused(false);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  async function handleSubmit() {
    if (!name)
      return Alert.alert('Ops...', 'Me diz como chamar você 😢');

    await AsyncStorage.setItem('@plantmanager:user', name);

    navigate('Confirmation')
  }

  return (
    <Container>
      <KeyboardAvoiding behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Content>
            <Form>
              <Emoji>
                😄
          </Emoji>
              <Title>
                Como podemos {'\n'} chamar você?
          </Title>
              <Input
                placeholder="Digite um nome"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                isFocused={isFocused}
                isFilled={!!name}
                onChangeText={text => setName(text)}
              />
              <Footer>
                <Button onPress={handleSubmit} title="Confirmar" />
              </Footer>
            </Form>
          </Content>
        </TouchableWithoutFeedback>
      </KeyboardAvoiding>
    </Container>
  );
}