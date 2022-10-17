import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getPost, __delPost } from "../modules/bookSlice";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [edit, setEdit] = useState(false);
  const review = useSelector(state => state.bookslice.post);

  useEffect(() => {
    dispatch(__getPost(id));
  }, [dispatch, id]);

  const deleteHandler = () => {
    dispatch(__delPost(id));
  };

  return (
    <DIV>
      {/* {edit ? (
        <div>
          <input>{review.title}</input>
          <input>{review.name}</input>
          <input>{review.body}</input>
        </div>
      ) : (
        <div>
          <p>{review.title}</p>
          <p>{review.name}</p>
          <p>{review.body}</p>
        </div>
      )} */}

      <div>
        <p>{review.title}</p>
        <p>{review.name}</p>
        <p>{review.body}</p>
      </div>

      <button
        onClick={() => {
          setEdit(!edit);
        }}
      >
        {edit ? "완료" : "수정"}
      </button>

      {/* {edit ? (
        <button
          onClick={() => {
            setEdit(false);
          }}
        >
          완료
        </button>
      ) : (
        <button
          onClick={() => {
            setEdit(true);
          }}
        >
          수정
        </button>
      )} */}

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
