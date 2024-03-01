import { useDispatch } from "react-redux";
import { redirectToCartAction } from "../store/action/RedirectToCartAction";

const Breadcrumbs = ({prodCategory}) =>  {
    const dispatch = useDispatch();
    const redirectToLanding = (e) => {
        e.preventDefault();
        dispatch(redirectToCartAction(false))
    };
    return (
        <ul class="breadcrumbs">
            <li className='breadcrumbs-item'><a href="/" onClick={(e) => redirectToLanding(e)}>Home</a></li>
            <li className='breadcrumbs-item'><a href="/" onClick={(e) => redirectToLanding(e)}>Hot Deal</a></li>
            <li className='breadcrumbs-item'>{prodCategory}</li>
        </ul>
    )
}

export default Breadcrumbs;