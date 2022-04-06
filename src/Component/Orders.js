import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Menu() {
    const [count1, setcount1] = useState(1)
    const [count2, setcount2] = useState(1)
    const [count3, setcount3] = useState(1)
    const [dish1, setDish1] = useState(250)
    const [dish2, setDisk2] = useState(100)
    const [dish3, setDish3] = useState(150)

    function handelClickAdd1() { setcount1(prev => prev + 1) }
    function handelClickAdd2() { setcount2(prev => prev + 1) }
    function handelClickAdd3() { setcount3(prev => prev + 1) }

    function handelClickSub1() {
        if (count1 === 1) { setcount1(count1) }
        else { setcount1(prev => prev - 1) }
    }
    function handelClickSub2() {
        if (count2 === 1) { setcount2(count2) }
        else { setcount2(prev => prev - 1) }
    }
    function handelClickSub3() {
        if (count3 === 1) { setcount3(count3) }
        else { setcount3(prev => prev - 1) }
    }
    useEffect(() => {
        setDish1(count1 * 250)
        setDish3(count3 * 100)
        setDisk2(count2 * 150)
    }, [count1, count2, count3])
    return (
        <>
            <section className='container' >
                <div className='card'>
                    <div className='card-img food-1'></div>
                    <h4>Price: Rs 250  <span style={{ margin: "2px" }} >Qty:{count1}  </span>
                        <span style={{ margin: "4px" }} >Cost:{dish1}</span></h4>
                    <button onClick={handelClickAdd1} className='add' >+</button>
                    <button onClick={handelClickSub1} className='add' >-</button>
                </div>
                <div className='card'>
                    <div className='card-img food-2'></div>
                    <h4>Price: Rs 150  <span style={{ margin: "4px" }} >Qty:{count2}  </span>
                        <span style={{ margin: "4px" }} >Cost:{dish2}</span></h4>
                    <button onClick={handelClickAdd2} className='add' >+</button>
                    <button onClick={handelClickSub2} className='add' >-</button>

                </div>
                <div className='card'>
                    <div className='card-img food-3'></div>
                    <h4>Price: Rs 100  <span style={{ margin: "2px" }} >Qty:{count3}  </span>
                        <span style={{ margin: "4px" }} >Cost:{dish3}</span></h4>
                    <button onClick={handelClickAdd3} className='add' >+</button>
                    <button onClick={handelClickSub3} className='add' >-</button>
                </div>

            </section>
            <div className='order' ><h2>Order value: Rs {dish1 + dish2 + dish3}</h2></div>
            <footer className='checkout'> <Link to="/logout"><button className='check' >checkout</button></Link></footer>

        </>
    )
}

export default Menu
