export type Sort = "descPrice" | "ascPrice" | "none"

export interface IProduct{
    _id: string,
    price: string,
    image: string,
    about: string,
    name: string
}

export interface IGetSingleQuery {
    id: string
}

export interface IProductsParams{
    page: number,
    minPrice: number,
    maxPrice: number,
    search: string,
    sort: Sort,
  }

export interface IGetManyQuery extends IProductsParams {

}