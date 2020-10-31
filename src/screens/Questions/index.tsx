import React, { useEffect, useRef } from "react";
import axios from "axios";
import Container from "../../component/Container";
import { Props } from "../../navigation";
import { FlatList } from "react-native";
import QuestionRow from "./QuestionRow";
import { StyledLoadingText } from "./styles";

const Questions: React.FC<Props> = () => {
  const ref = useRef<any>();
  const [data, setData] = React.useState<[]>([]);
  const [result, setResult] = React.useState<[]>([]);
  const [loading, setLoading] = React.useState<Boolean>(false);

  const scrollToIndex = (index: number) => {
    ref.current?.scrollToIndex({ animated: true, index: index + 1 });
  };

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
        );
        setData(response?.data?.results);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);



  return (
    <Container>
      {loading ? (
        <StyledLoadingText>Loading...</StyledLoadingText>
      ) : (
        <FlatList
          ref={ref}
          horizontal
          data={data}
          scrollEnabled={false}
          renderItem={(item: any,) => (
            <QuestionRow
              data={item}
              scrollToIndex={scrollToIndex}
              setResult={setResult}
              result={result}
              questions={data}
            />
          )}
          keyExtractor={(item: any) => item?.question}
        />
      )}
    </Container>
  );
};

export default Questions;
