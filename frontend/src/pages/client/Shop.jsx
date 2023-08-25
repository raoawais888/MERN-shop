import FrontendMaster from "./FrontendMaster"
import Breadcrumb from "../../components/client/Breadcrumb"
import ShopSection from "../../components/client/ShopSection"
const Shop = () => {
  return (
    <FrontendMaster>
    <Breadcrumb title="Shop" />
    <ShopSection />
    </FrontendMaster>
  )
}

export default Shop