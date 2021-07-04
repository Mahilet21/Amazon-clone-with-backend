import React from "react";
import "./home.css";
import Product from "./Product";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
function Home() {
  return (
    <div className="home">
<div className="home_image">
      <div className="home__container">
      <Carousel fade="true" interval="4000" home__images>
          <Carousel.Item>
            <img
              className=" home__image "
              src="https://images-na.ssl-images-amazon.com/images/G/01/em/pd21/xcm_em_Prime_Day_2021_857-USEN_D_PDS-HP-Tall-Hero_1500x600._CB667246497_.jpg"
               style={{ height: "100vh" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=" home__image "
              src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/NDdhM2JmYjct/NDdhM2JmYjct-OGI3YTUyMDMt-w1500._CB668835500_.jpg"
               style={{ height: "100vh" }}
            />
          </Carousel.Item>

            
          <Carousel.Item>
            <img
              className=" home__image "
              src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2021/TV/PNCC_S1_GWBleedingHero_1500x600_POST_Final_noLocale_PVD6984._CB669237422_.jpg"
               style={{ height: "100vh" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=" home__image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YzM5ODUxZmQt/YzM5ODUxZmQt-OWExYTJkYjct-w1500._CB655797581_.jpg"
               style={{ height: "100vh" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=" home__image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/img20/CBCC/ACQ/Gateway/US-CBCC_ACQ_Prime_PD21_DayOf_Gateway_TallHero_Desktop_3000x1200_v3b._CB667049074_.jpg"
               style={{ height: "100vh" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=" home__image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2019/Other/RB-1424_AcquisitionHolidayAssets/GW_DesktopHero_RB-1424_PV-AcquisitionHolidayAssets_1500x600._CB451871227_.jpg"
               style={{ height: "100vh" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="home__image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Y2UwYWM0MDQt/Y2UwYWM0MDQt-MjZhZDIzYTIt-w1500._CB670370726_.jpg"
               style={{ height: "100vh" }}
            />
          </Carousel.Item>
        </Carousel>
        </div>
        <div className="home__row1">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
