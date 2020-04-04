import React, { useContext, useEffect } from 'react'
import { Context } from './Context'
import range from 'lodash.range'
import cx from 'classnames'
import { Link, useParams, Redirect } from 'react-router-dom'

export function Pagination(){
    const context = useContext(Context)
    const {page, pages, products, setContext} = context
    const {pageNumber} = useParams()
    if(Number(pageNumber) > pages){
        return <Redirect to ="/shop/1"/>
    }
    if(!products?.length) return null
    return (
        <div className="pagination flex-m flex-w p-t-26">
            {range(1, pages + 1).map(pageNumber => {
                const isActivePage = pageNumber === page
                const pageClass = cx('item-pagination flex-c-m trans-0-4',
                    {'active-pagination': isActivePage}
                )
                return (
                    <Link to={`/shop/${pageNumber}`}key = {`page${pageNumber}`} onClick = {() => {
                        setContext({...context, page: pageNumber})
                        document.getElementById("Header").scrollIntoView({behavior:"smooth"})
                    }}  
                       className={pageClass}>{pageNumber}
                    </Link>
                )
            })}
        </div>
    )
}