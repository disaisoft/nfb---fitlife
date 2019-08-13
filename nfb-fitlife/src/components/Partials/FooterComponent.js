import React from 'react';
import './styles/PartialStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class Footer extends React.Component {
    render(){

        return(
            <footer class="section footer-classic context-dark bg-dark">   
            <div class="row no-gutters social-container">
              <div class="col"><a class="social-inner" href="a"><span>Facebook</span></a></div>
              <div class="col"><a class="social-inner" href="a"><span>instagram</span></a></div>
              <div class="col"><a class="social-inner" href="a"><span>twitter</span></a></div>
              <div class="col"><a class="social-inner" href="a"><span>google</span></a></div>
            </div>
          </footer>
        );
    
    }
}

export default Footer;