import React from 'react';
import { Container, Title, Image, Description, Button, ButtonText } from './styles';

import wateringImg from '../../assets/watering.png';

export function Welcome() {
  return (
    <Container>
      <Title>
        Gerencie {'\n'} 
        suas plantas {'\n'}
        de forma fácil
        </Title>

      <Image source={wateringImg} />

      <Description>
        Não esqueça mais de regar suas plantas.
        Nós cuidamos de lembrar você sempre que precisar
      </Description>

      <Button activeOpacity={0.7}>
        <ButtonText>
          {'>'}
        </ButtonText>
      </Button>
    </Container>
  );
}