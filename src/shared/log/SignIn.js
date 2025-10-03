import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Context";


const SignIn = () => {
  const { user, logIn, googleSignIn, gitHubSignIn } = useContext(AuthContext);
  console.log(user);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.from?.state?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const password = form.password.value;
    const email = form.email.value;
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        setError("");
        form.reset();
        console.log(user);
        navigate(from, { replace: true });
        return alert("Successfully log in!!!");
      })
      .catch((err) => {
        setError("User or Password is invalid!!!");
        console.error(err);
      });
  };
  const googleHandle = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        console.log(user);
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
        <div className="flex-shrink-0 lg:w-2/5">
          <div className="bg-white border-2 p-7 lg:p-10 rounded-lg shadow-2xl text-shadow-lg/10 text-blue-700">
            <h2 className="text-lg  text-center"> Sign in form</h2>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col  mx-auto border-opacity-50"
            >
              <div className="grid place-items-center w-full">
                <div className="form-control w-full">
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
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
                <div className="form-control mt-5 w-full">
                  <button className={`${btnCss}`}>Sign in</button>
                </div>
                <div>
                  Have not account?&nbsp;
                  <Link
                    to="/signup"
                    className="hover:text-red-500 hover:bg-white underline underline-offset-4"
                  >
                    Sign Up here
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

export default SignIn;
