import { SMainBtn } from "../styles/SMainBtn";
import styled from "styled-components";
import Image from "next/image";

export default function Eighth({}) {
  return (
    <SEighth>
      <S8Title>
        <h1>
          We've made a <span>new ecosystem</span> for a{" "}
          <span>new way of investing</span>.
        </h1>
        <h3>
          Traditional property investing is designed to make middlemen rich. But
          blockchain technology means you can invest without them - and make
          more money doing it.
        </h3>
        <h1>Here's how it works:</h1>
      </S8Title>
      <S8Points>
        <div>
          <Image
            alt="Rules"
            layout="responsive"
            width="200rem"
            height="200rem"
            src="/Rules.jpg"
          />
          <h2>Rules</h2>
          <p>
            Sucuro Governance Token holders set the rules and attributes that
            will govern how our smart contracts execute property acquisitions.
          </p>
        </div>
        <div>
          <Image
            alt="Property sales"
            layout="responsive"
            width="200rem"
            height="200rem"
            src="/PropertySales.jpg"
          />
          <h2>Property sales</h2>
          <p>
            Asset owners submit properties for sale. If the property meets the
            rules and the sale price is less than or equal to a professional
            valuation; the property is added to the pipeline.
          </p>
        </div>
        <div>
          <Image
            alt="Tokens"
            layout="responsive"
            width="200rem"
            height="200rem"
            src="/Tokens.jpg"
          />
          <h2>Tokens</h2>
          <p>
            Investors agree to buy tokens in a primary sale. When the value of
            tokens committed exceeds the price of the next property in the
            pipeline, the property is purchased.
          </p>
        </div>

        <div>
          <Image
            alt="Management"
            layout="responsive"
            width="200rem"
            height="200rem"
            src="/Management.jpg"
          />
          <h2>Management</h2>
          <p>
            A property manager is appointed to lease the property, collect rent
            and organise repairs and maintenance.
          </p>
        </div>

        <div>
          <Image
            alt="Sucuro Governance Token"
            layout="responsive"
            width="200rem"
            height="200rem"
            src="/PublicTransactions.jpg"
          />
          <h2>Public transactions</h2>
          <p>
            Both investors and the general public can see the income and
            expenses for the property on the blockchain as they happen.
          </p>
        </div>
        <div>
          <Image
            alt="Sucuro Governance Token"
            layout="responsive"
            width="200rem"
            height="200rem"
            src="/MarketPricing.jpg"
          />
          <h2>Market pricing</h2>
          <p>
            The market determines the price for tokens based on the value of the
            properties held and the yield they are generating.
          </p>
        </div>
        <div>
          <Image
            alt="Sucuro Governance Token"
            layout="responsive"
            width="200rem"
            height="200rem"
            src="/Reinvestment.jpg"
          />
          <h2>Reinvestment</h2>
          <p>
            The net rental income from properties owned is reinvested. Sucuro
            Governance Token holders determine whether to buy new properties in
            the pipeline or upgrading existing properties.
          </p>
        </div>
        <div>
          <Image
            alt="Sucuro Governance Token"
            layout="responsive"
            width="200rem"
            height="200rem"
            src="/OptionToExit.jpg"
          />
          <h2>Option to exit</h2>
          <p>
            Investors can choose to sell some or all of their tokens on a coin
            exchange at any time at the market price.
          </p>
        </div>
      </S8Points>
      <SMainBtn>Join the Early Access List</SMainBtn>
    </SEighth>
  );
}

const SEighth = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  margin-bottom: 5rem;
  z-index: 11;

  span {
    color: var(--highlight);
  }

  // background: url(../blockchain.jpg) no-repeat center center fixed;
  // -webkit-background-size: cover;
  // -moz-background-size: cover;
  // -o-background-size: cover;
  // background-size: cover;
`;

const S8Title = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    width: 768px;
    padding: 2rem 0;
  }

  h3 {
    max-width: 768px;
    color: var(--third);
  }
`;

const S8Points = styled.div`
  transition: all 0.3s ease;
  margin-top: 1rem;
  margin-bottom: 4rem;
  width: 70%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 1rem;

  div {
    position: relative;
    background: white;
    padding: 1rem;
    transition: all ease 0.3s;
    border-radius: 1rem;
    box-shadow: none;

    &:hover {
      box-shadow: var(--boxshadow03);
    }

    img {
      z-index: 1;
      overflow: hidden;
      border-radius: 1rem;
      transition: all ease 0.2s;
    }

    h2 {
      text-align: right;
      margin: 0.5rem 0.5rem 0 0;
      z-index: 10;
      font-size: 1.4rem;
    }

    p {
      position: absolute;
      right: 1rem;
      left: 1rem;
      bottom: 5rem;
      padding: 0rem 1rem;
      color: white;
      font-size: 1.1rem;
      z-index: 10;
      opacity: 0;
      transition: all ease 0.5s;
      // text-shadow: 0px 0px 4px #000000;
      // background-color: rgba(0, 0, 0, 0.5);
    }

    &:hover {
      p {
        opacity: 1;
      }
      img {
        filter: brightness(50%);
      }
    }
  }
`;
