import React, { useContext, useState } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { FirebaseContext } from '../context/firebase/firebaseContext';

export const Form = () => {
  const [value, setValue] = useState('')
  const alert = useContext(AlertContext)
  const firebase = useContext(FirebaseContext)

  const submitHandler = e => {
    e.preventDefault();
    if(value.trim()) {
      firebase.addNote(value.trim()).then(() => {
        alert.show('Note has been created', 'success')
      }).catch(() => {
        alert.show('Some error', 'danger')
      })
      setValue('');
    } else {
      alert.show('Enter text')
    }
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