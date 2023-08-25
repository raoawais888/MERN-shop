import { NavLink } from "react-router-dom"

const Breadcrumb = ({title}) => {
  return (
<>
<section class="site-banner jarallax min-height300 padding-large" style={{background: "url(images/hero-image.jpg) no-repeat" , backgroundPosition: "50% 50%",
    backgroundSize: "cover"}} >
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1 class="page-title">{title}</h1>
            <div class="breadcrumbs">
              <span class="item">
                <NavLink to="/">Home /</NavLink>
              </span>
              <span class="item">{title}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
</>
  )
}

export default Breadcrumb