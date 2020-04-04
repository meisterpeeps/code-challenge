import React, { useContext } from 'react'
import { Context, itemsPerPage, Sort } from './Context'

export function Sorting(){
    const context = useContext(Context)
    const {productCount, page, sort, setContext } = context
    const rangeStart = page * itemsPerPage + 1 - itemsPerPage
    const rangeEnd = page * itemsPerPage > productCount 
        ? productCount 
        : page * itemsPerPage
    if(rangeEnd === 0) return null
    return(
        <div className="flex-sb-m flex-w p-b-35">
            <div className="flex-w">
                <div className="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
                    <select className="selection-2" value = {sort} onChange = {({target})=>{
                        const sortString = target.value as Sort
                        setContext({...context, sort: sortString})
                    }}>
                        <option value = "none">Default Sorting</option>
                        <option value = "ascPrice">Price: low to high</option>
                        <option value = "descPrice">Price: high to low</option>
                    </select>
                </div>
            </div>

            <span className="s-text8 p-t-5 p-b-5">
                {`Showing ${rangeStart}–${rangeEnd} of ${productCount} results`}
            </span>
        </div>
    )
}