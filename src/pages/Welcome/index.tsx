import React from 'react';
import { Feather } from '@expo/vector-icons';

import { Container, Title, Image, Description, Button } from './styles';

import wateringImg from '../../assets/watering.png';
import { useNavigation } from '@react-navigation/native';

export function Welcome() {
  const { navigate } = useNavigation();

  function handleStart() {
    navigate('UserIdentification')
  }

  return (
    <Container>
      <Title>
        Gerencie {'\n'}
        suas plantas de {'\n'}
        forma fácil
        </Title>

      <Image resizeMode="contain" source={wateringImg} />

      <Description>
        Não esqueça mais de regar suas plantas.
        Nós cuidamos de lembrar você sempre que precisar
      </Description>

      <Button activeOpacity={0.7} onPress={handleStart}>
        <Feather name="chevron-right" size={32} color="#FFFFFF" />
      </Button>
    </Container>
  );
}