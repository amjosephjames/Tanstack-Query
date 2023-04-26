import React,{useState} from "react";
import styled from "styled-components";
import Homescreen from "./homescreen";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {Link} from "react-router-dom"
import { creatingPost,fetchPost,fetchSinglePost } from "./api";



const View = () => {

  const queryClient = useQueryClient();
  const [quotation,setQuotation] = useState("");
  const [author,setAuthor] = useState("")

  	const getPost = useQuery({
      queryKey: ["post"],
      queryFn: fetchPost,
    });

    const posting = useMutation({
      mutationFn: creatingPost,

      onSuccess: (data) => {
        queryClient.invalidateQueries(["post"]);
      },
    });

    const handleSubmit = () => {
      posting.mutate({
         quotation,
         author
      });
    };

    console.log(getPost);

  return (
    <Container>
      <Wrapper>
        <Homescreen />
        {getPost.isLoading ? <h1>Loading...</h1> : null}
        {getPost?.data?.map((props) => (
          <Card key={props?._id}>
            <Cardwrap>
              <Quote>{props?.quotation}</Quote>
              <Author>{props?.author}</Author>
            </Cardwrap>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};
export default View;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
`;
const Card = styled.div`
  width: 350px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 15px;
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
`;
const Quote = styled.div`
  font-size: 14px;
`;
const Author = styled.div`
  font-size: 14px;
`;
