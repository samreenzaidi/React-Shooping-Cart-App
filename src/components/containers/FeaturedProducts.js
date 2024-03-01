import {React, useState, useEffect} from "react";
import parse from "html-react-parser";

const FeaturedProducts = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const { selectedStars, totalStars } = useState(0);

    const getProducts = () => {
        fetch('https://fakestoreapi.com/products?limit=3')
        .then((res) => res.json())
        .then((featuredProducts) => {
            setFeaturedProducts(featuredProducts);
            console.log(featuredProducts);
        })
    };

    useEffect(() => {
        getProducts();
    }, []);

    const USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const getRating = (rating) => {
        rating = Math.round(rating * 2) / 2;
        let output = '';
      
        for (var i = rating; i >= 1; i--)
            output+=`<i class="fa fa-star"/>`;
      
        if (i == .5) output+=`<i class="fa fa-star-half-o"/>`;
      
        for (let i = (5 - rating); i >= 1; i--)
          output+=`<i class="fa fa-star-o"/>`;
      
        return output; 
    }

    return (
        <div className="featured-products">
            <h4 className="heading">FEATURED PRODUCTS</h4>
            <ul className="featured-product-tiles">
                {featuredProducts.map((item) =>
                    <li key={item.id} className="featured-product-tile">
                        <div className="product-image"><img src={item.image} alt={item.description} /></div>
                        <div className="product-details">
                            <div className="product-name">{item.title}</div>
                            <div className="product-rating">{parse(getRating(item.rating.rate))}</div>
                            <div className="product-price-details">
                                <span className="discounted-price">{USDollar.format((item.price * 24) / 100)}</span>
                                <span className="original-price"><s>{USDollar.format(item.price)}</s></span>
                            </div>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}
export default FeaturedProducts;