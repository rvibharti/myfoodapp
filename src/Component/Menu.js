import React from 'react'
import { Link } from 'react-router-dom'

function Orders() {
    return (
        <>
            <section className='container' >
                <div className='card'>
                    <div className='card-img food-1'></div>
                    <h2 style={{ margin: "20px" }} >Dinner  Rs-250 </h2>
                    <button className='add' >+</button>
                    <button className='add' >-</button>

                </div>
                <div className='card'>
                    <div className='card-img food-2'></div>
                    <h2 style={{ margin: "20px" }} >Sandwitch Rs-150 </h2>
                    <button className='add' >+</button>
                    <button className='add' >-</button>
                </div>
                <div className='card'>
                    <div className='card-img food-3'></div>
                    <h2 style={{ margin: "20px" }} >Burger Rs-100 </h2>
                    <button className='add' >+</button>
                    <button className='add' >-</button>
                </div>
            </section >
            <footer className='checkout'> <Link to="/Orders"><button className='check' >Your Orders</button></Link></footer>
        </>
    )
}

export default Orders