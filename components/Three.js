import { useState } from "react";
import { BsPiggyBank, BsBuilding } from "react-icons/bs";
import { FaRegHandshake } from "react-icons/fa";
import styled from "styled-components";
const { motion, useScroll, Variants } = require("framer-motion");

export default function Three({}) {
  // const { scrollYProgress } = useViewportScroll();
  const [point1, setPoint1] = useState(true);
  const [point2, setPoint2] = useState(true);
  const [point3, setPoint3] = useState(true);

  const { scrollY } = useScroll();

  // scrollY.onChange((y) => {
  //   console.log(y);
  //   y === 700 && setPoint1(true);
  //   y === 900 && setPoint2(true);
  //   y === 1100 && setPoint3(true);

  //   y === 1900 && setPoint1(false);
  //   y === 2100 && setPoint2(false);
  //   y === 2300 && setPoint3(false);
  // });

  // scrolly.onChange((y) => {
  //   // y = scroll position
  //   //Do Something
  // });

  const points = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  // const point = {
  //   hidden: { opacity: 0, scale: 0.5 },
  //   show: { opacity: 1, scale: 1, transition: { delay: 1 } },
  // };

  // const point = {
  //   initial: { opacity: 0, scale: 0.5, y: "-50%" },
  //   whileInView: { opacity: 1, scale: 1, y: "0%" },
  //   transition: { delay: 0.5, type: "tween" },
  // };

  return (
    <SThree>
      <S3Title>
        <motion.h1>
          We've made investing in real estate <span> more accessible</span>,
          <span> less expensive</span> and <span>more trustworthy</span>.
        </motion.h1>
        <motion.h3
        // initial={{ opacity: 0, scale: 0.5 }}
        // whileInView={{ opacity: 1, scale: 1 }}
        // transition={{ delay: 1 }}
        >
          Sucuro uses public blockchain technology to offer investors
          inflation-linked returns from a debt free diversified portfolio of
          institutional-grade real estate assets with ultra low fees.
        </motion.h3>
        <h1>Here's how:</h1>
      </S3Title>
      <S3Points
      // variants={points} initial="hidden" animate="show"
      >
        {point1 && (
          <S3Point
            // margin="50px"
            initial={{ opacity: 0, scale: 0.5, y: "100%" }}
            whileInView={{ opacity: 1, scale: 1, y: "0%" }}
            transition={{ delay: 0.5, type: "tween" }}
            // variants={point}
          >
            <BsBuilding />
            <h2>Institutional-grade Australian real estate assets</h2>
            <p>
              When you buy a Sucuro Asset Token you're buying a share of bricks
              and mortar properties with paying tenants on a secure public
              blockchain. We don't do synthetic assets or paper money
              algorithms.
            </p>
          </S3Point>
        )}

        {point2 && (
          <S3Point
            // margin="50px"
            initial={{ opacity: 0, scale: 0.5, y: "-50%" }}
            whileInView={{ opacity: 1, scale: 1, y: "0%" }}
            transition={{ delay: 0.5, type: "tween" }}
            // variants={point}
          >
            <BsPiggyBank />
            <h2>Disruptive technology that replaces middlemen</h2>
            <p>
              We've rebuilt the asset management model from the ground up with
              blockchain-based smart contracts that replace fee hungry middlemen
              like banks, fund managers and brokers. These smart contracts are
              managed by the Sucuro Governance Token that you can also choose to
              own.
            </p>
          </S3Point>
        )}

        {point3 && (
          <S3Point
            // margin="50px"
            initial={{ opacity: 0, scale: 0.5, y: "-100%" }}
            whileInView={{ opacity: 1, scale: 1, y: "0%" }}
            transition={{ delay: 0.5, type: "tween" }}
            // variants={point}
          >
            <FaRegHandshake />
            <h2>Earning trust through transparency</h2>
            <p>
              Real estate investors deserve more than a glossy picture book
              every 12 months. That's why we're earning your trust by recording
              every transaction on a public blockchain and publishing every
              investment decision in real time.
            </p>
          </S3Point>
        )}
      </S3Points>
    </SThree>
  );
}

const SThree = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  margin-top: -1rem;

  span {
    color: var(--highlight);
  }

  background: url(../blockchain.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const S3Title = styled.div`
  background: rgba(255, 255, 255, 0.9);
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 6rem;

  h1 {
    width: 768px;
    padding: 2rem 0;
  }

  h3 {
    max-width: 768px;
    color: var(--third);
  }
`;

const S3Points = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: -7rem 0;

  div {
    background: white;
    padding: 2rem;
    margin: 1rem 2rem;
    border-radius: 1rem;
    max-width: 768px;
    transition: all ease 0.3s;
    box-shadow: var(--boxshadow01);

    &:hover {
      box-shadow: none;
    }
  }

  svg {
    font-size: 2rem;
    font-weight: 100;
  }
`;

const S3Point = styled(motion.div)``;
