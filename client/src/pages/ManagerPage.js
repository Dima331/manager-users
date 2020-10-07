
import React, { useState, useEffect, useContext, useCallback } from 'react'

import { ToolBar } from '../components/ToolBar';
import { TableUsers } from '../components/TableUsers';
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/Auth.context'


export const ManagerPage = () => {
    const { token } = useContext(AuthContext)
    const { request, loading } = useHttp()
    const [users, setUsers] = useState()

    const getUsers = useCallback(async () => {
        try {
            const fetched = await request(`/api/users`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            console.log(fetched)
            setUsers(fetched)
        } catch (e) { }
    }, [token, request])

    useEffect(() => {
        getUsers()
    }, [getUsers])

    if (loading) {
        return "hi"
    }

    return (
        <>
            <ToolBar />
            {users &&
                <TableUsers  users={users}/>
            }

        </>
    )
}