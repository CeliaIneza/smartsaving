function UserCard({ name, email }) {
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    margin: "10px",
    width: "220px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    backgroundColor: "#1d1515ff",
  };

  return (
    <div style={cardStyle}>
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}

export default UserCard;
