function Note() {
  return (
    <div
      style={{
        marginTop: "auto",
        backgroundColor: "#e0e7ff",
        padding: "8px",
        borderRadius: "5px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        color: "#333",
      }}
    >
      <h3>Demo Credentials:</h3>
      <p>Email: test@test.com </p>
      <p>Password: test1234</p>
    </div>
  );
}

export default Note;
