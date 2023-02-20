import * as S from './style.js';
import { useState } from 'react';

export default function Demo1({count}) {

  const [animatedElement, setanimatedElement] = useState(null);

  return (
    <>
      <S.Background>
        <S.CardHolder onMouseLeave={() => {setanimatedElement(null)}}>
          {Array(count).fill(null).map((value, index) => {
            if(index % 2 == 0){
              return <S.CardSmall key={index.toString()}></S.CardSmall>;
            } else {
              return <S.CardBig key={index.toString()} style={animatedElement !== index ? {animation: "none"} : {}} onClick={() => {setanimatedElement(index)}} > Click me!</S.CardBig>;
            }
          })}
        </S.CardHolder>
      </S.Background>
    </>
  )
}