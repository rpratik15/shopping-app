import React from 'react'
import './Card.css'
import {  useDispatch } from 'react-redux'
import {addToCartAction,removeFromCartAction} from '../../Redux/Action'
import {useNavigate} from 'react-router-dom'

function Card({id,img,title,price,btnText}) {

    // const store = useSelector((state) => state);
    // const [btnText,setBtnText]=useState("Add to Cart")
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const handleButtonClick=()=>{
        if (btnText==="Add to Cart")
        {
            
            
            dispatch(addToCartAction(id))
            // navigate("/cart")
            
        }
        else
        {
            console.log(id)
            dispatch(removeFromCartAction(id))
            //  navigate("/")
        }
     
        

    }
    // console.log(title)
    return (
        <div className="card-box">
          <div className="card-body">
            <div className="card-img">
              <img src={img} alt="product"/>
            </div>
            <div className="card-item-title">Title : {title}</div>
            <div className="card-item-price">Price : ${price}</div>
           
   
    
            <button
              className="add-to-cart-btn"
              onClick={handleButtonClick}>
                {btnText}
              {/* {btnTextFlag? "Add To Cart":"Remove Item"} */}
            </button>
          </div>
        </div>
      );
    };
    
    export default Card;