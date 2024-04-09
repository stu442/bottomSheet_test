import styled from "styled-components";
import BottomSheet from "./components/BottomSheet/BottomSheet";

const BaseDiv = styled.div`
  height : 100vh;
  width : 100vw;
  background-color: #000000
`

export default function App() {
  return (
    <BaseDiv>
      <BottomSheet />
    </BaseDiv>
  );
}