import { useState } from "react";
import { call } from "./service/ApiService";

function Login() {
  //인풋 값 관리 스테이트
  const [inputs, setInputs] = useState({
    userId: "",
    userPw: "",
  });

  const inputChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const loginHandle = () => {
    //로그인 버튼 클릭 시 동작
    //확인해야할 내용 : 아이디,비밀번호 모두입력하여 로그인버튼 클릭하였는지
    if (inputs.userId === "") alert("아이디를 입력해주세요!");
    else if (inputs.userPw === "") alert("비밀번호를 입력해주세요!");
    else {
      call("/auth/signin", "POST", inputs).then((re) => console.log(re));
    }
  };

  return (
    <div>
      <h1>로그인</h1>
      <input type="text" name="userId" onChange={inputChange} />
      <br></br>
      <input type="password" name="userPw" onChange={inputChange} />
      <button type="submit" id="loginBtn" onClick={loginHandle}>
        로그인
      </button>
    </div>
  );
}

export default Login;
