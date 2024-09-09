import { useLocalizer } from "../../hooks/useLocalizer";

const NotFound = () => {
  const t = useLocalizer();
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
        <span style={{ fontSize: "2rem", fontWeight: "bold" }}>{t(`404Page.text`)}</span>
      </div>
    </>
  );
};

export default NotFound;
