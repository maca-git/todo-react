import React, { useContext, useState } from 'react';
import { AlertContext } from '../context/alert/alertContext';

export const Form = () => {
  const [value, setValue] = useState('')
  const alert = useContext(AlertContext)

  const submitHandler = e => {
    e.preventDefault();
    debugger
    alert.show(value, 'success')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input 
          type="text"
          className="form-control"
          placeholder="Enter note title"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
    </form>
  )
}