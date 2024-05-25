import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Sidebar from './sidebar.jsx';
import '../index.css'
import './style.css'

import { styled } from '@mui/system';

import { MdMenu } from "react-icons/md";
import { PiHouse } from "react-icons/pi";





const BottomNavigationBtn = styled(BottomNavigationAction)({
    color: 'black',
    '&.Mui-selected': {
        color: 'blue',
    },
});


export default function NavBottom() {
    const [value, setValue] = React.useState('home');
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);



    const handleChange = (event, newValue) => {
        if (newValue === value) return

        if (newValue === 'menu') {
            setIsMenuOpen(!isMenuOpen);

        } if (newValue === 'home') {
            setIsMenuOpen(false);

        }

        setValue(newValue);

    };

    return (
        <>
            {isMenuOpen && <div className="fixed inset-0 bg-black opacity-50 z-[-1]" onClick={() => {
                setIsMenuOpen(false);
                setValue("home");
            }}></div>}

            <BottomNavigation value={value} onChange={handleChange} >

                <BottomNavigationBtn
                    value="menu"
                    icon={<MdMenu size="40" />}


                />
                <BottomNavigationBtn
                    value="home"
                    icon={<PiHouse size="40" />}

                />
                <BottomNavigationBtn
                    value="profile"
                    icon={<img src='https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg' className='rounded-full h-10' />}
                />
            </BottomNavigation >

            <div className={`sidebar ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} z-[-1]`}>
                <Sidebar></Sidebar>
            </div>



        </>

    );
}

