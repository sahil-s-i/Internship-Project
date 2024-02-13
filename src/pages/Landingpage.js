import "./Landingpage.css";

const Landingpage = () => {
  return (
    <div className="landingpage">
      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light navigation">
          <a class="navbar-brand" href="#"></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                <a class="nav-link logotext" href="#"><img src="logo.svg"
                  alt=""></img><span>Lasles<b>VPN</b></span></a>
              </li>
              <div class="navitems">
                <li class="nav-item">
                  <a class="nav-link" href="#about">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#features">Features</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#plans">Pricing</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#testimonial">Testimonials</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#footer">Help</a>
                </li>
              </div>
            </ul>
            <div class="btn">
              <a href="#">Sign In</a>
              <button type="button" class="btn btn-outline-danger" id="signupbtn">Sign Up</button>
            </div>
          </div>
        </nav>

      </header>

      <main>
        <section id="about">
          <div class="about">
            <div class="about_text">
              <h3 class="about_head">Want anything to be easy with <span id="logotxt">LaslesVPN.</span></h3>
              <p class="about_desc">Provide a network for all your needs with ease and fun using <b>LaslesVPN</b>
                discover
                interesting features from us.
              </p>

              <button class="getstarted-btn">Get Started</button>
              <div class="emptydiv-shadow"></div>
            </div>
            <div class="about_img">
              <img src="about.png" alt=""></img>
            </div>
          </div>

          <div class="user_box">
            <div class="one">
              <img src="iconuser.svg" alt="User Icon"></img>
              <div class="text_of_userbox">
                <span class="count">90+</span>
                <span>Users</span>
              </div>
              <img class="sep_line" src="sep-line.svg" alt="Arrow Right"></img>
            </div>
            <div class="one">
              <img src="iconlocation.svg" alt="User Icon"></img>
              <div class="text_of_userbox">
                <span class="count">30+</span>
                <span>Locations</span>
              </div>
              <img class="sep_line" src="sep-line.svg" alt="Arrow Right"></img>
            </div>
            <div class="one">
              <img src="iconserver.svg" alt="User Icon"></img>
              <div class="text_of_userbox">
                <span class="count">50+</span>
                <span>Servers</span>
              </div>
            </div>
          </div>

          <div class="shadowbox"></div>
        </section>

        <section id="features">
          <div class="about features">
            <div class="about_img">
              <img src="feautures.png" alt=""></img>
            </div>
            <div class="about_text feature_text">
              <h3 class="feature_title">We Provide Many Features You Can Use</h3>
              <p class="about_desc feature_desc">You can explore the features that we provide with fun and have
                their own
                functions each feature.</p>
              <div class="feature_list">
                <ul>
                  <li>
                    <img src="greencheck.svg" alt=""></img>
                    Powerfull online protection.
                  </li>
                  <li>
                    <img src="greencheck.svg" alt=""></img>
                    Internet without borders.
                  </li>
                  <li>
                    <img src="greencheck.svg" alt=""></img>
                    Supercharged VPN
                  </li>
                  <li>
                    <img src="greencheck.svg" alt=""></img>
                    No specific time limits.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="plans">
          <div class="plans">
            <div class="plan_head">
              <h3 class="title">
                Choose Your Plan
              </h3>
              <p class="desc">
                Let's choose the package that is best for you and explore it happily and cheerfully.
              </p>
            </div>
            <div class="plan_boxes">
              <div class="plan_single_box">
                <img src="planbox.png" alt=""></img>
                <h5 class="plan_type">Free Plan</h5>
                <div>
                  <ul>
                    <li>
                      <img src="plancheck.svg" alt=""></img>
                      Unlimited Bandwitch
                    </li>
                    <li>
                      <img src="plancheck.svg" alt=""></img>
                      Encrypted Connection
                    </li>
                    <li>
                      <img src="plancheck.svg" alt=""></img>
                      No Traffic Logs
                    </li>
                    <li>
                      <img src="plancheck.svg" alt=""></img>
                      Works on All Devices
                    </li>
                  </ul>
                </div>
                <div class="plan_price">Free</div>
                <button type="button" class="btn btn-outline-danger">Select</button>

              </div>
              <div class="plan_single_box">
                <img src="planbox.png" alt=""></img>
                <h5 class="plan_type">Standard Plan</h5>
                <div>
                  <ul>
                    <li>
                      <img src="plancheck.svg" alt=""></img>
                      Unlimited Bandwitch
                    </li>
                    <li>
                      <img src="plancheck.svg" alt=""></img>
                      Encrypted Connection
                    </li>
                    <li>
                      <img src="plancheck.svg" alt=""></img>
                      No Traffic Logs
                    </li>
                    <li>
                      <img src="plancheck.svg" alt=""></img>
                      Works on All Devices
                    </li>
                    <li>
                      <img src="plancheck.svg" alt=""></img>
                      Connect Anyware
                    </li>
                  </ul>
                </div>
                <div class="plan_price">$9 <span>/ mo</span></div>
                <button type="button" class="btn btn-outline-danger">Select</button>
              </div>
              <div class="plan_single_box">
                <img src="planbox.png" alt=""></img>
                <h5 class="plan_type">Premium Plan</h5>
                <div>
                  <ul>
                    <li>
                      <img src="plancheck.svg" alt=""></img>
                      Unlimited Bandwitch
                    </li>
                    <li>
                      <img src="plancheck.svg" alt=""></img>
                      Encrypted Connection
                    </li>
                    <li>
                      <img src="plancheck.svg" alt=""></img>
                      No Traffic Logs
                    </li>
                    <li>
                      <img src="plancheck.svg" alt=""></img>
                      Works on All Devices
                    </li>
                    <li>
                      <img src="plancheck.svg" alt=""></img>
                      Connect Anyware
                    </li>
                    <li>
                      <img src="plancheck.svg" alt=""></img>
                      Get New Features
                    </li>
                  </ul>
                </div>
                <div class="plan_price">$12 <span>/ mo</span></div>
                <button type="button" class="btn btn-outline-danger">Select</button>

              </div>
            </div>

          </div>
        </section>

        <section id="location">
          <div class="location">
            <div class="location_head">
              <h3 class="title">
                Huge Global Network of Fast VPN
              </h3>
              <p class="desc">
                See <b>LaslesVPN</b> everywhere to make it easier for you when you move locations.
              </p>
            </div>
            <div class="map_image">
              <img src="huge-global.svg" alt=""></img>
            </div>
            <div class="sponsard_image">
              <img src="sponsored.png" alt=""></img>
            </div>
          </div>
        </section>

        <section id="testimonial">
          <div class="testmonial">
            <div class="testimonial_head">
              <div class="testimonial_head">
                <h3 class="title">
                  Trusted by Thousands of Happy Customer
                </h3>
                <p class="desc">
                  These are the stories of our customers who have joined us with great pleasure when using
                  this crazy feature.
                </p>
              </div>
            </div>
            <div class="testimonial_cards">
              <div class="single_card">
                <div class="img_txt_star">
                  <img src="first-review.png" alt=""></img>
                  <div class="name">
                    <span>Viezh Robert</span>
                    <p>Warsaw, Poland</p>
                  </div>
                  <div class="rating">4.5<img src="star-review.svg" alt=""></img></div>
                </div>
                <div class="review">
                  “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and
                  so far there have been no problems. LaslesVPN always the best”.
                </div>
              </div>
              <div class="single_card">
                <div class="img_txt_star">
                  <img src="second-Review.png" alt=""></img>
                  <div class="name">
                    <span>Yessica Christy</span>
                    <p>Shanxi, China</p>
                  </div>
                  <div class="rating">4.5<img src="star-review.svg" alt=""></img></div>
                </div>
                <div class="review">
                  “I like it because I like to travel far and still can connect with high speed.”
                </div>
              </div>
              <div class="single_card">
                <div class="img_txt_star">
                  <img src="third-review.png" alt="" id="resize_img"></img>
                  <div class="name">
                    <span>Kim Young Jou</span>
                    <p>Seoul, South Korea</p>
                  </div>
                  <div class="rating">4.5<img src="star-review.svg" alt=""></img></div>
                </div>
                <div class="review">
                  “This is very unusual for my business that currently requires a virtual private network that
                  has high security.”.
                </div>
              </div>
            </div>
            <div class="points_btns">
              <div class="points">
                <img class="union-icon" alt="" src="points.svg"></img>
                <div class="ellipse-div"></div>
                <div class="ellipse-div"></div>
                <div class="ellipse-div"></div>
              </div>
              <div class="left_right">
                <img src="left-button.svg" alt=""></img>
                <img src="right-button.svg" alt=""></img>
              </div>
            </div>
          </div>
        </section>

        <div class="subscribe">
          <div class="subscribe_text">
            <h4 class="subscribe_head">
              Subscribe Now for Get Special Features!
            </h4>
            <p class="subscribe_desc">
              Let's subscribe with us and find the fun
            </p>

          </div>
          <div class="subscribe_button">
            <button class="getstarted-btn">Subscribe Now</button>
            <div class="emptydiv-shadow"></div>
          </div>
        </div>
      </main>

      <footer>
        <section id="footer">
          <div class="footer">
            <div class="footer_items">
              <div class="logoandlinks">
                <li class="nav-item active">
                  <a class="nav-link logotext" href="#"><img src="logo.svg"
                    alt=""></img><span>Lasles<b>VPN</b></span></a>
                </li>
                <p class="desc"><span id="bold">LaslesVPN</span> is a private virtual network that has unique
                  features and has high
                  security
                </p>
                <div class="icons">
                  <img src="facebook.svg" alt=""></img>
                  <img src="twitter.svg" alt=""></img>
                  <img src="instagram.svg" alt=""></img>
                </div>
                <p class="textlowopacity">
                  ©2020LaslesVPN
                </p>
              </div>
              <div class="footer_subitems">
                <div class="lists">
                  <ul>
                    <li class="list_head">Product</li>
                    <li class="listitems">Download</li>
                    <li class="listitems">Pricing</li>
                    <li class="listitems">Locations</li>
                    <li class="listitems">Server</li>
                    <li class="listitems">Countries</li>
                    <li class="listitems">Blog</li>
                  </ul>
                </div>
                <div class="lists">
                  <ul>
                    <li class="list_head">Engage</li>
                    <li class="listitems">LaslesVPN ?</li>
                    <li class="listitems">FAQ</li>
                    <li class="listitems">Tutorials</li>
                    <li class="listitems">About Us</li>
                    <li class="listitems">Privacy Policy</li>
                    <li class="listitems">Terms of Service</li>
                  </ul>
                </div>
                <div class="lists">
                  <ul>
                    <li class="list_head">Earn Money</li>
                    <li class="listitems">Affiliate</li>
                    <li class="listitems">Become Partner</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div >
  );
};

export default Landingpage;