import styled from "styled-components";
import Link from "next/link";
import { useStateContext } from "../lib/context";
import Image from "next/image";
import { RiShoppingBagFill, RiUser5Fill } from "react-icons/ri";
import { IoIosBeer } from "react-icons/io";
import { BsFillQuestionDiamondFill } from "react-icons/bs";
import { useState } from "react";
import Cart from "./Cart";

const { motion, useScroll, useTransform } = require("framer-motion");

export default function Nav() {
  const { showCart, setShowCart, totalQty } = useStateContext();
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 450) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeNavbarColor);
  }
  return (
    <SNav>
      {colorChange && <SNavBG></SNavBG>}
      <SLogo>
        <Link href={"/"}>
          <Image
            id="logo"
            alt="Nur Bier"
            width="105px"
            height="30px"
            src="/NurBierLogo.jpg"
            href={"/"}
          />
        </Link>
      </SLogo>
      <SNavList id="SNavList">
        <li>
          <IoIosBeer className="menu-icon" />
          <p className="menu-txt">Home</p>
        </li>
        <li>
          <BsFillQuestionDiamondFill className="menu-icon" />
          <p className="menu-txt">Über Nur Bier</p>
        </li>
        <li>
          <RiUser5Fill className="menu-icon" />
          <p className="menu-txt">Mein Konto</p>
        </li>
        <li>
          <RiShoppingBagFill className="menu-icon" />
          <div>
            <p className="menu-txt">Einkaufskorb</p>
            <RiShoppingBagFill id="einkaufskorb" />
          </div>
        </li>
      </SNavList>
      {/* <AnimatePresence>show</AnimatePresence> */}
      {/* <Cart /> */}
    </SNav>
  );
}

const SNav = styled.div`
  position: relative;
  z-index: 100;
`;

const SLogo = styled.div`
  position: fixed;
  top: 2rem;
  left: 10%;
  font-size: 2rem;
  font-weight: 700;
  font-family: "Lobster";
  color: white;
  opacity: 1;
  transition: all ease 0.3s;
  filter: drop-shadow(0 0 6px rgb(0 0 0 / 0.4));
  cursor: pointer;
  background: black;
  padding: 1rem 1rem 0.5rem 1rem;

  &:hover {
    transform: scale(1.1);
  }
`;

const SNavBG = styled.div`
  width: 100%;
  content: " ";
  position: fixed;
  background: black;
  opacity: 0.99;
  height: 10vh;
  filter: blur(20px);
  backdrop-filter: blur(5px);
`;

const SNavList = styled.ul`
  position: fixed;
  top: 3rem;
  right: 10%;
  display: flex;
  align-items: center;
  color: white;
  list-style: none;
  font-size: 2rem;
  cursor: pointer;
  transition: all ease 0.3s;

  li {
    text-align: center;
    transition: all ease 0.15s;
    margin: 0 2rem;
    text-shadow: 0 0 3px #000000;
    div {
      display: flex;

      > svg {
        transition: all ease 0.3s;
        &:hover {
          transform: scale(1.2);
        }
      }
    }

    p {
      font-weight: 500;
      transition: all ease 0.3s;

      &:hover {
        transform: scale(1.2);
    }
  }

 

  .menu-icon {
    display: none;
    font-size: 2.5rem;
    opacity: 1;
    filter: drop-shadow(0 0 6px rgb(0 0 0 / 0.4));

    &:hover {
      // box-shadow: 0 0 10px rgba(255, 255, 255, 1);
      opacity: 1;
    }
  }

  #einkaufskorb {
    margin-left: 1rem;
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
