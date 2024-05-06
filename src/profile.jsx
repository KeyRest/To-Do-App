export default function Profile() {
    return (
        <div className="flex items-center justify-center shadow-xl w-[40%]   bg-white flex-col m-auto rounded-3xl">
            <div className="bg-[url('https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero.jpg')] h-80 w-full rounded-t-3xl     flex justify-start items-center">
                <div className="relative">
                <img src="https://www.pngitem.com/pimgs/m/146-1468394_ic-account-box-48px-profile-picture-icon-square.png" alt="" className="rounded-full w-60 h-60 mx-8" />
                <div className="absolute bg-blue-700 p-4 rounded-full top-44 right-12">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="white" fill-rule="evenodd" d="M20.848 1.879a3 3 0 0 0-4.243 0L2.447 16.036a3 3 0 0 0-.82 1.533l-.587 2.936a2 2 0 0 0 2.353 2.353l2.936-.587a3 3 0 0 0 1.533-.82L22.019 7.293a3 3 0 0 0 0-4.243L20.848 1.88Zm-2.829 1.414a1 1 0 0 1 1.415 0l1.171 1.171a1 1 0 0 1 0 1.415L17.933 8.55l-2.585-2.586 2.671-2.671Zm-4.086 4.086L3.862 17.45a1 1 0 0 0-.274.51l-.587 2.936 2.935-.587a1 1 0 0 0 .511-.274L16.52 9.964 13.933 7.38Z" clip-rule="evenodd"/></svg>
                </div>
                </div>
            </div>

            <div className="w-full flex flex-col items-start gap-4 p-8">
                <div className="">
                    <h1 className="text-4xl font-bold">Francisco Gonzales Flores</h1>
                </div>

                <div className="flex items-center justify-start gap-8 flex-col">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl font-semibold">USERNAME</h2>
                        <input type="text" name="" id="" placeholder="Frank_ou" className="underline w-40" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl font-semibold">PASSWORD</h2>
                        <input type="text" name="" id="" placeholder="Frank_ou" className="underline w-40" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl font-semibold">EMAIL</h2>
                        <input type="text" name="" id="" placeholder="Frank_ou" className="underline w-40" />
                    </div>
                </div>


                <div className="flex flex-col items-start justify-start gap-2 my-10">
                    <h2 className="font-bold text-red-600 text-xl">Delete your account</h2>
                    <p>Deleting your account will remove all your access</p>
                    <a href="/" className="bg-transparent border-red-600 border-2 text-red-600 rounded-full py-2 px-4">Delete your account</a>
                </div>

                <div className="flex  w-full justify-between font-bold">
                    <a href="" className="border-2 border-gray-600 w-60 py-2 rounded-full text-center">CLOSE</a>
                    <a href="" className="text-white bg-blue-600 w-60 py-2 rounded-full text-center">SAVE CHANGES</a>
                </div>
            </div>

        </div>
    );
}