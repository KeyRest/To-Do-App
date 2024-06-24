import InputLogin from "../components/input/inputSignINUP/inputSignINUP.jsx";
import Button from "../components/button/button.jsx";
import { Link } from 'react-router-dom';
import { useState } from "react";

export default function Login() {
  const [isOnLogin, setIsOnLogin] = useState(true);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    console.log("testing...");
    try {
      const response = await fetch('http://localhost/Backend-todoapp/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, lastName, surname, password, email }),
      });

      if (response.ok) {
        console.log('User registered successfully');

      } else {
        console.log('Failed to register user');
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <>
      <body className="bg-white">
        <section className="grid grid-cols-1 md:grid-cols-2 ">
          {isOnLogin ? (
            <section>
              <div className="grid md:pl-20 duration-300 ">
                <div className="pt-10 duration-300 items-center md:items-start flex justify-center md:justify-start">
                  <img className="md:w-80 xl:w-[25rem] h-auto hidden md:block" src="../public/Logo_white.png" alt="" />
                  <img className="w-16 h-auto md:hidden" src="../public/logo_responsive_negro.png" alt="" />
                </div>

                <div className="flex flex-row pl-23 md:justify-start justify-center gap-3 pt-20 lg:pb-24 items-center">
                  <a className="text-black lg:text-5xl text-4xl font-light hover:text-blue-600 cursor-pointer" onClick={() => setIsOnLogin(false)}>Sign Up</a>
                  <p className="text-black lg:text-3xl text-2xl">or</p>
                  <a className="text-discord-blue lg:text-5xl text-4xl font-light hover:text-blue-600 cursor-pointer scale-105 duration-300" onClick={() => setIsOnLogin(true)}>Sign In</a>
                </div>

                <div className="animate-fade-in-down">
                  <div className="gap-2 flex flex-col justify-center items-center md:items-start my-8">
                    <InputLogin title={"E-MAIL"} placeholder={"Enter your e-mail"} />
                    <InputLogin title={"PASSWORD"} placeholder={"Enter your password"} />
                  </div>

                  <div className="flex md:flex-row flex-col gap-7 items-center pt-5">
                    <Link to={"/home"}>
                      <Button variant="solid-discord-blue">Sign In</Button>
                    </Link>
                    <a className="text-black hover:underline hover:text-blue-500" href="">Did you forget your password?</a>
                  </div>
                </div>
              </div>
            </section>
          ) : (
            <section>
              <div className="grid md:pl-20 duration-300">
                <div className="pt-10 duration-300 items-center md:items-start flex justify-center md:justify-start">
                  <img className="md:w-80 xl:w-[25rem] h-auto hidden md:block" src="../public/Logo_white.png" alt="" />
                  <img className="w-16 h-auto md:hidden" src="../public/logo_responsive_negro.png" alt="" />
                </div>

                <div className="flex flex-row pl-23 md:justify-start justify-center gap-3 pt-20 lg:pb-24">
                  <a className="lg:text-5xl text-4xl font-light text-blue-600 cursor-pointer scale-105 duration-300" onClick={() => setIsOnLogin(false)}>Sign Up</a>
                  <p className="text-black lg:text-3xl text-2xl flex items-center">or</p>
                  <a className="lg:text-5xl text-4xl font-light text-black cursor-pointer" onClick={() => setIsOnLogin(true)}>Sign In</a>
                </div>

                <form className="animate-fade-in-up" type="submit">
                  <div className="gap-2 flex flex-col justify-center items-center md:items-start my-8">
                    <InputLogin title={"NAME"} placeholder={"Enter your name"} value={name} onChange={(e) => setName(e.target.value)} />
                    <InputLogin title={"LASTNAME"} placeholder={"Enter your lastname"} value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <InputLogin title={"SURNAME"} placeholder={"Enter your surname"} value={surname} onChange={(e) => setSurname(e.target.value)} />
                    <InputLogin title={"PASSWORD"} placeholder={"Enter your password"} value={password} onChange={(e) => setPassword(e.target.value)} />
                    <InputLogin title={"E-MAIL"} placeholder={"Enter your e-mail"} value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>

                  <div className="flex md:flex-row flex-col gap-7 items-center pt-5">
                    <Button variant="solid-discord-blue" onClick={handleSignUp}>Sign Up</Button>
                    <a className="text-black hover:underline hover:text-blue-500" href="/home">Did you forget your password?</a>
                  </div>
                </form>

              </div>
            </section>
          )}

          <section className="w-[100%] flex justify-end">
            <img className="h-screen hidden md:block" src="../public/background_sign.png" alt="background_signIn" />
          </section>
        </section>
      </body>
    </>
  );
}
