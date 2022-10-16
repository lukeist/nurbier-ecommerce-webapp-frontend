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
  //   const image =
  //     data.lights.data[0].attributes.image.data.attributes.formats.medium.url;

  const imageL =
    data.lights.data[0].attributes.image.data.attributes.formats.large.url;
  // create a toast
  const notify = () => {
    toast(`${qty} ${title} added to your cart.`, {
      icon: "🍺",
      style: {
        fontSize: "1.4rem",
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  return (
    <SDetails>
      <div id="sdetails-img">
        <img src={imageL} alt={title} />
      </div>
      <SInfo id="sinfo">
        <h1>{title}</h1>
        <p>{description}</p>
        <SQuantity>
          <span>Quantiy</span>
          <button>
            <AiFillMinusCircle onClick={decreaseQty} />
          </button>
          <p>{qty}</p>
          <button>
            <AiFillPlusCircle onClick={increaseQty} />
          </button>
        </SQuantity>
        <SMainBtn
          onClick={() => {
            notify();
            onAdd(data.lights.data[0].attributes, qty);
          }}
        >
          Add to Cart
        </SMainBtn>
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

    img {
      position: fixed;
      top: 0;
      left: 0;

      /* Preserve aspet ratio */
      min-width: 100%;
      min-height: 100%;
    }

    background: url(imageL) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  opacity: 1;
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
    text-align: left;
    margin: 2rem 0;
  }

  p {
    margin: 2rem 0;
  }
  > button {
    width: 60%;
  }
`;

// const SQuantity = styled.div`
//   display: flex;
//   align-items: center;
//   margin: 1rem 0 rem;

//   button {
//     background: transparent;
//     border: none;
//     display: flex;
//     font-size: 1.5rem;
//     padding: 0rem 0.5rem;
//   }

//   p {
//     width: 1rem;
//     text-align: center;
//   }

//   svg {
//     color: #494949;
//   }
// `;
