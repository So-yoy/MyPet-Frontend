import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../css/login.css";

function SignUp() {
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
  let maxwidth = {
    maxWidth: window.screen.width * 0.4,
  };
  return (
    <div className="h-100 loginbody d-flex">
      <div className="container-fluid text-center" style={maxwidth}>
        <div className="card">
          <div className="card-body bg-white ">
            <h1 className="h3 mb-3 fw-normal">회원가입</h1>
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
            <div className="mb-3 row">
              <label for="userEmail" className="col-sm-2 col-form-label">
                이메일
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  type="email"
                  id="userEmail"
                  name="userEmail"
                  onChange={inputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label for="userName" className="col-sm-2 col-form-label">
                닉네임
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  type="text"
                  id="userName"
                  name="userName"
                  onChange={inputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label for="userPhone" className="col-sm-2 col-form-label">
                연락처
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  type="number"
                  id="userPhone"
                  name="userPhone"
                  onChange={inputChange}
                />
              </div>
            </div>
            <div className="m-1">
              <button
                className="w-100 btn btun-lg btn btn-primary"
                type="submit"
                id="signUp"
              >
                회원가입
              </button>
            </div>
            <div className="m-1">
              <button
                className="w-100 btn btun-lg btn btn-secondary"
                type="submit"
                id="signUp"
              >
                취소
              </button>
            </div>
          </div>
        </div>
        <p className="mt-5 mb-3 text-muted">My Pet ©2023-07</p>
      </div>
    </div>
  );
}

export default SignUp;
