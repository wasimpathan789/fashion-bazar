import React from 'react'
import { useSelector } from 'react-redux'

const SingleProduct = () => {
    const singleProduct = useSelector((state) => state.product.selectedProduct)
    return (
        <div>
            <h1>single product</h1>

        </div>
    )
}

export default SingleProduct
