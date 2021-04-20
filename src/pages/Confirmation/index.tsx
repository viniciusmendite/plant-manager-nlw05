import React from 'react';
import { Button } from '../../components/Button';
import { Footer } from '../UserIdentification/styles';

import { Container, Content, Emoji, Title, Description } from './styles';

export function Confirmation() {
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
        <Button />
      </Footer>
      </Content>

      </Container>
  );
} 