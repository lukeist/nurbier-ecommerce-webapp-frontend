import styled from "styled-components";
import { useRouter } from "next/router";
import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { useStateContext } from "../../lib/context";
import Link from "next/link";
import { useEffect } from "react";
import BtnAddToCart from "../../components/_btnAddToCart";
import BtnQuantity from "../../components/_btnQuantity";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

const { motion } = require("framer-motion");

export default function ProductDetails() {
  // use state
  const { qty, setQty, increaseQty, decreaseQty, onAdd } = useStateContext();

  // reset Qty anytime going to a product page
  useEffect(() => {
    setQty(1);
  }, []);

  // fetch handle
  const { query } = useRouter();

  // fetch graphql data
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: {
      handle: query.handle,
    },
  });

  const { data, fetching, error } = results;
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no...{error.message}</p>;

  const { title, description, image } = data.lights.data[0].attributes;
  const light = data.lights.data[0];
  return (
    // <SWrapper>
    //   <motion.div
    //     initial={{ opacity: 0 }}
    //     animate={{ opacity: 1 }}
    //     exit={{ opacity: 0, transition: { duration: 0.15 } }}
    //     transition={{ duration: 0.2, delay: 0.15 }}
    //     style={{ pointerEvents: "auto" }}
    //     className="overlay"
    //   >
    //     <Link href={"/"}>
    //       <div></div>
    //     </Link>
    //   </motion.div>
    <SDetails
    // className="card-content-container open"
    >
      {/* <motion.div
        className="card-content"
        > */}
      <div id="sdetails-img">
        <img src={image.data.attributes.formats.medium.url} alt={title} />
      </div>
      <SInfo id="sinfo">
        <h1>{title}</h1>
        <p>{description}</p>

        {/* <SQuantity>
          <span>Quantiy</span>
          <BtnQuantity light={light} />
        </SQuantity> */}

        <SQuantity
        // className="SQuantity"
        >
          <span>Menge:</span>

          <button>
            <AiOutlineMinusCircle onClick={() => decreaseQty()} />
          </button>
          <p>{qty}</p>
          <button>
            <AiOutlinePlusCircle onClick={() => increaseQty()} />
          </button>
        </SQuantity>
        <BtnAddToCart qty={qty} light={light} />
      </SInfo>
      {/* </motion.div> */}
    </SDetails>
    // </SWrapper>
  );
}

const SDetails = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  #sdetails-img {
    overflow: hidden;
    position: fixed;
    bottom: 0;
    margin-left: 30%;
    height: 90%;
  }
`;

const SWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
  display: flex;
  justify-content: flex-end;
`;

const SInfo = styled.div`
  width: 40%;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justiify-content: center;
  align-items: center;

  background: transparent;
  z-index: 2;

  h1 {
    text-align: center;
    margin: 2rem 0;
    text-shadow: 0px 0px 10px #000000;
  }

  p {
    margin: 2rem 0;
    text-shadow: 0px 0px 10px #000000;
  }

  > button {
    margin-top: 3rem;
    width: 40%;
  }
`;

const SQuantity = styled.div`
  display: flex;
  align-items: center;
  color: white;

  button {
    background: transparent;
    border: none;
    display: flex;

    font-size: 3rem;
    cursor: pointer;
    z-index: 2;
  }

  span {
    font-size: 2rem;
    text-align: left;
    margin-right: 2rem;
  }

  p {
    font-size: 2.5rem;
    color: white;
    opacity: 0.9;
    margin: 0 0.5rem;
    padding-bottom: 0.5rem;
    z-index: 2;
    width: 3rem;
    text-align: center;
    filter: drop-shadow(0 0 6px rgb(255 255 255 / 1));
  }

  svg {
    color: white;
    transition: all ease 0.3s;
    border-radius: 50%;
    font-size: 3rem;
    margin: 0.5rem 0;

    &:hover {
      background: white;
      color: black;
      // box-shadow: var(--boxshadow10);
      filter: drop-shadow(0 0 6px rgb(255 255 255 / 1));
    }
  }
`;
