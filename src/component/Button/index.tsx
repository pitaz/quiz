import React from "react";
import { GestureResponderEvent, Text } from "react-native";
import { StyledButton } from "./styles";

type Props = {
  onPress: (event: GestureResponderEvent) => void;
  label: string;
  status: string;
};
const Button: React.FC<Props> = ({ onPress, label, status }) => {
  return (
    <StyledButton status={status} onPress={onPress}>
      <Text style={{ color: "white" }}>{label}</Text>
    </StyledButton>
  );
};

export default Button;
