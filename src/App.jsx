
import React from 'react';
import Login from './componenets/Login.jsx';
import Register from './componenets/Register.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-stretch">
        <Login />
        <Register />
      </div>
    </div>
  );
}

export default App;