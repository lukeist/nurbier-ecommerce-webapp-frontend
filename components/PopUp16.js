import styled from "styled-components";

export default function PopUp16({ setIs16 }) {
  return (
    <SPopUp16 id="SPopUp16">
      <h3>Bist du denn überhaupt schon 16 Jahre Alt?</h3>
      <div>
        <button className="btn-main">Noch Nicht.</button>
        <button className="btn-main" onClick={() => setIs16(false)}>
          Jo, Locker!
        </button>
      </div>
    </SPopUp16>
  );
}

const SPopUp16 = styled.div`
  font-family: "Oswald", sans-serif;
  position: fixed;
  overflow: hidden;
  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8rem;
  z-index: 1000;

  > h3 {
    color: white;
    z-index: 1001;
    margin-bottom: 2rem;
    font-size: 4rem;
  }
`;
