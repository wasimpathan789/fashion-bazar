import { useState } from 'react'
import './Quantity.css'
import { useDispatch, useSelector } from 'react-redux';

const Quantity = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.counter)
    // const [counter, setCounter] = useState(0);
    // const decrimentHandler = () => {
    //     setCounter(counter - 1);
    //     if (counter <= 0) {
    //         alert("hi")
    //         counter = 0;
    //     }
    // }




    return (
        <div className='quantity-container w-fit '>
            <button className='px-2 py-1 bg-primary'>+</button>
            <span className='px-4'>{state}</span>
            <button className='px-2 bg-primary '>-</button>


        </div>
    )
}

export default Quantity
