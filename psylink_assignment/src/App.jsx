import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {
  useEffect(() =>{
    AOS.init({
      duration: 1000,
      once: true,
    });
  },[]);
  
  return (
    <div className="App">
      <Header />
      <main>
        <div className="text-and-image-container" data-aos="fade-up">
          <div className="text-container">
            <h1>Protect Yourself from Cyber threats</h1>
            <p>We Secure Your Digital World</p>
          </div>
          <div className="image-container">
            <img src="/images/first.png" alt="Cyber Security" />
          </div>
        </div>

        <section className="second-section" data-aos="fade-up">
          <div className="content">
            <div className="text-container">
              <h2>We are Hiring!</h2>
              <button className="apply-button">Apply</button>
            </div>
            <div className="text-and-image-container">
              <div className="image-container">
                <img src="/images/second.png" alt="Cyber Security" />
              </div>
              <div className="text-container">
                <h>FIRST OF ALL</h>
                <h1>Protect Yourself from Cyber Attacks</h1>
                <p>Discover the best software solutions to safeguard your digital life. Our cyber security experts provide cutting-edge tools and resources to protect you from cyber attacks. Stay one step ahead of hackers and ensure your online safety.</p>
              </div>
            </div>
          </div>
        </section>
        
        <div className="text-and-image-container" data-aos="fade-up">
          <div className="text-container">
            <h4>NOT TO MENTION</h4>
            <h1>Our Services</h1>
            <p>Discover our range of software solutions designed to safeguard your digital presence. Stay one step ahead of cyber threats with Psylinks Security.</p>
          </div>
          <div className="image-container">
            <img src="/images/third.png" alt="Cyber Security" />
          </div>
        </div>
        
        <section className="second-section" data-aos="fade-up">
          <div className="content">
            <div className="text-and-image-container">
              <div className="image-container">
                <img src="/images/forth.png" alt="Cyber Security" />
              </div>
              <div className="text-container">
                <h3>And let's not forget</h3>
                <h1>Cyber Security Blog</h1>
                <p>Explore our blog for the latest insights, tips, and best practices in cyber security. Our experts share their knowledge to help you enhance your online safety. Stay informed and stay secure with Psylinks Security.</p>
              </div>
            </div>
          </div>
        </section>
        
        <div className="about-us" data-aos="fade-up">
          <h1>About Psylinks Security</h1>
          <p>Psylinks Security is a trusted name in the field of cyber security. With our cutting-edge software solutions, we empower individuals to safeguard their digital lives. Our team of experts is dedicated to providing the best protection against cyber threats.</p>
        </div>
        
        <div className="image-container" data-aos="fade-up">
          <img src="/images/protect.png" alt="Cyber Security" />
        </div>
        
        <div className="contact-form" data-aos="fade-up">
          <h1>Contact Us</h1>
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Last Name:
              <input type="text" name="lastName" />
            </label>
            <label>
              Your Email:
              <input type="email" name="email" />
            </label>
            <label>
              Message:
              <textarea name="message"></textarea>
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
