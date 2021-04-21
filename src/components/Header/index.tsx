import React from 'react';

import { Container, Content, Greeting, UserName, Avatar } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <Greeting>Olá,</Greeting>
        <UserName>Vinícius</UserName>
      </Content>

      <Avatar source={{uri: 'https://github.com/viniciusmendite.png'}}/>
    </Container>
  );
}