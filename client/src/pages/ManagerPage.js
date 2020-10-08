
import React, { useState, useEffect, useContext, useCallback } from 'react'

import { ToolBar } from '../components/ToolBar';
import { TableUsers } from '../components/TableUsers';
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/Auth.context'


export const ManagerPage = () => {
    const { token } = useContext(AuthContext)
    const { request, loading } = useHttp()
    const [users, setUsers] = useState()
    const [select, setSelect] = useState([])
    const auth = useContext(AuthContext)

    const getUsers = useCallback(async () => {
        try {
            const fetched = await request(`/api/users`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setUsers(fetched)
        } catch (e) { }
    }, [token, request])

    useEffect(() => {
        getUsers()
    }, [getUsers])

    const pickUserHandler = (arr) => {
        // if (select.indexOf(e.target.name) === -1) {
        //     setSelect([...select, e.target.name])
        // }
        // if (select.indexOf(e.target.name) !== -1) {
        //     let tmpSelect = select
        //     tmpSelect.splice(select.indexOf(e.target.name), 1);
        //     setSelect(tmpSelect)
        // }
        console.log(arr)
        setSelect(arr)
    }

    const deleteUserHandler = async () => {
        if (select.length !== 0) {
            try {
                const data = await request('/api/users/delete', 'POST', select, {
                    Authorization: `Bearer ${token}`
                })
                const currentUser = select.filter(element => {
                    console.log(auth.userId, element)
                    if(auth.userId === +element){
                        auth.logout()
                        return true
                    }
                });
                if(!currentUser.length){
                    await getUsers()
                    setSelect([])
                }
            } catch (e) { }
        }
    }

    
    const BlockUserHandler =  async () => {
        if (select.length !== 0) {
            try {
                const data = await request('/api/users/block', 'POST', select, {
                    Authorization: `Bearer ${token}`
                })
                await getUsers()
                setSelect([])
                const currentUser = select.filter(element => {
                    console.log(auth.userId, element)
                    if(auth.userId === +element){
                        auth.logout()
                        return true
                    }
                });
                if(!currentUser.length){
                    await getUsers()
                }
            } catch (e) { }
        }
    }

    const unBlockUserHandler = async () => {
        if (select.length !== 0) {
            try {
                const data = await request('/api/users/unblock', 'POST', select, {
                    Authorization: `Bearer ${token}`
                })
                await getUsers()
                setSelect([])
                // const currentUser = select.filter(element => {
                //     console.log(auth.userId, element)
                //     if(auth.userId === +element){
                //         auth.logout()
                //         return true
                //     }
                // });
                // if(!currentUser.length){
                //     await getUsers()
                // }
            } catch (e) { }
        }
    }





    if (loading) {
        return (
            <>
                <ToolBar
                    deleteUser={deleteUserHandler}
                />
            </>
        )
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
                    pick={pickUserHandler}
                />
            }

        </>
    )
}