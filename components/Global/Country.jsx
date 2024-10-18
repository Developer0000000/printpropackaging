import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import Image from 'next/image';

import AU from '@/assets/AU.webp';
import UK from '@/assets/UK.webp';
import USA from '@/assets/USA.webp';

export default function Country() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    // State for the active country and flag
    const [activeCountry, setActiveCountry] = React.useState('US');
    const [activeFlag, setActiveFlag] = React.useState(USA); // Default flag

    // Handle opening the menu
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // Handle closing the menu
    const handleClose = () => {
        setAnchorEl(null);
    };

    // Update both country code and flag when a country is selected
    const onActive = (country, flag) => {
        setActiveCountry(country);
        setActiveFlag(flag); // Set the active flag image
        handleClose(); // Close the menu after selection
    };

    return (
        <div>
            {/* Button showing the active country and flag */}
            <Button
                sx={{ color: 'white', fontWeight: 700, display: 'flex', alignItems: 'center' }}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                {/* Display the active flag */}
                <Image src={activeFlag} alt={activeCountry} width={25} height={25} style={{ marginRight: '4px' }} />
                {activeCountry}
            </Button>

            {/* Menu for selecting country */}
            <Menu
                sx={{ zIndex: 999999999999999999 }}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {/* US Option */}
                <MenuItem onClick={() => onActive('US', USA)} className='py-2 space-x-2' sx={{ borderBottom: '1px dashed var(--primary)', color: 'white' }}>
                    <Image src={USA} alt='US' width={25} height={25} />
                    <Link href=''>US</Link>
                </MenuItem>

                {/* UK Option */}
                <MenuItem onClick={() => onActive('UK', UK)} className='py-2 space-x-2' sx={{ borderBottom: '1px dashed var(--primary)', color: 'white' }}>
                    <Image src={UK} alt='UK' width={25} height={25} />
                    <Link href=''>UK</Link>
                </MenuItem>

                {/* AU Option */}
                <MenuItem onClick={() => onActive('AU', AU)} className='py-2 space-x-2' sx={{ borderBottom: '1px dashed var(--primary)', color: 'white' }}>
                    <Image src={AU} alt='AU' width={25} height={25} />
                    <Link href=''>AU</Link>
                </MenuItem>
            </Menu>
        </div>
    );
}
