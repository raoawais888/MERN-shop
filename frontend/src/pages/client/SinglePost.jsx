import FrontendMaster from "./FrontendMaster"

const SinglePost = () => {
  return (
    <FrontendMaster >

<div className="main-content d-flex flex-wrap padding-large">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="post-meta">
              <span className="post-date">Feb 22, 2023</span> / <a href="blog.html" className="blog-categories">Fashion</a>
            </div>
            <h1 className="page-title">Top 10 Casual Look Ideas To Dress Up Your Kids</h1>
            <div className="feature-image">
              <img src="images/single-image2.jpg" alt="post image" className="jarallax-img" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="post-content">
              <p><strong>There are shortcuts to happiness, and dressing is one of them.</strong></p>
              <p>Fashion is like dreaming with your feet! Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eisusmod tempor incidunt ut elit et.</p>
              <blockquote>Sit suscipit tortor turpis sed fringilla lectus facilisis amet. Ipsum, amet dolor curabitur non aliquet orci urna volutpat. Id aliquam neque, ut vivamus sit imperdiet enim, lacus, vel.</blockquote>
              <p>Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, <a href="single-product.html">Casual Product</a> exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>
                <strong>Are you amazed ?</strong>
              </p>
              <ul style="list-style-type:disc;" className="inner-list">
                <li>Blandit mauris libero condimentum commodo sociis convallis sit.</li>
                <li>Magna diam amet justo sed vel dolor et volutpat integer.</li>
                <li>Laculis sit sapien hac odio elementum egestas neque.</li>
              </ul>
              <p>Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam,<span className="highlight">quis nostrud exercitation</span> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <div className="post-tags">
                <div className="block-tag">
                  <ul className="list-unstyled d-flex">
                    <li>
                      <a href="#" className="btn btn-dark btn-small btn-rounded">Fashion</a>
                    </li>
                    <li>
                      <a href="#" className="btn btn-dark btn-small btn-rounded">Hoodie</a>
                    </li>
                    <li>
                      <a href="#" className="btn btn-dark btn-small btn-rounded">Casual</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="social-links d-flex margin-small">
                <div className="element-title">Share:</div>
                <ul className="d-flex list-unstyled">
                  <li>
                    <a href="#"><i className="icon icon-facebook"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="icon icon-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="icon icon-instagram"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="icon icon-youtube-play"></i></a>
                  </li>
                </ul>
              </div>
            </div>
            <div id="single-post-navigation">
              <hr />
              <div className="row post-navigation d-flex flex-wrap align-items-center justify-content-between">
                <a itemprop="url" className="col-md-6 post-prev d-flex" href="#" title="Previous Post">
                  <span>Previous</span>
                  <h3 className="page-nav-title">Latest trends of wearing street wears supremely</h3>
                </a>
                <a itemprop="url" className="col-md-6 post-next d-flex" href="#" title="Next Post">
                  <span>Next</span>
                  <h3 className="page-nav-title">Types of comfortable clothes ideas for women</h3>
                </a>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
    </FrontendMaster>
  )
}

export default SinglePost