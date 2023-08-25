import React from 'react'

const Testimonial = () => {
  return (
 <>
    <section id="testimonials" className="padding-large no-padding-bottom">
      <div className="container">
        <div className="reviews-content">
          <div className="row d-flex flex-wrap">
            <div className="col-md-2">
              <div className="review-icon">
                <i className="icon icon-right-quote"></i>
              </div>
            </div>
            <div className="col-md-8">
              <div className="swiper testimonial-swiper overflow-hidden swiper-initialized swiper-horizontal swiper-backface-hidden">
                <div className="swiper-wrapper" id="swiper-wrapper-a65662844a6fd0d1" aria-live="polite" style={{transitionDuration: '0ms', transform: "translate3d(-830px, 0px, 0px)"}}>
                  
                  
                <div className="swiper-slide swiper-slide-next swiper-slide-prev" role="group" aria-label="1 / 2" data-swiper-slide-index="0" style={{width: '830px'}}>
                    <div className="testimonial-detail">
                      <p>“Dignissim massa diam elementum habitant fames. Id nullam pellentesque nisi, eget cursus dictumst pharetra, sit. Pulvinar laoreet id porttitor egestas dui urna. Porttitor nibh magna dolor ultrices iaculis sit iaculis.”</p>
                      <div className="author-detail">
                        <div className="name">By Maggie Rio</div>
                      </div>
                    </div>
                  </div><div className="swiper-slide swiper-slide-active" role="group" ariaLabel="2 / 2" data-swiper-slide-index="1" style={{width: '830px'}}>
                    <div className="testimonial-detail">
                      <p>“Dignissim massa diam elementum habitant fames. Id nullam pellentesque nisi, eget cursus dictumst pharetra, sit. Pulvinar laoreet id porttitor egestas dui urna. Porttitor nibh magna dolor ultrices iaculis sit iaculis.”</p>
                      <div className="author-detail">
                        <div className="name">By John Smith</div>
                      </div>
                    </div>
                  </div></div>
              <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
              <div className="swiper-arrows">
                <button className="prev-button" tabindex="0" aria-label="Previous slide" aria-controls="swiper-wrapper-a65662844a6fd0d1">
                  <i className="icon icon-arrow-left"></i>
                </button>
                <button className="next-button" tabindex="0" aria-label="Next slide" aria-controls="swiper-wrapper-a65662844a6fd0d1">
                  <i className="icon icon-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
 </>
  )
}

export default Testimonial