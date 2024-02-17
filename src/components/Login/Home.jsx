import React, { useState } from "react";
import "./Home.css";
import feature_1 from "../Images/feature_1.png";
import feature_2 from "../Images/feature-2.png";
import feature_3 from "../Images/feature-3.png";
import feature_4 from "../Images/feature-4.png";

function Home() {
  const [email, setEmail] = useState("");
  

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with email:", email);
    if (!email.trim()) {
      alert("Please enter your email");
    } else {
      
    localStorage.setItem("email", email);
  
    window.location.href = "/signin";
    }
  };
  return (
    <>
      {/* header section */}
      <div className="header">
        <nav>
          <img
            src="https://th.bing.com/th/id/R.2ea85d7448475a744c1485c2eac3d3d1?rik=LOSTtarBPEnY%2fw&riu=http%3a%2f%2fwww.freepnglogos.com%2fuploads%2fnetflix-logo-0.png&ehk=PaZLUHaWmwAMEzdIDx7zGpBu053ZpXipTljxBidJnfU%3d&risl=&pid=ImgRaw&r=0"
            alt=""
            className="logo"
          />

          <div>
            <button className="lang-btn">English</button>
            <button>Sign in</button>
          </div>
        </nav>

        <div className="header-content">
          <h1>Unlimited movies, TV shows and more.</h1>
          <h3>Watch anywhere. Cancel anytime</h3>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          <form onSubmit={handleSubmit} className="email-signup">
            <input 
            className="h-input"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <button type="submit">Get Started</button>
          </form>
        </div>
      </div>

      {/* // FEATURES SECTION */}

      <div className="features">
        {/* row1 */}
        <div className="row">
          <div className="text-col">
            <h2>Enjoy on your TV.</h2>
            <p>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>

          <div className="img-col">
            <img src={feature_1} alt="f1" />
          </div>
        </div>

        <div className="aline"></div>

        {/* row2 */}

        <div className="row">
          <div className="img-col">
            <img src={feature_2} alt="f1" />
          </div>

          <div className="text-col">
            <h2>Download your shows to watch offline</h2>
            <p>
              Save your favourites easily and always have something to watch.
            </p>
          </div>
        </div>

        <div className="aline"></div>

        {/* row3 */}

        <div className="row">
          <div className="text-col">
            <h2>Watch everywhere</h2>
            <p>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV
            </p>
          </div>

          <div className="img-col">
            <img src={feature_3} alt="f1" />
          </div>
        </div>

        <div className="aline"></div>

        {/* row4 */}

        <div className="row">
          <div className="img-col">
            <img src={feature_4} alt="f1" />
          </div>

          <div className="text-col">
            <h2>Create profiles for kids</h2>
            <p>
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </p>
          </div>
        </div>

        <div className="aline"></div>
      </div>

      {/* FAQ SECTION */}

      <div className="faq">
        <h2>Frequently Asked Questions</h2>
        <ul className="accordion">
          {/* list1 */}
          <li>
            <input type="radio" name="accordion" id="first" />
            <label htmlFor="first">What is Netflix?</label>

            <div className="content">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
                officiis autem iure iusto molestiae voluptatibus, deserunt minus
                atque laborum pariatur rem? Architecto voluptatum facilis,
                quisquam mollitia aliquid tempore sit illum.
              </p>
            </div>
          </li>

          {/* list2 */}
          <li>
            <input type="radio" name="accordion" id="second" />
            <label htmlFor="second">How much does Netflix cost?</label>

            <div className="content">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
                officiis autem iure iusto molestiae voluptatibus, deserunt minus
                atque laborum pariatur rem? Architecto voluptatum facilis,
                quisquam mollitia aliquid tempore sit illum.
              </p>
            </div>
          </li>

          {/* list3 */}
          <li>
            <input type="radio" name="accordion" id="third" />
            <label htmlFor="third">Where can I watch?</label>

            <div className="content">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
                officiis autem iure iusto molestiae voluptatibus, deserunt minus
                atque laborum pariatur rem? Architecto voluptatum facilis,
                quisquam mollitia aliquid tempore sit illum.
              </p>
            </div>
          </li>

          {/* list4 */}
          <li>
            <input type="radio" name="accordion" id="fourth" />
            <label htmlFor="fourth">How do I cancel?</label>

            <div className="content">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
                officiis autem iure iusto molestiae voluptatibus, deserunt minus
                atque laborum pariatur rem? Architecto voluptatum facilis,
                quisquam mollitia aliquid tempore sit illum.
              </p>
            </div>
          </li>

          {/* list5 */}
          <li>
            <input type="radio" name="accordion" id="fifth" />
            <label htmlFor="fifth">What can I watch on Netflix?</label>

            <div className="content">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
                officiis autem iure iusto molestiae voluptatibus, deserunt minus
                atque laborum pariatur rem? Architecto voluptatum facilis,
                quisquam mollitia aliquid tempore sit illum.
              </p>
            </div>
          </li>

          {/* list6 */}
          <li>
            <input type="radio" name="accordion" id="sixth" />
            <label htmlFor="sixth">Is Netflix good for kids?</label>

            <div className="content">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
                officiis autem iure iusto molestiae voluptatibus, deserunt minus
                atque laborum pariatur rem? Architecto voluptatum facilis,
                quisquam mollitia aliquid tempore sit illum.
              </p>
            </div>
          </li>
        </ul>

        <small>
          Ready to watch? Enter your email to create or restart your membership.
        </small>
        <form onSubmit={handleSubmit} className="email-signup">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <button type="submit">Get Started</button>
          </form>
      </div>
      

      {/* FOOTER SECTION */}

      <div className="footer">
        <h2>Questions? call 0011-23654-789</h2>
        <div className="row">
          <div className="col">
            <a href="/faq">FAQ</a>
            <a href="/investor relations">Investor Relations</a>
            <a href="/privacy">Privacy</a>
            <a href="/speedtest">Speed Test</a>
          </div>

          <div className="col">
            <a href="/help center">Help Center</a>
            <a href="/jobs">Jobs</a>
            <a href="/cookies preference">Cookies Preference</a>
            <a href="/legal notices">Legal Notices</a>
          </div>

          <div className="col">
            <a href="/accounts">Account</a>
            <a href="/ways to watch">Ways to watch</a>
            <a href="/CI">Corporate Information</a>
            <a href="ooN">Only on Netflix</a>
          </div>

          <div className="col">
            <a href="#">Media center</a>
            <a href="#">Terms of Use</a>
            <a href="#">Contact Us</a>
          </div>
        </div>

        <button className="lang-btn">English</button>
        <p className="copyright-txt">Netflix India</p>
      </div>
    </>
  );
}

export default Home;
