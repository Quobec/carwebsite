import * as S from "./style.js";
import { useEffect, useState } from 'react';

export default function CarArticle({article, navmap}) {


    const [blur, setBlur] = useState(0);
    let zeroBlurPos = 0;

    useEffect(() => {

        zeroBlurPos = document.querySelector('#'+article.carName
        .replaceAll(" ", "-"))
        .getBoundingClientRect().top + document.documentElement.scrollTop;

        window.addEventListener("scroll", function() {
            setBlur((document.documentElement.scrollTop - zeroBlurPos) * 0.05);

            zeroBlurPos = document.querySelector('#'+article.carName
            .replaceAll(" ", "-"))
            .getBoundingClientRect().top + document.documentElement.scrollTop;


            // document.querySelectorAll('.segment_lesser, .segment_main').forEach((el) => {
            //     if(Math.floor(document.querySelector("#"+el.href.split("#")[1])
            //     .getBoundingClientRect().top) === Math.floor(document.documentElement.scrollTop)){
            //         el.classList.add("selected");
            //     }                
            //     console.log(document.querySelector("#"+el.href.split("#")[1]).outerHTML + 
            //     Math.floor(document.querySelector("#"+el.href.split("#")[1])
            //     .getBoundingClientRect().top))
            //     //console.log("scroll: "+ Math.floor(document.documentElement.scrollTop))
            // })
        });
    },[]);


    return (
        <>
            <S.CarArticle backgroundImage={article.backgroundPicture} id={article.carName.replaceAll(" ", "-")}>
                <div className="mark" id={article.carName.replaceAll(" ", "_")}></div>
                <div className="welcome">
                    <div className="welcomeImage" style={{filter: "blur("+Math.min(8, blur)+"px)"}}></div> 
                    {/* change body background-color to grey for build version */}
                    <div className="intro">
                        <h5>Car Classics</h5>
                        <h3>{article.carName}</h3>
                        <p>{article.intro}</p>
                    </div>
                </div>
                <div className="information">
                    <div className="specs">
                        <h5>BRAND</h5>
                        <h3>{article.brand}</h3>
                        <h5>BODY</h5>
                        <h3>{article.bodyType}</h3>
                        <h5>Fuel</h5>
                        <h3>{article.fuelType}</h3>
                    </div>      
                    <div className="text">
                        {Object.values(article.sections).map((section) => {
                            return <>
                                <h3 id={(article.carName+section.title).replaceAll(" ", "")} className="forAnimation">{section.title}</h3>
                                {section.content.map((value) => {
                                    return <p className="forAnimation">{value}</p>
                                })}
                            </>
                        })}
                        <h3 id={(article.carName+article.technicalData.title).replaceAll(" ", "")}>{article.technicalData.title}</h3>
                        {Object.values(article.technicalData.content).map((section) => {
                            return <div className="techDataBlock">
                                <h5 className="forAnimation">{section.subTitle}</h5>
                                <ul>
                                    {section.content.map((value) => {
                                    return <li className="forAnimation">{value}</li>
                                    })}
                                </ul>
                            </div>
                        })
                        
                        
                        }
                    </div>
                    <div className="gallery">
                        {article.articlePictures.map((picture) => {
                            return <img className="articleImage" src={picture.src}/>
                        })}
                    </div>
                </div>
            </S.CarArticle>
        </>
    )
}
