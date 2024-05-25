export default function InputSignINUP({title , placeholder}) {
    return (
        <>
        <h3 class="font-bold text-black pb-2">{title}</h3>
        <input class="w-[60%] border-b-2 border-black focus:outline-none bg-transparent text-black placeholder:text-center md:placeholder:text-start" placeholder={placeholder}></input>
        </>
    );
}