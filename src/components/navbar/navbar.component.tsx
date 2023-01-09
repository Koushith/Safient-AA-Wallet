//@ts-nocheck
import { Container } from "../primitives/container/container.component";
import Logo from "../../assets/logo.svg";
import BurgerOpen from "../../assets/icons/burger-open.svg";
import BurgerClose from "../../assets/icons/burger-close.svg";
import { MobileNavigation, NavbarContainer } from "./navbar.component.styles";
import { useRef, useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <NavbarContainer>
        <img src={Logo} alt="logo" />
        <nav>
          <ul>
            <li>
              <a href="https://safient.io/about" target="_next">
                About
              </a>
            </li>
            <li>
              <a href="#features">Features</a>{" "}
            </li>
            <li>
              <a href="#how">How</a>
            </li>
            <li>
              <a href="#faq">FAQ's</a>
            </li>
            <li>
              <button>Download</button>
            </li>
          </ul>
        </nav>

        <div className="mobile-nav">
          <div onClick={() => setOpen(!open)}>
            <img
              src={open ? BurgerClose : BurgerOpen}
              alt="logo"
              width={"24px"}
              className="icon"
            />
          </div>
        </div>
      </NavbarContainer>
      {open && (
        <MobileNavigation>
          <nav>
            <ul>
              <li>
                <a href="https://safient.io/about" _target="_next"></a> About
              </li>
              <li>
                <a href="#features">Features</a>{" "}
              </li>
              <li>
                <a href="#how">How</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </nav>
        </MobileNavigation>
      )}
    </Container>
  );
};
