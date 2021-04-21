import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

interface EnviromentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

export function EnviromentButton({ title, active = false, ...rest }: EnviromentButtonProps) {
  return (
    <Container {...rest} isActive={active}>
      <Title isActive={active}>{title}</Title>
    </Container>
  );
}