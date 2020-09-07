import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { User } from "../../zustand/types";

const Button = styled.button`
  box-shadow: 0px 1px 0px 0px #f0f7fa;
  background: linear-gradient(to bottom, #33bdef 5%, #019ad2 100%);
  background-color: #33bdef;
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

  &:hover {
    background: linear-gradient(to bottom, #019ad2 5%, #33bdef 100%);
    background-color: #019ad2;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;

const Rows = styled.td`
  padding: 10px;
  text-align: center;
  border: 1px solid black;
  border-collapse: collapse;
`;

export default React.memo(function UserItem({ email, name, phone, id }: User) {
  const history = useHistory();

  const handleClick = (): void => {
    history.push(`/user-detail/${id}`);
  };

  return (
      <tr>
        <Rows>{name}</Rows>
        <Rows>{phone}</Rows>
        <Rows>{email}</Rows>
        <Rows><Button onClick={() => handleClick()}>Ver detalle</Button></Rows>
      </tr>
  );
});
