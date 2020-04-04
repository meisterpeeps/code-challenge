import React, {createContext, Dispatch, SetStateAction, useState} from 'react'


interface IContextProps{
    children: React.ReactNode
}

export interface IProductsParams{
  page: number,
  minPrice: number,
  maxPrice: number,
  search: string,
  sort: Sort,
}

export interface IProduct{
  _id: string
  price: string
  image: string
  about: string
  name: string
}

interface IContext extends IProductsParams {
    pages: number,
    productCount: number,
    products?: Array<IProduct>
    selectedProduct?: IProduct
    setContext: Dispatch<SetStateAction<IContext>>;
}

export type Sort = "descPrice" | "ascPrice" | "none"
const initialContext : IContext = {
    products: null,
    selectedProduct: null,
    productCount: 0,
    page: 1,
    pages: 1,
    minPrice: 0,
    maxPrice: 300,
    search: "",
    sort: "none",
    setContext:  (): void => {
        throw new Error('setContext function must be overridden');
    }
}

export const itemsPerPage = 9

export const Context = createContext<IContext>(initialContext) 

export const ContextProvider = (props :IContextProps) => {
    const [context, setContext] = useState<IContext>(initialContext);
  
    return (
      <Context.Provider value={{
        ...context,
        setContext
      }}>
        { props.children }
      </Context.Provider>
    )
}