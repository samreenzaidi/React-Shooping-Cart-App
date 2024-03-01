import { useDispatch } from "react-redux";
import { redirectToCartAction } from "../store/action/RedirectToCartAction";

const Navbar = () => {
    const dispatch = useDispatch();
    const redirectToLanding = (e) => {
        e.preventDefault();
        dispatch(redirectToCartAction(false))
    };
    return (
        <div className="navbar">
            <ul className="navbar-links">
                <li><a onClick={(e) => redirectToLanding(e)}>HOME</a></li>
                <li><a href="/" onClick={(e) => redirectToLanding(e)}>BAGS</a></li>
                <li><a href="/" onClick={(e) => redirectToLanding(e)}>SNEAKERS</a></li>
                <li><a href="/" onClick={(e) => redirectToLanding(e)}>BELT</a></li>
                <li><a href="/" onClick={(e) => redirectToLanding(e)}>CONTACT</a></li>
            </ul>
        </div>
    );
}

export default Navbar;