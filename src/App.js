import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import './Components/map.css';


function App() {
  return (
    <div>
      <div>
      <Navbar />
      </div>
      <div className = 'container'>
      <section class="bg-gray text-dark p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
        <div class="d-sm-flex align-items-center justify-content-between">
            <div>
                <h1>Cloud  <span class="text-warning">Integration Project</span></h1>
              
            </div>
            <img class="img-fluid w-50" src="images/frontend-4342425_1280.png" alt=""/>
        </div>
       </section>
        </div>

        <div className = "container">
      <h1>Contacts Us</h1>
      <ul>
        <li>
          Email: hdt***@yahoo.com
        </li>
        <li>
          Phone Number : 00012345678
        </li>
      <il className = 'map-h2'>Click Here 
       </il>
      <iframe className ='google-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.28365301047!2d10.236576915118437!3d36.8356821799413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd3541c4f22e55%3A0x5b7225d7fdbb3801!2sGOMYCODE!5e0!3m2!1sen!2stn!4v1664757157713!5m2!1sen!2stn"></iframe>
      </ul>
      </div>
      <Footer />
      </div>
  );
}

export default App;
