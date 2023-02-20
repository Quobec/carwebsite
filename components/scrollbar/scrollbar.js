import * as S from "./style.js";

export default function Scrollbar() {

  return (
    <>
        <S.Scrollbar>
            <S.Container>
                <div className="home"></div>
                <div className='segment_main selected'></div>
                <div className='segment_lesser'></div>
                <div className='segment_lesser'></div>
                <div className='segment_main'></div>
                <div className='segment_lesser'></div>
                <div className='segment_lesser'></div>
                <div className='segment_lesser'></div>
                <div className='segment_main'></div>
                <div className='segment_lesser'></div>
                <div className='segment_lesser'></div>
                <div className='segment_lesser'></div>
            </S.Container>
            
        </S.Scrollbar>
    </>
  )
}
