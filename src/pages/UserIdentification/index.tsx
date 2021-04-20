import React, { useState } from 'react';
import { Platform } from 'react-native';

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
  const [isFocused, setIsFocused] = useState(false);
  const [name, setName] = useState(''); 

  function handleInputBlur() {
    setIsFocused(false);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  return (
    <Container>
      <KeyboardAvoiding behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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
            onChangeText={setName}
            />
            <Footer>
              <Button />
            </Footer>
          </Form>
        </Content>
      </KeyboardAvoiding>
    </Container>
  );
}