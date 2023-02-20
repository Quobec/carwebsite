import * as S from "./style.js";

export default function CarDetails({small_image}) {

  return (
    <>
      <S.CarDetails image={small_image}>

        <div className="specs">
          <h5>BRAND</h5>
          <h3>Porsche</h3>
          <h5>BODY</h5>
          <h3>Coupe</h3>
          <h5>FUEL</h5>
          <h3>Various</h3>
        </div>

        <div className="info">

          <div className="top">
            <div className="genesis">
              <h2>Genesis</h2>
              <p>The Porsche 911 is a sports car that has been in continuous production since 1963, and it has become one of the most iconic and recognizable sports cars in history. The genesis of the Porsche 911 can be traced back to the late 1950s, when Porsche began working on a successor to its first sports car, the Porsche 356.</p>
              <p>In 1959, Porsche began developing a new car that was internally known as the "901." The car was designed to be a larger and more powerful successor to the 356, with a focus on performance and handling. However, in 1963, Peugeot claimed ownership of the "0" in all three-digit model names with a zero in the middle, so Porsche changed the name to 911.</p>
              <p>The first Porsche 911 was introduced at the 1963 Frankfurt Motor Show, and it featured a distinctive design with a rear-mounted, air-cooled engine and a sleek, aerodynamic body. The car was an instant success, and it quickly became a favorite of driving enthusiasts for its performance, handling, and distinctive styling.</p>
              <p>Over the years, Porsche has continued to refine and improve the 911, introducing numerous variants with more powerful engines, advanced technology, and updated styling. Today, the 911 is still in production and remains a symbol of high performance, precision engineering, and timeless design.</p>
            </div>
            <div className="image"></div>
          </div>

          <div className="bottom">
            <div className="techdata">
              <h2>Technical Data</h2>
              <div className="data_cont">
                <div className="data_block">
                  <p>Engine:</p>
                  <ul>
                    <li>3.0-liter twin-turbocharged flat-six engine</li>
                    <li>Max power output: 443 horsepower @ 6,500 rpm</li>
                    <li>Max torque output: 390 lb-ft of torque @ 2,300-5,000 rpm</li>
                    <li>Rear-mounted engine configuration</li>
                  </ul>
                </div>
                <div className="data_block">
                  <p>Transmission:</p>
                  <ul>
                    <li>8-speed Porsche Doppelkupplung (PDK) automatic transmission with manual shifting mode</li>
                    <li>Rear-wheel driveg highway</li>
                  </ul>
                </div>
                <div className="data_block">
                  <p>Performance:</p>
                  <ul>
                    <li>0-60 mph acceleration in 3.5 seconds</li>
                    <li>Top speed of 191 mph</li>
                    <li>Braking distance from 70 mph: 142 feet</li>
                  </ul>
                </div>
                <div className="data_block">
                  <p>Dimensions:</p>
                  <ul>
                    <li>Length: 177.9 inches</li>
                    <li>Width: 72.9 inches</li>
                    <li>Height: 51.3 inches</li>
                    <li>Wheelbase: 96.5 inches</li>
                    <li>Curb weight: 3,382 lbs0 mpg city/27 mpg highway</li>
                  </ul>
                </div>
                <div className="data_block">
                  <p>Fuel Economy:</p>
                  <ul>
                    <li>EPA estimated fuel economy: 20 mpg city/27 mpg highway</li>
                  </ul>
                </div>
              </div>
            </div>
          </div> 

        </div>

      </S.CarDetails>
    </>
  )
}
