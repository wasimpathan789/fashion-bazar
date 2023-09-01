import './Category.css'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../CategorySlice';

const Category = () => {
    const dispatch = useDispatch();
    const { data: categories } = useSelector((state) => state.category)

    useEffect(() => {
        dispatch(fetchCategories());

    }, [])
    return (
        <div>
            <h1>Categoryss</h1>
            <div className='category-container'>
                {
                    categories.map((cat, id) => (
                        <div key={id} className=' '>
                            <div className='w-full'>
                                <img src={cat.image} alt={cat.label} className='w-full ' />

                            </div>

                            <h4 className='text-center font-normal poppins '>{cat.label}</h4>
                        </div>
                    ))
                }

            </div>


        </div>
    )
}

export default Category
