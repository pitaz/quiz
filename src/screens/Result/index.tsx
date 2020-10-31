import * as React from "react";
import { FlatList } from "react-native";
import { Html5Entities } from "html-entities";
import Button from "../../component/Button";
import Container from "../../component/Container";
import { Props } from "../../navigation";
import {
  StyledTitle,
  StyledInstruction,
  StyledView,
  StyledInstructionResultText,
  StyledRow,
} from "./styles";

const Result: React.FC<Props> = ({ navigation, route }) => {
  const navigate = () => {
    navigation.navigate("home");
  };
  const entities = new Html5Entities();
  const total = route?.params?.result?.length;
  const passed = route?.params?.result?.filter((i: any) => i.passed === true)
    .length;
  const Row = ({ data }: any) => {
    return (
      <>
        <StyledInstruction status={data?.item?.passed ? "passed" : "failed"}>
          {data?.index + 1}. {entities.decode(data?.item?.question)}
        </StyledInstruction>
        <StyledRow>
          <StyledInstructionResultText>
            Status: {data?.item?.passed ? "Passed" : "Failed"}
          </StyledInstructionResultText>
          <StyledInstructionResultText>
            Answer: {data?.item?.correct_answer}
          </StyledInstructionResultText>
        </StyledRow>
      </>
    );
  };
  return (
    <Container>
      <StyledView>
        <StyledTitle>You scored:</StyledTitle>
        <StyledTitle>
          {passed}/{total}
        </StyledTitle>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={route?.params?.result}
          renderItem={(item: any) => <Row data={item} />}
          keyExtractor={(item: any) => item?.question + Math.random()}
        />
        <Button onPress={navigate} status="primary" label="Try again?" />
      </StyledView>
    </Container>
  );
};

export default Result;
