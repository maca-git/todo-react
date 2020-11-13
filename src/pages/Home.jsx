import React, { useEffect, useContext } from 'react';
import { Form } from '../components/Form';
import { Loader } from '../components/Loader';
import { Notes } from '../components/Notes';
import { FirebaseContext } from '../context/firebase/firebaseContext';

export const Home = () => {
  const {loading, notes, fetchNotes} = useContext(FirebaseContext)

  useEffect(() => {
    fetchNotes()
  }, [])

  return (
    <>
      <h1>Home page</h1>
      <Form/>
      <hr/>

      { loading 
        ? <Loader/>
        : <Notes notes={notes}/>
      }

    </>
  )
}