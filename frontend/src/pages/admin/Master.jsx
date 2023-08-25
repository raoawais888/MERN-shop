import React from 'react';
import Footer from '../../components/admin/Footer';
import Header from '../../components/admin/Header';
import Sidebar from '../../components/admin/Sidebar';
import { ToastContainer } from 'react-toastify';


const Master= ({ children }) => {
  return (
   <>
    <div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
        data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full">
      {/* Header */}
           <Header />    

           <Sidebar />   

      {/* Main Content */}
      <div className="page-wrapper">
        {children} {/* This will render the content of each specific page */}
      </div>

      {/* Footer */}
    
         <Footer />

         </div>
         <ToastContainer />
    </>
    
  );
};

export default Master;
