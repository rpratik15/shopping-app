import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { fetchAction } from '../../Redux/Action'
import Card from '../UI/Card'
import './Home.css'


function Home() {
    
    const dispatch = useDispatch();
    const store = useSelector((state) => state);
    useEffect(() => {
        axios.get("https://dummyjson.com/products").then((res) => {
            //  console.log( res.data.products)
            dispatch(fetchAction(res.data.products))
            // console.log(res.data.products)
           
        })

    },[])
 


    
  
 
//    console.log(products[0][5].id)

    return (
        <>
        <h2>All Items</h2>
        <div className='product-list'>
            {
                
                
                store?.products?.map((product)=>{
                    return( 
                    <div>
                  
                    <Card
                      key={product.id}
                     id={product.id}
                    img={product.thumbnail}
                    title={product.title}
                
                    price={product.price} 
                     btnText={"Add to Cart"}    
                    
                    />
                    </div>
                    );

                })
            }
           

        </div>
        </>
    )
}

export default Home