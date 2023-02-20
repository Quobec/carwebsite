import * as S from "./style.js";
import CarDetails from '../../components/cardetails/cardetails.js'
import CarMain from "../carmain/carmain.js";
import porsche911_1 from "../../public/images/porsche911_1.jpg";
import porsche911_2 from "../../public/images/porsche911_2.jpg";

export default function CarInformation() {

  return (
    <>
        <S.MainContainer>
            <CarMain 
              image={porsche911_1}
              name={"Porsche 911 (Type 930)"} 
              desc={"The 911 is a classic sports car that has been in production since the 1960s, and the Type 930 was produced from 1975 to 1989."}
            ></CarMain>
            <CarDetails small_image={porsche911_2}></CarDetails>
        </S.MainContainer>
    </>
  )
}
