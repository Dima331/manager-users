import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { CheckBox } from './CheckBox';

export const TableUsers = ({ users, pick }) => {
  const [checked, setChecked] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [stateSelect, setStateSelect] = useState(false);

  useEffect(() => {
    users.forEach(user => {
      setChecked(prev => ([
        ...prev, {
          id: user.id,
          press: false
        }
      ]));
    });
  }, [users]);

  useEffect(() => {
    let sendStateCheck = [];
    
    checked.filter(checkBox => {
      if(checkBox.press) {
        sendStateCheck.push(checkBox.id)
        return checkBox.id
      }
      return false
    })

    pick(sendStateCheck);
    setStateSelect(false);
  }, [stateSelect, checked]); 

  const emphasise = () => {
    setChecked(checked.map(checkBox => {
      return {
        id: checkBox.id,
        press: !selectAll
      }
    }))
    setSelectAll(!selectAll);
    setStateSelect(true);
  }

  const putCheckBoxHandler = e => {
    setChecked(checked.map(checkBox => {
      if (checkBox.id === +e.target.value) {
        return {
          id: checkBox.id,
          press: !checkBox.press
        };
      }
      return checkBox;
    }))
    setStateSelect(true)
  }

  return (
    <Row className="justify-content-md-center">
      <Col xs lg="10" className=" mt-5">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th><Button
                variant="info"
                onClick={emphasise}
              >Select all</Button></th>
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
                    <CheckBox
                      user={checked[i]}
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