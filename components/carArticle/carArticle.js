import * as S from "./style.js";
import { useEffect } from 'react';

export default function CarArticle({article}) {


    let blur;
    
    useEffect(() => {
        
        let zeroBlurPos = document.querySelector('#'+article.carName
        .replaceAll("(", "")
        .replaceAll(")", "")
        .replaceAll(" ", "_"))
        .getBoundingClientRect().top;


        window.addEventListener("scroll", function() {
            //console.log("scrollTop" + Math.floor(document.documentElement.scrollTop));
            blur = document.documentElement.scrollTop - zeroBlurPos;
            console.log(blur)
        });
    },[blur]);

    return (
        <>
            <S.CarArticle backgroundImage={article.backgroundPicture} backgroundBlur={blur}>
                <div className="welcome" id={article.carName
                    .replaceAll("(", "")
                    .replaceAll(")", "")
                    .replaceAll(" ", "_")}>
                    <div className="welcomeImage"></div>
                    <h5>Car Classics</h5>
                    <h3>{article.carName}</h3>
                    <p>{article.intro}</p>
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
                                <h3>{section.title}</h3>
                                {section.content.map((value) => {
                                    return <p>{value}</p>
                                })}
                            </>
                        })}
                        <h3>{article.technicalData.title}</h3>
                        {Object.values(article.technicalData.content).map((section) => {
                            return <div className="techDataBlock">
                                <h5>{section.subTitle}</h5>
                                <ul>
                                    {section.content.map((value) => {
                                    return <li>{value}</li>
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
