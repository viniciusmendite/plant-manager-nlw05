import { RectButton } from 'react-native-gesture-handler';
import { Animated } from 'react-native';
import styled from 'styled-components/native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const AnimatedContainer = styled(Animated.View)``

export const Content = styled.View``

export const Button = styled(RectButton)`
  width: 100px;
  height: 85px;
  background: ${colors.red};
  margin-top: 15px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  position: relative;
  right: 10px;
  padding-left: 15px;
`

export const Container = styled(RectButton)`
  width: 100%;
  padding: 25px 10px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  background: ${colors.shape};
  margin: 5px 0;
  
`;

export const Title = styled.Text`
  flex:1;
  margin-left: 10px;
  font-family: ${fonts.heading};
  font-size: 17px;
  color: ${colors.heading};
  `;

export const Details = styled.View`
  align-items: flex-end;
`;

export const TimeLabel = styled.Text`
  font-size: 16px;
  font-family: ${fonts.text};
  color: ${colors.body_light};
`;

export const Time = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-family: ${fonts.heading};
  color: ${colors.body_dark};
  `;

