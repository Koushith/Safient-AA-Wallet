import styled from "styled-components";

export const FooterContainer = styled.footer`
  border-top: 1px solid #e5e5e5;
  padding: 40px 0px 10px 0px;

  .footer-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
  }

  ul {
    list-style-type: style none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 30px;
  }
  ul > li {
    list-style: none;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */
    margin-right: 30px;
    color: #334155;
  }
`;

export const QRCodeContainer = styled.div`
  display: flex;
  gap: 25px;

  img {
    width: 80px;
    height: 80px;
  }

  h3 {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */

    color: #0f172a;
  }

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    /* or 171% */
    margin-top: 14px;
    color: #334155;
  }
`;

export const CopyRightContainer = styled.div`
  border-top: 1px solid #e5e5e5;

  padding: 30px 0;

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */

    color: #334155;
  }
`;
