
import Header from '../../components/client/Header'
  import Topbar from '../../components/client/Topbar'
  import Footer from '../../components/client/Footer'
  import FooterBottom from '../../components/client/FooterBottom'

const FrontendMaster = ({children}) => {
  return (
  
    <>
        <Topbar />
        <Header />
         
         {children}
         
        <Footer />
        <FooterBottom />
    </>

  )
}

export default FrontendMaster