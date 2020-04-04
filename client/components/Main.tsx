import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route  } from "react-router-dom"
import { Categories } from "./Categories"
import { Filters } from './Filters'
import { Sorting } from './Sorting'
import { Products } from "./Products"
import { Pagination } from "./Pagination"
import { ProductDetail } from "./ProductDetail"

export const Main = () => {
    return (
        <Router>
            <Switch>
                <Route path = '/product/:id'>
                    <ProductDetail />
                </Route>
                <Route path ='/shop/:pageNumber'>
                    <Shop />
                </Route>
            </Switch>
        </Router>
    )
}

function Shop(){
    return(
        <div className="container">
            <div className="row">
                <LeftColumn />
                <MainColumn />
            </div>
        </div>
    )
}

function LeftColumn(){
    return (
        <div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
            <div className="leftbar p-r-20 p-r-0-sm">
                <Categories/>
                <Filters />                   
            </div>
        </div>
    )
}

function MainColumn(){
    return(
        <div className="col-sm-6 col-md-8 col-lg-9 p-b-50">
            <Sorting />
            <Products />
            <Pagination />
        </div>
    )
}

