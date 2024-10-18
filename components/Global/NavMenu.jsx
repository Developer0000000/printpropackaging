import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';

export default function NavMenu({ setSidebarOpen }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const categories = [
        {
            title: 'Pillow Boxes',
            slug: '/product/pillow-boxes'
        },
        {
            title: 'Two Piece Boxes',
            slug: '/product/two-piece-boxes'
        },
        {
            title: 'Custom Tuck Boxes',
            slug: '/product/kraft-card-boxes'
        },
        {
            title: 'Sleeve Boxes',
            slug: '/product/sleeve-boxes'
        },
        {
            title: 'Seal End Boxes',
            slug: '/product/seal-end-boxes'
        },
        {
            title: 'Rigid Foldable Boxes',
            slug: '/product/foldable-rigid-boxes'
        },
        {
            title: 'Pyramid Boxes',
            slug: '/product/pyramid-boxes'
        },
        {
            title: 'Magnetic Gift Boxes',
            slug: '/product/magnetic-gift-boxes'
        },
    ];


    return (
        <div>
            <Button
                sx={{ color: 'black',fontWeight: 700 }}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Boxes By Style
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
                {/* Grid layout with two columns */}
                <div className="px-4 py-1 w-full grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-2">
                    {categories.map((category, index) => (
                        <MenuItem key={index} onClick={handleClose} sx={{ borderBottom: '1px dashed var(--primary)', color: 'white' }}>
                            <Link href={category.slug} onClick={() => setSidebarOpen(false)}>
                                {category.title}
                            </Link>
                        </MenuItem>
                    ))}
                </div>
            </Menu>
        </div>
    );
}

