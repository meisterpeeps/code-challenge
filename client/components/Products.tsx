import React, {useContext, useEffect} from 'react'
import { Context, IProduct, IProductsParams, itemsPerPage } from './Context'
import axios, { AxiosResponse } from 'axios'
import {Link, useParams} from "react-router-dom"


interface ProductsResponse extends AxiosResponse {
    data: {
        pageProducts: Array<IProduct>,
        pages: number,
        productCount: number,
        page: number
    }
}

export function Products(){
    const context = useContext(Context)
    const {page, 
        search, 
        sort, 
        minPrice, 
        maxPrice, 
        products, 
        setContext
    } = context
    const {pageNumber} = useParams()
    useEffect( () => {
        const query : IProductsParams = { page: Number(pageNumber) || page, search, sort, minPrice, maxPrice }    
        
        axios.get('/GetMany', {params: query})
                .then((res: ProductsResponse ) => {
                    const {pageProducts: products, pages, productCount, page} = res.data;
                    setContext({
                        ...context, 
                        products,
                        pages,
                        productCount,
                        page
                    })
                })
                .catch((e) => {console.log(e)})
    }, [page, search, sort.valueOf(), minPrice, maxPrice, pageNumber ])

    const productElements = products?.map((product, index) => {
        const imageCount = itemsPerPage * page + index
        return <Product 
            key = {product._id} 
            product = {product} 
            imageCount = {imageCount} />
    })
 
    return(
        <div className="row">
            {productElements}
        </div>
    )
}

interface IProductProps{
    product: IProduct,
    imageCount: number
}
function Product({product, imageCount} : IProductProps){
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
        <div className="block2">
            <div className="block2-img wrap-pic-w of-hidden pos-relative block2-label">
                <img src= {`${product.image}=${imageCount}`} alt="IMG-PRODUCT"/>

                <div className="block2-overlay trans-0-4">
                    <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                        <i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
                        <i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
                    </a>

                    <div className="block2-btn-addcart w-size1 trans-0-4">
                        {/* <!-- Button --> */}
                        <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

            <div className="block2-txt p-t-20">
                <Link to = {`/product/:${product._id}`} className="block2-name dis-block s-text3 p-b-5">
                    {product.name.substr(0,10)}
                </Link>

                <span className="block2-price m-text6 p-r-5">
                    ${product.price}
                </span>
            </div>
        </div>
    </div>
    )
}