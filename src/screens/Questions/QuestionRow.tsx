import React, { useEffect } from "react";
import { View, Alert } from "react-native";
import { RadioButton } from "react-native-paper";
import Button from "../../component/Button";
import Card from "../../component/Card";
import {
  StyledTitle,
  StyledInstruction,
  StyledView,
  StyledRow,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Html5Entities } from "html-entities";

type Results = {
  category: string;
  question: string;
  correct_answer: string;
};
type Item = {
  item: Results;
  index: number;
};
type Data = {
  data: Item;
  scrollToIndex: Function;
  setResult: Function;
  result: Array<[]>;
  questions: Array<[]>;
};
const QuestionRow: React.FC<Data> = ({
  data,
  scrollToIndex,
  setResult,
  result,
  questions,
}) => {
  const [value, setValue] = React.useState<string>("");
  const navigation = useNavigation();
  const entities = new Html5Entities();

  const handleScroll = () => {
    if (result.length < 9) scrollToIndex(result.length);
  };
  const next = () => {
    if(!value) {
     return Alert.alert(
        "Message",
        "Please provide an answer to proceed",
        [
          {
            text: "okay",
            onPress: () => console.log("Ask me later pressed")
          },
        ],
        { cancelable: false }
      );
    }
    const res = {
      question: data?.item?.question,
      correct_answer: data?.item?.correct_answer,
    };
    if (value !== data?.item?.correct_answer) {
      setResult((prevState: any) => [...prevState, { ...res, passed: false }]);
      handleScroll();
    }
    if (value === data?.item?.correct_answer) {
      setResult((prevState: any) => [...prevState, { ...res, passed: true }]);
      handleScroll();
    }
  };

  const handleRadio = async (option: string) => {
    setValue(option);
  };

  useEffect(() => {
    if (result.length === questions?.length) {
      navigation.navigate("result", { result });
    }
  }, [result]);

  return (
    <StyledView>
      <StyledTitle>{data?.item?.category}</StyledTitle>
      <Card>
        <StyledInstruction>
          {entities.decode(data?.item?.question)}
        </StyledInstruction>
        <RadioButton.Group onValueChange={(i) => handleRadio(i)} value={value}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <RadioButton.Item value="True" label="True" />
            <RadioButton.Item value="False" label="False" />
          </View>
        </RadioButton.Group>
      </Card>
      <StyledInstruction>
          {data?.index + 1}/ {questions?.length}
        </StyledInstruction>
      <StyledRow>
        <Button status="primary" label={"Continue"} onPress={next} />
      </StyledRow>
    </StyledView>
  );
};

export default QuestionRow;
