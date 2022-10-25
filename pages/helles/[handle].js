import styled from "styled-components";
import { useRouter } from "next/router";
import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { useStateContext } from "../../lib/context";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { SQuantity } from "../../styles/SQuantity";
import { SMainBtn } from "../../styles/SMainBtn";
import BtnAddToCart from "../../components/_btnAddToCart";
import BtnQuantity from "../../components/_btnQuantity";

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
    <SDetails>
      <div id="sdetails-img">
        <img src={image.data.attributes.formats.medium.url} alt={title} />
      </div>
      <SInfo id="sinfo">
        <h1>{title}</h1>
        <p>{description}</p>
        <SQuantity>
          <span>Quantiy</span>
          <BtnQuantity light={light} />
          {/* <button>
            <AiFillMinusCircle onClick={decreaseQty} />
          </button>
          <p>{qty}</p>
          <button>
            <AiFillPlusCircle onClick={increaseQty} />
          </button> */}
        </SQuantity>
        <BtnAddToCart light={light} />
      </SInfo>
    </SDetails>
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
  }
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
