import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import './index.css'

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
    const [value, setValue] = React.useState('favorites');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
            <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange} >

                <BottomNavigationBtn
                    value="recents"
                    icon={<MdMenu size="40" />}

                />
                <BottomNavigationBtn
                    value="favorites"
                    icon={<PiHouse size="40" />}

                />
                <BottomNavigationBtn
                    value="nearby"
                    icon={<img src='https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg' className='rounded-full h-10' />}
                />
            </BottomNavigation >



    );
}

