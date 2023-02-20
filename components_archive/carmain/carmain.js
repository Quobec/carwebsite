import * as S from "./style.js";

export default function CarMain({name, desc, image}) {


  return (
    <>
        <S.CarMain image={image} id="fixed">
            <div className="image"></div>
              <div className="text">
                  <h4>Car Classics</h4>
                  <h2>{name}</h2>
                  <p>{desc}</p>
              </div>
        </S.CarMain>
    </>
  )
}
