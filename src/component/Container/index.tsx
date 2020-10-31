import * as React from "react";
import {
  StyledPageWrapper,
} from "./styles";

const Container: React.FC = ({ children }) => {
  return (
    <StyledPageWrapper>
     {children}
    </StyledPageWrapper>
  );
};

export default Container;
