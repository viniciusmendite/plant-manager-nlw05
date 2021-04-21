import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button } from '../../components/Button';
import { Footer } from '../UserIdentification/styles';

import { Container, Content, Emoji, Title, Description } from './styles';

export function Confirmation() {
  const { navigate } = useNavigation();

  function handleMoveOn() {
    navigate('PlantSelect');
  }

  return (
    <Container>
      <Content>
        <Emoji>
          😄
        </Emoji>
        <Title>
          Prontinho
        </Title>
        <Description>
          Agora vamos começar a cuidar das suas
          plantinhas com muito cuidado
        </Description>
        <Footer>
          <Button title="Começar" onPress={handleMoveOn} />
        </Footer>
      </Content>
    </Container>
  );
}