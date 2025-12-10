import { Link } from 'react-router-dom'
import { Box, Drawer } from '@mui/material'
import { CalendarMonth, Close, DensityMedium, Download, Feed, Menu, PeopleAlt, Work } from "@mui/icons-material";
import './topbar.css'
import React, { useState } from 'react';
import { topLinks } from '../../static/dummyData';

const Topbar = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
        return;
        }
        setOpen(open);
    };

    console.log(open)

    const list = () => (
        <Box
            sx={{ width: '100vw' }}  
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            className="topbar-box"
        >
            <div className="menu-link-list">
                <div className="menu_links">
                    {topLinks.map((link) => (
                        <Link to={`/${link.location}`} key={link._id} className="link-main">
                            <div className="box-links">
                                <p>{link.title}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="menu_download">
                    <button><Download /> Download App</button>
                </div>
            </div>
        </Box>
    );

  return (
    <div className="topbar">
        <header className="header">
            <div className="container nav-container">
                <Link to='/' className='link-main'>
                    <div className="logo">
                        <div className="logo-icon">
                            <img src='/src/assets/instiwise-logo.png' alt='SVC' />
                        </div>
                        <span className="logo-text">INSTiWISE</span>
                    </div>
                </Link>

                <nav className="nav">
                    <Link to='/features' className='link-main'>
                        <p>Features</p>
                    </Link>
                    <Link to='/how-it-works' className='link-main'>
                        <p>How It Works</p>
                    </Link>
                    <Link to='/testimonials' className='link-main'>
                        <p>Testimonials</p>
                    </Link>
                    <Link to='/contact' className='link-main'>
                        <p>Contact</p>
                    </Link>
                    <button className="btn-primary">Get Started Free</button>
                </nav>

                <div className="topbar-menu-icon">
                    {open 
                        ? <Close sx={{fontSize: 28, color: "black"}} onClick={toggleDrawer(false)} /> 
                        : <Menu sx={{fontSize: 28, color: "black"}} onClick={toggleDrawer(true)} />
                    }
                    <Drawer
                        variant="temporary"
                        anchor="right"
                        open={open}
                        onClose={toggleDrawer(false)}
                        PaperProps={{
                            sx: {
                                top: '90px',     
                                height: 'calc(100vh - 90px)', 
                                background: '#f7fffdff',
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between"
                            },
                        }}
                        ModalProps={{
                            hideBackdrop: true, 
                        }}
                    >
                        {list()}
                    </Drawer>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Topbar