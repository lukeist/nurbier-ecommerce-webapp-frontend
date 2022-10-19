import styled from "styled-components";
import Link from "next/link";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineInstagram } from "react-icons/ai";
export default function Footer({}) {
  return (
    <SFooter id="SFooter">
      <SSocial>
        <div>
          <TiSocialFacebook />
        </div>
        <div>
          <AiOutlineInstagram />
        </div>
      </SSocial>
      <div>
        <p>
          The information on this website is intended to be general in nature
          and is not personal financial product advice. It does not take into
          account your objectives, financial situation or needs. Before acting
          on any information, you should consider the appropriateness of the
          information provided and the nature of the relevant financial product
          having regard to your objectives, financial situation and needs. In
          particular, you should seek independent financial advice and read all
          information available prior to making an investment decision in
          relation to a financial product (including a decision about whether to
          acquire or continue to hold).
        </p>
        <p>Copyright © 2022 Nur Bier GmbH</p>
        <p>
          <Link href={"/"}>Privacy Policy</Link>
        </p>
      </div>
    </SFooter>
  );
}

//
const SFooter = styled.div`
  // old:
  flex-direction: column;
  width: 80%;
  margin: 0 auto;

  // new:
  margin-top: 2rem;
  display: flex;
  align-items: center;
  z-index: 10;

  p {
    color: rgba(255, 255, 255, 0.3);

    text-align: center;
    font-size: 0.8rem;
  }
`;

const SSocial = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;

  margin: 0 2rem;

  > div {
    background: rgba(255, 255, 255, 0.3);
    margin: 0.5rem;
    transition: all ease 0.3s;
    // old ///////////////////////////
    border-radius: 0.5rem;

    // new ///////////////////////////
    // border-radius: 50%;

    &:hover {
      background: rgba(255, 255, 255, 1);
    }
  }
  svg {
    color: black;
    border-radius: 50%;
    // border: 3px solid white;
    // box-shadow: 0px white;
    // background: black;
    transition: all ease 0.3s;
    cursor: pointer;
    z-index: 100;

    // old ///////////////////////////
    font-size: 2.5rem;

    // new ///////////////////////////
    // font-size: 4rem;
  }
`;
