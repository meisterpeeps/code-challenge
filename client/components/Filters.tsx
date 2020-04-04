import React, { useContext, useState } from 'react'
import { Context } from './Context'

export function Filters(){
    return(
        <>
        <h4 className="m-text14 p-b-32">Filters</h4>
        <PriceFilter />
        <ColorFilter />
        <Search />
        </> 
    )
}

function PriceFilter(){
    const context = useContext(Context)
    const {minPrice, maxPrice, setContext} = context
    const [min, setMin] = useState<number>(minPrice)
    const [max, setMax] = useState<number>(maxPrice)
    
    return(
        <div className="filter-price p-t-22 p-b-50 bo3">
            <div className="m-text15 p-b-17">
                Price
            </div>

            <div className="wra-filter-bar">
                <input type="range" value = {min} min="0" max="300"  onChange = {({target}) => {
                        const minValue = Number(target.value) > max ? max : Number(target.value)
                        setMin(minValue)                       
                }}/> Min 
                <br></br>

                <input type="range" value = {max} min="0" max="300" onChange = {({target})=>{
                        const maxValue = Number(target.value) < min ? min : Number(target.value)
                        setMax(Number(maxValue))
                }} /> Max 
                <br></br>
                Range: $<span id="value-lower">{min}</span> - $<span id="value-upper">{max}</span>
            </div>

            <div className="flex-sb-m flex-w p-t-16">
                <div className="w-size11">
                    {/* <!-- Button --> */}
                    <button className="flex-c-m size4 bg7 bo-rad-15 hov1 s-text14 trans-0-4" onClick = {()=> {
                        setContext({...context, minPrice: min, maxPrice: max})
                    }}>
                        Filter
                    </button>
                </div>
            </div>
        </div>
    )
}

function ColorFilter(){
    return(
        <div className="filter-color p-t-22 p-b-50 bo3">
            <div className="m-text15 p-b-12">
                Color
            </div>

            <ul className="flex-w">
                <li className="m-r-10">
                    <input className="checkbox-color-filter" id="color-filter1" type="checkbox" name="color-filter1"/>
                    <label className="color-filter color-filter1" htmlFor="color-filter1"></label>
                </li>

                <li className="m-r-10">
                    <input className="checkbox-color-filter" id="color-filter2" type="checkbox" name="color-filter2"/>
                    <label className="color-filter color-filter2" htmlFor="color-filter2"></label>
                </li>

                <li className="m-r-10">
                    <input className="checkbox-color-filter" id="color-filter3" type="checkbox" name="color-filter3"/>
                    <label className="color-filter color-filter3" htmlFor="color-filter3"></label>
                </li>

                <li className="m-r-10">
                    <input className="checkbox-color-filter" id="color-filter4" type="checkbox" name="color-filter4"/>
                    <label className="color-filter color-filter4" htmlFor="color-filter4"></label>
                </li>

                <li className="m-r-10">
                    <input className="checkbox-color-filter" id="color-filter5" type="checkbox" name="color-filter5"/>
                    <label className="color-filter color-filter5" htmlFor="color-filter5"></label>
                </li>

                <li className="m-r-10">
                    <input className="checkbox-color-filter" id="color-filter6" type="checkbox" name="color-filter6"/>
                    <label className="color-filter color-filter6" htmlFor="color-filter6"></label>
                </li>

                <li className="m-r-10">
                    <input className="checkbox-color-filter" id="color-filter7" type="checkbox" name="color-filter7"/>
                    <label className="color-filter color-filter7" htmlFor="color-filter7"></label>
                </li>
            </ul>
        </div>
    )
}

function Search(){
    const context = useContext(Context)
    const {search, setContext} = context
    const [productName, setProductName] = useState<string>(search)
    return(
        <div className="search-product pos-relative bo4 of-hidden">
            <input 
                className="s-text7 size6 p-l-23 p-r-50" 
                type="text" 
                value = {productName} 
                onChange = {({target}) => setProductName(target.value)} 
                name="search-product" 
                placeholder="Search Products..."
            />

            <button className="flex-c-m size5 ab-r-m color2 color0-hov trans-0-4" onClick = {()=> {setContext({...context, search: productName})}}>
                <i className="fs-12 fa fa-search" aria-hidden="true"></i>
            </button>
        </div>
    )
}

