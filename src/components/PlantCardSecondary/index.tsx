import { Feather } from '@expo/vector-icons';
import React from 'react';
import { RectButtonProps, Swipeable } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';
import colors from '../../styles/colors';

import { 
  Container, 
  Title, 
  Details, 
  TimeLabel, 
  Time,
  AnimatedContainer,
  Content,
  Button
} from './styles';

interface PlantsProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  };
  handleRemove: () => void;
}

export const PlantCardSecondary = ({ data, handleRemove, ...rest }: PlantsProps) => {
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <AnimatedContainer>
          <Content>
            <Button onPress={handleRemove}>
              <Feather name="trash" size={32} color={colors.white}/>
            </Button>
          </Content>
          </AnimatedContainer>
      )}
    >
      <Container {...rest}>
        <SvgFromUri uri={data.photo} width={50} height={50} />
        <Title>
          {data.name}
        </Title>

        <Details>
          <TimeLabel>
            Regar às
          </TimeLabel>
          <Time>
            {data.hour}
          </Time>
        </Details>
      </Container>
    </Swipeable>
  );
}