import styled from 'styled-components/native';
import { Platform } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

type Button = {
  status: string
}
export const StyledButton = styled.TouchableOpacity<Button>`
  background-color: ${({status}) => status === 'default' ? 'blue' : '#ff414d'};
  padding-left: ${wp('7%')}px;
  padding-right: ${wp('7%')}px;
  padding-top: ${wp('5%')}px;
  padding-bottom: ${wp('5%')}px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  margin-left: ${wp('7%')}px;
  margin-right: ${wp('7%')}px;
`;