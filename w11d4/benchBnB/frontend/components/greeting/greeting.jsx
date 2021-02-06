import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <p>Hello, {currentUser.username}</p>
      <button onClick={logout}>Log Out</button>
    </div>
  ) : (
      <div>
        <Link to="/signup">Sign Up</Link><br/>
        <Link to="/login">Log In</Link>
      </div>
    );

  return (
    <header>
      <h1 className="logo">Hi, Bencher!</h1>
      <div>
        {display}
      </div>
    </header>
  );
};

export default Greeting;