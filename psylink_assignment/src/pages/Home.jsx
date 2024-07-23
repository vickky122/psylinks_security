import React from 'react';

function Home() {
  return (
    <div>
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
              <h4>FIRST OF ALL</h4>
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
      <section className="second-section">
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
    </div>
  );
}

export default Home;
