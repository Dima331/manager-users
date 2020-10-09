
import React, { useState, useEffect, useContext, useCallback } from 'react'
import { ToolBar } from '../components/ToolBar';
import { TableUsers } from '../components/TableUsers';
import { useHttp } from '../hooks/http.hook';
import { AuthContext } from '../context/Auth.context';

export const ManagerPage = () => {
  const { request, loading } = useHttp();
  const auth = useContext(AuthContext);
  const [users, setUsers] = useState();
  const [select, setSelect] = useState([]);

  const getUsers = useCallback(async () => {
    try {
      const fetched = await request(`/api/users`, 'GET', null, {
        Authorization: `Bearer ${auth.token}`
      });
      setUsers(fetched);
    } catch (e) { }
  }, [auth, request]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const selectUserHandler = (selectUser) => {
    setSelect(selectUser)
  }
  
  const unBlockUserHandler = async () => {
    if (select.length !== 0) {
      try {
        await request('/api/users/unblock', 'POST', select, {
          Authorization: `Bearer ${auth.token}`
        });
        setSelect([]);
        await getUsers();
      } catch (e) { };
    }
  }

  const deleteUserHandler = async () => {
    if (select.length !== 0) {
      try {
        await request('/api/users/delete', 'POST', select, {
          Authorization: `Bearer ${auth.token}`
        })
        currentUser();
      } catch (e) { }
    }
  }

  const BlockUserHandler = async () => {
    if (select.length !== 0) {
      try {
        await request('/api/users/block', 'POST', select, {
          Authorization: `Bearer ${auth.token}`
        })
        currentUser();
      } catch (e) { }
    }
  }

  const currentUser = async() => {
    const filterUser = select.filter(element => {
      if (auth.userId === +element) {
        auth.logout();
        return true;
      }
      return false
    });
    if (!filterUser.length) {
      setSelect([]);
      await getUsers();
    }
  }

  return (
    <>
      <ToolBar
        deleteUser={deleteUserHandler}
        unBlock={unBlockUserHandler}
        block={BlockUserHandler}
      />
      {users &&
        <TableUsers
          users={users}
          pick={selectUserHandler}
        />
      }
    </>
  )
}