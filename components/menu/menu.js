import * as S from "./style.js";

export default function Menu() {


  return (
    <>
        <S.Menu id="top">
            <div className="menu_item">
                <p>Models</p>
            </div>
            <div className="menu_item">
                <p>Marks</p>
            </div>
            <div className="menu_item">
                <p>Years</p>
            </div>
            <div className="menu_item">
                <p>People</p>
            </div>
            <div className="menu_item">
                <p>History</p>
            </div>
        </S.Menu>
    </>
  )
}
