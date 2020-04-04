import React, { useContext, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Context, IProduct } from './Context'
import range from 'lodash.range'
import axios from 'axios'

export function ProductDetail(){
  const {id} = useParams()
  const context = useContext(Context)
  const {selectedProduct: product, setContext} = context
  useEffect(() =>{
    axios.get("/GetSingle", {params: {id}})
      .then((res) => {
         setContext({...context, selectedProduct: res.data})
      })
      .catch(e => console.log(e))
  }, [id])
  console.log('Product', product)
  if(!product) return null
    return(
        <>
        <BreadCrumb product = {product} />
        <Details product ={product} />
        <RelatedProducts />
        </>
    )
}


function BreadCrumb({product} : {product: IProduct}){
    return (
        <div className="bread-crumb bgwhite flex-w p-l-52 p-r-15 p-t-30 p-l-15-sm">
            <Link to = {'/shop/1'}href="index.html" className="s-text16">
                Home
                <i className="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"></i>
            </Link>
    
            <a href="product.html" className="s-text16">
                Women
                <i className="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"></i>
            </a>
    
            <a href="#" className="s-text16">
                T-Shirt
                <i className="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"></i>
            </a>
    
            <span className="s-text17">
                {product.name}
            </span>
        </div>
    )
}

function Details({product}: {product: IProduct}){
    const images = range(1, 5).map(index => {
      return `${product.image}=${index}`
    })
    return (
        <div className="container bgwhite p-t-35 p-b-80">
		<div className="flex-w flex-sb">
			<div className="w-size13 p-t-30 respon5">
				<div className="wrap-slick3 flex-sb flex-w">

					<div className="item-slick3 main" data-thumb="images/thumb-item-01.jpg">
						<div className="wrap-pic-w">
							<img src={images[0]} alt="IMG-PRODUCT"/>
						</div>
					</div>

					<div className="slick3">
						<div className="item-slick3" data-thumb="images/thumb-item-01.jpg">
							<div className="wrap-pic-w">
								<img src={images[1]}alt="IMG-PRODUCT"/>
							</div>
						</div>

						<div className="item-slick3" data-thumb="images/thumb-item-02.jpg">
							<div className="wrap-pic-w">
								<img src={images[2]} alt="IMG-PRODUCT"/>
							</div>
						</div>

						<div className="item-slick3" data-thumb="images/thumb-item-03.jpg">
							<div className="wrap-pic-w">
								<img src={images[3]} alt="IMG-PRODUCT"/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="w-size14 p-t-30 respon5">
				<h4 className="product-detail-name m-text16 p-b-13">
					{product.name}
				</h4>

				<span className="m-text17">
					${product.price}
				</span>

				<p className="s-text8 p-t-10">
          {product.about}
				</p>

		
				<div className="p-t-33 p-b-60">
					<div className="flex-m flex-w p-b-10">
						<div className="s-text15 w-size15 t-center">
							Size
						</div>

						<div className="rs2-select2 rs3-select2 bo4 of-hidden w-size16">
							<select className="selection-2" name="size">
								<option>Choose an option</option>
								<option>Size S</option>
								<option>Size M</option>
								<option>Size L</option>
								<option>Size XL</option>
							</select>
						</div>
					</div>

					<div className="flex-m flex-w">
						<div className="s-text15 w-size15 t-center">
							Color
						</div>

						<div className="rs2-select2 rs3-select2 bo4 of-hidden w-size16">
							<select className="selection-2" name="color">
								<option>Choose an option</option>
								<option>Gray</option>
								<option>Red</option>
								<option>Black</option>
								<option>Blue</option>
							</select>
						</div>
					</div>

					<div className="flex-r-m flex-w p-t-10">
						<div className="w-size16 flex-m flex-w">
							<div className="flex-w bo5 of-hidden m-r-22 m-t-10 m-b-10">
								<button className="btn-num-product-down color1 flex-c-m size7 bg8 eff2">
									<i className="fs-12 fa fa-minus" aria-hidden="true"></i>
								</button>

								<input className="size8 m-text18 t-center num-product" type="number" name="num-product" value="1"/>

								<button className="btn-num-product-up color1 flex-c-m size7 bg8 eff2">
									<i className="fs-12 fa fa-plus" aria-hidden="true"></i>
								</button>
							</div>

							<div className="btn-addcart-product-detail size9 trans-0-4 m-t-10 m-b-10">
						
								<button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
									Add to Cart
								</button>
							</div>
						</div>
					</div>
				</div>

				<div className="p-b-45">
					<span className="s-text8 m-r-35">SKU: MUG-01</span>
					<span className="s-text8">Categories: Mug, Design</span>
				</div>

				<div className="wrap-dropdown-content bo6 p-t-15 p-b-14 active-dropdown-content">
					<h5 className="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4">
						Description
						<i className="down-mark fs-12 color1 fa fa-minus dis-none" aria-hidden="true"></i>
						<i className="up-mark fs-12 color1 fa fa-plus" aria-hidden="true"></i>
					</h5>

					<div className="dropdown-content dis-none p-t-15 p-b-23">
						<p className="s-text8">
							Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat
						</p>
					</div>
				</div>

				<div className="wrap-dropdown-content bo7 p-t-15 p-b-14">
					<h5 className="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4">
						Additional information
						<i className="down-mark fs-12 color1 fa fa-minus dis-none" aria-hidden="true"></i>
						<i className="up-mark fs-12 color1 fa fa-plus" aria-hidden="true"></i>
					</h5>

					<div className="dropdown-content dis-none p-t-15 p-b-23">
						<p className="s-text8">
							Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat
						</p>
					</div>
				</div>

				<div className="wrap-dropdown-content bo7 p-t-15 p-b-14">
					<h5 className="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4">
						Reviews (0)
						<i className="down-mark fs-12 color1 fa fa-minus dis-none" aria-hidden="true"></i>
						<i className="up-mark fs-12 color1 fa fa-plus" aria-hidden="true"></i>
					</h5>

					<div className="dropdown-content dis-none p-t-15 p-b-23">
						<p className="s-text8">
							Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
    )
}

function RelatedProducts(){
    return (
        <section className="relateproduct bgwhite p-t-45 p-b-138">
  <div className="container">
    <div className="sec-title p-b-60">
      <h3 className="m-text5 t-center">Related Products</h3>
    </div>
    {/* Slide2 */}
    <div className="wrap-slick2">
      <div className="slick2">
        <div className="item-slick2 p-l-15 p-r-15">
          {/* Block2 */}
          <div className="block2">
            <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
              <img src="/images/item-02.jpg" alt="IMG-PRODUCT" />
              <div className="block2-overlay trans-0-4">
                <a
                  href="#"
                  className="block2-btn-addwishlist hov-pointer trans-0-4"
                >
                  <i
                    className="icon-wishlist icon_heart_alt"
                    aria-hidden="true"
                  />
                  <i
                    className="icon-wishlist icon_heart dis-none"
                    aria-hidden="true"
                  />
                </a>
                <div className="block2-btn-addcart w-size1 trans-0-4">
                  {/* Button */}
                  <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="block2-txt p-t-20">
              <a
                href="product-detail.html"
                className="block2-name dis-block s-text3 p-b-5"
              >
                Herschel supply co 25l
              </a>
              <span className="block2-price m-text6 p-r-5">$75.00</span>
            </div>
          </div>
        </div>
        <div className="item-slick2 p-l-15 p-r-15">
          {/* Block2 */}
          <div className="block2">
            <div className="block2-img wrap-pic-w of-hidden pos-relative">
              <img src="/images/item-03.jpg" alt="IMG-PRODUCT" />
              <div className="block2-overlay trans-0-4">
                <a
                  href="#"
                  className="block2-btn-addwishlist hov-pointer trans-0-4"
                >
                  <i
                    className="icon-wishlist icon_heart_alt"
                    aria-hidden="true"
                  />
                  <i
                    className="icon-wishlist icon_heart dis-none"
                    aria-hidden="true"
                  />
                </a>
                <div className="block2-btn-addcart w-size1 trans-0-4">
                  {/* Button */}
                  <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="block2-txt p-t-20">
              <a
                href="product-detail.html"
                className="block2-name dis-block s-text3 p-b-5"
              >
                Denim jacket blue
              </a>
              <span className="block2-price m-text6 p-r-5">$92.50</span>
            </div>
          </div>
        </div>
        <div className="item-slick2 p-l-15 p-r-15">
          {/* Block2 */}
          <div className="block2">
            <div className="block2-img wrap-pic-w of-hidden pos-relative">
              <img src="/images/item-05.jpg" alt="IMG-PRODUCT" />
              <div className="block2-overlay trans-0-4">
                <a
                  href="#"
                  className="block2-btn-addwishlist hov-pointer trans-0-4"
                >
                  <i
                    className="icon-wishlist icon_heart_alt"
                    aria-hidden="true"
                  />
                  <i
                    className="icon-wishlist icon_heart dis-none"
                    aria-hidden="true"
                  />
                </a>
                <div className="block2-btn-addcart w-size1 trans-0-4">
                  {/* Button */}
                  <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="block2-txt p-t-20">
              <a
                href="product-detail.html"
                className="block2-name dis-block s-text3 p-b-5"
              >
                Coach slim easton black
              </a>
              <span className="block2-price m-text6 p-r-5">$165.90</span>
            </div>
          </div>
        </div>
        <div className="item-slick2 p-l-15 p-r-15">
          {/* Block2 */}
          <div className="block2">
            <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelsale">
              <img src="/images/item-07.jpg" alt="IMG-PRODUCT" />
              <div className="block2-overlay trans-0-4">
                <a
                  href="#"
                  className="block2-btn-addwishlist hov-pointer trans-0-4"
                >
                  <i
                    className="icon-wishlist icon_heart_alt"
                    aria-hidden="true"
                  />
                  <i
                    className="icon-wishlist icon_heart dis-none"
                    aria-hidden="true"
                  />
                </a>
                <div className="block2-btn-addcart w-size1 trans-0-4">
                  {/* Button */}
                  <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="block2-txt p-t-20">
              <a
                href="product-detail.html"
                className="block2-name dis-block s-text3 p-b-5"
              >
                Frayed denim shorts
              </a>
              <span className="block2-oldprice m-text7 p-r-5">$29.50</span>
              <span className="block2-newprice m-text8 p-r-5">$15.90</span>
            </div>
          </div>
        </div>
        <div className="item-slick2 p-l-15 p-r-15">
          {/* Block2 */}
          <div className="block2">
            <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
              <img src="/images/item-02.jpg" alt="IMG-PRODUCT" />
              <div className="block2-overlay trans-0-4">
                <a
                  href="#"
                  className="block2-btn-addwishlist hov-pointer trans-0-4"
                >
                  <i
                    className="icon-wishlist icon_heart_alt"
                    aria-hidden="true"
                  />
                  <i
                    className="icon-wishlist icon_heart dis-none"
                    aria-hidden="true"
                  />
                </a>
                <div className="block2-btn-addcart w-size1 trans-0-4">
                  {/* Button */}
                  <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="block2-txt p-t-20">
              <a
                href="product-detail.html"
                className="block2-name dis-block s-text3 p-b-5"
              >
                Herschel supply co 25l
              </a>
              <span className="block2-price m-text6 p-r-5">$75.00</span>
            </div>
          </div>
        </div>
        <div className="item-slick2 p-l-15 p-r-15">
          {/* Block2 */}
          <div className="block2">
            <div className="block2-img wrap-pic-w of-hidden pos-relative">
              <img src="/images/item-03.jpg" alt="IMG-PRODUCT" />
              <div className="block2-overlay trans-0-4">
                <a
                  href="#"
                  className="block2-btn-addwishlist hov-pointer trans-0-4"
                >
                  <i
                    className="icon-wishlist icon_heart_alt"
                    aria-hidden="true"
                  />
                  <i
                    className="icon-wishlist icon_heart dis-none"
                    aria-hidden="true"
                  />
                </a>
                <div className="block2-btn-addcart w-size1 trans-0-4">
                  {/* Button */}
                  <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="block2-txt p-t-20">
              <a
                href="product-detail.html"
                className="block2-name dis-block s-text3 p-b-5"
              >
                Denim jacket blue
              </a>
              <span className="block2-price m-text6 p-r-5">$92.50</span>
            </div>
          </div>
        </div>
        <div className="item-slick2 p-l-15 p-r-15">
          {/* Block2 */}
          <div className="block2">
            <div className="block2-img wrap-pic-w of-hidden pos-relative">
              <img src="/images/item-05.jpg" alt="IMG-PRODUCT" />
              <div className="block2-overlay trans-0-4">
                <a
                  href="#"
                  className="block2-btn-addwishlist hov-pointer trans-0-4"
                >
                  <i
                    className="icon-wishlist icon_heart_alt"
                    aria-hidden="true"
                  />
                  <i
                    className="icon-wishlist icon_heart dis-none"
                    aria-hidden="true"
                  />
                </a>
                <div className="block2-btn-addcart w-size1 trans-0-4">
                  {/* Button */}
                  <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="block2-txt p-t-20">
              <a
                href="product-detail.html"
                className="block2-name dis-block s-text3 p-b-5"
              >
                Coach slim easton black
              </a>
              <span className="block2-price m-text6 p-r-5">$165.90</span>
            </div>
          </div>
        </div>
        <div className="item-slick2 p-l-15 p-r-15">
          {/* Block2 */}
          <div className="block2">
            <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelsale">
              <img src="/images/item-07.jpg" alt="IMG-PRODUCT" />
              <div className="block2-overlay trans-0-4">
                <a
                  href="#"
                  className="block2-btn-addwishlist hov-pointer trans-0-4"
                >
                  <i
                    className="icon-wishlist icon_heart_alt"
                    aria-hidden="true"
                  />
                  <i
                    className="icon-wishlist icon_heart dis-none"
                    aria-hidden="true"
                  />
                </a>
                <div className="block2-btn-addcart w-size1 trans-0-4">
                  {/* Button */}
                  <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="block2-txt p-t-20">
              <a
                href="product-detail.html"
                className="block2-name dis-block s-text3 p-b-5"
              >
                Frayed denim shorts
              </a>
              <span className="block2-oldprice m-text7 p-r-5">$29.50</span>
              <span className="block2-newprice m-text8 p-r-5">$15.90</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>        
    )

}
