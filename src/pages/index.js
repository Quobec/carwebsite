import Head from 'next/head'
import Scrollbar from '../../components/scrollbar/scrollbar.js'
import Menu from '../../components/menu/menu.js'
import CarArticle from '../../components/carArticle/carArticle.js'
import { useEffect } from 'react'
import porsche911_1 from "../../public/images/porsche911_1.jpg";
import porsche911_2 from "../../public/images/porsche911_2.jpg";
import porsche911_3 from "../../public/images/porsche911_3.avif";
import porsche911_4 from "../../public/images/porsche911_4.avif";

export default function Home() {


  const article1 = {
    carName: "Porsche 911 (Type 930)",
    intro: "The 911 is a classic sports car that has been in production since the 1960s, and the Type 930 was produced from 1975 to 1989.",
    backgroundPicture: porsche911_1,
    articlePictures: [porsche911_2, porsche911_3, porsche911_4],
    brand: "Porsche",
    bodyType: "Coupe",
    fuelType: "Various",
    sections: {
      section1 : {
        title: "Genesis",
        content: [
          "The Porsche 911 is a sports car that has been in continuous production since 1963, and it has become one of the most iconic and recognizable sports cars in history. The genesis of the Porsche 911 can be traced back to the late 1950s, when Porsche began working on a successor to its first sports car, the Porsche 356.",
          'In 1959, Porsche began developing a new car that was internally known as the "901." The car was designed to be a larger and more powerful successor to the 356, with a focus on performance and handling. However, in 1963, Peugeot claimed ownership of the "0" in all three-digit model names with a zero in the middle, so Porsche changed the name to 911.',
          'The first Porsche 911 was introduced at the 1963 Frankfurt Motor Show, and it featured a distinctive design with a rear-mounted, air-cooled engine and a sleek, aerodynamic body. The car was an instant success, and it quickly became a favorite of driving enthusiasts for its performance, handling, and distinctive styling.',
          'Over the years, Porsche has continued to refine and improve the 911, introducing numerous variants with more powerful engines, advanced technology, and updated styling. Today, the 911 is still in production and remains a symbol of high performance, precision engineering, and timeless design.'
        ]
      },
      section2 : {
        title: "Design",
        content: [
          "The Porsche 911 has always been known for its distinctive design, which has remained largely consistent since the car's introduction in 1963. One of the most recognizable features of the 911 is its sloping roofline, which creates a sleek and aerodynamic profile.",
          "Another key design element of the 911 is its rear-mounted engine, which gives the car its distinctive handling characteristics. The engine placement allows for better weight distribution and improved traction, particularly when accelerating out of corners.",
          "Over the years, the design of the 911 has evolved, with numerous updates and tweaks to the car's exterior styling. However, the basic shape and character of the car have remained largely unchanged, and the 911 remains one of the most iconic and recognizable sports cars in the world.",
        ]
      }
      
    },
    technicalData: {
      title: "Technical Data",
      content: {
        segment1: {
          subTitle: "Engine",
          content: [
            '3.0-liter twin-turbocharged flat-six engine',
            'Max power output: 443 horsepower @ 6,500 rpm',
            'Max torque output: 390 lb-ft of torque @ 2,300-5,000 rpm',
            'Rear-mounted engine configuration'
          ]
        },
        segment2: {
          subTitle: "Transmission",
          content: [
            '8-speed Porsche Doppelkupplung (PDK) automatic transmission with manual shifting mode',
            'Rear-wheel driveg highway'
          ]
        },
        segment3: {
          subTitle: "Performance",
          content: [
            '0-60 mph acceleration in 3.5 seconds',
            'Top speed of 191 mph',
            'Braking distance from 70 mph: 142 feet'
          ]
        },
        segment4: {
          subTitle: "Dimensions",
          content: [
            'Length: 177.9 inches',
            'Width: 72.9 inches',
            'Height: 51.3 inches',
            'Wheelbase: 96.5 inches',
            'Curb weight: 3,382 lbs0 mpg city/27 mpg highway'
          ]
        },
        segment5: {
          subTitle: "Fuel Economy",
          content: [
            'EPA estimated fuel economy: 20 mpg city/27 mpg highway'
          ]
        }
      }
    }
    
  };

  const article2 = {
    carName: "Porsche 911 (Type 930)",
    intro: "The 911 is a classic sports car that has been in production since the 1960s, and the Type 930 was produced from 1975 to 1989.",
    backgroundPicture: porsche911_2,
    articlePictures: [porsche911_1, porsche911_3, porsche911_4],
    brand: "Porsche",
    bodyType: "Coupe",
    fuelType: "Various",
    sections: {
      section1 : {
        title: "Genesis",
        content: [
          "The Porsche 911 is a sports car that has been in continuous production since 1963, and it has become one of the most iconic and recognizable sports cars in history. The genesis of the Porsche 911 can be traced back to the late 1950s, when Porsche began working on a successor to its first sports car, the Porsche 356.",
          'In 1959, Porsche began developing a new car that was internally known as the "901." The car was designed to be a larger and more powerful successor to the 356, with a focus on performance and handling. However, in 1963, Peugeot claimed ownership of the "0" in all three-digit model names with a zero in the middle, so Porsche changed the name to 911.',
          'The first Porsche 911 was introduced at the 1963 Frankfurt Motor Show, and it featured a distinctive design with a rear-mounted, air-cooled engine and a sleek, aerodynamic body. The car was an instant success, and it quickly became a favorite of driving enthusiasts for its performance, handling, and distinctive styling.',
          'Over the years, Porsche has continued to refine and improve the 911, introducing numerous variants with more powerful engines, advanced technology, and updated styling. Today, the 911 is still in production and remains a symbol of high performance, precision engineering, and timeless design.'
        ]
      },
      section2 : {
        title: "Design",
        content: [
          "The Porsche 911 has always been known for its distinctive design, which has remained largely consistent since the car's introduction in 1963. One of the most recognizable features of the 911 is its sloping roofline, which creates a sleek and aerodynamic profile.",
          "Another key design element of the 911 is its rear-mounted engine, which gives the car its distinctive handling characteristics. The engine placement allows for better weight distribution and improved traction, particularly when accelerating out of corners.",
          "Over the years, the design of the 911 has evolved, with numerous updates and tweaks to the car's exterior styling. However, the basic shape and character of the car have remained largely unchanged, and the 911 remains one of the most iconic and recognizable sports cars in the world.",
        ]
      }
      
    },
    technicalData: {
      title: "Technical Data",
      content: {
        segment1: {
          subTitle: "Engine",
          content: [
            '3.0-liter twin-turbocharged flat-six engine',
            'Max power output: 443 horsepower @ 6,500 rpm',
            'Max torque output: 390 lb-ft of torque @ 2,300-5,000 rpm',
            'Rear-mounted engine configuration'
          ]
        },
        segment2: {
          subTitle: "Transmission",
          content: [
            '8-speed Porsche Doppelkupplung (PDK) automatic transmission with manual shifting mode',
            'Rear-wheel driveg highway'
          ]
        },
        segment3: {
          subTitle: "Performance",
          content: [
            '0-60 mph acceleration in 3.5 seconds',
            'Top speed of 191 mph',
            'Braking distance from 70 mph: 142 feet'
          ]
        },
        segment4: {
          subTitle: "Dimensions",
          content: [
            'Length: 177.9 inches',
            'Width: 72.9 inches',
            'Height: 51.3 inches',
            'Wheelbase: 96.5 inches',
            'Curb weight: 3,382 lbs0 mpg city/27 mpg highway'
          ]
        },
        segment5: {
          subTitle: "Fuel Economy",
          content: [
            'EPA estimated fuel economy: 20 mpg city/27 mpg highway'
          ]
        }
      }
    }
    
  };

  const article3 = {
    carName: "Porsche 911 (Type 930)",
    intro: "The 911 is a classic sports car that has been in production since the 1960s, and the Type 930 was produced from 1975 to 1989.",
    backgroundPicture: porsche911_3,
    articlePictures: [porsche911_1, porsche911_2, porsche911_4],
    brand: "Porsche",
    bodyType: "Coupe",
    fuelType: "Various",
    sections: {
      section1 : {
        title: "Genesis",
        content: [
          "The Porsche 911 is a sports car that has been in continuous production since 1963, and it has become one of the most iconic and recognizable sports cars in history. The genesis of the Porsche 911 can be traced back to the late 1950s, when Porsche began working on a successor to its first sports car, the Porsche 356.",
          'In 1959, Porsche began developing a new car that was internally known as the "901." The car was designed to be a larger and more powerful successor to the 356, with a focus on performance and handling. However, in 1963, Peugeot claimed ownership of the "0" in all three-digit model names with a zero in the middle, so Porsche changed the name to 911.',
          'The first Porsche 911 was introduced at the 1963 Frankfurt Motor Show, and it featured a distinctive design with a rear-mounted, air-cooled engine and a sleek, aerodynamic body. The car was an instant success, and it quickly became a favorite of driving enthusiasts for its performance, handling, and distinctive styling.',
          'Over the years, Porsche has continued to refine and improve the 911, introducing numerous variants with more powerful engines, advanced technology, and updated styling. Today, the 911 is still in production and remains a symbol of high performance, precision engineering, and timeless design.'
        ]
      },
      section2 : {
        title: "Design",
        content: [
          "The Porsche 911 has always been known for its distinctive design, which has remained largely consistent since the car's introduction in 1963. One of the most recognizable features of the 911 is its sloping roofline, which creates a sleek and aerodynamic profile.",
          "Another key design element of the 911 is its rear-mounted engine, which gives the car its distinctive handling characteristics. The engine placement allows for better weight distribution and improved traction, particularly when accelerating out of corners.",
          "Over the years, the design of the 911 has evolved, with numerous updates and tweaks to the car's exterior styling. However, the basic shape and character of the car have remained largely unchanged, and the 911 remains one of the most iconic and recognizable sports cars in the world.",
        ]
      }
      
    },
    technicalData: {
      title: "Technical Data",
      content: {
        segment1: {
          subTitle: "Engine",
          content: [
            '3.0-liter twin-turbocharged flat-six engine',
            'Max power output: 443 horsepower @ 6,500 rpm',
            'Max torque output: 390 lb-ft of torque @ 2,300-5,000 rpm',
            'Rear-mounted engine configuration'
          ]
        },
        segment2: {
          subTitle: "Transmission",
          content: [
            '8-speed Porsche Doppelkupplung (PDK) automatic transmission with manual shifting mode',
            'Rear-wheel driveg highway'
          ]
        },
        segment3: {
          subTitle: "Performance",
          content: [
            '0-60 mph acceleration in 3.5 seconds',
            'Top speed of 191 mph',
            'Braking distance from 70 mph: 142 feet'
          ]
        },
        segment4: {
          subTitle: "Dimensions",
          content: [
            'Length: 177.9 inches',
            'Width: 72.9 inches',
            'Height: 51.3 inches',
            'Wheelbase: 96.5 inches',
            'Curb weight: 3,382 lbs0 mpg city/27 mpg highway'
          ]
        },
        segment5: {
          subTitle: "Fuel Economy",
          content: [
            'EPA estimated fuel economy: 20 mpg city/27 mpg highway'
          ]
        }
      }
    }
    
  };

  const article4 = {
    carName: "Porsche 911 (Type 930)",
    intro: "The 911 is a classic sports car that has been in production since the 1960s, and the Type 930 was produced from 1975 to 1989.",
    backgroundPicture: porsche911_4,
    articlePictures: [porsche911_1, porsche911_2, porsche911_3],
    brand: "Porsche",
    bodyType: "Coupe",
    fuelType: "Various",
    sections: {
      section1 : {
        title: "Genesis",
        content: [
          "The Porsche 911 is a sports car that has been in continuous production since 1963, and it has become one of the most iconic and recognizable sports cars in history. The genesis of the Porsche 911 can be traced back to the late 1950s, when Porsche began working on a successor to its first sports car, the Porsche 356.",
          'In 1959, Porsche began developing a new car that was internally known as the "901." The car was designed to be a larger and more powerful successor to the 356, with a focus on performance and handling. However, in 1963, Peugeot claimed ownership of the "0" in all three-digit model names with a zero in the middle, so Porsche changed the name to 911.',
          'The first Porsche 911 was introduced at the 1963 Frankfurt Motor Show, and it featured a distinctive design with a rear-mounted, air-cooled engine and a sleek, aerodynamic body. The car was an instant success, and it quickly became a favorite of driving enthusiasts for its performance, handling, and distinctive styling.',
          'Over the years, Porsche has continued to refine and improve the 911, introducing numerous variants with more powerful engines, advanced technology, and updated styling. Today, the 911 is still in production and remains a symbol of high performance, precision engineering, and timeless design.'
        ]
      },
      section2 : {
        title: "Design",
        content: [
          "The Porsche 911 has always been known for its distinctive design, which has remained largely consistent since the car's introduction in 1963. One of the most recognizable features of the 911 is its sloping roofline, which creates a sleek and aerodynamic profile.",
          "Another key design element of the 911 is its rear-mounted engine, which gives the car its distinctive handling characteristics. The engine placement allows for better weight distribution and improved traction, particularly when accelerating out of corners.",
          "Over the years, the design of the 911 has evolved, with numerous updates and tweaks to the car's exterior styling. However, the basic shape and character of the car have remained largely unchanged, and the 911 remains one of the most iconic and recognizable sports cars in the world.",
        ]
      }
      
    },
    technicalData: {
      title: "Technical Data",
      content: {
        segment1: {
          subTitle: "Engine",
          content: [
            '3.0-liter twin-turbocharged flat-six engine',
            'Max power output: 443 horsepower @ 6,500 rpm',
            'Max torque output: 390 lb-ft of torque @ 2,300-5,000 rpm',
            'Rear-mounted engine configuration'
          ]
        },
        segment2: {
          subTitle: "Transmission",
          content: [
            '8-speed Porsche Doppelkupplung (PDK) automatic transmission with manual shifting mode',
            'Rear-wheel driveg highway'
          ]
        },
        segment3: {
          subTitle: "Performance",
          content: [
            '0-60 mph acceleration in 3.5 seconds',
            'Top speed of 191 mph',
            'Braking distance from 70 mph: 142 feet'
          ]
        },
        segment4: {
          subTitle: "Dimensions",
          content: [
            'Length: 177.9 inches',
            'Width: 72.9 inches',
            'Height: 51.3 inches',
            'Wheelbase: 96.5 inches',
            'Curb weight: 3,382 lbs0 mpg city/27 mpg highway'
          ]
        },
        segment5: {
          subTitle: "Fuel Economy",
          content: [
            'EPA estimated fuel economy: 20 mpg city/27 mpg highway'
          ]
        }
      }
    }
    
  };

  useEffect(() => {
    const fixedElement = document.querySelector("#fixed");
    const maxScrollPercent = 50;

    window.addEventListener("scroll", function() {
      const scrollPercent = (document.documentElement.scrollTop + window.innerHeight) / document.documentElement.scrollHeight * 100;
      console.log(scrollPercent);
    });
  });

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Karla&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata&display=swap" rel="stylesheet"></link>
      </Head>

      <main>
        <Menu></Menu>
        <Scrollbar></Scrollbar>
        <section>
          <CarArticle article={article1}></CarArticle>
          <CarArticle article={article2}></CarArticle>
          <CarArticle article={article3}></CarArticle>
          <CarArticle article={article4}></CarArticle>
        </section>
      </main>
    </>
  )
}
