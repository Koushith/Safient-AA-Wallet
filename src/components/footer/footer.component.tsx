//@ts-nocheck
import { Container } from "../primitives/container/container.component";
import {
  CopyRightContainer,
  FooterContainer,
  QRCodeContainer,
} from "./footer.component.styles";
import Logo from "../../assets/logo.svg";
import QRCode from "../../assets/qrcode.svg";

export const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <div className="footer-section">
          <nav>
            <img src={Logo} alt="logo" width={"170px"} />
            <ul>
              <li>Features</li>
              <li>Reviews</li>
              <li>Pricing</li>
              <li>FAQ's</li>
            </ul>
          </nav>
          <div>
            <QRCodeContainer>
              <img src={QRCode} alt="" />
              <div>
                <h3>Download the app</h3>
                <p>
                  Scan the QR code to download the app from the <br /> App
                  Store.
                </p>
              </div>
            </QRCodeContainer>
          </div>
        </div>
      </Container>

      <CopyRightContainer>
        <Container>
          <p>© Copyright {new Date().getFullYear()}. All rights reserved.</p>
        </Container>
      </CopyRightContainer>
    </FooterContainer>
  );
};
