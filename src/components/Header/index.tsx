import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Container, Content, Greeting, UserName, Avatar } from './styles';

export function Header() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem('@plantmanager:user');
      setUserName(user || '');
    }

    loadStorageUserName();
  }, [])

  return (
    <Container>
      <Content>
        <Greeting>Olá,</Greeting>
        <UserName>{userName}</UserName>
      </Content>

      <Avatar source={{ uri: 'https://github.com/viniciusmendite.png' }} />
    </Container>
  );
}