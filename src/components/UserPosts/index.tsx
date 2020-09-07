import React from "react";
import styled from "styled-components";

import { UserPosts as UserPostProps } from "../../zustand/types";

const ContainerPosts = styled.div`
  display: flex;
  border: 3px solid #73ad21;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60%;
  margin: auto;
  margin-bottom: 10px;
`;

export default React.memo(function UserPost({ title, body }: UserPostProps) {
  return (
    <ContainerPosts>
      <h3>Titulo - {title}</h3>
      <p>{body}</p>
    </ContainerPosts>
  );
});
