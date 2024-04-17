import { useState } from "react";

const User = ({ name, location, contact }) => {
  const [count] = useState(0);

  return (
    <div className="user-card">
      <h1>Functional Component</h1>
      <br></br>
      <h1>Count: {count}</h1>
      <h1>Name: {name}</h1>
      <h2>Location: {location}</h2>
      <h2>Contact: {contact}</h2>
    </div>
  );
};

export default User;
