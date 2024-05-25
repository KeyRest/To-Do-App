import InputLogin from "../components/input/inputSignINUP/inputSignINUP.jsx";
import { showSignUp, showSignIn, showSignInFromSignUp } from "../utils.js";
import Button from "../components/button/button.jsx";
import { Link } from 'react-router-dom';


export default function Login() {
  return (
    <>
      <body className="bg-white">


        <section className="grid grid-cols-1 md:grid-cols-2">


          <section id="sign-in" className="visible">
            <div className="grid md:pl-20 duration-300">
              <div className="pt-10 duration-300 items-center md:items-start flex justify-center md:justify-start">
                <img
                  className="w-80 h-auto hidden md:block "
                  src="./src/imgs/Logo_white.png"
                  alt=""
                />
                <img className="w-16 h-auto md:hidden " src="./src/imgs/logo_responsive_negro.png" alt="" />
              </div>

              <div className="flex flex-row pl-23 md:justify-start justify-center gap-3 pt-20 pb-24 items-center">
                <a
                  className="text-black lg:text-5xl text-4xl  font-light hover:text-blue-600"
                  href=""
                  onClick={showSignUp}
                >
                  Sign Up
                </a>
                <p className="text-black lg:text-3xl text-2xl  ">or</p>
                <a
                  className="text-discord-blue lg:text-5xl text-4xl  font-light hover:text-blue-600"
                  href=""
                  onClick={showSignIn}
                >
                  Sign In
                </a>
              </div>


              <div className="gap-5 flex flex-col justify-center items-center md:items-start">
                <InputLogin title={"E-MAIL"} placeholder={"Enter your e-mail"} />
                <InputLogin
                  title={"PASSWORD"}
                  placeholder={"Enter your password"}
                />
              </div>


              <div class="flex md:flex-row flex-col gap-7 items-center pt-5">
                <Link to={"/home"}>
                  <Button variant="solid-discord-blue">Sign In</Button>
                </Link>

                <a class="text-black hover:underline hover:text-blue-500" href="">
                  Did you forget your password?
                </a>
              </div>
            </div>

          </section>

          <section id="sign-up" className="hidden">
            <div className="grid md:pl-20 duration-300 ">
              <div className="pt-10 duration-300 items-center md:items-start flex justify-center md:justify-start">
                <img
                  className="w-80 h-auto hidden md:block"
                  src="./src/imgs/Logo_white.png"
                  alt=""
                />
                <img className="w-16 h-auto md:hidden " src="./src/imgs/logo_responsive_negro.png" alt="" />
              </div>

              <div className="flex flex-row pl-23 md:justify-start justify-center gap-3 pt-20 pb-24">
                <a
                  className="text-black lg:text-5xl text-4xl font-light hover:text-blue-600"
                  href=""
                  onClick={showSignUp}
                >
                  Sign Up
                </a>
                <p className="text-black lg:text-3xl text-2xl ">or</p>
                <a
                  className="text-black lg:text-5xl text-4xl font-light hover:text-blue-600"
                  href=""
                  onClick={showSignIn}
                >
                  Sign In
                </a>
              </div>


              <div className="gap-5 flex flex-col justify-center items-center md:items-start">
                <InputLogin title={"FULLNAME"} placeholder={"Enter your fullname"} />
                <InputLogin
                  title={"PASSWORD"}
                  placeholder={"Enter your password"}
                />
                <InputLogin
                  title={"E-MAIL"}
                  placeholder={"Enter your e-mail"}
                />
              </div>


              <div class="flex md:flex-row flex-col gap-7 items-center pt-5">
                <Link to={"/home"}>
                  <Button variant="solid-discord-blue">Sign Up</Button>

                </Link>
                <a class="text-black hover:underline hover:text-blue-500" href="/home">
                  Did you forget your password?
                </a>
              </div>
            </div>

          </section>



          <section className="w-[100%] flex justify-end">
            <img className="h-screen hidden md:block" src="./src/imgs/background_sign.png" alt="background_signIn" />
          </section>




        </section>




      </body>
    </>
  );
}
