const HomePage = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src="./Logo.jpeg" width={300} height={300} style={{ borderRadius: ".5rem" }} />
      <p style={{ fontSize: "2rem", fontWeight: "bold" }}>😈This site will make you angry😈</p>
      <p style={{ fontSize: "2rem", fontWeight: "bold" }}>Challenge it!</p>
    </div>
  );
};

export default HomePage;
