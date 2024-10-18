'use client'
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';

export default function NavMenu3({ setSidebarOpen }) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const NavLinks = [
        {
            title: 'Cardboard Boxes',
            slug: 'cardboard-boxes',
        },
        {
            title: 'Custom CBD Boxes',
            slug: 'cbd-boxes',
        },
        {
            title: 'Custom Kraft Boxes',
            slug: 'custom-kraft-boxes',
        },
        {
            title: 'Corrugated Boxes',
            slug: 'corrugated-boxes',
        },
        {
            title: 'Custom Rigid Boxes',
            slug: 'custom-rigid-boxes',
        }
    ];

    return (
        <div>
            <Button sx={{ color: 'black', fontWeight: 700 }}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Boxes By Material
                <i className="ri-arrow-down-s-line text-xl"></i>
            </Button>

            <Menu
                sx={{zIndex: 999999999999999999}}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >

                {
                    NavLinks.map((link, index) => (
                        <MenuItem onClick={handleClose} key={index} className='py-2' sx={{ borderBottom: '1px dashed var(--primary)', color: 'white' }}>
                            <Link href={`/products/${link.slug}`} onClick={() => setSidebarOpen(false)}>{link.title}</Link>
                        </MenuItem>
                    ))
                }

            </Menu>
        </div >
    );
}
