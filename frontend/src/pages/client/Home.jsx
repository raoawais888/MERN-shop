

import FrontendMaster from './FrontendMaster'
import Slider from '../../components/client/Slider'
import Feature from '../../components/client/Feature'
import Banner from '../../components/client/Banner'
import Subscribed from '../../components/client/Subscribed'
import Selling from '../../components/client/Selling'
import Testimonial from '../../components/client/Testimonial'
import LatestBlog from '../../components/client/LatestBlog'
import ShopBanner from '../../components/client/ShopBanner'
import Brand from '../../components/client/Brand'
import Instagaram from '../../components/client/Instagaram'
import Shipping from '../../components/client/Shipping'


const Home = () => {
  return (
    <FrontendMaster>
   
    <Slider />
    <Feature />
    <Banner />
    <Subscribed />
    <Selling />
    <Testimonial />
    <ShopBanner />
    <LatestBlog />
    <Brand />
    <Instagaram />
    <Shipping />
  
  
    </FrontendMaster>
  )
}

export default Home