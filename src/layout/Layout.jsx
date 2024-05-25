import NavBottom from '../nav/navBottom.jsx'



export default function Layout({ children }) {
    return (
        <>
            <div className='py-8 lg:py-0'>{children}</div>
        <div className='lg:hidden  fixed bottom-0 left-0 z-50 w-full'>
            <NavBottom></NavBottom>
        </div>
        </>


    )
}
