import styled from "styled-components";
import { useRouter } from "next/router";
import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { useStateContext } from "../../lib/context";
// import toast from "react-hot-toast";
import { useEffect } from "react";
import { SQuantity } from "../../styles/SQuantity";

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
    toast.success(`${title} added to your cart.`, { duration: 1500 });
  };

  return (
    <SDetails>
      <img src={imageL} alt={title} />
      <SInfo id="sinfo">
        <h3>{title}</h3>
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
        <StyledBuy
          onClick={() => {
            notify();
            onAdd(data.lights.data[0].attributes, qty);
          }}
        >
          Add to Cart
        </StyledBuy>
      </SInfo>
    </SDetails>
  );
}

const SDetails = styled.div`
  position: relative;
  display: flex;
  //   justify-content: space-between;

  img {
    // width: 40%;
    position: absolute;
    background: url(imageL) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  opacity: 1;

  background: url(imageL) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const SInfo = styled.div`
  //   width: 40%;
  button {
    font-size: 1rem;
    font-weight: medium;
    padding: 0.5rem 1rem;
    cursor: pointer;

    background: url(testurl) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
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

//   span {
//     color: var(--secondary);
//   }

//   svg {
//     color: #494949;
//   }
// `;

const StyledBuy = styled.button`
  width: 100%;
  background: var(--primary);
  color: white;
  font-weight: 500;
`;
