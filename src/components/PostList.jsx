import { useDispatch, useSelector } from "react-redux";
import PostItem from "./PostItem";
import styled from "styled-components";
import { __getPostList } from "../modules/bookSlice";
import { useEffect } from "react";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.bookslice.posts);
  console.log("useselector", posts);

  useEffect(() => {
    dispatch(__getPostList()); //axios는 계속 통신하고 있음!! > 무한 루프
  }, [dispatch]);
  //처음들어가는순간에만 db에 접근해서 state를 갱신!!

  return (
    <PL>
      <LT>오늘은 어떤 책을 읽어볼까요?</LT>
      {posts.map(post => {
        const { name, title, body, id } = post;
        return (
          <PostItem key={id} id={id} name={name} title={title} body={body} />
        );
      })}
    </PL>
  );
};

const PL = styled.div`
  width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0 auto;
`;

const LT = styled.div`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
`;

export default PostList;
