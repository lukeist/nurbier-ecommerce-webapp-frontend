import { useRouter } from "next/router";
import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { useStateContext } from "../../lib/context";
import { useEffect } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import BtnAddToCart from "../../components/_btnAddToCart";
import styled from "styled-components";

export default function ProductDetails() {
  // use state
  const { qty, setQty, increaseQty, decreaseQty } = useStateContext();

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

  if (fetching)
    return (
      <div id="loading-beer">
        <video id="loading-video" autoPlay loop muted>
          <source src={"/loading.mp4"} type="video/mp4" />
        </video>
        <p id="loading-text">LOADING...</p>
      </div>
    );

  if (error)
    return (
      <div id="loading-beer">
        <video id="loading-video" autoPlay loop muted>
          <source src={"/loading.mp4"} type="video/mp4" />
        </video>
        <p>{error.message}</p>;
      </div>
    );

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
    margin-left: 30%;
    height: 90%;
  }
`;

const SInfo = styled.div`
  width: 40%;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
      filter: drop-shadow(0 0 6px rgb(255 255 255 / 1));
    }
  }
`;
