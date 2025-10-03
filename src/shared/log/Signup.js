import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Context";
const Signup = () => {
  const { signUp, googleSignIn, gitHubSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [error1, setError1] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.from?.state?.pathname || "/";
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const password = form.password.value;
    const confirm = form.confirm.value;
    const email = form.email.value;
    if (password.length < 8) {
      setError("Password minimum more than 8 characters");
      return;
    } else if (password !== confirm) {
      setError("");
      setError1("Password confirmation is not matched!!!");
      return;
    } else {
      signUp(email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          setError1("");
          form.reset();
          navigate(from, { replace: true });
          return alert("Successfully sign up");
        })
        .catch((err) => console.error(err));
    }
  };
  const googleHandle = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((err) => console.error(err));
  };
  const gitHandle = () => {
    gitHubSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((err) => console.error(err));
  };
  const cssInput = `input mb-5 w-full border-b-2 border-0 border-blue-200 rounded-none`;
  const btnCss = `btn w-full border-2 border-blue-300 rounded-full text-blue-700 mb-2 hover:bg-blue-700 hover:text-yellow-300`;
  return (
    <div className="hero w-full">
      <div className="hero-content w-full">
        <div className="card flex-shrink-0 lg:w-2/6 ">
          <div className="bg-white border-2 p-7 lg:p-10 rounded-lg shadow-2xl text-shadow-lg/10 text-blue-700">
            <h2 className="text-lg  text-center"> Sign up form</h2>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col lg:w-full border-opacity-50"
            >
              <div className="grid place-items-center w-full">
                <div className="form-control w-full">
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className={`${cssInput}`}
                  />
                </div>
                <div className="form-control w-full">
                  <input
                    type="email"
                    name="email"
                    placeholder=" email"
                    className={`${cssInput}`}
                  />
                </div>
                <div className="form-control w-full">
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className={`${cssInput}`}
                  />
                  <p className="text-red-800 text-sm">{error}</p>
                </div>
                <div className="form-control w-full">
                  <input
                    type="password"
                    name="confirm"
                    placeholder="confirm password"
                    className={`${cssInput}`}
                  />
                  <p className="text-red-800 text-sm">{error1}</p>
                </div>
                <div className="form-control w-full py-2">
                  <button className={`${btnCss}`}>Sign Up</button>
                </div>
                <div>
                  already have an account?&nbsp;
                  <Link
                    to="/signin"
                    className="hover:text-red-500 hover:bg-white underline underline-offset-4"
                  >
                    Sign in here
                  </Link>
                </div>
              </div>
              <div className="divider">OR</div>
            </form>
            <div className="grid place-items-center">
              <button onClick={googleHandle} className={`${btnCss}`}>
                <FcGoogle></FcGoogle>
                <span className="pl-2">Sign in with </span>
                <span className="text-warning">google</span>
              </button>
              <button onClick={gitHandle} className={`${btnCss}`}>
                <SiGithub></SiGithub>
                <span className="pl-2">Sign in with </span>
                <span className="text-warning">GitHub</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
