import { useState } from 'react';
import enairaLogo from '../assets/enairalogo.jpg'
import { Link } from 'react-router-dom';
const Nav = () => {
    const [openNav, setOpenNav] = useState(false)
    const [openHelp, setOpenHelp] = useState(false)
    

    const helpModal = <div>
        <ul className='flex flex-col w-fit md:absolute text-center md:text-left px-4 py-2 md:bg-slate-50'>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#subscribe">Subscribe</a></li>
            <li><a href="#subscribe">Contact</a></li>
        </ul>
    </div>
    return ( <nav className="flex justify-between p-5 items-cente relative">
        <div>
            <img id='home' src={enairaLogo} alt="enaira logo" />
        </div>
        
        {
            openNav ? (
                <div className="flex flex-col lg:hidden justify-between items-center w-full left-0 right-0 top-32 mr-12 absolute bg-white py-10">
        <div>
                <ul className="flex flex-col items-center">
                <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><Link to='/'>eNaira Wallet</Link></li>
                    <li><a href="#features">Key Features</a></li>
                    <li onClick={()=> setOpenHelp(!openHelp)}>Help <i className='fa fa-caret-down'></i></li>
                </ul>
            </div>
            {openHelp ? helpModal : ''}
            <div className='flex flex-col gap-10'>
                <button className='border-2 border-lime-700 px-8 py-2' >Login</button>
                <button className=' bg-lime-700 text-white px-4 py-2'>Fund Wallet</button>
            </div>
        </div>
            ) : (
                <div className="hidden lg:flex justify-between items-center ml-20 w-3/5 mr-12">
            <div>
                <ul className="flex items-center gap-4">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><Link to='/'>eNaira Wallet</Link></li>
                    <li><a href="#features">Key Features</a></li>
                    <li className='md:relative' onClick={()=> setOpenHelp(!openHelp)}>Help <i className='fa fa-caret-down'></i>{openHelp ? helpModal : ''}</li>
                </ul>
                
            </div>
            <div className='flex gap-10'>
                <button className='border-2 border-lime-700 px-8 py-2' >Login</button>
                <button className=' bg-lime-700 text-white px-4'>Fund Wallet</button>
            </div>
        </div>
            )
        }

        
        {/* Mobile Hamburger */}
        <button className='lg:hidden p-5 rounded-md outline-none text-lg' onClick={()=> setOpenNav(!openNav)}>
            {
                openNav ? (
                    <i className="fa fa-times"></i>
                ): (
                    <i className="fa fa-bars"></i>
                )
            }
        </button>
    </nav> );

}
 
export default Nav;