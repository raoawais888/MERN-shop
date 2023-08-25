import FrontendMaster from "./FrontendMaster"
import Breadcrumb from "../../components/client/Breadcrumb"

const Blog = () => {
  return (
  

    <FrontendMaster>
    <Breadcrumb  title="Blog" />
        <section id="latest-blog" className="post-grid padding-large">
      <div className="container">
        <div className="row d-flex flex-wrap">
          <article className="col-md-4 post-item">
            <div className="image-holder zoom-effect">
              <a href="single-post.html">
                <img src="images/post-img1.jpg" alt="post" className="post-image" />
              </a>
            </div>
            <div className="post-content d-flex">
              <div className="meta-date">
                <div className="meta-day text-primary">22</div>
                <div className="meta-month">Aug-2021</div>
              </div>
              <div className="post-header">
                <h3 className="post-title">
                  <a href="single-post.html">top 10 casual look ideas to dress up your kids</a>
                </h3>
                <a href="blog.html" className="blog-categories">Fashion</a>
              </div>
            </div>
          </article>
          
        
        </div>
        <nav className="navigation paging-navigation text-center padding-medium" role="navigation">
          <div className="pagination loop-pagination d-flex justify-content-center">
            <a href="#" className="pagination-arrow d-flex align-items-center">
              <i className="icon icon-arrow-left"></i>
            </a>
            <span aria-current="page" className="page-numbers current">1</span>
            <a className="page-numbers" href="#">2</a>
            <a className="page-numbers" href="#">3</a>
            <a href="#" className="pagination-arrow d-flex align-items-center">
              <i className="icon icon-arrow-right"></i>
            </a>
          </div>
        </nav>
      </div>
    </section>
    </FrontendMaster>
  )
}

export default Blog