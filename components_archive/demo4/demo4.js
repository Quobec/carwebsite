import * as S from './style.js';
import { useState } from 'react';
import Link from 'next/link.js';


export default function Demo4({count}) {

  const [currentMenu, setCurrentMenu] = useState(0);

  function getRandomString(length) {
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charLength = chars.length;
    var result = '';
    for ( var i = 0; i < length; i++ ) {
       result += chars.charAt(Math.floor(Math.random() * charLength));
    }
    return result;
 }

  return (
    <>
      <S.Background id='demo4'>
        <S.Navbar>
            {Array(count).fill(null).map((element, index) => {
              return<S.NavbarButton key={index.toString()} className={currentMenu === index ? "selected" : ""} onClick={() => {setCurrentMenu(index)}}>
                      <S.NavbarIcon></S.NavbarIcon><p>Menu{" " + (index+1)}</p>
                    </S.NavbarButton>
                    ;
            })}
        </S.Navbar>
        <Link href={getRandomString(6)}>404 Page</Link>
      </S.Background>
    </>
  )
}