//@ts-nocheck
import { Container } from "../primitives/container/container.component";
import Logo from "../../assets/logo.svg";
import { NavbarContainer } from "./navbar.component.styles";
export const Navbar = () => {
  return (
    <Container>
      <NavbarContainer>
        <img src={Logo} alt="logo" />
        <nav>
          <ul>
            <li>Features</li>
            <li>How</li>
            <li>Faq</li>
            <li>
              <button>Download</button>
            </li>
          </ul>
        </nav>
      </NavbarContainer>
    </Container>
  );
};
