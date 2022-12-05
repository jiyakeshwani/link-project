import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <main>
        <section className="header">
          <div className="container flex space-between">
            <svg
              class="LinkLogo"
              viewBox="0 0 52 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.32711 2.08111C7.32711 0.930578 8.27753 0 9.45259 0C10.6276 0 11.5781 0.930578 11.5781 2.08111C11.5781 3.23164 10.6276 4.16222 9.45259 4.16222C8.27753 4.16222 7.32711 3.23164 7.32711 2.08111ZM0 0.218434H3.80167V22.7553H0V0.218434ZM51.4297 6.68172C49.2352 11.2669 46.7813 14.6001 46.7813 14.6001L52 22.7384H47.5071L44.293 17.7133C41.0788 21.3172 37.882 23.0768 34.8061 23.0768C31.0563 23.0768 29.5183 20.4543 29.5183 17.4764C29.5183 17.1436 29.523 16.7337 29.5274 16.3383V16.3381L29.5274 16.3378C29.5316 15.9695 29.5356 15.6138 29.5356 15.3445C29.5356 11.4023 29.1209 10.2856 27.7557 10.4717C25.1464 10.827 21.1892 16.6304 18.6145 22.7553H15.0374V6.68172H18.8391V14.6847C21.0164 11.1147 23.0037 8.03528 26.2005 6.85091C28.0495 6.15721 29.622 6.46176 30.4342 6.81707C33.3891 8.08604 33.3718 11.1992 33.3373 15.3615C33.32 15.9198 33.32 16.512 33.32 17.138C33.32 18.6608 33.752 19.3207 34.8061 19.4222C35.8256 19.5237 36.6033 19.033 36.6033 19.033V0.218434H40.4049V16.3597C40.4049 16.3597 43.7055 13.4157 47.1961 6.68172H51.4297ZM11.351 6.6833H7.54938V22.7569H11.351V6.6833Z"
                fill="currentColor"
              ></path>
              <title>Link</title>
            </svg>
            <Link className="signup" to="/email">
              Sign up
            </Link>
          </div>

          <div className="hero-section container ">
            <h1>Simple, secure</h1>
            <h1> one-click payments</h1>
            <button className="login">Log in</button>
          </div>
        </section>
        <section className="animation container2 flex space-between">
          <video loop className="video" src="/video.mp4"></video>
          <div className="para">
            <h2>Check out faster</h2>
            <p>
              Save your payment information, and we’ll autofill your saved card
              details and addresses for all future purchases on Link-enabled
              sites. You’ll get a chance to review your order before clicking to
              confirm your purchase.
            </p>
          </div>
        </section>
        <section className="data container">
          <h2 className="h2">Your data, protected</h2>
          <div className="flex space-between">
            <div className="first">
              <span class="material-symbols-outlined lock">lock</span>
              <hr />
              <h3 className="h3">Data privacy</h3>
              <p>
                When you make a payment with Link, we encrypt your data with
                leading encryption standards to keep it secure.
              </p>
            </div>
            <div className="first">
              <span class="material-symbols-outlined lock">smartphone</span>
              <hr />
              <h3 className="h3">Identity verification</h3>
              <p>
                To verify it’s you, we’ll text or email you a one-time code. For
                additional security on certain transactions, we may require a
                secondary verification, including biometric or pin.
              </p>
            </div>
            <div className="first">
              <span class="material-symbols-outlined lock">verified_user</span>
              <hr />
              <h3 className="h3">Security standards</h3>
              <p>
                We’re a certified PCI Service Provider Level 1, which means we
                meet the highest level of certification available in the
                payments industry.
              </p>
            </div>
          </div>
        </section>
        <section className="container section3">
          <h2 className="h2">Where to shop with Link</h2>
          <p className="section3-p">
            Use Link for easy and secure checkouts on these sites and hundreds
            of thousands more.
          </p>
          <div className="flex space-between">
            <article className="article">
              <div className="img-container">
                <figure className="figure">
                  <img className="img" src="/img1.jpeg" alt="img" />
                </figure>
              </div>
              <div className="flex">
                <span class="arrow material-symbols-outlined">outbound</span>
                <p className="article-p">
                  Connect with a licensed therapist anytime, anywhere
                </p>
              </div>
            </article>
            <article className="article">
              <div className="img-container">
                <figure className="figure">
                  <img className="img" src="/img2.jpeg" alt="img" />
                </figure>
              </div>
              <div className="flex">
                <span class="arrow material-symbols-outlined">outbound</span>
                <p className="article-p">
                  Connect with a licensed therapist anytime, anywhere
                </p>
              </div>
            </article>
            <article className="article">
              <div className="img-container">
                <figure className="figure">
                  <img className="img" src="/img3.jpeg" alt="img" />
                </figure>
              </div>
              <div className="flex">
                <span class="arrow material-symbols-outlined">outbound</span>
                <p className="article-p">
                  Connect with a licensed therapist anytime, anywhere
                </p>
              </div>
            </article>
            <article className="article">
              <div className="img-container">
                <figure className="figure">
                  <img className="img" src="/img4.jpeg" alt="img" />
                </figure>
              </div>
              <div className="flex">
                <span class="arrow material-symbols-outlined">outbound</span>
                <p className="article-p">
                  Connect with a licensed therapist anytime, anywhere
                </p>
              </div>
            </article>
          </div>
        </section>
        <section className="container">
          <div className="flex center stripe-box  column">
            <img  className="stripe-img"  src="/stripe.jpeg" alt="stripe" />
            <h3 className="built-stripe">Built by Stripe</h3>
            <p className="built-stripe-para">
              Millions of companies around the world use Stripe to process
              payments and manage their businesses online. <strong className="stripe">Stripe</strong>  created Link
              to provide a faster and easier way to check out and manage saved
              financial accounts.
            </p>
          </div>
        </section>
        <section className="container">
          <h3 className="faqs " >FAQs</h3>
          <hr />
          <div className="faq1">
            <h4  >How many payment methods can I store with Link?</h4>
            <p>
              You can store a variety of payment methods with Link and add as
              many as you’d like. You’ll select your preferred card or account
              when making a purchase.
            </p>
            <hr /> 
          </div>
          <div className="faq1">
            <h4>How does Link support crypto?</h4>
            <p>
              On supported sites, you can use Link to securely add funds to your
              crypto wallet in one-click. Store your verified identity and
              payment information with Link the first time you use it, and we’ll
              autofill your saved details for all future crypto purchases.
            </p>
            <hr />
          </div>
          <div className="faq1">
            <h4>Where can I get help with a purchase I made with Link?</h4>
            <p>
              Please reach out to the business directly if you need any help
              with your purchase. If you are having issues identifying the
              business, log in to your account to view your purchase history.
            </p>
            <hr />
          </div>
          <div className="faq1">
            <h4>How do I delete information from Link?</h4>
            <p>
               <strong className="log-in"  >Log in </strong>  to your account at any time to manage your saved cards and
              addresses or to close your Link account entirely.
            </p>

        
            <hr />
          </div>
        </section>
        <footer className="footer">
          <div className="container">
            <h2>Get started with link</h2>
            <button className="foot-btn">Sign up</button>
            <p className="foot-p1">Interested in adding Link to your site?</p>
            <p className="foot-p2">Link for businesses</p>
            < hr className="foot-hr"/>
            <div className="flex space-between">
            <svg
              class="LinkLogo white"
              viewBox="0 0 52 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.32711 2.08111C7.32711 0.930578 8.27753 0 9.45259 0C10.6276 0 11.5781 0.930578 11.5781 2.08111C11.5781 3.23164 10.6276 4.16222 9.45259 4.16222C8.27753 4.16222 7.32711 3.23164 7.32711 2.08111ZM0 0.218434H3.80167V22.7553H0V0.218434ZM51.4297 6.68172C49.2352 11.2669 46.7813 14.6001 46.7813 14.6001L52 22.7384H47.5071L44.293 17.7133C41.0788 21.3172 37.882 23.0768 34.8061 23.0768C31.0563 23.0768 29.5183 20.4543 29.5183 17.4764C29.5183 17.1436 29.523 16.7337 29.5274 16.3383V16.3381L29.5274 16.3378C29.5316 15.9695 29.5356 15.6138 29.5356 15.3445C29.5356 11.4023 29.1209 10.2856 27.7557 10.4717C25.1464 10.827 21.1892 16.6304 18.6145 22.7553H15.0374V6.68172H18.8391V14.6847C21.0164 11.1147 23.0037 8.03528 26.2005 6.85091C28.0495 6.15721 29.622 6.46176 30.4342 6.81707C33.3891 8.08604 33.3718 11.1992 33.3373 15.3615C33.32 15.9198 33.32 16.512 33.32 17.138C33.32 18.6608 33.752 19.3207 34.8061 19.4222C35.8256 19.5237 36.6033 19.033 36.6033 19.033V0.218434H40.4049V16.3597C40.4049 16.3597 43.7055 13.4157 47.1961 6.68172H51.4297ZM11.351 6.6833H7.54938V22.7569H11.351V6.6833Z"
                fill="currentColor"
              ></path>
              <title className="white" >Link</title>
            </svg>
            <ul className="flex ul">
              <li>Help</li>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Cookie settings  |  </li>
              <li>India</li>
              <li>English (United States)</li>
            </ul>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default HomePage;
