import styled from "styled-components";
import { useRouter } from "next/router";
import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { useStateContext } from "../../lib/context";
import Link from "next/link";
import { useEffect } from "react";
import { SQuantity } from "../../styles/SQuantity";
import BtnAddToCart from "../../components/_btnAddToCart";
import BtnQuantity from "../../components/_btnQuantity";

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
        <SQuantity>
          <span>Quantiy</span>
          <BtnQuantity light={light} />
        </SQuantity>
        <BtnAddToCart light={light} />
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
