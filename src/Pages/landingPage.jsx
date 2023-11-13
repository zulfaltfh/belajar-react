import React, { Fragment } from 'react'
import Button from '../components/Elements/Button';

const toLoginPage = () => {
  window.location.href = '/login';
};

const toRegisterPage = () => {
  window.location.href = '/register';
};

export default function LandingPage() {

  return (
    <Fragment>
      <div className="flex justify-center items-center min-h-screen">
        <Button className="bg-blue-600" type="submit" onClick={toLoginPage}>ke Halaman Login</Button>
        <Button className="bg-sky-200 text-sky-600  ml-2" type="submit" onClick={toRegisterPage}>ke Halaman Sign Up</Button>
      </div>
    </Fragment>
  )
}
