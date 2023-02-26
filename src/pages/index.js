import Head from 'next/head'
import Scrollbar from '../../components/scrollbar/scrollbar.js'
import Menu from '../../components/menu/menu.js'
import CarArticle from '../../components/carArticle/carArticle.js'
import { useEffect, useRef, useState } from 'react';
import chevroletcorvette_1 from "../../public/images/chevroletcorvette_1.avif";
import chevroletcorvette_2 from "../../public/images/chevroletcorvette_2.avif";
import chevroletcorvette_3 from "../../public/images/chevroletcorvette_3.avif";
import chevroletcorvette_4 from "../../public/images/chevroletcorvette_4.avif";
import fordmustang_1 from "../../public/images/fordmustang_1.avif";
import fordmustang_2 from "../../public/images/fordmustang_2.avif";
import fordmustang_3 from "../../public/images/fordmustang_3.avif";
import fordmustang_4 from "../../public/images/fordmustang_4.avif";
import porsche911_1 from "../../public/images/porsche911_1.jpg";
import porsche911_2 from "../../public/images/porsche911_2.jpg";
import porsche911_3 from "../../public/images/porsche911_3.avif";
import porsche911_4 from "../../public/images/porsche911_4.avif";
import vwbeetle_1 from "../../public/images/vwbeetle_1.avif";
import vwbeetle_2 from "../../public/images/vwbeetle_2.avif";
import vwbeetle_3 from "../../public/images/vwbeetle_3.avif";

export default function Home() {

  const article1 = {
    carName: "Porsche 911",
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
    carName: "Ford Mustang",
    intro: "The Ford Mustang is an American classic car that was first introduced in 1964. The first generation of the Mustang was produced from 1964 to 1973.",
    backgroundPicture: fordmustang_1,
    articlePictures: [fordmustang_2, fordmustang_3, fordmustang_4],
    brand: "Ford",
    bodyType: "Coupe  / Convertible",
    fuelType: "Gasoline",
    sections: {
      section1 : {
        title: "Genesis",
        content: [
        "The Ford Mustang was introduced on April 17, 1964, at the New York World's Fair. It was an instant success and became one of the most iconic cars of the 1960s.",
        "The Mustang was designed to appeal to a wide range of customers, with a sporty design and a variety of options and accessories. The car was offered as a coupe or convertible, with a choice of six-cylinder or V8 engines.",
        "The Mustang was an important car for Ford, helping to establish the company as a leader in the growing sports car market. Today, the Mustang is still in production and remains one of the most popular and recognizable cars in the world."
        ]
      },
      section2 : {
        title: "Design",
        content: [
        "The design of the first-generation Ford Mustang was inspired by the Ford Falcon, with a long hood and short rear deck. The car featured a sporty and aggressive look, with a wide stance and a bold grille.",
        "The Mustang was available in a range of colors, with a variety of options and accessories, including racing stripes, vinyl roofs, and sporty wheels.",
        "Over the years, the design of the Mustang has evolved, with numerous updates and tweaks to the car's exterior styling. However, the basic shape and character of the car have remained largely unchanged, and the Mustang remains one of the most iconic and recognizable cars in the world."
        ]
      }
    },
    technicalData: {
      title: "Technical Data",
      content: {
        segment1: {
          subTitle: "Engine",
          content: [
            '2.8L/3.3L/4.3L/4.7L/5.0L/5.8L V8 engine',
            'Max power output: 271 horsepower @ 6,000 rpm',
            'Max torque output: 312 lb-ft of torque @ 3,400 rpm',
            'Front-engine, rear-wheel-drive configuration'
          ]
        },
        segment2: {
          subTitle: "Transmission",
          content: [
            '3-speed manual/4-speed manual/3-speed automatic/4-speed automatic transmission',
            'Rear-wheel drive'
          ]
        },
        segment3: {
          subTitle: "Performance",
          content: [
            '0-60 mph acceleration in 6.5 seconds',
            'Top speed of 124 mph',
            'Braking distance from 60 mph: 130 feet'
          ]
        },
        segment4: {
          subTitle: "Dimensions",
          content: [
            'Length: 181.6 inches',
            'Width: 68.2 inches',
            'Height: 51.1 inches',
            'Wheelbase: 108 inches',
            'Curb weight: 2,570-3,255 lbs'
          ]
        },
        segment5: {
          subTitle: "Fuel Economy",
          content: [
            'Fuel economy not available due to the age of the car'
          ]
        }
      }
    }
    
  };

  const article3 = {
    carName: "Chevrolet Corvette",
    intro: "The Chevrolet Corvette is an iconic sports car that has been produced by Chevrolet since 1953. The Corvette is known for its sleek design, powerful engines, and outstanding performance.",
    backgroundPicture: chevroletcorvette_1,
    articlePictures: [chevroletcorvette_2, chevroletcorvette_3, chevroletcorvette_4],
    brand: "Chevrolet",
    bodyType: "Convertible / Coupe",
    fuelType: "Gasoline",
    sections: {
      section1 : {
        title: "Genesis",
        content: [
        "The Chevrolet Corvette was introduced in 1953 as America's first true sports car. The car was designed to compete with European sports cars like the Jaguar XK120 and the MG TD, and it quickly became a sensation. The Corvette was unlike any other car on the market, with its sleek, aerodynamic body and powerful V8 engine.",
        "The Corvette has gone through many changes over the years, but it has always maintained its status as one of America's most beloved sports cars."
        ]
      },
      section2 : {
        title: "Design",
        content: [
        "The design of the Chevrolet Corvette is one of its most iconic features. The car has always had a sleek, aerodynamic body that looks fast even when it's standing still. The Corvette is available as a convertible or a coupe, and both versions feature a long, sloping hood and a short rear deck.",
        "One of the most distinctive design elements of the Corvette is its front grille, which gives the car a bold, aggressive look. The car's headlights are set back behind the grille, giving it a clean, streamlined appearance.",
        "Over the years, the design of the Corvette has evolved, with numerous updates and refinements to the car's exterior styling. However, the basic shape and character of the car have remained largely unchanged, and the Corvette continues to be one of the most recognizable sports cars in the world."
        ]
      }
    },
    technicalData: {
      title: "Technical Data",
      content: {
        segment1: {
          subTitle: "Engine",
          content: [
          '6.2-liter V8 engine',
          '490 horsepower @ 6,450 rpm',
          '8-speed dual-clutch automatic transmission',
          'Rear-wheel drive'
          ]
        },
        segment2: {
          subTitle: "Performance",
          content: [
          '0-60 mph acceleration in 2.9 seconds',
          'Top speed of 194 mph',
          'Braking distance from 60 mph: 91 feet'
          ]
        },
        segment3: {
          subTitle: "Dimensions",
          content: [
          'Length: 182.3 inches',
          'Width: 76.1 inches',
          'Height: 48.6 inches',
          'Wheelbase: 107.2 inches'
          ]
        },
        segment4: {
          subTitle: "Fuel Economy",
          content: [
          '15-16 mpg city/23-25 mpg highway'
          ]
        }
      }
    }
  };

  const article4 = {
    carName: "Volkswagen Beetle",
    intro: "The Volkswagen Beetle is a classic car that was first introduced in 1938. It is one of the most recognizable cars in history, with its iconic shape and design.",
    backgroundPicture: vwbeetle_1,
    articlePictures: [vwbeetle_2, vwbeetle_3],
    brand: "Volkswagen",
    bodyType: "Sedan / Convertible",
    fuelType: "Gasoline",
    sections: {
      section1 : {
        title: "History",
        content: [
        "The Volkswagen Beetle was first introduced in 1938 in Germany, where it quickly became popular among the country's middle class. The car was designed to be affordable and easy to produce, and it quickly became a symbol of Germany's economic recovery in the years following World War II.",
        "The Beetle was introduced in the United States in 1949, where it quickly became popular among young people and college students. The car's unique design and affordable price made it a hit with American consumers, and it remained popular throughout the 1950s and 1960s.",
        "Over the years, the Beetle underwent numerous updates and redesigns, with new features and improvements being added to the car's design and technology. Despite these changes, the car's iconic shape and design remained largely unchanged, and the Beetle continued to be one of the most recognizable and beloved cars in the world.",
        ]
      },
      section2 : {
        title: "Design",
        content: [
        "The Volkswagen Beetle is known for its distinctive, rounded shape and simple, minimalist design. The car's rounded roof, curved fenders, and round headlights give it a playful, friendly appearance, while its compact size and light weight make it easy to maneuver and park in tight spaces.",
        "The car's interior is similarly minimalist, with a simple dashboard and basic controls. However, the car's compact size and efficient design make it surprisingly roomy and comfortable, with enough space to accommodate four passengers and their luggage.",
        "Over the years, the design of the Beetle underwent numerous updates and improvements, with new features and technologies being added to the car's design. However, the basic shape and character of the car remained largely unchanged, and the Beetle continued to be one of the most iconic and recognizable cars in the world.",
        ]
      }
      },
      technicalData: {
        title: "Technical Data",
        content: {
        segment1: {
          subTitle: "Engine",
          content: [
          '1.2L 4-cylinder engine',
          '50 horsepower @ 4,000 rpm',
          '4-speed manual transmission',
          'Front-wheel drive'
          ]
        },
        segment2: {
          subTitle: "Performance",
          content: [
          '0-60 mph acceleration in 29.3 seconds',
          'Top speed of 72 mph',
          'Fuel consumption of 24-29 mpg'
          ]
        },
        segment3: {
          subTitle: "Dimensions",
          content: [
          'Length: 160.0 inches',
          'Width: 67.0 inches',
          'Height: 60.0 inches',
          'Wheelbase: 94.5 inches'
          ]
        },
        segment4: {
          subTitle: "Features",
          content: [
          'AM/FM radio',
          'Heater and defroster',
          'Electric clock',
          'Luggage compartment lighting'
          ]
        }
      }
    }
  };

  const navmap = useRef(null);
  const [scrollValue, setScrollValue] = useState(0);

  

  useEffect(() => {

    window.addEventListener('scroll', (event) => {

      setScrollValue(document.documentElement.scrollTop);

    })


    const observerForTextAnimation = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("animated");
        }
        })
    })

    const observerForNavmap = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting){
          document.querySelector(("[href='/#"+entry.target.id+"']").replace("_","-")).classList.add("selected")
        } else {
          document.querySelector(("[href='/#"+entry.target.id+"']").replace("_","-")).classList.remove("selected")
        }
      })
    })

    let textForAnimation = document.querySelectorAll('h3, h5, p, li')
    let navmapSegments = [];
    document.querySelectorAll('.segment_lesser, .segment_main').forEach((el) => {
      navmapSegments.push(document.querySelector(("#"+el.href.split("#")[1]).replace("-","_")))
    })

    navmapSegments.forEach((navmapSegment) => {
      observerForNavmap.observe(navmapSegment);
    })

    textForAnimation.forEach((text) => {
      observerForTextAnimation.observe(text);
    })

    console.log("Article format:");
    console.log(article1);

  },[])


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
        <Scrollbar articles={{ article1, article2, article3, article4 }} refScroll={navmap}></Scrollbar>
        <section>
          <CarArticle article={article1}></CarArticle>
          <CarArticle article={article2}></CarArticle>
          <CarArticle article={article3}></CarArticle>
          <CarArticle article={article4}></CarArticle>
        </section>
        <a className={scrollValue === 0 ? 'scrollToTop hidden' : 'scrollToTop shown'} href='/#top'>Scroll to top</a>
      </main>

      <footer>
        <p>All images originate from unsplash.com and belong to their respective authors.</p>
        <p>All text has been generated by ChatGPT.</p>
      </footer>
    </>
  )
}
