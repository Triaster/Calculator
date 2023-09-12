import styled from "styled-components";

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  width: 100%;
`;

export const ListButton = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(40px, 65px));
  column-gap: 8px;

  button {
    height: min(65px, calc(1vw + 1vh) * 5);
    width: 100%;
    min-height: 20px;
    max-height: 65px;
    padding: 0;
  }
`;
