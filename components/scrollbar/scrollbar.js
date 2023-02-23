import * as S from "./style.js";

export default function Scrollbar({refScroll, articles}) {

  function Clicked(e){
    document.querySelectorAll(".segment_main, .segment_lesser").forEach((el) => {
      el.classList.remove("selected");
    })
    e.target.classList.add("selected");
  }

  return (
    <>
        <S.Scrollbar>
            <S.Container ref={refScroll}>
                <div className="home"></div>
                {Object.values(articles).map((article) => {
                  let addon = <>
                    <a href={"/#"+article.carName
                    .replaceAll("(", "")
                    .replaceAll(")", "")
                    .replaceAll(" ", "-")} 
                    className="segment_main"
                    onClick={Clicked}
                    >{article.carName}</a>
                    {Object.values(article.sections).map((section) => {
                      return <a href={"/#"+(article.carName+section.title).replaceAll(" ", "")} className="segment_lesser" onClick={Clicked}>{section.title}</a>
                    })}
                  </>
                  return addon;
                })}
            </S.Container>
        </S.Scrollbar>
    </>
  )
}
