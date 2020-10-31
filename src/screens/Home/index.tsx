import * as React from "react";
import { Text, View } from "react-native";
import Container from "../../component/Container";
import { Props } from "../../navigation";
import { StyledTitle, StyledButton, StyledInstruction, StyledView } from "./styles";

const Home: React.FC<Props> = ({ navigation }) => {
  const navigate = () => {
    navigation.navigate("questions");
  };
  return (
    <Container>
      <StyledView>
        <StyledTitle>Welcome to the Trivia challenge</StyledTitle>
        <StyledInstruction>
          You will be presented with 10 true or false questions
        </StyledInstruction>
        <StyledInstruction>Can you score 100?</StyledInstruction>
        <StyledButton onPress={navigate}>
          <Text style={{ color: "white" }}>Begin</Text>
        </StyledButton>
      </StyledView>
    </Container>
  );
};

export default Home;
