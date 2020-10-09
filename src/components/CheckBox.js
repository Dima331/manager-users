import React from 'react';

export const CheckBox = ({ user, checkHandler }) => {
  return (
    <>
      {user
        &&
        <input
          key={user.id}
          onChange={checkHandler}
          type="checkbox"
          checked={user.press}
          value={user.id} />
      }
    </>
  )
}