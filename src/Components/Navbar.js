import React, {useState} from 'react';
import './Navbar.scss';
import {FaBars, FaTimes} from 'react-icons/fa';
import {motion} from "framer-motion";

const Navbar = () => {

    const [ click, setClick ] = useState(false)
    const handleClick = () => setClick(!click)

    return(
        <div className='header'>
            <div className='container'>
                <h2>vic<span className='primary'>oin</span></h2>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/'>Features</a>
                    </li>
                    <li>
                        <a href='/'>Earn</a>
                    </li>
                    <li>
                        <a href='/'>Contact</a>
                    </li>
                </ul>

                <div className='btn_group'> {/*<button className='btn'>Connect Wallet</button>*/}
                    <motion.button className='btn'
                        whileHover={{
                            scale: 1.1,
                            /*textShadow: "0px 0px 8px rgb(255,255,255)"*/
                    }}
                                   whileTap={{ scale: 0.95, duration: 0.5 }}
                    >
                        Connect Wallet NOW
                    </motion.button>
                </div>

                <div className='hamburger' onClick={handleClick}>
                    {
                        click ?
                            (<FaTimes size={18} style={{color: '#5d8efd'}}/>)
                                :
                            (<FaBars size={20} style={{color: '#5d8efd'}}/>)
                    }
                </div>

            </div>
        </div>
    )
}

export default Navbar;