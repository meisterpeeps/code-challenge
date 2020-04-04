import * as fastify from 'fastify'
import * as fastifyBlipp from 'fastify-blipp'
import * as fastifyStatic from 'fastify-static'
import * as path from 'path'
import {getManyOpts, getSingleOpts} from './routeOptions'
import {IGetManyQuery, IGetSingleQuery, IProduct} from './interfaces'
import axios from 'axios'

const server = fastify()
    .register(fastifyBlipp)
    .register(fastifyStatic, {
        wildcard: true,
        root: path.join(__dirname, '../client/public'),
      })

server.get("/", (_, reply) => {
    reply.redirect("/shop/1")
})

server.get("/shop/*", (_,reply) => {
    reply.sendFile("index.html")    
})

server.get("/product/*", (_,reply)=>{
     reply.sendFile("index.html")
})

// Return a list of IProduct
server.get<IGetManyQuery>("/GetMany",getManyOpts, async (req, reply) => {
    const res = await axios.get("https://next.json-generator.com/api/json/get/EkzBIUWNL")
    const products : Array<IProduct> = res.data  
    const {maxPrice, minPrice, page, search, sort} = req.query

    const filteredProducts = products
        .filter(product => {
            return (
                (parseFloat(product.price) > minPrice) &&
                (parseFloat(product.price) < maxPrice) &&
                (product.name.includes(search))
            )
        })
        .sort((a, b) => {
            switch (sort) {
                case "ascPrice":
                    return parseFloat(a.price) - parseFloat(b.price)
                case "descPrice":
                    return parseFloat(b.price) - parseFloat(a.price)
                default:
                    return 0
            }
        }) // sort by ascending or descending price or none
    const productCount = filteredProducts.length
    const itemsPerPage = 9
    const pages = Math.ceil(filteredProducts.length / itemsPerPage)
    const modifiedPage = page > pages ? 1 : page
    const startSlice = (itemsPerPage * modifiedPage) - itemsPerPage
    const endSlice = startSlice + itemsPerPage
    const pageProducts = filteredProducts.slice(startSlice,endSlice) 
    return {pageProducts, pages, productCount, page: modifiedPage}
});


// Return one IProduct
server.get<IGetSingleQuery>("/GetSingle", getSingleOpts, async (req, reply) => {
    const res = await axios.get("https://next.json-generator.com/api/json/get/EkzBIUWNL")
    const products : Array<IProduct> = res.data
    const id = req.query.id.slice(1)
    const product = products.find(product => product._id === id)
    if(product){
        return product
    }
    reply.code(400).send()
});

const startServer = async () => {
    try{
        await server.listen(3000)
        console.log("Server listening");
        server.blipp()
    } catch (err) {
        console.log(err);
    }    
}
startServer()
