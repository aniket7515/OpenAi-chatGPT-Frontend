import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div style={{height:"80vh"}}  className="container my-3">
            <section className="header container my-3 m-auto">
          <div className="row " style={{justifyContent:"space-between"}}>
            <div className="col-12 col-lg-6 header-left-side d-flex   justify-content-center flex-column align-items-center ">
              <div>
                <h1
                  className="display-2 my-2 pt-5"
                  style={{ fontWeight: "600",color:"#00468c"}}
                >
                  We are here for you! <br />
                </h1>
                <p className="main-hero-para " style={{color:"#4777a8"}}>
                We’ve made a website which provide many AI based services...
                </p>
                

               
                  
      
              </div>
          
            </div>
            {/*  --------------- main header right side--------------  */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images" style={{alignItems:"center", textAlign:"center"}}>
              <img style={{height:"950px"}}
                // src="https://static.vecteezy.com/system/resources/previews/013/658/474/original/openai-clip-art-icon-vector.jpg"
                src="https://preview.uideck.com/items/softbit/assets/images/feature/feature-image-2.svg"
                alt="heroimg"
                // className="img-fluid bounce-1"

               
              />
            </div>
          </div>
        </section>

        </div>
    )
}

export default Header