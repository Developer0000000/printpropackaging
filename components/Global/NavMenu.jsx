import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { NavDropdown } from '@/config/NavDropdown';

export default function NavMenu({ setSidebarOpen }) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button className='text-black font-semibold'
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                CATEGORYS <i class="ri-arrow-down-s-line text-xl"></i>
            </Button>

            <Menu
                className=''
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {
                    NavDropdown.map((item, index) =>
                        <MenuItem key={index} onClick={handleClose}>
                            <Link href={item?.titleLink} onClick={() => setSidebarOpen(false)}>{item.title}</Link>
                        </MenuItem>
                    )
                }
            </Menu>
        </div>
    );
}
