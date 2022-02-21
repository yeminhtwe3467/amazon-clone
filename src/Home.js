import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt=""
                />
                <div className="home__row">
                    <Product 
                    id=""
                    title="The lean Startup"
                    price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    rating={5}
                    />
                    <Product 
                    id="49530094"
                    title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                    price={239.0}
                    image="https://images-na.ssl-images-amazon.com/images/I/61etD4-IrPL._AC_SL1200_.jpg"
                    rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product 
                    id="49530078"
                    title="Samsung Galaxy Gear Smartwatch- Retail Packaging - Jet Black (Discontinued by Manufacturer) "
                    price={274.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/81jMWseOH9L._AC_SX569_.jpg"
                    rating={5}
                    />
                    <Product 
                    id="49530029"
                    title="Amazon Echo (3rd Gengeration) | Smart speaker with Alexa, Charcoal Fabric"
                    price={98.99}
                    image="https://www.pbtech.co.nz/imgprod/S/P/SPKAMZ3100__2.jpg"
                    rating={5}
                    />
                    <Product 
                    id="23303994"
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                    price={598.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SL1500_.jpg"
                    rating={4}
                    />
                </div>
                <div className="home__row">
                <Product 
                    id="49530078"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                    price={1094.98}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SL1000_.jpg"
                    rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
