import React from "react"
import 'bootstrap/dist/css/bootstrap.css';

export default function HomePage() {
  return (

    <div class="back">

      <div className="container" >
        <div className="row">
          <div className="col-md-8" >
            <div>
              <h1 className="headertext" >Hii there, I am</h1>
              <h1 className="headertext"><u>Chetan Panchal</u></h1><br/>
                <p className="basicsummry">A Software Developer Skilled in Android Developement with 4 Years of hand-on Experience.</p>
                <p className="normalText">Previoulsy worked at <a href="https://bisag-n.gov.in/"><u >Bisag-n</u></a> and <a href="https://cittasolutions.com/" > <u>Citta Solutions</u></a>  Company.</p>
            </div>
          </div>
          <div className="col-md-4" >
            {/* <img src="/images/mainimage.jpg" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}