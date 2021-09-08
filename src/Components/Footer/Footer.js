import React from "react";
import Background from "Components/Background";
import Container from "Components/Container";

import { FaPinterestP } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ShareIcon from "@material-ui/icons/Share";

import SvgIcon from "@material-ui/core/SvgIcon";

export default function Footer() {
  return (
    <footer>
      <Background styleClassName="BottomBackground">
        <Container>
          <div className="Footer">
            <div className="Footer__phone">
              <h2 className="Footer__phone-title">
                <SvgIcon className="Footer__title-icon">
                  <PhoneIcon />
                </SvgIcon>

                <span>Phone</span>
              </h2>
              <a className="Footer__phone-link" href="tel:439875431234">
                +43 (987) 543-1234
              </a>
            </div>
            <address className="Footer__address">
              <h2 className="Footer__address-title">
                <SvgIcon className="Footer__title-icon">
                  <LocationOnIcon />
                </SvgIcon>

                <span>Address</span>
              </h2>
              <p className="Footer__address-info">
                <span className="Footer__address-item">Cracker Inc.</span>
                <span className="Footer__address-item">
                  10 Cloverfield Lane
                </span>
                <span className="Footer__address-item">Berlin, IL 10928</span>
                <span className="Footer__address-item">Germany</span>
              </p>
            </address>
            <div className="Footer__social-block">
              <h2 className="Footer__social-title">
                <SvgIcon className="Footer__title-icon">
                  <ShareIcon />
                </SvgIcon>

                <span>Share us</span>
              </h2>
              <ul className="Footer__social-list">
                <li className="Footer__social-item">
                  <a
                    className="Footer__social-link"
                    href="https://www.pinterest.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaPinterestP className="Footer__social-icon" />
                  </a>
                </li>
                <li className="Footer__social-item">
                  <a
                    className="Footer__social-link"
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF className="Footer__social-icon" />
                  </a>
                </li>
                <li className="Footer__social-item">
                  <a
                    className="Footer__social-link"
                    href="https://www.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TiSocialGooglePlus className="Footer__social-icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Background>
    </footer>
  );
}
