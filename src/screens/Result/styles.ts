import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { colors } from '../../utils/colors';
type InstructionProp = {
  status?: string;
}
export const StyledView = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding-left: ${wp('7%')}px;
  padding-right: ${wp('7%')}px;
  padding-top: ${wp('5%')}px;
  padding-bottom: ${wp('5%')}px;
  background-color: ${colors.white};
`;

export const StyledTitle = styled.Text`
  font-size: ${hp('3%')}px;
  text-align: center;
  margin-top: ${hp('4%')}px;
`;

export const StyledButton = styled.TouchableOpacity`
  width: 50%;
  background-color: #ff414d;
  padding-left: ${wp('7%')}px;
  padding-right: ${wp('7%')}px;
  padding-top: ${wp('5%')}px;
  padding-bottom: ${wp('5%')}px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`;

export const StyledInstruction = styled.Text<InstructionProp>`
  font-size: ${hp('2%')}px;
  padding-top: ${wp('3%')}px;
  padding-bottom: ${wp('3%')}px;
  color: ${({status}) => status === 'failed' ? 'red': 'green'};
`;

export const StyledInstructionResultText = styled.Text`
  font-size: ${hp('2%')}px;
  padding-top: ${wp('3%')}px;
  padding-bottom: ${wp('3%')}px;
`;

export const StyledRow = styled.View`
 flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;