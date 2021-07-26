import React from 'react'
import "./home.css";
import {Carousel} from "react-bootstrap";
import Product from './Product';
const Home = () => {
    return (
        <div className="home">
            <div className="home-container">
                <Carousel className="slider">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="row mx-auto">
                <Product id={1} image="https://m.media-amazon.com/images/I/813dec-cszS._AC_UY218_.jpg" desc="Some quick example text to build on the card title and make up the bulk of the card's content." price={121.99} rating={3}/>
                <Product id={2} image="https://m.media-amazon.com/images/I/813SCIU8p6S._AC_UL320_.jpg" desc="Some quick example text to build on the card title and make up the bulk of the card's content." price={11.99} rating={2}/>
                <Product id={3} image="https://images-na.ssl-images-amazon.com/images/I/A1LDFBeKebL._AC_SX679_.jpg" desc="Some quick example text to build on the card title and make up the bulk of the card's content." price={120.99} rating={1}/>
                <Product id={4} image="https://images-na.ssl-images-amazon.com/images/I/81afsli5ctL._AC_SL1500_.jpg" desc="Some quick example text to build on the card title and make up the bulk of the card's content." price={62.99} rating={5}/>
                <Product id={5} image="https://m.media-amazon.com/images/I/81UL7Zqkz2L._AC_UL320_.jpg" desc="Some quick example text to build on the card title and make up the bulk of the card's content." price={12.99} rating={2}/>
                <Product id={6} image="https://images-na.ssl-images-amazon.com/images/I/71wPLzgLNYL._AC_SL1500_.jpg" desc="Some quick example text to build on the card title and make up the bulk of the card's content." price={32.99} rating={4}/>
                <Product id={7} image="https://images-na.ssl-images-amazon.com/images/I/91voaOGWHcL._AC_SL1500_.jpg" desc="Some quick example text to build on the card title and make up the bulk of the card's content." price={12.99} rating={5}/>
            </div>
        </div>
    )
}

export default Home
