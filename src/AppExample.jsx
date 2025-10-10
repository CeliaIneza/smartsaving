import { useState, useEffect } from "react";
import UserCard from "./components/UserCard";

function App() {
  const [users, setUsers] = useState([]); // holds user data
  const [showUsers, setShowUsers] = useState(true); // toggle list visibility

  // useEffect runs once when component loads
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  },[]);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>👥 User List App</h1>

      <button
        onClick={() => setShowUsers(!showUsers)}
        style={{
          padding: "10px 20px",
          background: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "20px"
        }}
      >
        {showUsers ? "Hide Users" : "Show Users"}
      </button>

      {showUsers && (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {users.map(user => (
            <UserCard key={user.id} name={user.name} email={user.email} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
