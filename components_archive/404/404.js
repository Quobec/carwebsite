import Link from 'next/link.js';
import * as S from './style.js';

export default function PageNotFound() {
  return (
    <>
      <S.Background>
        <div className='message'>
          <h1>Page not Found</h1>
          <p>This page wasn&apos;t found. Please verify if you entered the correct url.</p>
          <Link href={"/#demo4"}>Go back</Link>
        </div>
        <div className='mascot'>
          <div className='mascot_part head'></div>
          <div className='mascot_part eye1track'>
            <div className='mascot_part eye1'></div>
          </div>
          <div className='mascot_part eye2track'>
            <div className='mascot_part eye2'></div>
          </div>
          <div className='mascot_part body'></div>
          <div className='mascot_part arm1'></div>
          <div className='mascot_part arm2'></div>
          <div className='mascot_part leg1'></div>
          <div className='mascot_part leg2'></div>
          <div className='floor'></div>
        </div>
      </S.Background>
    </>
  )
}