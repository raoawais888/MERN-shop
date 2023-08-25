import React from 'react'

const Feature = () => {
  return (
   <>
    <section id="featured-products" className="product-store padding-large">
      <div className="container">
        <div className="section-header d-flex flex-wrap align-items-center justify-content-between">
          <h2 className="section-title">Featured Products</h2>            
          <div className="btn-wrap">
            <a href="shop.html" className="d-flex align-items-center">View all products <i className="icon icon icon-arrow-io"></i></a>
          </div>            
        </div>
        <div className="swiper product-swiper overflow-hidden swiper-initialized swiper-horizontal swiper-backface-hidden">
          <div className="swiper-wrapper" id="swiper-wrapper-cbda8d4fedea8a93" ariaLive="polite">
            <div className="swiper-slide swiper-slide-active" role="group" ariaLabel="1 / 4" style={{width: '292.25px', marginRight:' 30px'}}>
              <div className="product-item">
                <div className="image-holder">
                  <img src="images/product-item1.jpg" alt="Books" className="product-image" />
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product.html">Full sleeve cover shirt</a>
                  </h3>
                  <span className="item-price text-primary">$40.00</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide swiper-slide-next" role="group" ariaLabel="2 / 4" style={{width: '292.25px', marginRight:' 30px'}}>
              <div className="product-item">
                <div className="image-holder">
                  <img src="images/product-item2.jpg" alt="Books" className="product-image" />
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product.html">Volunteer Half blue</a>
                  </h3>
                  <span className="item-price text-primary">$38.00</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide" role="group" ariaLabel="3 / 4" style={{width: '292.25px', marginRight:' 30px'}}>
              <div className="product-item">
                <div className="image-holder">
                  <img src="images/product-item3.jpg" alt="Books" className="product-image" />
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product.html">Double yellow shirt</a>
                  </h3>
                  <span className="item-price text-primary">$44.00</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide" role="group" ariaLabel="4 / 4" style={{width: '292.25px', marginRight:' 30px'}}>
              <div className="product-item">
                <div className="image-holder">
                  <img src="images/product-item4.jpg" alt="Books" className="product-image" />
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product.html">Long belly grey pant</a>
                  </h3>
                  <span className="item-price text-primary">$33.00</span>
                </div>
              </div>
            </div>
          </div>
        <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
        <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal swiper-pagination-lock"><span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 1" aria-current="true"></span></div>
      </div>
    </section>
   </>
  )
}

export default Feature