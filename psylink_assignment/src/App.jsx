import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="text-and-image-container">
          <div className="text-container">
            <h1>Protect Yourself from Cyber threats</h1>
            <p>We Secure Your Digital World</p>
          </div>
          <div className="image-container">
            <img src="/images/first.png" alt="Cyber Security" />
          </div>
        </div>

        {/* New section */}
        <section className="second-section">
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
        <div className="text-and-image-container">
          <div className="text-container">
            <h4>NOT TO MENTION</h4>
            <h1>Our Services</h1>
            <p>Discover our range of software solutions designed to safeguard your digital presence. Stay one step ahead of cyber threats with Psylinks Security.</p>
          </div>
          <div className="image-container">
            <img src="/images/third.png" alt="Cyber Security" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
