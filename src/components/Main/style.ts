import styled from "styled-components";

export const Main = styled.main`
display: flex;
flex-direction: column;
align-items: center;
row-gap: 12px;

@media (max-width: 640px), (max-height: 768px) {
    & div:last-of-type + span {
        display: none;
    }
}
`