
import React, { useState, useEffect, useContext } from 'react'

import { ToolBar } from '../components/ToolBar';
import { TableUsers } from '../components/TableUsers';


export const ManagerPage = () => {

    return (
        <>
            <ToolBar />
            <TableUsers />
            
        </>
    )
}