import React, { useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useMyStore from "../../zustand";
import UserPosts from "../../components/UserPosts";

export interface UserDetailProps {}

const Button = styled.button`
  box-shadow: inset 0px 1px 0px 0px #9acc85;
  background: linear-gradient(to bottom, #74ad5a 5%, #68a54b 100%);
  background-color: #74ad5a;
  border-radius: 6px;
  border: 1px solid #057fd0;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px -1px 0px #5b6178;
  margin-bottom: 20px;
  margin-top: 20px;

  &:hover {
    background: linear-gradient(to bottom, #68a54b 5%, #74ad5a 100%);
    background-color: #68a54b;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;

const ContainerUser = styled.div`
  display: flex;
  border: 3px solid #73ad21;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30%;
  margin: auto;
`;

const TitlePost = styled.h1`
  text-align: center;
`;

const UserDetail: React.SFC<UserDetailProps> = () => {
  const useStore = useMyStore;
  const { userId } = useParams();

  const getUserDetail = useStore((state) => state.getUserDetail);
  const getUserPosts = useStore((state) => state.getUserPosts);
  const userDetail = useStore((state) => state.userDetail);
  const userPosts = useStore((state) => state.userPosts);

  const getUserDetailData = useCallback(() => {
    getUserDetail(userId);
    getUserPosts(userId);
  }, [getUserDetail, getUserPosts, userId]);

  const renderPosts = () => {
    if (userPosts && userPosts.length) {
      return userPosts.map((value) => <UserPosts key={value.id} {...value} />);
    }
  };
  useEffect(() => {
    getUserDetailData();
    return () => {};
  }, [getUserDetailData]);

  return (
    <>
      <ContainerUser>
        <h2>Detalle del Usuario</h2>
        <h3>Nombre: {userDetail?.name}</h3>
        <h3>Email: {userDetail?.email}</h3>
        <Button onClick={() => window.history.back()}>Volver a atrás</Button>
      </ContainerUser>
      {userPosts.length && (
        <>
          <TitlePost>Posts del Usuario</TitlePost>
          {renderPosts()}
        </>
      )}
    </>
  );
};

export default UserDetail;
