import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Slider = () => {
  return (
    <>


  <section id="billboard" className="overflow-hidden">

  <div className="swiper main-swiper">

  <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> <div className="swiper-slide" style={{backgroundImage:"url('images/banner1.jpg')",backgroundRepeat:'no-repeat',backgroundSize: 'cover', backgroundPosition: 'center'}}>

<div className="banner-content">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <h2 className="banner-title">Summer Collection</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
        <div className="btn-wrap">
          <a href="shop.html" className="btn btn-light btn-medium d-flex align-items-center" tabindex="0">Shop it now <i className="icon icon-arrow-io"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

</SwiperSlide>

  <SwiperSlide>  <div className="swiper-slide" style={{backgroundImage:"url('images/banner2.jpg')",backgroundRepeat:'no-repeat',backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="banner-content">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="banner-title">Casual Collection</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
              <div className="btn-wrap">
                <a href="shop.html" className="btn btn-light btn-light-arrow btn-medium d-flex align-items-center" tabindex="0">Shop it now <i className="icon icon-arrow-io"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </SwiperSlide>
        
      </Swiper>
</div>
</section>
    </>
  )
}

export default Slider