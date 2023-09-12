import styled from "styled-components";

export const Container = styled.div`
max-width: 284px;
height: 100%;
width: 100%;
display: flex;
position: relative;
align-items: center;
justify-content: flex-start;
flex-direction: column;
margin-top: 80px;

@media (max-width: 640px) {
    margin-top: 30px;
}
`