import React from 'react';
import Button from '../Elements/Button';
import InputForm from '../Elements/Input';

export default function FormLogin() {
  return (
    <form action="">
      <InputForm 
        label="Email" 
        type="email" 
        placeholder="example@gmail.com" 
        name="email" 
      />
      <InputForm 
        label="Password" 
        type="password" 
        placeholder="********" 
        name="password" 
      />
      
      <Button className="bg-blue-600 w-full">Login</Button>
    </form>
  )
}