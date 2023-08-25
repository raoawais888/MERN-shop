import FrontendMaster from "./FrontendMaster"
import Breadcrumb from "../../components/client/Breadcrumb"
import Shipping from "../../components/client/Shipping"
import AboutUs from "../../components/client/AboutUs"
import Instagaram from "../../components/client/Instagaram"
const About = () => {
  return (
       
    <FrontendMaster>
     <Breadcrumb  title="About Us" />
     <Shipping />
     <AboutUs />
     <Instagaram />

    </FrontendMaster>
  )
}

export default About