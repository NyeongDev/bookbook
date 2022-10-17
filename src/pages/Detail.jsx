import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getPost, __delPost } from "../modules/bookSlice";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const review = useSelector(state => state.bookslice.post);
  const deleteHandler = () => {
    dispatch(__delPost(id));
  };

  useEffect(() => {
    dispatch(__getPost(id));
  }, [dispatch, id]);

  return (
    <DIV>
      <p>{review.title}</p>
      <p>{review.name}</p>
      <p>{review.body}</p>
      <button
        onClick={() => {
          deleteHandler(id);
          navigate("/");
        }}
      >
        삭제
      </button>
    </DIV>
  );
};

const DIV = styled.form`
  margin-top: 200px;
`;

export default Detail;
