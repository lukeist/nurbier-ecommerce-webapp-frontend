import styled from "styled-components";
import Link from "next/link";
import { useStateContext } from "../lib/context";
import Image from "next/image";
import {
  RiShoppingBagFill,
  RiQuestionnaireFill,
  RiUser5Fill,
} from "react-icons/ri";
import { IoIosBeer } from "react-icons/io";
import { BsFillQuestionDiamondFill } from "react-icons/bs";

import { IoBeer, IoBeerOutline } from "react-icons/io";

const { AnimatePresence, motion } = require("framer-motion");

export default function Nav() {
  const { showCart, setShowCart, totalQty } = useStateContext();

  return (
    <SNav>
      <Link id="nurBier-txtlogo" href={"/"}>
        Nur Bier
      </Link>

      <SNavList id="SNavList">
        {/* <li>
          <Link className="logo" href={"/"}>
            🍻
            <Image
          alt="sucuro"
          width="50rem"
          height="50rem"
          src="/bierLogo.png"
          href={"/"}
        />
          </Link>
        </li> */}
        <li>
          <Link href={"/"}>
            <IoIosBeer href={"/"} />
          </Link>
          {/* <IoBeerOutline /> */}
          {/* <IoBeer/> */}
        </li>
        <li>
          <RiShoppingBagFill />
        </li>
        <li>
          {/* <RiQuestionnaireFill />
           */}
          <BsFillQuestionDiamondFill />
        </li>
        <li>
          <RiUser5Fill />
        </li>
      </SNavList>
      <AnimatePresence>show</AnimatePresence>
    </SNav>
  );
}

export const SNav = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  z-index: 100;
  magin: 0 5rem;
  width: 100%;

  > a {
    position: fixed;
    top: 2rem;
    left: 10%;
    font-size: 2rem;
    font-weight: 700;
    font-family: "Lobster", cursive;
    color: white;
    opacity: 1;
    transition: all ease 0.3s;
    filter: drop-shadow(0 0 6px rgb(0 0 0 / 0.4));

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const SNavList = styled.ul`
  position: fixed;
  top: 2rem;
  right: 10%;
  display: flex;
  align-items: center;
  color: white;
  list-style: none;
  font-size: 2rem;
  cursor: pointer;
  border-radius: 0.5rem 0 0 0.5rem;
  transition: all ease 0.3s;

  li {
    transition: all ease 0.15s;
    margin: 0 2rem;
  }

  li:hover {
    text-shadow: 10px 10px 30px rgba(0, 0, 0, 1);
    transform: scale(1.2);
  }

  svg {
    font-size: 2.5rem;
    opacity: 1;
    filter: drop-shadow(0 0 6px rgb(0 0 0 / 0.4));

    &:hover {
      // box-shadow: 0 0 10px rgba(255, 255, 255, 1);
      opacity: 1;
    }
  }

  // &::before {
  //   content: "";
  //   position: fixed;

  //   background-color: transparent;
  //   // bottom: -50px;
  //   height: 50px;
  //   width: 25px;
  //   border-top-left-radius: 25px;
  //   box-shadow: 0 -25px 0 0 #f66969;
  // }

  &:hover {
    // opacity: 1;
  }
`;

// export const SLogo = styled.div`
//   position: fixed;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   font-weight: 1000;
//   font-size: 1.2rem;
//   color: white;
//   margin: 0 2rem;

//   img {
//     cursor: pointer;
//   }

//   a {
//     margin-left: 0.5rem;
//   }

//   .logo {
//     font-size: 3rem;
//   }
// `;
