import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 40px 20px;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 28px;
  line-height: 34px;
  font-weight: bold;
  text-align: center;
  color: ${colors.heading};
  margin-top: 38px;
  font-family: ${fonts.heading};
`;

export const Image = styled.Image`
  height: ${Dimensions.get('window').width * 0.7};
`;

export const Description = styled.Text`
  text-align: center;
  font-size: 18px;
  padding: 0 20px;
  color: ${colors.heading};
  font-family: ${fonts.text};
`;

export const Button = styled.TouchableOpacity`
  background: ${colors.green};
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  margin-bottom: 10px;
  height: 56px;
  width: 56px;
`;
