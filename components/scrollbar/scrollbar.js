import { Fragment } from "react";
import * as S from "./style.js";

export default function Scrollbar({refScroll, articles}) {

  function Clicked(e){
    e.target.classList.add("selected");
  }

  return (
    <>
        <S.Scrollbar>

          <div className="homeContainer">
            <div className="home">
                <span>CAR</span>
                <span>Enthusiasts</span>
                <span>Forum</span>
              </div>
          </div>
            
          <S.Container ref={refScroll}>

            {Object.values(articles).map((article, index) => {
              let addon = <Fragment key={(article.carName+index+"fragment").toString()}>

                <a href={"/#"+article.carName
                .replaceAll(" ", "-")} 
                className="segment_main"
                onClick={Clicked}
                key={(article.carName+index).toString()}
                >{article.carName}</a>


                {Object.values(article.sections).map((section, index) => {
                  return <a key={(section.title + index).toString()} href={"/#"+(article.carName+section.title).replaceAll(" ", "")} className="segment_lesser" onClick={Clicked}>{section.title}</a>
                })}
                <a key={(article.technicalData.title + index).toString()} href={"/#"+(article.carName+article.technicalData.title).replaceAll(" ", "")} className="segment_lesser" onClick={Clicked}>{article.technicalData.title}</a>
              
              </Fragment>

              return addon;

            })}
          </S.Container>
        </S.Scrollbar>
    </>
  )
}
