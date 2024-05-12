import InputLogin from "./components/input/inputText/inputText.jsx";

export default function Login() {
    return (
        <>
            <body className="bg-white">
                <section id="sign-in" className="visible" >
                    <div className="grid grid-cols-2 pl-20 duration-300">
                        <div className="pt-10 duration-300">
                            <img className="w-80 h-auto" src="" alt="" />
                        </div>

                        <div className="flex flex-row pl-23 justify-start gap-3 pt-20 pb-24 items-center">
                            <a className="text-black text-5xl font-light hover:text-blue-600" href="" onClick="showSignUp()">Sign Up</a>
                            <p className="text-black text-3xl ">or</p>
                            <a className="text-black text-5xl font-light hover:text-blue-600" href="" onClick="showSignIn()">Sign In</a>
                        </div>

                        <div className="flex flex-col justify-start gap-8">
                            <div>
                                <h3 className="font-bold text-black pb-2 ">E-MAIL</h3>
                                <InputLogin variant="login" placeholder="Enter your e-mail" />
                            </div>

                        </div>

                    </div>



                </section>








            </body>



        </>
    );
}