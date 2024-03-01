import {React, useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { addItemToCartAction } from "../store/action/CartAction";
import { redirectToCartAction } from "../store/action/RedirectToCartAction";

const ProductListing = () => {
    const [products, setProducts] = useState([]);
    let [prodsAddedToCart, setProdsAddedToCart] = useState([]);
    const dispatch = useDispatch();
    
    const redirectToLanding = (e) => {
        e.preventDefault();
        dispatch(redirectToCartAction(false))
    };
    
    const getProducts = () => {
        fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((products) => {
            setProducts(products);
        })
    };
    
    useEffect(() => {
        getProducts();
    }, []);

    const addToCart = (e, prod) => {
        if(!prod) return;
        e.preventDefault();
        let product = {
            ...prod,
            quantity: 1
        }
        const productExist = prodsAddedToCart.find(item => item.productId === product.productId);
        if (productExist) {
            prodsAddedToCart = prodsAddedToCart.map(item =>
                item.productId === product.productId ? { ...productExist, quantity: productExist.quantity + 1 } : item
            )
            setProdsAddedToCart(prodsAddedToCart)
        } else {
            prodsAddedToCart = [...prodsAddedToCart, { 
                ...product, 
                quantity: 1
            }]
            setProdsAddedToCart(prodsAddedToCart)
        }
        fetch('https://fakestoreapi.com/carts',{
            method:"POST",
            body: JSON.stringify(
                {
                    userId: 5,
                    date:'2020-02-03',
                    products: prodsAddedToCart
                }
            )
        })
        .then(res=>res.json())
        .then(()=>{
            dispatch(addItemToCartAction(product))
        })
    }

    const USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return(
        <div className="product-listing">
            <h4 className="heading">BEST SELLER</h4>
            <div className="navbar">
                <ul className="navbar-links">
                    <li><a href="/" onClick={(e) => redirectToLanding(e)}>All</a></li>
                    <li><a href="/" onClick={(e) => redirectToLanding(e)}>Bags</a></li>
                    <li><a href="/" onClick={(e) => redirectToLanding(e)}>Sneakers</a></li>
                    <li><a href="/" onClick={(e) => redirectToLanding(e)}>Belt</a></li>
                    <li><a href="/" onClick={(e) => redirectToLanding(e)}>Sunglasses</a></li>
                </ul>
            </div>
            <ul className="product-tiles">
                {products.map((item) =>
                    <li key={item.id} className="product-tile">
                        <div className="red-hot">HOT</div>
                        <div className="product-image"><img src={item.image} alt={item.description} />
                            <div className="product-image-onhover">
                                <div className="onhover-images">
                                    <div className="wishlist-image"></div>
                                    <a onClick={(e) => addToCart(e, item)}><div className="cart-image"></div></a>
                                </div>
                            </div>
                        </div>
                        <div className="product-name">{item.title}</div>
                        <div className="product-price-details">
                            <span className="discounted-price">{USDollar.format((item.price * 24) / 100)}</span>
                            <span className="original-price"><s>{USDollar.format(item.price)}</s></span>
                            <span className="discount-percentage">24%</span>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}
export default ProductListing;