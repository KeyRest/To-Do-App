import PropTypes from 'prop-types';

export default function SearchBar({ title }) {

    return (
        <>
            <div className='flex gap-8 shadow-xl rounded-full bg-[#D9D9D9] '>
                <div className='flex justify-between items-center w-full  py-4 mx-8  '>
                    <div className='flex gap-1 items-center justify-between w-full '>
                        <input type="text" name="" id="" placeholder={title} className='bg-[#D9D9D9] focus:outline-0 w-full'/>
                        <svg className='cursor-pointer hover:scale-105 duration-300' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24"><path stroke="gray" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.7955 15.8111 21 21m-3-10.5c0 4.1421-3.3579 7.5-7.5 7.5S3 14.6421 3 10.5 6.3579 3 10.5 3 18 6.3579 18 10.5Z" /></svg>
                    </div>
                </div>



            </div>
        </>
    )
}



SearchBar.propTypes = {
    title: PropTypes.string,
}

