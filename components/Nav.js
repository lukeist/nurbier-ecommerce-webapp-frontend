import styled from "styled-components";
import Link from "next/link";
import { useStateContext } from "../lib/context";
import Image from "next/image";
const { AnimatePresence, motion } = require("framer-motion");

export default function Nav() {
  const { showCart, setShowCart, totalQty } = useStateContext();

  return (
    <SNav>
      <SLogo>
        {/* <Image
          alt="sucuro"
          width="50rem"
          height="50rem"
          src="/bierLogo.png"
          href={"/"}
        /> */}
        <Link className="logo" href={"/"}>
          🍻
        </Link>
        <Link href={"/"}>Nur Bier</Link>
      </SLogo>
      <SNavItems>
        <li>
          <button>About</button>
        </li>
      </SNavItems>
      <AnimatePresence>show</AnimatePresence>
    </SNav>
  );
}

export const SNav = styled.div`
  // min-height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  z-index: 100;
  magin: 0 5rem;
  width: 100%;

  a {
    font-size: 1.2rem;
  }
`;

export const SLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 1000;
  font-size: 1.2rem;
  color: white;
  margin: 0 2rem;

  img {
    cursor: pointer;
  }

  a {
    margin-left: 0.5rem;
  }

  .logo {
    font-size: 3rem;
  }
`;

export const SNavItems = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  font-weight: 500;
  font-size: 1.2rem;
  color: white;
  cursor: pointer;
  margin: 0 2rem;

  li {
    margin: 0 1rem;
    transition: all ease 0.15s;
  }

  li:hover {
    text-shadow: 10px 10px 30px rgba(0, 0, 0, 1);
    transform: scale(1.1);
    // box-shadow:  0 0 0 1px rgba(0, 0, 0, 0.3);
  }

  button {
    padding: 1rem 1.5rem;
    font-weight: 700;
    font-size: 1.2rem;
    background: white;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
  }

  //   div {
  //     margin-left: 3rem;
  //     position: relative;
  //     display: flex;
  //     flex-direction: column;
  //     align-items: center;
  //   }

  //   h3 {
  //     font-size: 1rem;
  //     padding: 0.25rem;
  //   }

  //   svg {
  //     font-size: 1.5rem;
  //   }

  //   span {
  //     background: #ff2626;
  //     color: white;
  //     width: 1.3rem;
  //     height: 1.3rem;
  //     display: flex;
  //     justify-content: center;
  //     align-items: center;
  //     border-radius: 50%;
  //     font-size: 0.75rem;
  //     position: absolute;
  //     right: -10%;
  //     top: -20%;
  //     pointer-events: none;
  //   }
`;
