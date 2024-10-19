import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';

export default function NavMenu2({ setSidebarOpen }) {
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
            title: 'Custom Mailer Boxes',
            slug: '/product/custom-printed-mailer-boxes',
        },
        {
            title: 'Retail Boxes',
            slug: '/products/retail-boxes',
        },
        {
            title: 'Customize Medicine Boxes',
            slug: '/product/customize-medicine-boxes',
        },
        {
            title: 'Food Boxes',
            slug: '/product/pet-food-boxes',
        },
        {
            title: 'Soap Boxes',
            slug: '/product/cbd-soap-boxes',
        },
        {
            title: 'Cosmetic Boxes',
            slug: '/products/cosmetic-boxes',
        },
        {
            title: 'Custom Cake Boxes',
            slug: '/products/food-and-beverage-boxes',
        },
        {
            title: 'Custom Apparel Boxes',
            slug: '/product/kraft-apparel-boxes',
        },
        {
            title: 'Custom Toy Boxes',
            slug: '/product/toy-retail-boxes',
        },
        {
            title: 'Custom Gift Boxes',
            slug: '/product/magnetic-gift-boxes',
        },
        {
            title: 'CBD Boxes',
            slug: '/products/cbd-boxes',
        },
        {
            title: 'Gable Boxes',
            slug: '/product/kraft-gable-boxes',
        },
        {
            title: 'Paper Bags',
            slug: '/products/paper-bags',
        },
        {
            title: 'Vape Boxes',
            slug: '/products/vape-boxes',
        },
        {
            title: 'Cigarette Boxes',
            slug: '/products/tabacoo-boxes',
        },
        {
            title: 'Display Boxes',
            slug: '/product/display-boxes',
        },
        {
            title: 'Others',
            slug: '/products/others',
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
                Boxes By Industry
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
