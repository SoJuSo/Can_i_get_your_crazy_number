const NotFound = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ fontSize: "2rem", fontWeight: "bold" }}>페이지가 존재하지 않습니다. 😵</span>
      </div>
    </>
  );
};

export default NotFound;
