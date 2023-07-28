import { useState } from "react";
import { call } from "./service/ApiService";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./css/login.css";

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

  let maxwidth = {
    maxWidth: window.screen.width * 0.4,
  };

  return (
    <div className="bg-secondary h-100 loginbody d-flex">
      <div className="container-fluid text-center" style={maxwidth}>
        <div className="card">
          <div className="card-body bg-white ">
            <h1 className="h3 mb-3 fw-normal">로그인</h1>
            <div className="mb-3 row">
              <label for="userId" className="col-sm-2 col-form-label">
                아이디
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  type="text"
                  id="userId"
                  name="userId"
                  onChange={inputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label for="userPw" className="col-sm-2 col-form-label">
                비밀번호
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  type="password"
                  id="userPw"
                  name="userPw"
                  onChange={inputChange}
                />
              </div>
            </div>
            <div className="m-1">
              <button
                className="w-100 btn btun-lg btn-primary"
                type="submit"
                id="loginBtn"
                onClick={loginHandle}
              >
                로그인
              </button>
            </div>
            <div className="m-1">
              <button
                className="w-100 btn btun-lg btn"
                type="submit"
                id="loginBtn"
                onClick={loginHandle}
              >
                회원가입
              </button>
            </div>
          </div>
        </div>
        <p className="mt-5 mb-3 text-muted">My Pet ©2023-07</p>
      </div>
    </div>
  );
}

export default Login;
