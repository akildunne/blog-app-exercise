import React, { useEffect, useState } from "react";
import { getBlog, deleteBlog } from "../../services/blogs";
import Layout from "../../components/shared/Layout/Layout";
import { useParams, Redirect } from "react-router-dom";
import styled from "styled-components";

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #669B6B;
  border: 1px solid grey; 
  margin: 50px;
  border-radius: 10%;
`
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #F9FEE8;
  margin: 20px 20px 10px 20px;
  border-radius: 10%;
  color: #031F1A;
  font-size: 15px;
  padding: 10px;
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

const DeleteButton = styled.button`
  background-color: #031F1A; 
  color: #F9FEE8;
  padding: 5px 10px;
  border-style: none;
  border-radius: 15% 15%;
  cursor: pointer;
  transition: .5s;
  margin-bottom: 10px;

  :hover {
    transform: scale(1.1);
  }
`
const EditButton = styled.button`
  background-color: #031F1A; 
  color: #F9FEE8;
  padding: 5px 10px;
  border-style: none;
  border-radius: 15% 15%;
  cursor: pointer;
  transition: .5s;
  margin-bottom: 10px;

  :hover {
    transform: scale(1.1);
  }
`
const AuthorContainer = styled.div`
  text-align: left;
  padding-left: 10px;
`
const Content = styled.div`
  text-align: left;
  padding-left: 10px;
`


const BlogDetail = () => {
  const [redirect, setRedirect] = useState(false);
  const [blogDetail, setBlogDetail] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchBlogDetail = async () => {
      const blogs = await getBlog(id);
      setBlogDetail(blogs);
      setLoaded(true);
    };
    fetchBlogDetail();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  const blogDeleted = (e) => {
    deleteBlog(blogDetail._id);
    setRedirect(true);
  };

  if (redirect === true) {
    return <Redirect to="/api/blogs" />;
  }

  return (
    <Layout>
      <DetailContainer>
        <ContentContainer>
          <h3>{blogDetail.title}</h3>
          <AuthorContainer><h4>By: {blogDetail.author}</h4></AuthorContainer>
          <Content><p>{blogDetail.content}</p></Content>
        </ContentContainer>
        <ButtonContainer>
          <DeleteButton onClick={(e) => blogDeleted(e)}>
            Delete
          </DeleteButton>
          <EditButton>Edit</EditButton> 
        </ButtonContainer>
      </DetailContainer>
    </Layout>
  );
};

export default BlogDetail;
