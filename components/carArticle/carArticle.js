import * as S from "./style.js";

export default function CarArticle({article}) {

    return (
        <>
            <S.CarArticle backgroundImage={article.backgroundPicture}>
                <div className="welcome">
                    <h5>Car Classics</h5>
                    <h3>{article.carName}</h3>
                    <p>{article.intro}</p>
                </div>
                <div className="backgroundImage"></div>
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
                            return <div className="articleImage" style={{backgroundImage: 'url('+picture.src+')'}}/>
                        })}
                    </div>
                </div>
            </S.CarArticle>
        </>
    )
}
