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
      {/* <div>
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
      </div> */}
    </SFooter>
  );
}

//
const SFooter = styled.div`
  display: flex;
  // flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  z-index: 10;

  p {
    text-align: center;
    font-size: 0.8rem;
  }

  a {
    color: var(--originalRed);
  }
`;

const SSocial = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;

  margin: 0 2rem;

  > div {
    background: white;
    border-radius: 50%;
    margin: 0.5rem;
  }
  svg {
    color: black;
    font-size: 4rem;
    border-radius: 50%;
    // border: 3px solid white;
    // box-shadow: 0px white;
    // background: black;
    transition: all ease 0.3s;
    cursor: pointer;
    z-index: 100;
  }
  svg:hover {
    color: var(--originalRed);
  }
`;
