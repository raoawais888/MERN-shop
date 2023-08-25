
import FrontendMaster from "./FrontendMaster"
import Breadcrumb from "../../components/client/Breadcrumb"
import GetinTouch from "../../components/client/GetinTouch"
import Shipping from "../../components/client/Shipping"
import Map from "../../components/client/Map"
const Contact = () => {
  return (
    <FrontendMaster >
         <Breadcrumb title="Contact Us" />
         <GetinTouch />
         <Map />
         <Shipping />
       

    </FrontendMaster>
  )
}

export default Contact