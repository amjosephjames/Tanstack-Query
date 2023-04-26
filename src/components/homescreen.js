import React from "react";
import styled from "styled-components";


const Homescreen = () => {


  return (
    // <Container>
    <Card>
      <Cardwrap>
        <Input>
          <input
            onChange={(e) => {
              setQuotation(e.target.value);
            }}
            type="text"
            placeholder="fill in quote"
          />
        </Input>
        <Input>
          <input
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
            type="text"
            placeholder="fill in quote author"
          />
        </Input>
        <Button disabled={posting?.isLoading} onClick={handleSubmit}>
          Post Quote
        </Button>
      </Cardwrap>
    </Card>
    // </Container>
  );
};
export default Homescreen;

// const Container = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: black;
// `;
const Card = styled.div`
  width: 350px;
  height: 250px;
  display: flex;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: white;
  @media (max-width: 320px) {
    width: 280px;
  }
`;
const Cardwrap = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;
const Input = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  opacity: none;
  /* border: none; */
  border: 1px solid black;
  input {
    border: none;
    outline: none;
    width: 90%;
    height: 90%;
    background: inherit;
    ::placeholder {
      color: black;
      font-size: 10px;
    }
  }
`;
const Button = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: black;
  font-size: 14px;
  color: white;
`;
