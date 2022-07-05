import React from 'react'
import Product from "./Product"
import "./Home.css";

function Home() {
    return (
        <div className='home'>
            <img className='home_image'
               // src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' 
               src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/TheTerminalList/3000x1200_Hero-Tall_NP._CB634276799_.jpg"
               />
           
            <div className='home_row'>
                <Product
                    id="12371341"
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price={279}
                    rating={3}
                    image="https://m.media-amazon.com/images/P/1982167386.01._SCLZZZZZZZ_SX500_.jpg"
                />
                <Product
                    id="12321341"
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price={1950}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                />
            </div>
            <div className='home_row'>
                <Product
                    id="123213741"
                    title="Samsung Galaxy S20 FE 5G (Cloud Mint, 8GB RAM, 128GB Storage)"
                    price={39999}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/812yohjGZ2L._SL1500_.jpg"
                />
                <Product
                    id="12421341"
                    title="Atomic Habits: The life-changing million copy bestseller"
                    price={515}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/51-nXsSRfZL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                />
                <Product
                    id="12391341"
                    title="2022 Apple MacBook Pro Laptop with M2 chip: 33.74 cm (13.3-inch) Retina Display, 8GB RAM, 256GB SSD ​​​​​​​Storage, Touch Bar, Backlit Keyboard, FaceTime HD Camera​​​; Space Grey ​​​​​​​"
                    price={129900}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/71WtFY52CeL._SL1500_.jpg"
                />
            </div>
            <div className='home_row'>
                <Product
                    id="12321349"
                    title="Samsung M5 27 FHD 1080p Smart Monitor, 4ms Response time, 1 Billion Color, Smart TV apps, Samsung TV Plus, Apple Airplay, Samsung Dex, Office 365, Bluetooth, IOT, Speakers, Remote LS27BM500, Black"
                    price={19299}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71dTgFrCTCL._SL1500_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
