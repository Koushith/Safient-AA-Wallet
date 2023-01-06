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
`;
