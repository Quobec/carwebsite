import * as S from "./style.js";
import { useEffect, useState } from 'react';

export default function CarArticle({article, navmap}) {


    const [blur, setBlur] = useState(0);
    let zeroBlurPos = 0;

    useEffect(() => {

        zeroBlurPos = document.querySelector('#'+article.carName
        .replaceAll("(", "")
        .replaceAll(")", "")
        .replaceAll(" ", "-"))
        .getBoundingClientRect().top + document.documentElement.scrollTop;

        window.addEventListener("scroll", function() {
            setBlur((document.documentElement.scrollTop - zeroBlurPos) * 0.05);
        });

        window.addEventListener("resize", function() {
            zeroBlurPos = document.querySelector('#'+article.carName
            .replaceAll("(", "")
            .replaceAll(")", "")
            .replaceAll(" ", "-"))
            .getBoundingClientRect().top + document.documentElement.scrollTop;
            // console.log(zeroBlurPos);
            // console.log(document.querySelector('#'+article.carName
            // .replaceAll("(", "")
            // .replaceAll(")", "")
            // .replaceAll(" ", "_"))
            // .getBoundingClientRect().top)
            // the problem was i cas calculating the y from an element with padding
            // that was offsetting the position where blur was supposed to be zero
        });
        
    },[]);


    return (
        <>
            <S.CarArticle backgroundImage={article.backgroundPicture} id={article.carName
                    .replaceAll("(", "")
                    .replaceAll(")", "")
                    .replaceAll(" ", "-")}>

                <div className="welcome" 
                    // id={article.carName
                    // .replaceAll("(", "")
                    // .replaceAll(")", "")
                    // .replaceAll(" ", "_")}
                    >
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
                        <h3>{article.technicalData.title}</h3>
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
