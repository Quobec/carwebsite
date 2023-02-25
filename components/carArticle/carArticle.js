import * as S from "./style.js";
import { useEffect, useState } from 'react';
import { Fragment } from "react";

export default function CarArticle({article, setScroll}) {


    const [blur, setBlur] = useState(0);
    let zeroBlurPos = 0;

    useEffect(() => {

        zeroBlurPos = document.querySelector('#'+article.carName
        .replaceAll(" ", "-"))
        .getBoundingClientRect().top + document.documentElement.scrollTop;

        window.addEventListener("resize", (event) => {

            zeroBlurPos = document.querySelector('#'+article.carName
            .replaceAll(" ", "-"))
            .getBoundingClientRect().top + document.documentElement.scrollTop;
        });

        window.addEventListener("scroll", (event) => {
            setBlur((document.documentElement.scrollTop - zeroBlurPos) * 0.05);
        });

    },[]);


    return (
        <>
            <S.CarArticle backgroundImage={article.backgroundPicture} id={article.carName.replaceAll(" ", "-")}>
                <div className="mark" id={article.carName.replaceAll(" ", "_")}></div>
                <div className="welcome">
                    <div className="welcomeImage" style={{filter: "blur("+Math.min(8, Math.floor(blur))+"px)"}}></div> 
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
                        {Object.values(article.sections).map((section, index) => {
                            return <Fragment key={(section+index).toString()}>
                                <h3 key={(section+index).toString()} id={(article.carName+section.title).replaceAll(" ", "")} className="forAnimation">{section.title}</h3>
                                {section.content.map((value) => {
                                    return <p key={(value+index).toString()} className="forAnimation">{value}</p>
                                })}
                            </Fragment>
                        })}
                        <h3 id={(article.carName+article.technicalData.title).replaceAll(" ", "")}>{article.technicalData.title}</h3>

                        {Object.values(article.technicalData.content).map((section, index) => {
                            return <div className="techDataBlock" key={(section+index).toString()}>
                                <h5 className="forAnimation" key={(section.subTitle+index).toString()} >{section.subTitle}</h5>
                                <ul key={("ul"+index).toString()}>
                                    {section.content.map((value, index) => {
                                    return <li key={(value+index).toString()} className="forAnimation">{value}</li>
                                    })}
                                </ul>
                            </div>
                        })}

                    </div>
                    <div className="gallery">
                        {article.articlePictures.map((picture) => {
                            return <img key={picture.src.toString()} className="articleImage" src={picture.src}/>
                        })}
                    </div>
                </div>
            </S.CarArticle>
        </>
    )
}
