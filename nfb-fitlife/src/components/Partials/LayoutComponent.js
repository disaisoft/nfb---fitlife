import React from 'react';

import NavBar from '../Partials/NavBarComponent';
import Footer from '../Partials/FooterComponent';
import HomeComponent from '../HomeComponent/HomeComponent';
import AboutMe from '../AboutMe/AboutMe';

//import Updates from '../UpdatesComponent/UpdatesComponent';
//import HomeComponent from '../Home/HomeComponent';
//import About from '../AboutMeComponent/AboutMeComponent';
const Layout = (props) => {
    return(

        <div> 
             <NavBar/>
             {props.children}
             <HomeComponent/><br/>
             <AboutMe/>
               
             
             <br/>
            
            
             

            <Footer/>
        </div>
    )
    
}
export default Layout;