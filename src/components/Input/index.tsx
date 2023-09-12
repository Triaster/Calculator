import { Button } from "antd";
import { ListButton, Input as InputStyled } from "./style";

type InputProps = {
    handleNumberClick: (value: string) => void;
    handleOperatorClick: (operator: string) => void;
    handleEqualsClick: () => void;
    handleClearAll: () => void;
    handleSqrt: () => void;
    handlePow: () => void;
    handlePartUnit: () => void;
    handleNegative: () => void;
    handlePercent: () => void;
    handleBackspace: () => void;
    handleTenPow: () => void;
}

export default function Input({
    handleTenPow, 
    handleBackspace, 
    handlePercent, 
    handleNegative, 
    handlePartUnit, 
    handlePow, 
    handleSqrt, 
    handleNumberClick, 
    handleOperatorClick, 
    handleEqualsClick, 
    handleClearAll
}: InputProps) {

    return (
        <InputStyled>

            <ListButton>

                <Button onClick={handlePercent} >%</Button>
                <Button onClick={handleTenPow} >10^x</Button>
                <Button onClick={handleClearAll} >C</Button>
                <Button onClick={handleBackspace} >{"<"}</Button>

            </ListButton>

            <ListButton>

                <Button onClick={handlePartUnit} >1/x</Button>
                <Button onClick={handlePow} >x^2</Button>
                <Button onClick={handleSqrt} >x^0.5</Button>
                <Button onClick={() => handleOperatorClick("/")} >/</Button>

            </ListButton>

            <ListButton>

                <Button onClick={() => handleNumberClick("7")} >7</Button>
                <Button onClick={() => handleNumberClick("8")} >8</Button>
                <Button onClick={() => handleNumberClick("9")} >9</Button>
                <Button onClick={() => handleOperatorClick("*")} >*</Button>

            </ListButton>

            <ListButton>

                <Button onClick={() => handleNumberClick("4")} >4</Button>
                <Button onClick={() => handleNumberClick("5")} >5</Button> 
                <Button onClick={() => handleNumberClick("6")} >6</Button>
                <Button onClick={() => handleOperatorClick("-")} >-</Button>

            </ListButton>

            <ListButton>

                <Button onClick={() => handleNumberClick("1")} >1</Button>
                <Button onClick={() => handleNumberClick("2")} >2</Button>
                <Button onClick={() => handleNumberClick("3")} >3</Button>
                <Button onClick={() => handleOperatorClick("+")} >+</Button>

            </ListButton>

            <ListButton>

                <Button onClick={handleNegative} >+/-</Button>
                <Button onClick={() => handleNumberClick("0")} >0</Button>
                <Button onClick={() => handleNumberClick(".")} >.</Button>
                <Button onClick={handleEqualsClick} >=</Button>

            </ListButton>

        </InputStyled>
    )
}