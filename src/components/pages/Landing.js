import React from 'react';
import Navbar from '../containers/Navbar';
import PromotionBanner from "../containers/PromotionBanner";
import ProductListing from "../containers/ProductListing";
import ShopBanner from "../containers/ShopBanner";
import WhyUs from "../containers/WhyUs";
import FeaturedProducts from "../containers/FeaturedProducts";
import SearchBar from '../containers/SearchBar';

const Home = () =>  {
    return (
        <div className='landing-wrapper'>
            <Navbar />
            <PromotionBanner />
            <ProductListing />
            <ShopBanner />
            <WhyUs />
            <FeaturedProducts />
            <SearchBar />
        </div>
    )
}

export default Home;