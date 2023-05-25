import { useState } from 'react';
import enairaLogo from '../assets/enairalogo.jpg'
import { Link } from 'react-router-dom';
const Nav = () => {
    const [openNav, setOpenNav] = useState(false)
    

    return ( <nav className="flex justify-between p-5 items-cente relative">
        <div>
            <img src={enairaLogo} alt="enaira logo" />
        </div>
        
        {
            openNav ? (
                <div className="flex flex-col md:hidden justify-between items-center w-full left-0 right-0 top-32 mr-12 absolute bg-white py-10">
        <div>
                <ul className="flex flex-col items-center">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='#about'>About eNaira</Link></li>
                    <li><Link to='/'>eNaira Wallet</Link></li>
                    <li><Link to='#features'>Key Features</Link></li>
                    <li><Link to='/'>Help</Link></li>
                </ul>
            </div>
            <div className='flex flex-col gap-10'>
                <button className='border-2 border-lime-700 px-8 py-2' >Login</button>
                <button className=' bg-lime-700 text-white px-4 py-2'>Fund Wallet</button>
            </div>
        </div>
            ) : (
                <div className="hidden md:flex justify-between items-center ml-20 w-3/5 mr-12">
            <div>
                <ul className="flex items-center gap-4">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='#about'>About eNaira</Link></li>
                    <li><Link to='/'>eNaira Wallet</Link></li>
                    <li><Link to='#features'>Key Features</Link></li>
                    <li><Link to='/'>Help</Link></li>
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
        <button className='md:hidden p-5 rounded-md outline-none text-lg' onClick={()=> setOpenNav(!openNav)}>
            {
                openNav ? (
                    <i class="fa fa-times"></i>
                ): (
                    <i class="fa fa-bars"></i>
                )
            }
        </button>
    </nav> );
}
 
export default Nav;