import React from 'react';
import { Form } from '../components/Form';
import { Notes } from '../components/Notes';

export const Home = () => {
  const notes = [
    {
      id: 1,
      title: "Text1"
    },
    {
      id: 2,
      title: "Text2"
    },
  ]
  return (
    <>
      <h1>Home page</h1>
      <Form/>
      <hr/>
      <Notes notes={notes}/>
    </>
  )
}