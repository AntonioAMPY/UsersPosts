import React, { useEffect, useCallback } from "react";
import useMyStore from "../../zustand";
import styled from "styled-components";

import UserItem from "../../components/UserItem";

// Recomiendan Type en vez de interface, porque interface es para variables y type para props.

const ContainerTItle = styled.h1`
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Home: React.SFC<{}> = () => {
  const useStore = useMyStore;
  const users = useStore((state) => state.users);
  const getUsers = useStore((state) => state.getUsers);
  const isLoading = useStore((state) => state.isLoading);

  const getUsersData = useCallback(() => {
    getUsers();
  }, [getUsers]);

  useEffect(() => {
    getUsersData();
  }, [getUsersData]);

  // JSX.Element es un array de elementos
  const renderUsers = (): undefined | JSX.Element[] | string => {
    if (users && users.length) {
      return users.map((user) => <UserItem key={user.id} {...user} />);
    } else if (isLoading) {
      return " Cargando ";
    }
  };
  return (
    <div>
      <ContainerTItle>Listado de Usuarios</ContainerTItle>
      <Container>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Telefono</th>
              <th>Email</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>{renderUsers()}</tbody>
        </table>
      </Container>
    </div>
  );
};

export default Home;
