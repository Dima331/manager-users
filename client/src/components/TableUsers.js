import React, { useContext, useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { CheckBox } from './CheckBox'
import Form from 'react-bootstrap/Form';
import { check } from 'express-validator';


export const TableUsers = ({ users, pick }) => {
  const [checked, setChecked] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [ChangeMe, setChangeMe] = useState(false);

  useEffect(() => {
    users.forEach(element => {
      setChecked(prev => ([
        ...prev, {
          id: element.id,
          press: false
        }
      ]))
    });
  }, [])


  const putCheckBoxHandler = (e) => {
    setChecked(checked.map(item => {
      if (item.id === +e.target.value) {
        return {
          id: item.id,
          press: !item.press
        }
      }
      return item
    }))
    setChangeMe(true)
  }

  useEffect(() => {
    console.log(checked)
    let arr = []
    checked.filter(item => {
      if(item.press) {
        arr.push(item.id)
        return item.id
      }
    })
    pick(arr)
    setChangeMe(false)
  }, [ChangeMe])

  const emphasise  = () => {
    setChecked(checked.map(item => {
      return {
        id: item.id,
        press: !selectAll
      }
    }))
    setSelectAll(!selectAll)
    setChangeMe(true)
  }

  return (
    <Row className="justify-content-md-center">
      <Col xs lg="10" className=" mt-5">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th ><Button
                variant="primary"
                onClick={emphasise}
              >Select all</Button>
                <Button
                  variant="primary"
                >Remove all</Button></th>
              <th>id</th>
              <th>Login</th>
              <th>Email</th>
              <th>Data registration</th>
              <th>Data last login</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users && users.map((user, i) => {
              return (
                <tr key={user.id}>
                  <td>
                    {/* <Form.Check
                    type="checkbox"
                    name={checked[i]}
                    onClick={(e) => pick(e)}
                    checked={checked[i]}
                    value={checked[i]}
                  /> */}
                    <CheckBox
                      check={checked[i]}
                      checkHandler={putCheckBoxHandler}
                    />
                  </td>
                  <td>{user.id}</td>
                  <td>{user.login}</td>
                  <td>{user.email}</td>
                  <td>{user.date_registration}</td>
                  <td>{user.date_last_login}</td>
                  <td>{!!+user.status ? 'not block' : 'block'}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Col>
    </Row>
  )
}