import * as S from './style.js';
import { useEffect, useRef } from 'react';


export default function Demo3() {
  
  const refHamsters = useRef();
  const refTypewriter = useRef();
  const background = useRef();
  
  useEffect(() =>{
    let options = {
      rootMargin: '0% 0% -5% 0%',
      threshold: 1.0
    }
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry.target);
        if(entry.isIntersecting){
          entry.target.classList.add('show');
          entry.target.classList.remove('hidden');
        } else {
          entry.target.classList.remove('show');
          entry.target.classList.add('hidden');
        } 
      })
    },options) 

  let children = [...refHamsters.current.querySelectorAll("*"), refTypewriter.current];
    children.forEach(element => {
      observer.observe(element);
    });
  });

  console.log(refTypewriter.current);

  return (
    <>
      <S.Background ref={background}>
        <div className='top'>
          <div className='left'>
            <S.Line1></S.Line1>
          </div>
          <div className='middle'>
            <S.Typewriter>
              <S.Text ref={refTypewriter}>
                <p className="line__1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <p className="line__2">Suspendisse non leo consequat, finibus ex at, faucibus </p>
                <p className="line__3">urna. In facilisis massa at rhoncus. Orci varius natoque </p>
                <p className="line__4">penatibus et magnis dis parturient montes, nascetur </p>
                <p className="line__5">ridiculus mus. Morbi egestas pulvinar venenatis.</p>
              </S.Text>
            </S.Typewriter>
          </div>
          <div className='right'>
          </div>
        </div>

        <div className='seperator'>
          <div className='left'></div>
          <div className='middle'>
            <S.seperator>
              <p></p>
              <p></p>
            </S.seperator>
          </div>
          <div className='right'></div>
          
        </div>

        <div className='bot'>
          <div className='left'>
          </div>
          <div className='middle'>
            <S.HamsterContainer ref={refHamsters}>
              <S.Hamster className='hidden'></S.Hamster>
              <S.Hamster className='hidden'></S.Hamster>
              <S.Hamster className='hidden'></S.Hamster>
              <S.Hamster className='hidden'></S.Hamster>
            </S.HamsterContainer>
          </div>
          <div className='right'>
            <S.Line2></S.Line2>
          </div>
        </div>
      </S.Background>
    </>
  )
}