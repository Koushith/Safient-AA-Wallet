import styled from "styled-components";

export const NavbarContainer = styled.div`
  /* padding: 40px 0; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 150px;
  }

  nav ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  nav ul > li {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    color: #0f172a;
  }

  a {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    text-decoration: none;
    color: #0f172a;
  }

  button {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    text-align: center;
    background: #000000;
    border-radius: 4px;
    color: #ffffff;
    border-style: none;
    padding: 12px 20px;
  }

  .mobile-nav {
    display: none;
  }

  @media (max-width: 750px) {
    padding: 0 2rem;
    nav {
      display: none;
    }

    .mobile-nav {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;

      img {
        height: 34px;
        width: 34px;
      }
    }
  }

  @media (max-width: 375px) {
    padding: 0 2rem;
    nav {
      display: none;
    }

    .mobile-nav {
      display: block;
      transition: all 0.3s ease;

      .icon {
        width: 34px;
      }

      .nav-list {
        display: inline-block;
        /* background-color: red; */
        background-color: red;
        position: absolute;
        width: 100%;
        transition: all 3s ease-in;
      }
    }
  }
`;

export const MobileNavigation = styled.div`
  background-color: #262727;
  padding: 2rem;
  margin: 2rem;
  border-radius: 4px;
  transition: all 0.3s ease-in;
  position: absolute;
  color: #a3a3a3;
  width: 90%;

  ul > li {
    list-style: none;
    font-size: 16px;
    font-weight: 500;
    line-height: 40px;
  }

  a {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    text-decoration: none;
    color: #a3a3a3;
  }
`;
