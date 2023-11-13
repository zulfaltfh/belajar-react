import React, { useRef, useEffect } from 'react';
import Button from '../Elements/Button';
import InputForm from '../Elements/Input';

export default function FormLogin() {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem('email', event.target.email.value);
    localStorage.setItem('password', event.target.password.value);
    window.location.href = "/products"
  };

  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm 
        label="Email" 
        type="email" 
        placeholder="example@gmail.com" 
        name="email" 
        ref={emailRef}
      />
      <InputForm 
        label="Password"  
        type="password" 
        placeholder="********" 
        name="password" 
      />
      
      <Button className="bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  )
}