import { Dimensions, Platform } from 'react-native';
import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { colors } from '../../utils/colors';
const {width, height} = Dimensions.get('window');

export const StyledView = styled.View`
  width: ${width}px;
  height: ${height}px;
  justify-content: center;
  align-items: center;
  padding-left: ${wp('7%')}px;
  padding-right: ${wp('7%')}px;
  padding-top: ${wp('5%')}px;
  padding-bottom: ${wp('5%')}px;
  background-color: ${colors.white};
`;

export const StyledRow = styled.View`
 width: 100%;
 flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: ${hp('4%')}px;
`;

export const StyledTitle = styled.Text`
  font-size: ${ Platform.OS === 'ios' ? hp('2%') : hp('3%')}px;
  text-align: center;
  margin-bottom: ${hp('4%')}px;
`;

export const StyledButton = styled.TouchableOpacity`
  
  background-color: #ff414d;
  padding-left: ${wp('7%')}px;
  padding-right: ${wp('7%')}px;
  padding-top: ${wp('5%')}px;
  padding-bottom: ${wp('5%')}px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

export const StyledInstruction = styled.Text`
  font-size: ${ Platform.OS === 'ios' ? hp('2%') : hp('2.5%')}px;
  text-align: center;
  padding-top: ${wp('5%')}px;
  padding-bottom: ${wp('5%')}px;
`;
export const StyledLoadingText = styled.Text`
  font-size: ${ Platform.OS === 'ios' ? hp('2%') : hp('3.5%')}px;
  text-align: center;
  padding-top: ${wp('5%')}px;
  padding-bottom: ${wp('5%')}px;
`;
