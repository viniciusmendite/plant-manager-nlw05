import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';

import { Container, Title } from './styles';

interface PlantsProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  }
}

export const PlantCardPrimary = ({data, ...rest}: PlantsProps) => {
  return (
    <Container {...rest}>
      <SvgFromUri uri={data.photo} width={70} height={70} />
      <Title>
        {data.name}
      </Title>
      </Container>
  );
}