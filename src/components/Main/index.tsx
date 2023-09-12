import { useState } from "react";
import Input from "../Input";
import Output from "../Output";
import { Main as MainStyled } from "./style";
import * as math from "mathjs";
import MessageArea from "../MessageArea";

export default function Main() {

  const evaluate = math.evaluate;
  const pow = math.evaluate;

  const [input, setInput] = useState("");

  const handleNumberClick = (value: string): void => {
    setInput(input + value);
  }

  const handleOperatorClick = (operator: string): void => {
    setInput(input + operator);
  }

  const handleSqrt = (): void => {
    console.log("value: ", input)
    const value = String(input).replaceAll(/\D/g, "");
    setInput(evaluate(`${value} * 0.5`));
  }

  const handlePow = (): void => {
    const value = String(input).replaceAll(/\D/g, "");
    setInput(evaluate(`${value} * ${value}`));
  }

  const handlePercent = (): void => {
    const value = String(input).replaceAll(/\D/g, "");
    setInput(evaluate(`${value} / 100`));
  }

  const handlePartUnit = (): void => {
    const value = String(input).replaceAll(/\D/g, "");
    setInput(evaluate(`1 / ${value}`));
  }

  const handleTenPow = (): void => {
    const value = String(input).replaceAll(/\D/g, "");
    setInput(String(Math.pow(10, +value)));
  }

  const handleNegative = (): void => {
    const isNumber = (!isNaN(+String(input).replaceAll(/\D/g, "")) &&  
                      +String(input).replaceAll(/\D/g, "") !== 0) 
                      ? true : false;

    if (isNumber === false) return;
    const negativeIndex = [...input].findIndex((v) => v === "-")
    const polIndex = [...input].findIndex((v) => v === "+")
    if(negativeIndex == 0) {
      setInput((prev: string) => {
        const arr =  [...prev].slice(1)
        return arr.join("");
      });
    } else if(polIndex == 0) {
      setInput((prev: string) => {
        const arr =  [...prev].slice(1)
        const num = arr.unshift('-')
        return arr.join("");
      });
    } else {
      setInput((prev: string) => {
        const arr =  [...prev];
        const num = arr.unshift('-')
        return arr.join("");
      });
    }
  }

  const handleBackspace = (): void => {
    setInput((prev: string) => prev.slice(0, [...prev].length - 1))
  }

  const handleClearAll = (): void => {
    setInput("");
  }

  const handleEqualsClick = () => {
    try {
      setInput(math.format(evaluate(input), {precision: 14}))
    }
    catch (error) {
      setInput("Error")
    }
  }

  return (
    <MainStyled>
        <Output input={input} />
        <Input 
          handleNumberClick={handleNumberClick} 
          handleOperatorClick={handleOperatorClick} 
          handleEqualsClick={handleEqualsClick} 
          handleClearAll={handleClearAll}
          handleSqrt={handleSqrt}
          handlePow={handlePow}
          handlePartUnit={handlePartUnit}
          handleNegative={handleNegative}
          handlePercent={handlePercent}
          handleBackspace={handleBackspace}
          handleTenPow={handleTenPow}
        />
        <MessageArea/>
    </MainStyled> 
  )
}