import styled from "styled-components";
import Link from "next/link";
import { FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";

export default function Footer({}) {
  return (
    <SFooter id="SFooter">
      <SSocial>
        <FaTwitterSquare />
        <FaInstagramSquare />
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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  z-index: 10;

  div {
    width: 60%;
  }

  svg {
    font-size: 2rem;
  }

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

  svg {
    transition: all ease 0.3s;
    cursor: pointer;
  }
  svg:hover {
    color: var(--originalRed);
  }
`;
