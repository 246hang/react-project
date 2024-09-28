function App() {
  return (
    <div
      id="최상단 모달"
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "lightgray",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        id="로그인 모달"
        style={{
          width: "400px",
          height: "600px",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.8)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div>환영합니다.</div>
        <input type="text" placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
        <button>로그인</button>
      </div>
    </div>
  );
}

export default App;
