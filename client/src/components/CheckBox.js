import React from 'react'
import Form from 'react-bootstrap/Form';

export const CheckBox = ({ check, checkHandler }) => {
  return (
    <>
      {check
        &&
        <input
          key={check.id}
          onChange={checkHandler}
          type="checkbox"
          checked={check.press}
          value={check.id} />
      }
    </>
  )
}