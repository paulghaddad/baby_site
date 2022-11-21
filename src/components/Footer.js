import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import pinterest from "../img/social/pinterest.svg";
import facebook from "../img/social/facebook.svg";

const Footer = () => {

    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: "14em", height: "10em" }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/books">
                        Books
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/toys">
                        Toys
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/parent-resources">
                        Parent Resources
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/baby-log">
                        Baby Log
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="https://entrepreneurialmom.substack.com">
                        Newsletter
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://www.facebook.com/amyhaddad.LearningBabies">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="pinterest" href="https://pinterest.com/amyhaddad11">
                  <img
                    src={pinterest}
                    alt="Pinterest"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <div className="disclosures">
                  <p>Disclosure: As an Amazon Associate I earn from qualifying purchases through links on this site.</p>
                  <p>All Learning Babies activities assume close supervision of your baby.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
